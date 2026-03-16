"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";

export default function WSIPipelinesPost() {
  return (
    <div className="min-h-screen max-w-3xl mx-auto px-6 pt-28 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary mb-8 transition-colors"
        >
          <ArrowLeft size={14} /> Back to blog
        </Link>

        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-text-secondary">Mar 2025</span>
            <span className="flex items-center gap-1 text-xs text-text-secondary">
              <Clock size={11} /> 8 min read
            </span>
          </div>
          <h1 className="text-3xl font-bold text-text-primary mb-4">
            Understanding Whole Slide Imaging Pipelines
          </h1>
          <div className="flex flex-wrap gap-2">
            {["WSI", "Image Processing", "Pathology"].map((tag) => (
              <span key={tag} className="text-xs font-mono px-2 py-0.5 rounded bg-bg-secondary border border-border text-text-secondary">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <article className="prose-custom space-y-6">
          <p className="text-sm text-text-secondary leading-relaxed">
            Whole Slide Imaging (WSI) is the process of digitizing entire glass pathology
            slides into high-resolution digital images. These images can reach resolutions
            of 100,000 × 100,000 pixels — several gigabytes per slide even when compressed.
            Working with them at scale requires purpose-built pipelines.
          </p>

          <h2 className="text-base font-semibold text-text-primary mt-8 mb-3">
            What Makes WSI Different
          </h2>
          <p className="text-sm text-text-secondary leading-relaxed">
            Standard image processing libraries assume images fit in memory. A gigapixel WSI
            does not. A single slide at 40x magnification might be 3–5 GB uncompressed.
            Processing these images requires a fundamentally different approach: tiled access,
            streaming processing, and pyramid representations.
          </p>

          <h2 className="text-base font-semibold text-text-primary mt-8 mb-3">
            Pipeline Stages
          </h2>

          {[
            {
              stage: "1. Image Acquisition",
              content: "WSI scanners (like Hamamatsu, Leica, or Aperio) capture slides at multiple magnification levels and output proprietary formats: .svs, .ndpi, .scn. The scanner firmware handles focus mapping, stitching, and compression internally.",
            },
            {
              stage: "2. Data Transfer",
              content: "Large files need reliable, checksummed transfer from scanner to storage. We use high-throughput local network links with SHA-256 verification before ingestion.",
            },
            {
              stage: "3. Format Conversion & Preprocessing",
              content: "Proprietary formats are converted to standardized representations using libraries like OpenSlide. Preprocessing includes stain normalization (Macenko or Vahadane methods) to correct for scanner and staining variability.",
            },
            {
              stage: "4. Tiling for ML",
              content: "ML algorithms don't operate on gigapixel inputs. The slide is divided into overlapping or non-overlapping tiles (typically 256×256 or 512×512 pixels) at the target magnification. This produces thousands of tiles per slide.",
            },
            {
              stage: "5. Algorithm Analysis",
              content: "Detection models run inference over tile batches. Results include bounding boxes, class labels, and confidence scores per tile. These must be mapped back to global slide coordinates.",
            },
            {
              stage: "6. Result Aggregation & Storage",
              content: "Per-tile results are aggregated into slide-level summaries. Outputs include annotated overlays, structured reports, and indexed results for downstream retrieval.",
            },
          ].map((item) => (
            <div key={item.stage} className="border border-border rounded-lg p-4 bg-bg-secondary">
              <h3 className="text-sm font-mono text-accent mb-2">{item.stage}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{item.content}</p>
            </div>
          ))}

          <h2 className="text-base font-semibold text-text-primary mt-8 mb-3">
            Key Libraries
          </h2>
          <pre className="text-xs">{`# Core libraries for WSI processing
openslide-python   # Read .svs, .ndpi, .scn formats
large_image        # Tile server for large images
cucim              # GPU-accelerated image I/O (RAPIDS)
histomicstk        # Stain normalization, analysis
pyvips             # Fast large image operations`}</pre>

          <h2 className="text-base font-semibold text-text-primary mt-8 mb-3">
            Scaling Considerations
          </h2>
          <p className="text-sm text-text-secondary leading-relaxed">
            Processing hundreds of slides per day requires distributed worker architecture.
            Each slide becomes a job submitted to a message queue. Workers pull jobs, process
            tiles in parallel using multiprocessing, and push results to a results store.
            GPU inference servers handle the ML inference step as a separate service.
          </p>
        </article>
      </motion.div>
    </div>
  );
}
