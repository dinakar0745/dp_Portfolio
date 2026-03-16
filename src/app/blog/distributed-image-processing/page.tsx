"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";

export default function DistributedImagePost() {
  return (
    <div className="min-h-screen max-w-3xl mx-auto px-6 pt-28 pb-20">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary mb-8 transition-colors">
          <ArrowLeft size={14} /> Back to blog
        </Link>

        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-text-secondary">Jan 2025</span>
            <span className="flex items-center gap-1 text-xs text-text-secondary"><Clock size={11} /> 10 min read</span>
          </div>
          <h1 className="text-3xl font-bold text-text-primary mb-4">Designing Distributed Image Processing Pipelines</h1>
          <div className="flex flex-wrap gap-2">
            {["Distributed Systems", "Architecture", "RabbitMQ"].map((tag) => (
              <span key={tag} className="text-xs font-mono px-2 py-0.5 rounded bg-bg-secondary border border-border text-text-secondary">{tag}</span>
            ))}
          </div>
        </div>

        <article className="space-y-6">
          <p className="text-sm text-text-secondary leading-relaxed">
            When a single machine can&apos;t keep up with your image processing throughput,
            you need to distribute the work. This post covers the architecture patterns
            we use to build scalable, fault-tolerant image processing pipelines for WSI
            at production scale.
          </p>

          <h2 className="text-base font-semibold text-text-primary mt-8 mb-3">Core Architecture</h2>

          {[
            { title: "Ingestion Service", desc: "Watches scanner output directories for new slide files. Validates file integrity via checksum, registers the slide in the database, and publishes a job message to the pipeline queue." },
            { title: "Worker Pool", desc: "Stateless worker processes consume jobs from RabbitMQ. Each worker handles one slide at a time: tile extraction, preprocessing, and batched inference. Workers scale horizontally — add more for higher throughput." },
            { title: "Inference Server", desc: "A separate GPU-backed service that accepts tile batches via gRPC. Decoupling inference from tiling allows the GPU server to be scaled and optimized independently." },
            { title: "Result Aggregator", desc: "Collects per-tile results and assembles slide-level outputs: heatmaps, detection overlays, and structured reports. Publishes completion events for downstream consumers." },
          ].map((item) => (
            <div key={item.title} className="border border-border rounded-lg p-4 bg-bg-secondary">
              <h3 className="text-sm font-mono text-accent mb-2">{item.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
            </div>
          ))}

          <h2 className="text-base font-semibold text-text-primary mt-8 mb-3">Fault Tolerance</h2>
          <p className="text-sm text-text-secondary leading-relaxed">
            Workers crash. Disks fill up. Network partitions happen. The pipeline must handle
            all of these gracefully. Key mechanisms: RabbitMQ message acknowledgement ensures
            jobs are requeued on worker failure; idempotent job processing prevents duplicate
            results; dead-letter queues capture jobs that fail repeatedly for inspection.
          </p>

          <pre className="text-xs">{`# Dead letter queue setup
channel.queue_declare(
    queue='wsi_tasks',
    durable=True,
    arguments={
        'x-dead-letter-exchange': 'dlx',
        'x-message-ttl': 3600000,  # 1hr TTL
        'x-max-retries': 3
    }
)`}</pre>
        </article>
      </motion.div>
    </div>
  );
}
