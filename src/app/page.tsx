"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRight,
  Github,
  Download,
  Server,
  Cloud,
  Cpu,
  GitBranch,
  Database,
  Terminal,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

const projects = [
  {
    slug: "sagemaker",
    title: "Serverless ML Deployment",
    subtitle: "AWS SageMaker",
    description:
      "Scalable architecture for deploying ML models using SageMaker with serverless inference endpoints and automated scaling.",
    tags: ["AWS", "SageMaker", "Python", "MLOps"],
    icon: <Cloud size={18} />,
  },
  {
    slug: "fraud-detection",
    title: "Fraud Detection System",
    subtitle: "ML Pipeline",
    description:
      "End-to-end ML pipeline for detecting fraudulent transactions using anomaly detection and feature engineering.",
    tags: ["Python", "scikit-learn", "FastAPI", "PostgreSQL"],
    icon: <Database size={18} />,
  },
  {
    slug: "aiforge",
    title: "AIForge",
    subtitle: "AI Model Marketplace",
    description:
      "Open platform for sharing, downloading, and running AI agents and ML models locally. Developer-first model marketplace.",
    tags: ["Django", "React", "Vite", "Docker"],
    icon: <Cpu size={18} />,
  },
  {
    slug: "aws-webserver",
    title: "Automated AWS Deployment",
    subtitle: "Infrastructure as Code",
    description:
      "Automated infrastructure setup for deploying web servers on EC2 with secure VPC architecture and scalable config.",
    tags: ["AWS", "EC2", "VPC", "Bash"],
    icon: <Server size={18} />,
  },
];

const skills = [
  { category: "Languages", items: ["Python", "JavaScript", "C++"] },
  { category: "Backend", items: ["Django", "REST APIs", "Microservices"] },
  {
    category: "Systems",
    items: ["Linux", "RabbitMQ", "Distributed Systems"],
  },
  { category: "Cloud", items: ["AWS", "EC2", "SageMaker"] },
  { category: "AI/ML", items: ["TensorFlow", "ML Pipelines", "Model Deploy"] },
];

const wsiSteps = [
  "Scanner acquisition",
  "High-speed data transfer",
  "Image stitching",
  "Preprocessing",
  "Algorithm analysis",
  "Storage & retrieval",
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-36 pb-24">
        <motion.div
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Status badge */}
          <motion.div custom={0} variants={fadeUp} className="mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-xs font-mono text-text-secondary bg-bg-secondary">
              <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
              Currently @ Evident Microscopy · Whole Slide Imaging Systems
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
            Backend &amp; Systems Engineer
          </motion.p>

          {/* Subtitle */}
          <motion.p
            custom={3}
            variants={fadeUp}
            className="text-base text-text-secondary leading-relaxed mb-4 max-w-2xl"
          >
            Building large-scale imaging pipelines and AI infrastructure.
          </motion.p>

          {/* Description */}
          <motion.p
            custom={4}
            variants={fadeUp}
            className="text-sm text-text-secondary leading-relaxed mb-10 max-w-2xl"
          >
            I build production systems that process large-scale microscopy data
            and power automated medical image analysis. Currently working on
            Whole Slide Imaging pipelines integrating detection algorithms for
            cancer and cellular analysis.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            custom={5}
            variants={fadeUp}
            className="flex flex-wrap gap-3"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-bg text-sm font-medium rounded hover:bg-accent/90 transition-colors"
            >
              View Projects <ArrowUpRight size={15} />
            </Link>
            <a
              href="/utils/DinakarPathakota_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 border border-border text-sm text-text-secondary hover:text-text-primary hover:border-accent/50 rounded transition-colors"
            >
              <Download size={15} /> Download Resume
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

      {/* Experience */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-8">
            Experience
          </h2>

          <div className="border border-border rounded-lg bg-bg-secondary p-6 hover:border-accent/30 transition-colors">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
              <div>
                <h3 className="text-base font-semibold text-text-primary">
                  Software Engineering Intern
                </h3>
                <p className="text-sm text-accent font-mono mt-0.5">
                  Evident Microscopy{" "}
                  <span className="text-text-secondary">(formerly Pramana.ai)</span>
                </p>
              </div>
              <span className="text-xs font-mono text-text-secondary border border-border rounded px-2 py-1 self-start">
                Present
              </span>
            </div>

            <ul className="space-y-1.5 mb-5">
              {[
                "Develop and maintain backend pipelines for Whole Slide Imaging (WSI) systems",
                "Process gigapixel microscopy images used in pathology workflows",
                "Integrate detection algorithms for identifying cancer cells, bone marrow cells, and pathological features",
                "Build backend services for image processing, data transfer, and pipeline orchestration",
                "Work with high-throughput imaging hardware and automated diagnostic workflows",
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

            <div className="flex flex-wrap gap-2">
              {["Python", "RabbitMQ", "Linux", "Distributed Systems", "Image Processing"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2 py-0.5 rounded bg-bg-tertiary border border-border text-text-secondary"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
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
              Featured Projects
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
                Whole Slide Imaging Pipelines
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                WSI scanners capture extremely large pathology images that can exceed
                gigapixel resolution. Processing these images requires specialized
                pipelines with multiple stages operating at scale.
              </p>
              <p className="text-sm text-text-secondary leading-relaxed">
                These pipelines support automated medical diagnostics and large-scale
                image analysis including cancer cell detection and cellular marker
                identification.
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
            Skills
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
