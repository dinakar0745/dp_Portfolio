"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRight,
  Boxes,
  FileText,
  HardDrive,
  Microscope,
  Network,
  ScanSearch,
  Sprout,
  Workflow,
} from "lucide-react";

type Project = {
  slug?: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
};

const projects: Project[] = [
  {
    slug: "wsi-detection-platform",
    title: "WSI Detection Platform",
    subtitle: "Gigapixel Pathology Inference",
    description:
      "A platform for running AI detection models across whole-slide images — tumour-cell and mitotic-figure detection over gigapixel inputs, with tiled inference and region-level result aggregation.",
    tags: ["Python", "PyTorch", "OpenSlide", "DICOM", "GPU"],
    icon: <Microscope size={20} />,
  },
  {
    slug: "nexus-os",
    title: "NEXUS OS",
    subtitle: "Bootable AI Operating Environment",
    description:
      "A ReAct-style agent orchestrator with skill auto-discovery, a permission model, and a FastAPI server, packaged as a bootable Linux distribution. Extended with vision, RAG, scheduling, and homelab monitoring.",
    tags: ["FastAPI", "Linux", "Agents", "RAG", "Vision"],
    icon: <Boxes size={20} />,
  },
  {
    slug: "document-ai",
    title: "Local Document-AI Extraction Pipeline",
    subtitle: "On-Prem OCR + Local LLM",
    description:
      "An on-premises pipeline for structured extraction from scanned documents, with canonical item matching and a comparison dashboard — running fully locally on a GPU workstation, no data leaving the machine.",
    tags: ["pdfplumber", "Tesseract", "Ollama", "Python"],
    icon: <FileText size={20} />,
  },
  {
    slug: "projectflow",
    title: "ProjectFlow",
    subtitle: "Self-Hosted Project Tracker",
    description:
      "A production project tracker built at Systems Group — OTP email authentication, Alembic migrations, GitHub Actions CI, and VM deployment.",
    tags: ["FastAPI", "PostgreSQL", "Next.js", "Docker", "CI/CD"],
    icon: <Workflow size={20} />,
  },
  {
    title: "Distributed Inference Cluster",
    subtitle: "Heterogeneous Local LLM Serving",
    description:
      "A two-node heterogeneous inference cluster (macOS + Windows/WSL) using exo, exploring model sharding and peer discovery for serving large models across commodity hardware.",
    tags: ["exo", "Model Sharding", "macOS", "WSL"],
    icon: <Network size={20} />,
  },
  {
    title: "Agricultural Crop-Image Platform — PJTSAU",
    subtitle: "Professor Jayashankar Telangana State Agricultural University",
    description:
      "A mobile application letting farmers upload crop images for expert review by university faculty, designed to curate a labeled agricultural image dataset for training predictive models toward automated crop diagnosis.",
    tags: ["Mobile", "Dataset Curation", "AI Integration"],
    icon: <Sprout size={20} />,
  },
  {
    title: "Smart-Farming Weed Detection",
    subtitle: "Computer Vision on an IoT Field Platform",
    description:
      "A computer-vision weed-detection system running on an IoT field platform, classifying crop versus weed from field imagery to help farmers target infestations efficiently.",
    tags: ["IoT", "Computer Vision", "Image Recognition"],
    icon: <ScanSearch size={20} />,
  },
  {
    title: "“orion” Research Homelab",
    subtitle: "Self-Administered Compute Substrate",
    description:
      "A self-administered Linux workstation with RAID storage, zero-trust remote access, and GPU-backed local LLM inference — the compute substrate behind the imaging, document-AI, and agent work above.",
    tags: ["Linux", "RAID", "Zero Trust", "GPU"],
    icon: <HardDrive size={20} />,
  },
];

function ProjectCard({ project }: { project: Project }) {
  const linked = Boolean(project.slug);

  return (
    <div
      className={`border border-border rounded-lg p-6 bg-bg-secondary transition-all ${
        linked
          ? "group hover:border-accent/40 hover:bg-bg-tertiary cursor-pointer"
          : ""
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4 flex-1">
          <div className="p-2.5 rounded bg-bg-tertiary border border-border text-accent group-hover:border-accent/40 transition-colors shrink-0">
            {project.icon}
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-base font-semibold text-text-primary mb-0.5 group-hover:text-accent transition-colors">
              {project.title}
            </h2>
            <p className="text-xs font-mono text-accent mb-3">
              {project.subtitle}
            </p>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-2 py-0.5 rounded bg-bg border border-border text-text-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>
            {linked && (
              <p className="text-xs font-mono text-accent mt-4 inline-flex items-center gap-1">
                Read case study <ArrowUpRight size={12} />
              </p>
            )}
          </div>
        </div>
        {linked && (
          <ArrowUpRight
            size={16}
            className="text-text-secondary group-hover:text-accent transition-colors shrink-0 mt-1"
          />
        )}
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen max-w-5xl mx-auto px-6 pt-28 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h1 className="text-3xl font-bold text-text-primary mb-3">Projects</h1>
        <p className="text-sm text-text-secondary max-w-xl">
          Systems and research tools I&apos;ve built — medical imaging pipelines,
          agent infrastructure, local ML deployment, and the hardware they run on.
        </p>
      </motion.div>

      <div className="space-y-4">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
          >
            {project.slug ? (
              <Link href={`/projects/${project.slug}`}>
                <ProjectCard project={project} />
              </Link>
            ) : (
              <ProjectCard project={project} />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
