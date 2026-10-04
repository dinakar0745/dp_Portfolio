import type { Project } from "./types";

/**
 * The projects index. A project with a `slug` links to its case study in
 * src/content/case-studies/<slug>.ts; `featured` ones also appear on the home page.
 */
export const projects: Project[] = [
  {
    slug: "wsi-detection-platform",
    title: "WSI Detection Platform",
    subtitle: "Gigapixel Pathology Inference",
    description:
      "A platform for running AI detection models across whole-slide images — tumour-cell and mitotic-figure detection over gigapixel inputs, with tiled inference and region-level result aggregation.",
    tags: ["Python", "PyTorch", "OpenSlide", "DICOM", "GPU"],
    icon: "microscope",
    featured: true,
  },
  {
    slug: "nexus-os",
    title: "NEXUS OS",
    subtitle: "Bootable AI Operating Environment",
    description:
      "A ReAct-style agent orchestrator with skill auto-discovery, a permission model, and a FastAPI server, packaged as a bootable Linux distribution. Extended with vision, RAG, scheduling, and homelab monitoring.",
    tags: ["FastAPI", "Linux", "Agents", "RAG", "Vision"],
    icon: "boxes",
    featured: true,
  },
  {
    slug: "document-ai",
    title: "Local Document-AI Extraction Pipeline",
    subtitle: "On-Prem OCR + Local LLM",
    description:
      "An on-premises pipeline for structured extraction from scanned documents, with canonical item matching and a comparison dashboard — running fully locally on a GPU workstation, no data leaving the machine.",
    tags: ["pdfplumber", "Tesseract", "Ollama", "Python"],
    icon: "fileText",
    featured: true,
  },
  {
    slug: "projectflow",
    title: "ProjectFlow",
    subtitle: "Self-Hosted Project Tracker",
    description:
      "A production project tracker built at Systems Group — OTP email authentication, Alembic migrations, GitHub Actions CI, and VM deployment.",
    tags: ["FastAPI", "PostgreSQL", "Next.js", "Docker", "CI/CD"],
    icon: "workflow",
    featured: true,
  },
  {
    title: "Distributed Inference Cluster",
    subtitle: "Heterogeneous Local LLM Serving",
    description:
      "A two-node heterogeneous inference cluster (macOS + Windows/WSL) using exo, exploring model sharding and peer discovery for serving large models across commodity hardware.",
    tags: ["exo", "Model Sharding", "macOS", "WSL"],
    icon: "network",
  },
  {
    title: "Agricultural Crop-Image Platform — PJTSAU",
    subtitle: "Professor Jayashankar Telangana State Agricultural University",
    description:
      "A mobile application letting farmers upload crop images for expert review by university faculty, designed to curate a labeled agricultural image dataset for training predictive models toward automated crop diagnosis.",
    tags: ["Mobile", "Dataset Curation", "AI Integration"],
    icon: "sprout",
  },
  {
    title: "Smart-Farming Weed Detection",
    subtitle: "Computer Vision on an IoT Field Platform",
    description:
      "A computer-vision weed-detection system running on an IoT field platform, classifying crop versus weed from field imagery to help farmers target infestations efficiently.",
    tags: ["IoT", "Computer Vision", "Image Recognition"],
    icon: "scanSearch",
  },
  {
    title: "“orion” Research Homelab",
    subtitle: "Self-Administered Compute Substrate",
    description:
      "A self-administered Linux workstation with RAID storage, zero-trust remote access, and GPU-backed local LLM inference — the compute substrate behind the imaging, document-AI, and agent work above.",
    tags: ["Linux", "RAID", "Zero Trust", "GPU"],
    icon: "hardDrive",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
