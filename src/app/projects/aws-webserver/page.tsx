"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Github } from "lucide-react";

const architecture = `
# AWS Web Server Deployment Architecture

┌──────────────────────────────────────────────────┐
│                    VPC (10.0.0.0/16)             │
│                                                  │
│  ┌────────────────┐    ┌─────────────────────┐  │
│  │  Public Subnet │    │  Private Subnet     │  │
│  │  10.0.1.0/24  │    │  10.0.2.0/24        │  │
│  │                │    │                     │  │
│  │  Internet GW  │    │  App Servers        │  │
│  │  Bastion Host │    │  RDS (optional)     │  │
│  │  Load Balancer│    │                     │  │
│  └───────┬────────┘    └──────────┬──────────┘  │
│          │                        │              │
│          └────────────────────────┘              │
└──────────────────────────────────────────────────┘
            │
            ▼
  ┌─────────────────┐
  │  Security Groups │
  │                 │
  │  SSH: 22 (Bastion only)
  │  HTTP: 80 (ALB)
  │  HTTPS: 443 (ALB)
  │  App: 8080 (internal)
  └─────────────────┘
            │
            ▼
  ┌─────────────────┐
  │  EC2 Instances  │
  │                 │
  │  User Data script → nginx install
  │  Auto-configure → app deploy
  └─────────────────┘
`;

export default function AWSWebserverPage() {
  return (
    <div className="min-h-screen max-w-4xl mx-auto px-6 pt-28 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/projects"
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary mb-8 transition-colors">
          <ArrowLeft size={14} /> Back to projects
        </Link>

        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {["AWS", "EC2", "VPC", "Bash", "Infrastructure"].map((tag) => (
              <span key={tag} className="text-xs font-mono px-2 py-0.5 rounded bg-bg-secondary border border-border text-text-secondary">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl font-bold text-text-primary mb-3">
            Automated Web Server Deployment on AWS
          </h1>
          <p className="text-base text-text-secondary leading-relaxed max-w-2xl">
            Automated infrastructure setup for deploying web servers on AWS EC2
            with secure VPC architecture and scalable configuration.
          </p>
        </div>

        <div className="space-y-10">
          <section>
            <h2 className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-4">Problem</h2>
            <div className="border border-border rounded-lg p-5 bg-bg-secondary">
              <p className="text-sm text-text-secondary leading-relaxed">
                Manual AWS infrastructure setup is error-prone, inconsistent, and not
                reproducible. Developers often click through the console to set up VPCs,
                subnets, security groups, and EC2 instances — producing environments that
                can&apos;t be reliably recreated or version-controlled.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-4">Solution</h2>
            <div className="border border-border rounded-lg p-5 bg-bg-secondary">
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                Scripted the complete infrastructure provisioning using the AWS CLI and
                Bash, creating a fully automated, repeatable deployment pipeline:
              </p>
              <ul className="space-y-2">
                {[
                  "VPC creation with public/private subnet segmentation",
                  "Internet Gateway and route table configuration",
                  "Security group rules following least-privilege principle",
                  "EC2 launch with user-data scripts for nginx/app setup",
                  "Bastion host configuration for secure SSH access",
                  "Optional Auto Scaling Group integration",
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
            <h2 className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-4">Architecture</h2>
            <pre className="text-xs leading-relaxed overflow-x-auto">{architecture}</pre>
          </section>

          <section>
            <h2 className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-4">Tech Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { name: "AWS CLI", desc: "Infrastructure provisioning" },
                { name: "EC2", desc: "Compute instances" },
                { name: "VPC", desc: "Network isolation" },
                { name: "Bash", desc: "Automation scripts" },
                { name: "nginx", desc: "Web server" },
                { name: "IAM", desc: "Roles & permissions" },
              ].map((item) => (
                <div key={item.name} className="border border-border rounded p-3 bg-bg-secondary">
                  <p className="text-xs font-mono text-accent mb-1">{item.name}</p>
                  <p className="text-xs text-text-secondary">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-4">Challenges</h2>
            <div className="space-y-3">
              {[
                { title: "Idempotency", desc: "Scripts needed to be safe to re-run. Implemented checks for existing resources before creation to avoid duplicates." },
                { title: "Security Group Ordering", desc: "AWS security groups have dependency constraints. Solved by ordering creation and using references rather than hardcoded IDs." },
                { title: "User Data Debugging", desc: "EC2 user-data scripts fail silently. Integrated CloudWatch log streaming for bootstrap script output." },
              ].map((item) => (
                <div key={item.title} className="border border-border rounded-lg p-4 bg-bg-secondary">
                  <p className="text-sm font-medium text-text-primary mb-1.5">{item.title}</p>
                  <p className="text-sm text-text-secondary">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="flex gap-3">
            <a href="https://github.com/dinakar0745" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded text-sm text-text-secondary hover:text-text-primary hover:border-accent/40 transition-colors">
              <Github size={15} /> View on GitHub
            </a>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
