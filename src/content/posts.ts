import type { Post } from "./types";

/**
 * Blog registry, newest first. Each entry needs a matching
 * src/content/blog/<slug>.mdx file holding the article body.
 */
export const posts: Post[] = [
  {
    slug: "wsi-pipelines",
    title: "Understanding Whole Slide Imaging Pipelines",
    excerpt:
      "A deep dive into how WSI scanners capture gigapixel pathology images and the pipeline stages required to process them at scale.",
    tags: ["WSI", "Image Processing", "Pathology"],
    readTime: "8 min",
    date: "Mar 2025",
    isoDate: "2025-03-01",
  },
  {
    slug: "gigapixel-images",
    title: "Processing Gigapixel Images Efficiently",
    excerpt:
      "Techniques for working with extremely large images — tiling strategies, memory management, and parallel processing approaches.",
    tags: ["Python", "Performance", "Image Processing"],
    readTime: "6 min",
    date: "Feb 2025",
    isoDate: "2025-02-01",
  },
  {
    slug: "distributed-image-processing",
    title: "Designing Distributed Image Processing Pipelines",
    excerpt:
      "Architecture patterns for building scalable image processing systems using message queues, worker pools, and distributed coordination.",
    tags: ["Distributed Systems", "Architecture", "RabbitMQ"],
    readTime: "10 min",
    date: "Jan 2025",
    isoDate: "2025-01-01",
  },
  {
    slug: "sagemaker-deployment",
    title: "Deploying ML Models with AWS SageMaker",
    excerpt:
      "A practical guide to serverless model deployment on SageMaker — from training artifact to production inference endpoint.",
    tags: ["AWS", "MLOps", "SageMaker"],
    readTime: "7 min",
    date: "Dec 2024",
    isoDate: "2024-12-01",
  },
  {
    slug: "message-queues",
    title: "Using Message Queues in Large-Scale Systems",
    excerpt:
      "Why message queues are essential for decoupled, resilient pipelines — patterns, tradeoffs, and RabbitMQ in practice.",
    tags: ["RabbitMQ", "Systems Design", "Backend"],
    readTime: "9 min",
    date: "Nov 2024",
    isoDate: "2024-11-01",
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
