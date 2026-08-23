"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Github } from "lucide-react";

const architecture = `
# NEXUS OS

┌──────────────────────────────────────────────────┐
│            Bootable Linux Distribution           │
│                                                  │
│   base image ──► services ──► agent runtime      │
└────────────────────────┬─────────────────────────┘
                         │
                         ▼
┌──────────────────────────────────────────────────┐
│                 FastAPI Server                   │
│                                                  │
│   /chat   /skills   /jobs   /health              │
└────────────────────────┬─────────────────────────┘
                         │
                         ▼
┌──────────────────────────────────────────────────┐
│            ReAct Agent Orchestrator              │
│                                                  │
│   observe ──► think ──► act ──► observe ...      │
│                  │                               │
│                  ▼                               │
│           permission model gate                  │
│      (each skill call checked before run)        │
└───────────┬──────────────────────┬───────────────┘
            │                      │
            ▼                      ▼
┌───────────────────┐   ┌──────────────────────┐
│  Skill Registry   │   │  Capability Modules  │
│                   │   │                      │
│  auto-discovery   │   │  vision · RAG        │
│  from skills/ dir │   │  scheduler           │
│  schema + docs    │   │  homelab monitoring  │
└───────────────────┘   └──────────────────────┘
`;

export default function NexusOSPage() {
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
            {["FastAPI", "Linux", "Agents", "RAG", "Vision"].map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-2 py-0.5 rounded bg-bg-secondary border border-border text-text-secondary"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl font-bold text-text-primary mb-3">NEXUS OS</h1>
          <p className="text-base text-text-secondary leading-relaxed max-w-2xl">
            A bootable AI operating environment — a ReAct-style agent
            orchestrator with skill auto-discovery, a permission model, and a
            FastAPI server, shipped as a Linux distribution rather than an app.
          </p>
        </div>

        <div className="space-y-10">
          <section>
            <h2 className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-4">
              Problem
            </h2>
            <div className="border border-border rounded-lg p-5 bg-bg-secondary">
              <p className="text-sm text-text-secondary leading-relaxed">
                Agent frameworks generally assume they are a library inside
                someone else&apos;s application. That leaves the interesting
                parts — what the agent is allowed to touch, how new capabilities
                get registered, what happens on reboot — as the host
                application&apos;s problem. NEXUS OS inverts that: the agent
                runtime is the system, the machine boots into it, and skills and
                permissions are first-class parts of the environment rather than
                configuration passed in at call time.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-4">
              Approach
            </h2>
            <div className="border border-border rounded-lg p-5 bg-bg-secondary">
              <ul className="space-y-2">
                {[
                  "A ReAct-style orchestrator drives the observe → think → act loop, with each action routed through a permission gate before execution",
                  "Skills are auto-discovered from disk: drop a module into the skills directory and its schema and documentation are registered without editing the orchestrator",
                  "A FastAPI server exposes chat, skill listing, job control, and health endpoints, so the environment is drivable over HTTP as well as locally",
                  "Capability modules extend the base loop with vision, retrieval-augmented generation, scheduling, and homelab monitoring",
                  "The whole stack is packaged as a bootable Linux distribution so the environment is reproducible on bare metal or a VM",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-text-secondary"
                  >
                    <span className="text-accent mt-0.5 shrink-0">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-4">
              Architecture
            </h2>
            <pre className="text-xs leading-relaxed overflow-x-auto">
              {architecture}
            </pre>
          </section>

          <section>
            <h2 className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-4">
              Tech Stack
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { name: "FastAPI", desc: "Server & agent API" },
                { name: "Python", desc: "Orchestrator & skills" },
                { name: "Linux", desc: "Bootable base image" },
                { name: "systemd", desc: "Service supervision" },
                { name: "RAG stack", desc: "Retrieval over local corpora" },
                { name: "Local LLM", desc: "Inference backend" },
              ].map((item) => (
                <div
                  key={item.name}
                  className="border border-border rounded p-3 bg-bg-secondary"
                >
                  <p className="text-xs font-mono text-accent mb-1">
                    {item.name}
                  </p>
                  <p className="text-xs text-text-secondary">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-4">
              Challenges
            </h2>
            <div className="space-y-3">
              {[
                {
                  title: "Permissions without paralysis",
                  desc: "A gate on every action is only useful if it is granular enough to say yes safely. Skills declare what they touch, so the model can be scoped per capability rather than as a single all-or-nothing switch.",
                },
                {
                  title: "Auto-discovery vs. predictability",
                  desc: "Loading arbitrary modules from disk is convenient and fragile in equal measure. Skills are validated against a schema at registration, so a malformed one fails loudly at boot rather than mid-loop.",
                },
                {
                  title: "Packaging a live system",
                  desc: "Turning a running stack into a bootable image means pinning the model runtime, service ordering, and GPU drivers together — the pieces most likely to drift independently.",
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
