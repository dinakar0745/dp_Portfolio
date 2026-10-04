import Link from "next/link";
import PostCard from "@/components/blog/PostCard";
import Reveal from "@/components/motion/Reveal";
import PageShell, { PageIntro } from "@/components/ui/PageShell";
import { posts } from "@/content/posts";
import { pageMetadata } from "@/lib/metadata";

const lead =
  "Technical writing on systems engineering, distributed pipelines, and AI infrastructure. Notes from building in production.";

export const metadata = pageMetadata({
  title: "Blog",
  description: lead,
  path: "/blog",
});

export default function BlogPage() {
  return (
    <PageShell>
      <PageIntro title="Blog" lead={lead} />
      <div className="space-y-3">
        {posts.map((post, i) => (
          <Reveal key={post.slug} when="mount" delay={i * 0.07} depth>
            <PostCard post={post} />
          </Reveal>
        ))}
      </div>

      <Reveal when="mount" delay={0.5}>
        <p className="mt-8 p-5 border border-border/50 rounded-lg bg-bg-secondary/50 text-center text-sm text-text-secondary">
          More articles coming soon.{" "}
          <Link href="/contact" className="text-accent hover:underline">
            Get notified
          </Link>
        </p>
      </Reveal>
    </PageShell>
  );
}
