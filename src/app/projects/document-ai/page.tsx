"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Github } from "lucide-react";

const architecture = `
# Local Document-AI Extraction Pipeline

┌──────────────────────────────────────────────────┐
│                 Document Intake                  │
│                                                  │
│   scanned PDF ──► page split ──► classify        │
│                 (text layer? / image only?)      │
└───────────┬──────────────────────┬───────────────┘
            │ has text layer       │ image only
            ▼                      ▼
┌───────────────────┐   ┌──────────────────────┐
│   pdfplumber      │   │  Tesseract OCR       │
│                   │   │                      │
│  words + boxes    │   │  words + boxes       │
│  table regions    │   │  confidence scores   │
└───────────┬───────┘   └──────────┬───────────┘
            └──────────┬───────────┘
                       ▼
┌──────────────────────────────────────────────────┐
│           Local LLM Extraction (Ollama)          │
│                                                  │
│   layout text ──► schema-constrained JSON        │
│   line items · totals · dates · parties          │
└────────────────────────┬─────────────────────────┘
                         │
                         ▼
┌──────────────────────────────────────────────────┐
│             Canonical Item Matching              │
│                                                  │
│   raw description ──► normalise ──► catalog id   │
│   fuzzy + alias table for known variants         │
└────────────────────────┬─────────────────────────┘
                         │
                         ▼
┌──────────────────────────────────────────────────┐
│              Comparison Dashboard                │
│                                                  │
│   doc A vs doc B ──► per-item deltas             │
│   flag: missing · price drift · qty mismatch     │
└──────────────────────────────────────────────────┘

   ── everything above runs on one GPU workstation ──
              no document leaves the machine
`;

export default function DocumentAIPage() {
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
            {["pdfplumber", "Tesseract", "Ollama", "Python", "On-Prem"].map(
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
            Local Document-AI Extraction Pipeline
          </h1>
          <p className="text-base text-text-secondary leading-relaxed max-w-2xl">
            An on-premises pipeline for structured extraction from scanned
            documents, with canonical item matching and a comparison dashboard —
            running fully locally on a GPU workstation.
          </p>
        </div>

        <div className="space-y-10">
          <section>
            <h2 className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-4">
              Problem
            </h2>
            <div className="border border-border rounded-lg p-5 bg-bg-secondary">
              <p className="text-sm text-text-secondary leading-relaxed">
                The documents worth extracting structure from — quotes,
                invoices, procurement paperwork — tend to be exactly the ones an
                organisation will not send to a hosted API. They also tend to
                arrive as scans, so there is no text layer to parse, and the same
                item appears under a different description in every document.
                The pipeline had to solve all three at once: stay on-premises,
                handle image-only input, and reconcile descriptions across
                documents well enough to compare them line by line.
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
                  "Intake classifies each page by whether it carries a usable text layer, routing to pdfplumber or Tesseract accordingly rather than OCR-ing everything",
                  "Both paths converge on the same representation — words with bounding boxes — so downstream stages do not care where the text came from",
                  "A local LLM served via Ollama turns layout-aware text into schema-constrained JSON: line items, totals, dates, and parties",
                  "Canonical matching normalises free-text item descriptions against a catalog, using an alias table for known variants and fuzzy matching for the rest",
                  "A comparison dashboard diffs two documents item by item and flags missing entries, price drift, and quantity mismatches",
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
                { name: "pdfplumber", desc: "Text-layer & table extraction" },
                { name: "Tesseract", desc: "OCR for scanned pages" },
                { name: "Ollama", desc: "Local LLM serving" },
                { name: "Python", desc: "Pipeline orchestration" },
                { name: "GPU workstation", desc: "Inference host" },
                { name: "Dashboard", desc: "Document comparison UI" },
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
                  title: "OCR noise reaching the model",
                  desc: "A misread digit in a quantity column is indistinguishable from a correct one downstream. Confidence scores are carried through to extraction so low-confidence fields can be flagged rather than silently trusted.",
                },
                {
                  title: "Getting structured output from a local model",
                  desc: "Smaller local models drift from a requested JSON shape more readily than hosted ones. Schema-constrained decoding plus a validation-and-retry step keeps output parseable without a larger model.",
                },
                {
                  title: "Same item, different words",
                  desc: "Item descriptions vary by vendor, abbreviation, and typo. An alias table handles the recurring cases and fuzzy matching covers the tail, with unmatched items surfaced for review instead of dropped.",
                },
                {
                  title: "Staying inside the machine",
                  desc: "Every stage — OCR, inference, storage — had to run locally, which meant sizing the model to the available GPU rather than to the task, and accepting the accuracy trade that comes with it.",
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
