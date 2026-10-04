import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import TiltCard from "@/components/motion/TiltCard";
import { TagList } from "@/components/ui/Tag";
import { cardInteractive } from "@/components/ui/classes";
import type { Post } from "@/content/types";

export default function PostCard({ post }: { post: Post }) {
  return (
    <TiltCard max={2}>
      <Link href={`/blog/${post.slug}`} className="group block rounded-lg">
        <article className={`${cardInteractive} p-5`}>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <PostMeta post={post} className="mb-2" />
              <h2 className="text-sm font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed mb-3">
                {post.excerpt}
              </p>
              <TagList tags={post.tags} size="sm" />
            </div>
            <ArrowUpRight
              size={15}
              aria-hidden
              className="text-text-secondary group-hover:text-accent transition-colors shrink-0 mt-1"
            />
          </div>
        </article>
      </Link>
    </TiltCard>
  );
}

export function PostMeta({
  post,
  className = "",
  suffix = "",
}: {
  post: Post;
  className?: string;
  suffix?: string;
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <time dateTime={post.isoDate} className="text-xs font-mono text-text-secondary">
        {post.date}
      </time>
      <span className="flex items-center gap-1 text-xs text-text-secondary">
        <Clock size={11} aria-hidden />
        {post.readTime}
        {suffix}
      </span>
    </div>
  );
}
