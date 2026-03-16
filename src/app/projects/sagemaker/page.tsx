"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";

const architecture = `
# AWS SageMaker Serverless Inference Architecture

┌─────────────────────────────────────────────────────┐
│                   ML Training Pipeline               │
│                                                      │
│  Dataset ──► Feature Eng ──► Model Train ──► S3     │
└─────────────────────────────┬───────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────┐
│              SageMaker Model Registry                │
│                                                      │
│  Model Artifacts  ──►  Registry  ──►  Versioning    │
└─────────────────────────────┬───────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────┐
│           Serverless Inference Endpoint              │
│                                                      │
│  API Request ──► Lambda ──► Container ──► Response  │
│                    │                                 │
│                    └──► Auto-scale (0 → N)           │
└─────────────────────────────────────────────────────┘
`;

export default function SageMakerProject() {
  return (
    <div className="min-h-screen max-w-4xl mx-auto px-6 pt-28 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary mb-8 transition-colors"
        >
          <ArrowLeft size={14} /> Back to projects
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {["AWS", "SageMaker", "Python", "MLOps", "Serverless"].map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-2 py-0.5 rounded bg-bg-secondary border border-border text-text-secondary"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl font-bold text-text-primary mb-3">
            Serverless ML Deployment using AWS SageMaker
          </h1>
          <p className="text-base text-text-secondary leading-relaxed max-w-2xl">
            Scalable architecture for deploying machine learning models using AWS
            SageMaker serverless inference endpoints with automated scaling.
          </p>
        </div>

        <div className="space-y-10">
          {/* Problem */}
          <section>
            <h2 className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-4">
              Problem
            </h2>
            <div className="border border-border rounded-lg p-5 bg-bg-secondary">
              <p className="text-sm text-text-secondary leading-relaxed">
                Deploying ML models in production is expensive when using always-on instances.
                For workloads with variable or unpredictable traffic patterns, provisioning
                dedicated compute 24/7 results in significant idle costs. The challenge was
                to design a deployment architecture that scales to zero during inactivity
                while maintaining acceptable cold-start latency for inference requests.
              </p>
            </div>
          </section>

          {/* Solution */}
          <section>
            <h2 className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-4">
              Solution
            </h2>
            <div className="border border-border rounded-lg p-5 bg-bg-secondary">
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                Leveraged AWS SageMaker&apos;s serverless inference capability to deploy
                containerized ML models that spin up on demand. The architecture includes:
              </p>
              <ul className="space-y-2">
                {[
                  "SageMaker Model Registry for versioned model artifact management",
                  "Serverless endpoint configuration with memory and concurrency tuning",
                  "S3-backed model artifact storage with lifecycle policies",
                  "CloudWatch monitoring for latency and invocation metrics",
                  "CI/CD pipeline for automated model retraining and deployment",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span className="text-accent mt-0.5 shrink-0">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Architecture */}
          <section>
            <h2 className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-4">
              Architecture
            </h2>
            <pre className="text-xs leading-relaxed overflow-x-auto">{architecture}</pre>
          </section>

          {/* Tech Stack */}
          <section>
            <h2 className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-4">
              Tech Stack
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { name: "AWS SageMaker", desc: "Model hosting & inference" },
                { name: "S3", desc: "Model artifact storage" },
                { name: "Python", desc: "Training & pipeline scripts" },
                { name: "boto3", desc: "AWS SDK for Python" },
                { name: "Docker", desc: "Model container packaging" },
                { name: "CloudWatch", desc: "Monitoring & alerting" },
              ].map((item) => (
                <div
                  key={item.name}
                  className="border border-border rounded p-3 bg-bg-secondary"
                >
                  <p className="text-xs font-mono text-accent mb-1">{item.name}</p>
                  <p className="text-xs text-text-secondary">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Challenges */}
          <section>
            <h2 className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-4">
              Challenges
            </h2>
            <div className="space-y-3">
              {[
                {
                  title: "Cold Start Latency",
                  desc: "Serverless containers have initialization overhead. Mitigated by optimizing container image size and pre-loading model weights.",
                },
                {
                  title: "Memory Configuration",
                  desc: "Tuning memory allocation for the right latency/cost tradeoff required profiling across multiple model sizes.",
                },
                {
                  title: "Payload Limits",
                  desc: "SageMaker serverless has a 6MB payload limit. Handled large inference inputs by streaming through S3 presigned URLs.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="border border-border rounded-lg p-4 bg-bg-secondary"
                >
                  <p className="text-sm font-medium text-text-primary mb-1.5">
                    {item.title}
                  </p>
                  <p className="text-sm text-text-secondary">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Links */}
          <section className="flex gap-3">
            <a
              href="https://github.com/dinakar0745"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded text-sm text-text-secondary hover:text-text-primary hover:border-accent/40 transition-colors"
            >
              <Github size={15} /> View on GitHub
            </a>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
