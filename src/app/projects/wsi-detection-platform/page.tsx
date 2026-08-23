"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Github } from "lucide-react";

const architecture = `
# WSI Detection Platform

┌──────────────────────────────────────────────────┐
│                Slide Ingestion                   │
│                                                  │
│   DICOM / SVS  ──►  metadata parse  ──►  index   │
│   sparse + fully-tiled acquisition modes         │
└────────────────────────┬─────────────────────────┘
                         │
                         ▼
┌──────────────────────────────────────────────────┐
│              Tiling & Pyramid Build              │
│                                                  │
│   gigapixel slide ──► N x N tiles @ level L      │
│   tissue mask ──► discard background tiles       │
└────────────────────────┬─────────────────────────┘
                         │  tile work queue
                         ▼
┌──────────────────────────────────────────────────┐
│            GPU Assignment & Scheduling           │
│                                                  │
│   worker 0 ──► GPU 0     worker 2 ──► GPU 1      │
│   worker 1 ──► GPU 0     worker 3 ──► GPU 1      │
└────────────────────────┬─────────────────────────┘
                         │
                         ▼
┌──────────────────────────────────────────────────┐
│               Detection Inference                │
│                                                  │
│   tumour cells · mitotic figures                 │
│   per-tile boxes + scores                        │
└────────────────────────┬─────────────────────────┘
                         │
                         ▼
┌──────────────────────────────────────────────────┐
│           Aggregation & Result Store             │
│                                                  │
│   tile coords ──► slide coords ──► regions       │
│   dedup across tile seams ──► heatmap + counts   │
└──────────────────────────────────────────────────┘
`;

export default function WSIDetectionPlatformPage() {
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
            {["Python", "PyTorch", "OpenSlide", "DICOM", "GPU"].map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-2 py-0.5 rounded bg-bg-secondary border border-border text-text-secondary"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl font-bold text-text-primary mb-3">
            WSI Detection Platform
          </h1>
          <p className="text-base text-text-secondary leading-relaxed max-w-2xl">
            A platform for running AI detection models across whole-slide images
            — pathology model execution over gigapixel inputs, with tiled
            inference and region-level result aggregation.
          </p>
        </div>

        <div className="space-y-10">
          <section>
            <h2 className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-4">
              Problem
            </h2>
            <div className="border border-border rounded-lg p-5 bg-bg-secondary">
              <p className="text-sm text-text-secondary leading-relaxed">
                A single whole-slide image can run to tens of gigapixels. It does
                not fit in GPU memory, it does not fit in host memory, and the
                regions that matter — a cluster of tumour cells, a handful of
                mitotic figures — occupy a vanishing fraction of the total pixel
                area. Running a detection model over a slide therefore is not a
                modelling problem so much as a scheduling and bookkeeping one:
                decide which pixels are worth looking at, get them onto a GPU,
                and put the answers back into slide coordinates without losing
                or double-counting anything at the seams.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-4">
              Approach
            </h2>
            <div className="border border-border rounded-lg p-5 bg-bg-secondary">
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                The platform treats a slide as a stream of tiles moving through a
                fixed set of stages, each of which can be scaled independently:
              </p>
              <ul className="space-y-2">
                {[
                  "Ingestion reads DICOM and vendor slide formats, parses acquisition metadata, and handles both sparse and fully-tiled scans",
                  "A tissue mask at low pyramid resolution discards background tiles before any model sees them — usually the majority of the slide",
                  "Tiles are enqueued with their slide coordinates and dispatched to GPU workers by an assignment layer that keeps devices evenly loaded",
                  "Detection models emit per-tile boxes and scores for tumour cells and mitotic figures",
                  "Aggregation maps tile-local coordinates back to slide space, deduplicates detections across overlapping tile borders, and rolls results up into regions, counts, and heatmaps",
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
                { name: "Python", desc: "Pipeline & orchestration" },
                { name: "PyTorch", desc: "Detection model execution" },
                { name: "OpenSlide", desc: "Slide reading & pyramid access" },
                { name: "DICOM", desc: "Ingestion format & metadata" },
                { name: "CUDA / GPU", desc: "Tile inference workers" },
                { name: "NumPy / OpenCV", desc: "Tissue masking & tiling" },
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
                  title: "Detections at tile seams",
                  desc: "An object straddling two tiles is either seen twice or clipped in half. Overlapping tile windows plus coordinate-space non-maximum suppression at aggregation time resolves both cases.",
                },
                {
                  title: "Keeping GPUs busy",
                  desc: "Tile decode is CPU-bound and inference is GPU-bound, so a naive loop leaves devices idle. Decoupling the two with a work queue and per-device worker assignment keeps throughput bounded by the GPUs rather than the reader.",
                },
                {
                  title: "Class imbalance across a slide",
                  desc: "Positive regions are a tiny fraction of total tile area, which makes both scoring thresholds and evaluation metrics sensitive. Tissue masking and region-level aggregation reduce the noise floor before results are surfaced.",
                },
                {
                  title: "Heterogeneous acquisition modes",
                  desc: "Sparse and fully-tiled scans differ in how coverage is recorded, so the ingestion layer normalises both into a single tile-index representation before anything downstream runs.",
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
