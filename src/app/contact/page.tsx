"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Terminal } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen max-w-5xl mx-auto px-6 pt-28 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h1 className="text-3xl font-bold text-text-primary mb-3">Contact</h1>
        <p className="text-sm text-text-secondary max-w-xl">
          Open to new opportunities, collaborations, and interesting engineering
          conversations.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
        {/* Contact links */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="space-y-3"
        >
          <a
            href="mailto:dinakar.pathakota@gmail.com"
            className="group flex items-center gap-4 p-4 border border-border rounded-lg bg-bg-secondary hover:border-accent/40 hover:bg-bg-tertiary transition-all"
          >
            <div className="p-2 rounded bg-bg-tertiary border border-border text-accent group-hover:border-accent/40 transition-colors">
              <Mail size={16} />
            </div>
            <div>
              <p className="text-xs text-text-secondary mb-0.5">Email</p>
              <p className="text-sm font-mono text-text-primary group-hover:text-accent transition-colors">
                dinakar.pathakota@gmail.com
              </p>
            </div>
          </a>

          <a
            href="https://github.com/dinakar0745"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-4 border border-border rounded-lg bg-bg-secondary hover:border-accent/40 hover:bg-bg-tertiary transition-all"
          >
            <div className="p-2 rounded bg-bg-tertiary border border-border text-accent group-hover:border-accent/40 transition-colors">
              <Github size={16} />
            </div>
            <div>
              <p className="text-xs text-text-secondary mb-0.5">GitHub</p>
              <p className="text-sm font-mono text-text-primary group-hover:text-accent transition-colors">
                github.com/dinakar0745
              </p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/dinakar-pathakota-32a823251/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-4 border border-border rounded-lg bg-bg-secondary hover:border-accent/40 hover:bg-bg-tertiary transition-all"
          >
            <div className="p-2 rounded bg-bg-tertiary border border-border text-accent group-hover:border-accent/40 transition-colors">
              <Linkedin size={16} />
            </div>
            <div>
              <p className="text-xs text-text-secondary mb-0.5">LinkedIn</p>
              <p className="text-sm font-mono text-text-primary group-hover:text-accent transition-colors">
                linkedin.com/in/dinakar-pathakota-32a823251/
              </p>
            </div>
          </a>
        </motion.div>

        {/* Terminal card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="border border-border rounded-lg bg-bg-secondary overflow-hidden h-full">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-bg-tertiary">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              </div>
              <span className="text-xs font-mono text-text-secondary ml-2 flex items-center gap-1.5">
                <Terminal size={11} /> dinakar — bash
              </span>
            </div>
            <div className="p-4 font-mono text-xs space-y-2">
              <div className="flex gap-2">
                <span className="text-accent shrink-0">$</span>
                <span className="text-text-secondary">whoami</span>
              </div>
              <p className="text-text-primary pl-4">dinakar pathakota</p>

              <div className="flex gap-2 mt-3">
                <span className="text-accent shrink-0">$</span>
                <span className="text-text-secondary">cat interests.txt</span>
              </div>
              <div className="pl-4 space-y-0.5 text-text-secondary">
                <p>- Large-scale imaging pipelines</p>
                <p>- Distributed systems</p>
                <p>- Cloud infrastructure</p>
                <p>- AI/ML systems</p>
              </div>

              <div className="flex gap-2 mt-3">
                <span className="text-accent shrink-0">$</span>
                <span className="text-text-secondary">echo $AVAILABILITY</span>
              </div>
              <p className="text-success pl-4">open to opportunities</p>

              <div className="flex gap-2 mt-3">
                <span className="text-accent shrink-0">$</span>
                <span className="text-text-secondary animate-pulse">▌</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
