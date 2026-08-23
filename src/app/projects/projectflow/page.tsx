"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Github } from "lucide-react";

const architecture = `
# ProjectFlow

┌──────────────────────────────────────────────────┐
│                Frontend (Next.js)                │
│                                                  │
│   Projects ──► Boards ──► Tasks ──► Activity     │
└────────────────────────┬─────────────────────────┘
                         │ REST
                         ▼
┌──────────────────────────────────────────────────┐
│                Backend (FastAPI)                 │
│                                                  │
│   OTP auth ──► sessions ──► RBAC ──► handlers    │
└───────────┬──────────────────────┬───────────────┘
            │                      │
            ▼                      ▼
┌───────────────────┐   ┌──────────────────────┐
│   PostgreSQL      │   │   Email (OTP)        │
│                   │   │                      │
│  Alembic-managed  │   │  one-time codes      │
│  schema history   │   │  short TTL           │
└───────────────────┘   └──────────────────────┘

            ── deployment path ──

   push ──► GitHub Actions ──► build ──► VM
              tests + image        docker compose up
`;

export default function ProjectFlowPage() {
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
            {["FastAPI", "PostgreSQL", "Next.js", "Docker", "GitHub Actions"].map(
              (tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-2 py-0.5 rounded bg-bg-secondary border border-border text-text-secondary"
                >
                  {tag}
                </span>
              )
            )}
          </div>
          <h1 className="text-3xl font-bold text-text-primary mb-3">
            ProjectFlow
          </h1>
          <p className="text-base text-text-secondary leading-relaxed max-w-2xl">
            A self-hosted project tracker built and shipped at Systems Group —
            OTP email authentication, Alembic-managed migrations, GitHub Actions
            CI, and VM deployment.
          </p>
        </div>

        <div className="space-y-10">
          <section>
            <h2 className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-4">
              Context
            </h2>
            <div className="border border-border rounded-lg p-5 bg-bg-secondary">
              <p className="text-sm text-text-secondary leading-relaxed">
                Systems Group needed project tracking for internal teams and for
                client work, on infrastructure it controlled. Hosted trackers
                were ruled out on data-residency grounds, and the usual
                self-hosted options carried more surface area than the teams
                would use. ProjectFlow is the narrower thing: the tracking model
                the organisation actually works in, deployed to its own VM, with
                a migration and CI story that makes it maintainable by one
                engineer.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-4">
              What It Does
            </h2>
            <div className="border border-border rounded-lg p-5 bg-bg-secondary">
              <ul className="space-y-2">
                {[
                  "Passwordless sign-in by one-time code sent to email, with short-TTL codes and server-side sessions",
                  "Projects, boards, and tasks with assignment, status transitions, and an activity trail",
                  "FastAPI backend over PostgreSQL, with the schema history managed end-to-end by Alembic migrations",
                  "Next.js frontend served alongside the API",
                  "GitHub Actions pipeline running tests and building the image on every push, deploying to a VM via Docker",
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
                { name: "FastAPI", desc: "Backend API" },
                { name: "PostgreSQL", desc: "Primary datastore" },
                { name: "Alembic", desc: "Schema migrations" },
                { name: "Next.js", desc: "Frontend application" },
                { name: "Docker", desc: "Packaging & deployment" },
                { name: "GitHub Actions", desc: "CI and release pipeline" },
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
                  title: "OTP as the only auth path",
                  desc: "Dropping passwords removes a class of problems and adds another: code replay, delivery latency, and users requesting codes in a loop. Short TTLs, single-use codes, and rate limiting per address cover the practical cases.",
                },
                {
                  title: "Migrations on a live deployment",
                  desc: "Schema changes had to be applied to a running instance without a maintenance window, which meant keeping Alembic revisions additive and ordering deploys so the new code tolerates the old schema.",
                },
                {
                  title: "One-engineer maintainability",
                  desc: "CI is the substitute for a second pair of eyes. Every push runs the test suite and builds the deployable image, so the only manual step left is the deploy itself.",
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
