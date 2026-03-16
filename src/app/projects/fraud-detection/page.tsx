"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Github } from "lucide-react";

const architecture = `
# Fraud Detection Pipeline Architecture

Raw Transactions
      │
      ▼
┌─────────────────┐
│  Data Ingestion │  ← Kafka / CSV batch
│  & Validation   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   Feature Eng   │  ← Time windows, velocity,
│   Layer         │    user behavior features
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Model Ensemble │  ← Isolation Forest +
│  (Anomaly Det.) │    Gradient Boosting
└────────┬────────┘
         │
      ┌──┴──┐
      │     │
   fraud  legit
      │
      ▼
┌─────────────────┐
│  Fraud Alert    │  ← REST API response
│  API            │    + alerting pipeline
└─────────────────┘
`;

export default function FraudDetectionProject() {
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
            {["Python", "scikit-learn", "FastAPI", "PostgreSQL", "Pandas"].map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-2 py-0.5 rounded bg-bg-secondary border border-border text-text-secondary"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl font-bold text-text-primary mb-3">
            Fraud Detection System
          </h1>
          <p className="text-base text-text-secondary leading-relaxed max-w-2xl">
            End-to-end ML pipeline for detecting fraudulent financial transactions
            using anomaly detection and feature engineering.
          </p>
        </div>

        <div className="space-y-10">
          <section>
            <h2 className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-4">
              Problem
            </h2>
            <div className="border border-border rounded-lg p-5 bg-bg-secondary">
              <p className="text-sm text-text-secondary leading-relaxed">
                Financial fraud detection requires identifying rare, anomalous transactions
                in highly imbalanced datasets where fraudulent events represent less than
                0.5% of all transactions. Traditional rule-based systems fail to adapt
                to evolving fraud patterns, requiring a more intelligent, data-driven approach.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-4">
              Solution
            </h2>
            <div className="border border-border rounded-lg p-5 bg-bg-secondary">
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                Built a multi-stage pipeline combining unsupervised anomaly detection with
                supervised classification, designed to handle real-time transaction scoring:
              </p>
              <ul className="space-y-2">
                {[
                  "Temporal feature extraction: rolling transaction velocity, time-of-day patterns",
                  "Behavioral features: deviation from user spending baseline",
                  "Ensemble model combining Isolation Forest and Gradient Boosting",
                  "SMOTE oversampling to handle severe class imbalance",
                  "FastAPI inference endpoint with sub-50ms p99 latency",
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
            <h2 className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-4">
              Architecture
            </h2>
            <pre className="text-xs leading-relaxed overflow-x-auto">{architecture}</pre>
          </section>

          <section>
            <h2 className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-4">
              Tech Stack
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { name: "scikit-learn", desc: "ML models" },
                { name: "FastAPI", desc: "Inference API" },
                { name: "PostgreSQL", desc: "Transaction storage" },
                { name: "Pandas", desc: "Feature engineering" },
                { name: "imbalanced-learn", desc: "SMOTE sampling" },
                { name: "Docker", desc: "Service packaging" },
              ].map((item) => (
                <div key={item.name} className="border border-border rounded p-3 bg-bg-secondary">
                  <p className="text-xs font-mono text-accent mb-1">{item.name}</p>
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
                  title: "Class Imbalance",
                  desc: "Fraud cases were < 0.5% of data. Applied SMOTE, adjusted class weights, and used precision-recall AUC as primary metric.",
                },
                {
                  title: "Feature Drift",
                  desc: "Fraud patterns evolve over time. Implemented periodic model retraining triggered by distribution shift monitoring.",
                },
                {
                  title: "Latency Requirements",
                  desc: "Real-time scoring required sub-50ms response. Achieved through model quantization and feature precomputation.",
                },
              ].map((item) => (
                <div key={item.title} className="border border-border rounded-lg p-4 bg-bg-secondary">
                  <p className="text-sm font-medium text-text-primary mb-1.5">{item.title}</p>
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
