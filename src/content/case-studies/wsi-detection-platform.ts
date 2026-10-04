import type { CaseStudy } from "@/content/types";

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

const caseStudy: CaseStudy = {
  slug: "wsi-detection-platform",
  title: "WSI Detection Platform",
  lead:
    "A platform for running AI detection models across whole-slide images — pathology model execution over gigapixel inputs, with tiled inference and region-level result aggregation.",
  tags: ["Python", "PyTorch", "OpenSlide", "DICOM", "GPU"],
  architecture,
  sections: [
    {
      kind: "prose",
      heading: "Problem",
      body:
        "A single whole-slide image can run to tens of gigapixels. It does not fit in GPU memory, it does not fit in host memory, and the regions that matter — a cluster of tumour cells, a handful of mitotic figures — occupy a vanishing fraction of the total pixel area. Running a detection model over a slide therefore is not a modelling problem so much as a scheduling and bookkeeping one: decide which pixels are worth looking at, get them onto a GPU, and put the answers back into slide coordinates without losing or double-counting anything at the seams.",
    },
    {
      kind: "prose",
      heading: "Approach",
      body:
        "The platform treats a slide as a stream of tiles moving through a fixed set of stages, each of which can be scaled independently:",
      points: [
        "Ingestion reads DICOM and vendor slide formats, parses acquisition metadata, and handles both sparse and fully-tiled scans",
        "A tissue mask at low pyramid resolution discards background tiles before any model sees them — usually the majority of the slide",
        "Tiles are enqueued with their slide coordinates and dispatched to GPU workers by an assignment layer that keeps devices evenly loaded",
        "Detection models emit per-tile boxes and scores for tumour cells and mitotic figures",
        "Aggregation maps tile-local coordinates back to slide space, deduplicates detections across overlapping tile borders, and rolls results up into regions, counts, and heatmaps",
      ],
    },
    {
      kind: "diagram",
      heading: "Architecture",
    },
    {
      kind: "stack",
      heading: "Tech Stack",
      items: [
        { name: "Python", desc: "Pipeline & orchestration" },
        { name: "PyTorch", desc: "Detection model execution" },
        { name: "OpenSlide", desc: "Slide reading & pyramid access" },
        { name: "DICOM", desc: "Ingestion format & metadata" },
        { name: "CUDA / GPU", desc: "Tile inference workers" },
        { name: "NumPy / OpenCV", desc: "Tissue masking & tiling" },
      ],
    },
    {
      kind: "challenges",
      heading: "Challenges",
      items: [
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
      ],
    },
  ],
};

export default caseStudy;
