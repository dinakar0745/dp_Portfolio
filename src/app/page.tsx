"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRight,
  Award,
  Boxes,
  Download,
  FileText,
  Github,
  GraduationCap,
  Microscope,
  Network,
  Terminal,
  Workflow,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

const researchThreads = [
  {
    title: "WSI inference platform",
    body: "Running detection models over gigapixel slides — tumour-cell and mitotic-figure detection — covering slide ingestion, tiling, model execution, and region-level result aggregation.",
    status: "In progress",
  },
  {
    title: "Lymph-node metastasis detection (CAMELYON)",
    body: "A deep-learning study on metastasis detection in whole-slide images from the CAMELYON dataset, targeting a preprint.",
    status: "Targeting preprint",
  },
  {
    title: "Vertical WSI/ML for veterinary & toxicologic pathology",
    body: "A technical and market brief on preclinical, non-regulated pathology — gigapixel imaging demands comparable to the clinical setting, with far lower regulatory friction. Moving from scoping into implementation.",
    status: "Scoping → build",
  },
];

const manuscripts = [
  {
    title:
      "Graph-neural-network–based smart contract vulnerability auditing",
    note: "Detection module contributed to an academic manuscript",
  },
  {
    title:
      "Deep-learning detection of lymph-node metastases on whole-slide images (CAMELYON)",
    note: "Study in progress",
  },
];

const experience = [
  {
    role: "Software Developer",
    org: "Systems Group",
    orgNote: "Hyderabad, India",
    period: "Jun 2026 — Present",
    current: true,
    bullets: [
      "Build scalable internal applications and backend systems; ship production services with FastAPI, PostgreSQL, and Docker",
      "Delivered ProjectFlow, a self-hosted project tracker (FastAPI + PostgreSQL + Next.js) with OTP email auth, Alembic migrations, GitHub Actions CI, and VM deployment",
      "Build in-house software for the parent company, Saridena Constructions, alongside customized tools for client requirements",
    ],
    tech: ["FastAPI", "PostgreSQL", "Docker", "Next.js", "GitHub Actions"],
  },
  {
    role: "Engineering Intern — Whole-Slide Imaging Pipelines",
    org: "Evident Microscopy",
    orgNote: "formerly Pramana.ai",
    period: "Internship",
    current: false,
    bullets: [
      "Engineered DICOM-based ingestion and processing pipelines for gigapixel whole-slide histopathology images, supporting both sparse and fully-tiled acquisition modes",
      "Built GPU assignment and scheduling scripts to distribute tile-processing workloads across devices, improving throughput on large slide volumes",
      "Designed RabbitMQ message routing across Python microservices to coordinate acquisition, tiling, and downstream image-processing stages",
      "Contributed C++ acquisition modules interfacing with microscopy hardware, integrated into the end-to-end imaging pipeline",
    ],
    tech: ["Python", "C++", "DICOM", "RabbitMQ", "GPU Scheduling", "Linux"],
  },
];

const projects = [
  {
    slug: "wsi-detection-platform",
    title: "WSI Detection Platform",
    subtitle: "Gigapixel Pathology Inference",
    description:
      "Platform for running AI detection models across whole-slide images — pathology model execution over gigapixel inputs with tiled inference and result aggregation.",
    tags: ["Python", "PyTorch", "OpenSlide", "GPU", "DICOM"],
    icon: <Microscope size={18} />,
  },
  {
    slug: "nexus-os",
    title: "NEXUS OS",
    subtitle: "Bootable AI Operating Environment",
    description:
      "ReAct-style agent orchestrator with skill auto-discovery, a permission model, and a FastAPI server — packaged as a bootable Linux distribution.",
    tags: ["FastAPI", "Linux", "Agents", "RAG", "Vision"],
    icon: <Boxes size={18} />,
  },
  {
    slug: "document-ai",
    title: "Local Document-AI Pipeline",
    subtitle: "On-Prem OCR + LLM Extraction",
    description:
      "Fully local pipeline for structured extraction from scanned documents, with canonical item matching and a comparison dashboard, running on a GPU workstation.",
    tags: ["pdfplumber", "Tesseract", "Ollama", "Python"],
    icon: <FileText size={18} />,
  },
  {
    slug: "projectflow",
    title: "ProjectFlow",
    subtitle: "Self-Hosted Project Tracker",
    description:
      "Production project tracker with OTP email auth, Alembic migrations, GitHub Actions CI, and VM deployment — shipped for internal and client use.",
    tags: ["FastAPI", "PostgreSQL", "Next.js", "Docker"],
    icon: <Workflow size={18} />,
  },
];

const skills = [
  {
    category: "ML & Research",
    items: [
      "Deep learning",
      "Graph neural nets",
      "RAG",
      "Agent orchestration",
    ],
  },
  {
    category: "Medical Imaging",
    items: [
      "WSI / gigapixel",
      "DICOM",
      "Image tiling",
      "Object detection",
      "Dataset curation",
    ],
  },
  {
    category: "Languages",
    items: ["Python", "C++", "Java", "TypeScript", "SQL"],
  },
  {
    category: "Systems",
    items: [
      "Docker",
      "FastAPI",
      "PostgreSQL",
      "RabbitMQ",
      "Linux / systemd",
      "GitHub Actions",
    ],
  },
  {
    category: "Cloud & Compute",
    items: ["AWS", "GCP", "Azure", "GPU compute", "Distributed inference"],
  },
];

const wsiSteps = [
  "Slide ingestion (DICOM)",
  "Tiling & pyramid build",
  "GPU assignment",
  "Model inference",
  "Region aggregation",
  "Storage & retrieval",
];

const certifications = [
  "AWS Certified Cloud Practitioner (CLF-C02)",
  "Microsoft Certified: Azure Fundamentals",
  "Google Associate Cloud Engineer",
  "Automation Anywhere Certified Advanced RPA Professional",
  "GitHub Foundations",
];

const leadership = [
  "Head, Cybersecurity Club — KL University",
  "Founder, NTechX — AI/ML and cybersecurity venture",
  "Founder / organizer, 00:00 (Zero Hundred Hours) — youth entrepreneurship community",
  "Two-time hackathon winner",
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-36 pb-24">
        <motion.div initial="hidden" animate="visible" className="max-w-3xl">
          {/* Status badge */}
          <motion.div custom={0} variants={fadeUp} className="mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-xs font-mono text-text-secondary bg-bg-secondary">
              <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
              Software Developer @ Systems Group · Independent research in
              computational pathology
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            className="text-5xl md:text-6xl font-bold tracking-tight text-text-primary mb-4"
          >
            Dinakar Pathakota
          </motion.h1>

          {/* Role */}
          <motion.p
            custom={2}
            variants={fadeUp}
            className="text-xl md:text-2xl text-accent font-mono mb-6"
          >
            Backend Systems &amp; Computational Pathology
          </motion.p>

          {/* Subtitle */}
          <motion.p
            custom={3}
            variants={fadeUp}
            className="text-base text-text-secondary leading-relaxed mb-4 max-w-2xl"
          >
            Building deep-learning systems and large-scale image pipelines for
            digital pathology.
          </motion.p>

          {/* Description */}
          <motion.p
            custom={4}
            variants={fadeUp}
            className="text-sm text-text-secondary leading-relaxed mb-10 max-w-2xl"
          >
            I work on whole-slide image analysis and the infrastructure that makes
            it run — GPU-accelerated ML systems, gigapixel image pipelines, and
            graph neural networks. My long-term interest is building clinically
            useful, deployable models for digital pathology.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            custom={5}
            variants={fadeUp}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#research"
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-bg text-sm font-medium rounded hover:bg-accent/90 transition-colors"
            >
              View Research <ArrowUpRight size={15} />
            </a>
            <a
              href="/utils/DinakarPathakota_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 border border-border text-sm text-text-secondary hover:text-text-primary hover:border-accent/50 rounded transition-colors"
            >
              <Download size={15} /> Download CV
            </a>
            <a
              href="https://github.com/dinakar0745"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-border text-sm text-text-secondary hover:text-text-primary hover:border-accent/50 rounded transition-colors"
            >
              <Github size={15} /> GitHub
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-border/40" />
      </div>

      {/* Research */}
      <section id="research" className="max-w-5xl mx-auto px-6 py-16 scroll-mt-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-8">
            Research
          </h2>

          <div className="border border-border rounded-lg bg-bg-secondary p-6 mb-4">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
              <div>
                <h3 className="text-base font-semibold text-text-primary">
                  Independent Research — Computational Pathology
                </h3>
                <p className="text-sm text-accent font-mono mt-0.5">
                  Self-directed program building toward doctoral work in
                  medical-imaging ML
                </p>
              </div>
              <span className="text-xs font-mono text-text-secondary border border-border rounded px-2 py-1 self-start whitespace-nowrap">
                2026 — Present
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {researchThreads.map((thread) => (
                <div
                  key={thread.title}
                  className="border border-border rounded p-4 bg-bg"
                >
                  <p className="text-sm font-medium text-text-primary mb-2">
                    {thread.title}
                  </p>
                  <p className="text-xs text-text-secondary leading-relaxed mb-3">
                    {thread.body}
                  </p>
                  <span className="text-xs font-mono text-accent">
                    {thread.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-border rounded-lg bg-bg-secondary p-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
              <div>
                <h3 className="text-base font-semibold text-text-primary">
                  NTechX
                </h3>
                <p className="text-sm text-accent font-mono mt-0.5">
                  Founder{" "}
                  <span className="text-text-secondary">
                    (applied research in AI/ML and security)
                  </span>
                </p>
              </div>
            </div>
            <ul className="space-y-1.5">
              {[
                "Developed a graph neural network model for automated smart-contract vulnerability auditing; contributed the core detection module for an academic manuscript",
                "Led the venture end-to-end: research direction, model development, and technical execution",
              ].map((bullet, i) => (
                <li
                  key={i}
                  className="text-sm text-text-secondary flex items-start gap-2"
                >
                  <span className="text-accent mt-1 shrink-0">›</span>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>

          {/* Manuscripts */}
          <div className="mt-8">
            <h3 className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-4">
              Manuscripts &amp; Research Output
            </h3>
            <div className="space-y-2">
              {manuscripts.map((m) => (
                <div
                  key={m.title}
                  className="border border-border rounded-lg bg-bg-secondary p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-accent mt-0.5 shrink-0">
                      <FileText size={15} />
                    </span>
                    <div>
                      <p className="text-sm text-text-primary">{m.title}</p>
                      <p className="text-xs text-text-secondary mt-0.5">
                        {m.note}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-warning border border-border rounded px-2 py-1 self-start whitespace-nowrap">
                    ongoing
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Experience */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-border/40">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-8">
            Experience
          </h2>

          <div className="space-y-4">
            {experience.map((job) => (
              <div
                key={job.org}
                className="border border-border rounded-lg bg-bg-secondary p-6 hover:border-accent/30 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-base font-semibold text-text-primary">
                      {job.role}
                    </h3>
                    <p className="text-sm text-accent font-mono mt-0.5">
                      {job.org}{" "}
                      <span className="text-text-secondary">
                        ({job.orgNote})
                      </span>
                    </p>
                  </div>
                  <span
                    className={`text-xs font-mono border border-border rounded px-2 py-1 self-start whitespace-nowrap ${
                      job.current ? "text-success" : "text-text-secondary"
                    }`}
                  >
                    {job.period}
                  </span>
                </div>

                <ul className="space-y-1.5 mb-5">
                  {job.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="text-sm text-text-secondary flex items-start gap-2"
                    >
                      <span className="text-accent mt-1 shrink-0">›</span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {job.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2 py-0.5 rounded bg-bg-tertiary border border-border text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-border/40">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xs font-mono text-text-secondary uppercase tracking-widest">
              Selected Projects
            </h2>
            <Link
              href="/projects"
              className="text-xs text-accent hover:underline flex items-center gap-1"
            >
              All projects <ArrowUpRight size={12} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
              >
                <Link href={`/projects/${project.slug}`}>
                  <div className="group border border-border rounded-lg p-5 bg-bg-secondary hover:border-accent/40 hover:bg-bg-tertiary transition-all cursor-pointer h-full flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <div className="p-2 rounded bg-bg-tertiary border border-border text-accent group-hover:border-accent/40 transition-colors">
                        {project.icon}
                      </div>
                      <ArrowUpRight
                        size={14}
                        className="text-text-secondary group-hover:text-accent transition-colors"
                      />
                    </div>
                    <h3 className="text-sm font-semibold text-text-primary mb-0.5">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-accent mb-2">
                      {project.subtitle}
                    </p>
                    <p className="text-xs text-text-secondary leading-relaxed flex-1 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono px-1.5 py-0.5 rounded bg-bg border border-border text-text-secondary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* WSI Systems */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-border/40">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-8">
            Systems I Work With
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-3">
                Whole-Slide Imaging Pipelines
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                WSI scanners capture pathology images that routinely exceed
                gigapixel resolution. Nothing about them fits in memory, so the
                work is in the pipeline: DICOM ingestion, tiling into pyramid
                levels, and distributing tile workloads across GPUs.
              </p>
              <p className="text-sm text-text-secondary leading-relaxed">
                On top of that sits inference — detection models scoring
                individual tiles, then aggregation back up to slide- and
                region-level results a pathologist can actually read.
              </p>
            </div>

            <div className="font-mono text-xs">
              <div className="bg-bg-secondary border border-border rounded-lg p-4">
                <div className="text-text-secondary mb-3 flex items-center gap-2">
                  <Terminal size={13} />
                  <span>wsi-pipeline.sh</span>
                </div>
                {wsiSteps.map((step, i) => (
                  <div key={i} className="flex items-center gap-2 py-1.5">
                    <span className="text-accent/60 w-5 text-right shrink-0">
                      {i + 1}.
                    </span>
                    <div className="flex items-center gap-2 flex-1">
                      <div className="h-px bg-border flex-1" />
                      <span className="text-text-secondary px-2 py-0.5 rounded border border-border bg-bg-tertiary">
                        {step}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-border/40">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-8">
            Technical Skills
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {skills.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="border border-border rounded-lg p-4 bg-bg-secondary"
              >
                <p className="text-xs font-mono text-accent mb-3">
                  {group.category}
                </p>
                <div className="flex flex-col gap-1.5">
                  {group.items.map((item) => (
                    <span key={item} className="text-xs text-text-secondary">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Education & Credentials */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-border/40">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-8">
            Education &amp; Credentials
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Education */}
            <div className="border border-border rounded-lg bg-bg-secondary p-6">
              <div className="flex items-start gap-3 mb-4">
                <span className="p-2 rounded bg-bg-tertiary border border-border text-accent shrink-0">
                  <GraduationCap size={16} />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-text-primary">
                    B.Tech (Honors), Computer Science &amp; Engineering
                  </h3>
                  <p className="text-sm text-accent font-mono mt-0.5">
                    KL University, Hyderabad{" "}
                    <span className="text-text-secondary">· 2022 — 2026</span>
                  </p>
                </div>
              </div>
              <ul className="space-y-1.5">
                {[
                  "First Class with Distinction — CGPA 8.86 / 10, 202.5 credits. Graduated April 2026",
                  "Specialization in Cyber Security & Blockchain",
                  "Coursework: machine learning, DSA, computer vision & image processing, distributed systems, cryptography & security",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="text-sm text-text-secondary flex items-start gap-2"
                  >
                    <span className="text-accent mt-1 shrink-0">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Certifications */}
            <div className="border border-border rounded-lg bg-bg-secondary p-6">
              <div className="flex items-start gap-3 mb-4">
                <span className="p-2 rounded bg-bg-tertiary border border-border text-accent shrink-0">
                  <Award size={16} />
                </span>
                <h3 className="text-base font-semibold text-text-primary pt-1.5">
                  Certifications
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {certifications.map((cert) => (
                  <span
                    key={cert}
                    className="text-xs font-mono px-2 py-1 rounded bg-bg-tertiary border border-border text-text-secondary"
                  >
                    {cert}
                  </span>
                ))}
              </div>

              <div className="flex items-start gap-3 mb-3 pt-4 border-t border-border/60">
                <span className="p-2 rounded bg-bg-tertiary border border-border text-accent shrink-0">
                  <Network size={16} />
                </span>
                <h3 className="text-base font-semibold text-text-primary pt-1.5">
                  Leadership &amp; Community
                </h3>
              </div>
              <ul className="space-y-1.5">
                {leadership.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-text-secondary flex items-start gap-2"
                  >
                    <span className="text-accent mt-1 shrink-0">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-6 py-8 border-t border-border/40">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-text-secondary">
            <span className="text-accent">~/</span>dinakar · Built with Next.js
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/dinakar0745"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-text-secondary hover:text-text-primary transition-colors"
            >
              <Github size={13} /> GitHub
            </a>
            <Link
              href="/contact"
              className="text-xs text-text-secondary hover:text-text-primary transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
