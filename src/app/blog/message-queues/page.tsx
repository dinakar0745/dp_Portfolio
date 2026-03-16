"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";

export default function MessageQueuesPost() {
  return (
    <div className="min-h-screen max-w-3xl mx-auto px-6 pt-28 pb-20">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary mb-8 transition-colors">
          <ArrowLeft size={14} /> Back to blog
        </Link>

        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-text-secondary">Nov 2024</span>
            <span className="flex items-center gap-1 text-xs text-text-secondary"><Clock size={11} /> 9 min read</span>
          </div>
          <h1 className="text-3xl font-bold text-text-primary mb-4">Using Message Queues in Large-Scale Systems</h1>
          <div className="flex flex-wrap gap-2">
            {["RabbitMQ", "Systems Design", "Backend"].map((tag) => (
              <span key={tag} className="text-xs font-mono px-2 py-0.5 rounded bg-bg-secondary border border-border text-text-secondary">{tag}</span>
            ))}
          </div>
        </div>

        <article className="space-y-6">
          <p className="text-sm text-text-secondary leading-relaxed">
            Message queues are one of the most powerful architectural primitives for building
            large-scale backend systems. They decouple producers from consumers, enable
            asynchronous processing, and provide backpressure mechanisms that prevent
            cascading failures.
          </p>

          <h2 className="text-base font-semibold text-text-primary mt-8 mb-3">Why Message Queues</h2>
          <p className="text-sm text-text-secondary leading-relaxed">
            In a synchronous system, a slow downstream service blocks the entire request chain.
            A message queue inserts a buffer: producers publish tasks and return immediately,
            while consumers process at their own pace. This enables natural load leveling,
            independent scaling of producers and consumers, and fault isolation.
          </p>

          <h2 className="text-base font-semibold text-text-primary mt-8 mb-3">RabbitMQ Patterns</h2>
          {[
            { pattern: "Work Queues", desc: "Multiple workers competing to consume messages. Used for distributing CPU-intensive tasks like tile processing across a worker pool." },
            { pattern: "Publish/Subscribe", desc: "Fanout exchange broadcasts a message to all bound queues. Used for broadcasting scan completion events to multiple downstream services." },
            { pattern: "Routing", desc: "Direct exchange routes messages to queues based on routing keys. Used to route different image types to specialized processors." },
          ].map((item) => (
            <div key={item.pattern} className="border border-border rounded-lg p-4 bg-bg-secondary">
              <h3 className="text-sm font-mono text-accent mb-2">{item.pattern}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
            </div>
          ))}

          <h2 className="text-base font-semibold text-text-primary mt-8 mb-3">Reliability Considerations</h2>
          <pre className="text-xs">{`# Key RabbitMQ durability settings
channel.queue_declare(
    queue='wsi_tasks',
    durable=True,      # Queue survives broker restart
)

channel.basic_publish(
    exchange='',
    routing_key='wsi_tasks',
    body=message,
    properties=pika.BasicProperties(
        delivery_mode=2,   # Persistent message
    )
)

# Acknowledge only after processing
channel.basic_ack(delivery_tag=method.delivery_tag)`}</pre>

          <p className="text-sm text-text-secondary leading-relaxed">
            In WSI pipelines, message durability is critical — losing a scan job means
            re-scanning or re-processing expensive slide data. We use persistent messages
            and manual acknowledgements to guarantee at-least-once delivery.
          </p>
        </article>
      </motion.div>
    </div>
  );
}
