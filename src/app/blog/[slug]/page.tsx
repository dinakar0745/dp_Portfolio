import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PostMeta } from "@/components/blog/PostCard";
import Reveal from "@/components/motion/Reveal";
import PageShell from "@/components/ui/PageShell";
import { TagList } from "@/components/ui/Tag";
import { getPost, posts } from "@/content/posts";
import { pageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.isoDate,
    tags: post.tags,
  });
}

export default async function PostPage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  // The article body lives in src/content/blog/<slug>.mdx
  const { default: Body } = await import(`@/content/blog/${post.slug}.mdx`);

  return (
    <PageShell width="article" back={{ href: "/blog", label: "Back to blog" }}>
      <Reveal when="mount">
        <header className="mb-10">
          <PostMeta post={post} suffix=" read" className="mb-4" />
          <h1 className="text-3xl font-bold text-text-primary mb-4">
            {post.title}
          </h1>
          <TagList tags={post.tags} tone="raised" />
        </header>
      </Reveal>

      <Reveal when="mount" delay={0.1}>
        <article className="space-y-6">
          <Body />
        </article>
      </Reveal>
    </PageShell>
  );
}
