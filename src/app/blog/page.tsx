"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";

const posts = [
  {
    slug: "wsi-pipelines",
    title: "Understanding Whole Slide Imaging Pipelines",
    excerpt:
      "A deep dive into how WSI scanners capture gigapixel pathology images and the pipeline stages required to process them at scale.",
    tags: ["WSI", "Image Processing", "Pathology"],
    readTime: "8 min",
    date: "Mar 2025",
  },
  {
    slug: "gigapixel-images",
    title: "Processing Gigapixel Images Efficiently",
    excerpt:
      "Techniques for working with extremely large images — tiling strategies, memory management, and parallel processing approaches.",
    tags: ["Python", "Performance", "Image Processing"],
    readTime: "6 min",
    date: "Feb 2025",
  },
  {
    slug: "distributed-image-processing",
    title: "Designing Distributed Image Processing Pipelines",
    excerpt:
      "Architecture patterns for building scalable image processing systems using message queues, worker pools, and distributed coordination.",
    tags: ["Distributed Systems", "Architecture", "RabbitMQ"],
    readTime: "10 min",
    date: "Jan 2025",
  },
  {
    slug: "sagemaker-deployment",
    title: "Deploying ML Models with AWS SageMaker",
    excerpt:
      "A practical guide to serverless model deployment on SageMaker — from training artifact to production inference endpoint.",
    tags: ["AWS", "MLOps", "SageMaker"],
    readTime: "7 min",
    date: "Dec 2024",
  },
  {
    slug: "message-queues",
    title: "Using Message Queues in Large-Scale Systems",
    excerpt:
      "Why message queues are essential for decoupled, resilient pipelines — patterns, tradeoffs, and RabbitMQ in practice.",
    tags: ["RabbitMQ", "Systems Design", "Backend"],
    readTime: "9 min",
    date: "Nov 2024",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen max-w-5xl mx-auto px-6 pt-28 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h1 className="text-3xl font-bold text-text-primary mb-3">Blog</h1>
        <p className="text-sm text-text-secondary max-w-xl">
          Technical writing on systems engineering, distributed pipelines, and
          AI infrastructure. Notes from building in production.
        </p>
      </motion.div>

      <div className="space-y-3">
        {posts.map((post, i) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07, duration: 0.4 }}
          >
            <Link href={`/blog/${post.slug}`}>
              <div className="group border border-border rounded-lg p-5 bg-bg-secondary hover:border-accent/40 hover:bg-bg-tertiary transition-all cursor-pointer">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono text-text-secondary">
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-text-secondary">
                        <Clock size={11} />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-sm font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-text-secondary leading-relaxed mb-3">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono px-1.5 py-0.5 rounded bg-bg border border-border text-text-secondary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ArrowUpRight
                    size={15}
                    className="text-text-secondary group-hover:text-accent transition-colors shrink-0 mt-1"
                  />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 p-5 border border-border/50 rounded-lg bg-bg-secondary/50 text-center"
      >
        <p className="text-sm text-text-secondary">
          More articles coming soon.{" "}
          <Link href="/contact" className="text-accent hover:underline">
            Get notified
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
