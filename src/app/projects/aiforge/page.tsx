"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Github } from "lucide-react";

const architecture = `
# AIForge Platform Architecture

┌──────────────────────────────────────────────────┐
│                  Frontend (React/Vite)            │
│                                                  │
│   Browse Models ──► Download ──► Run Locally     │
│   Publish Model ──► Upload  ──► Set Metadata     │
└────────────────────────┬─────────────────────────┘
                         │ REST API
                         ▼
┌──────────────────────────────────────────────────┐
│              Backend API (Django)                │
│                                                  │
│  Auth ──► Model Registry ──► Storage ──► Jobs   │
└───────────┬──────────────────────┬───────────────┘
            │                      │
            ▼                      ▼
┌───────────────────┐   ┌──────────────────────┐
│  Model Hosting    │   │  File Storage        │
│  Server           │   │  (S3 / local)        │
│                   │   │                      │
│  Container each   │   │  .pkl, .pt, .onnx    │
│  model version    │   │  model weights       │
└───────────────────┘   └──────────────────────┘
            │
            ▼
┌───────────────────┐
│  Local Execution  │
│  Environment      │
│                   │
│  CLI / Python SDK │
│  Docker runner    │
└───────────────────┘
`;

export default function AIForgePage() {
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

        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {["Django", "React", "Vite", "Docker", "REST API"].map((tag) => (
              <span key={tag} className="text-xs font-mono px-2 py-0.5 rounded bg-bg-secondary border border-border text-text-secondary">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl font-bold text-text-primary mb-3">AIForge</h1>
          <p className="text-base text-text-secondary leading-relaxed max-w-2xl">
            An open platform for sharing, downloading, and running AI agents and
            machine learning models locally — a developer-first model marketplace.
          </p>
        </div>

        <div className="space-y-10">
          <section>
            <h2 className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-4">Problem</h2>
            <div className="border border-border rounded-lg p-5 bg-bg-secondary">
              <p className="text-sm text-text-secondary leading-relaxed">
                The ML community lacks a unified, open platform where developers can publish
                models and users can discover and run them locally without vendor lock-in.
                Existing solutions either require cloud execution or lack a cohesive developer
                experience for model sharing and local deployment.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-4">Solution</h2>
            <div className="border border-border rounded-lg p-5 bg-bg-secondary">
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                AIForge is designed as an open marketplace with a developer-first philosophy.
                Users can publish models with metadata, download them via CLI or SDK, and
                execute them locally inside isolated Docker containers:
              </p>
              <ul className="space-y-2">
                {[
                  "Django REST backend with JWT authentication and model registry",
                  "React/Vite frontend for browsing, searching, and publishing models",
                  "Containerized model execution for isolation and reproducibility",
                  "Python SDK for programmatic model discovery and local execution",
                  "S3-compatible storage for model artifacts and versioning",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span className="text-accent mt-0.5 shrink-0">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-4">Architecture</h2>
            <pre className="text-xs leading-relaxed overflow-x-auto">{architecture}</pre>
          </section>

          <section>
            <h2 className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-4">Tech Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { name: "Django", desc: "Backend API & ORM" },
                { name: "React + Vite", desc: "Frontend marketplace" },
                { name: "Docker", desc: "Model execution isolation" },
                { name: "PostgreSQL", desc: "Registry & user data" },
                { name: "Django REST", desc: "API framework" },
                { name: "S3", desc: "Model artifact storage" },
              ].map((item) => (
                <div key={item.name} className="border border-border rounded p-3 bg-bg-secondary">
                  <p className="text-xs font-mono text-accent mb-1">{item.name}</p>
                  <p className="text-xs text-text-secondary">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-4">Challenges</h2>
            <div className="space-y-3">
              {[
                { title: "Local Execution Isolation", desc: "Running arbitrary model code safely required containerization with resource limits and network isolation per execution." },
                { title: "Model Format Diversity", desc: "Supporting .pt, .pkl, .onnx and other formats required a unified interface abstraction with format-specific runners." },
                { title: "Dependency Management", desc: "Each model has unique Python dependencies. Solved by storing requirements.txt per model and building images on-demand." },
              ].map((item) => (
                <div key={item.title} className="border border-border rounded-lg p-4 bg-bg-secondary">
                  <p className="text-sm font-medium text-text-primary mb-1.5">{item.title}</p>
                  <p className="text-sm text-text-secondary">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="flex gap-3">
            <a href="https://github.com/dinakar0745" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded text-sm text-text-secondary hover:text-text-primary hover:border-accent/40 transition-colors">
              <Github size={15} /> View on GitHub
            </a>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
