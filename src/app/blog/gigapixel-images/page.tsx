"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";

export default function GigapixelPost() {
  return (
    <div className="min-h-screen max-w-3xl mx-auto px-6 pt-28 pb-20">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary mb-8 transition-colors">
          <ArrowLeft size={14} /> Back to blog
        </Link>

        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-text-secondary">Feb 2025</span>
            <span className="flex items-center gap-1 text-xs text-text-secondary"><Clock size={11} /> 6 min read</span>
          </div>
          <h1 className="text-3xl font-bold text-text-primary mb-4">Processing Gigapixel Images Efficiently</h1>
          <div className="flex flex-wrap gap-2">
            {["Python", "Performance", "Image Processing"].map((tag) => (
              <span key={tag} className="text-xs font-mono px-2 py-0.5 rounded bg-bg-secondary border border-border text-text-secondary">{tag}</span>
            ))}
          </div>
        </div>

        <article className="space-y-6">
          <p className="text-sm text-text-secondary leading-relaxed">
            A gigapixel image cannot fit in RAM. The moment you try to load one naively,
            your process runs out of memory. Working with WSI data demands a fundamentally
            different approach to image I/O, processing, and ML inference.
          </p>

          <h2 className="text-base font-semibold text-text-primary mt-8 mb-3">Tiled Access</h2>
          <p className="text-sm text-text-secondary leading-relaxed">
            Modern WSI formats store images as pyramid tilesets — the same image at multiple
            resolution levels, each split into 256×256 or 512×512 tiles. You never load the
            full image; you request specific tiles at specific zoom levels.
          </p>
          <pre className="text-xs">{`import openslide

slide = openslide.OpenSlide("sample.svs")

# Image dimensions at full resolution
print(slide.dimensions)  # (100000, 80000)

# Read a 512x512 tile at level 0 (full res)
tile = slide.read_region(
    location=(x, y),   # top-left corner
    level=0,            # zoom level
    size=(512, 512)
)

# Thumbnail for overview
thumbnail = slide.get_thumbnail((1024, 1024))`}</pre>

          <h2 className="text-base font-semibold text-text-primary mt-8 mb-3">Parallel Tile Processing</h2>
          <p className="text-sm text-text-secondary leading-relaxed">
            A typical 40x slide has ~100,000 tiles. Processing them sequentially is too slow.
            We distribute tiles across a worker pool using Python multiprocessing, with each
            worker holding its own OpenSlide handle (OpenSlide is not thread-safe).
          </p>
          <pre className="text-xs">{`from concurrent.futures import ProcessPoolExecutor
from functools import partial

def process_tile(coords, slide_path, model_path):
    slide = openslide.OpenSlide(slide_path)
    x, y = coords
    tile = slide.read_region((x, y), 0, (512, 512))
    # run inference...
    return result

tile_coords = generate_tile_coords(slide.dimensions)

with ProcessPoolExecutor(max_workers=8) as executor:
    results = list(executor.map(
        partial(process_tile, slide_path=path, model_path=model),
        tile_coords
    ))`}</pre>

          <h2 className="text-base font-semibold text-text-primary mt-8 mb-3">Memory Management</h2>
          <p className="text-sm text-text-secondary leading-relaxed">
            Even when tiling, loading tiles into numpy arrays accumulates quickly.
            Key strategies: process tiles in batches and delete references immediately,
            use generators instead of lists for tile sequences, and profile with
            memory_profiler to catch leaks in long-running pipeline processes.
          </p>
        </article>
      </motion.div>
    </div>
  );
}
