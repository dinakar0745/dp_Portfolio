"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Cloud, Database, Cpu, Server } from "lucide-react";

const projects = [
  {
    slug: "sagemaker",
    title: "Serverless ML Deployment using AWS SageMaker",
    subtitle: "AWS SageMaker · Serverless Inference",
    description:
      "Designed a scalable architecture for deploying machine learning models using AWS SageMaker with serverless inference endpoints and automated scaling.",
    tags: ["AWS", "SageMaker", "Python", "MLOps", "Serverless"],
    icon: <Cloud size={20} />,
    focus: ["ML deployment pipeline", "Serverless inference", "Cloud infrastructure"],
  },
  {
    slug: "fraud-detection",
    title: "Fraud Detection System",
    subtitle: "ML Pipeline · Anomaly Detection",
    description:
      "Built a machine learning pipeline for detecting fraudulent financial transactions using anomaly detection and feature engineering techniques.",
    tags: ["Python", "scikit-learn", "FastAPI", "PostgreSQL", "Pandas"],
    icon: <Database size={20} />,
    focus: ["Data preprocessing", "Feature engineering", "ML model training", "Fraud API"],
  },
  {
    slug: "aiforge",
    title: "AIForge",
    subtitle: "AI Model Marketplace",
    description:
      "An open platform for sharing, downloading, and running AI agents and machine learning models locally. Designed as a marketplace for AI tools.",
    tags: ["Django", "React", "Vite", "Docker", "REST API"],
    icon: <Cpu size={20} />,
    focus: ["Model hosting", "Frontend marketplace", "Local execution", "Developer tooling"],
  },
  {
    slug: "aws-webserver",
    title: "Automated Web Server Deployment on AWS",
    subtitle: "Infrastructure as Code · EC2",
    description:
      "Developed an automated infrastructure setup for deploying web servers on AWS EC2 with secure VPC architecture and scalable configuration.",
    tags: ["AWS", "EC2", "VPC", "Bash", "Infrastructure"],
    icon: <Server size={20} />,
    focus: ["Infrastructure automation", "Secure networking", "Cloud deployment"],
  },
];

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
          A collection of systems and tools I&apos;ve built — spanning ML infrastructure,
          cloud deployment, and developer tooling.
        </p>
      </motion.div>

      <div className="space-y-4">
        {projects.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
          >
            <Link href={`/projects/${project.slug}`}>
              <div className="group border border-border rounded-lg p-6 bg-bg-secondary hover:border-accent/40 hover:bg-bg-tertiary transition-all cursor-pointer">
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
                    </div>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-text-secondary group-hover:text-accent transition-colors shrink-0 mt-1"
                  />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
