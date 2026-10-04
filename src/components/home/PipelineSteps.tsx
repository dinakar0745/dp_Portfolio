"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const list = {
  hidden: {},
  shown: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const row = { hidden: { opacity: 0 }, shown: { opacity: 1 } };
const rule = {
  hidden: { scaleX: 0 },
  shown: { scaleX: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
};
const chip = {
  hidden: { opacity: 0, x: -8 },
  shown: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.25 } },
};

/** The numbered pipeline listing; each step draws itself in as it scrolls into view. */
export default function PipelineSteps({ steps }: { steps: readonly string[] }) {
  return (
    <div className="font-mono text-xs bg-bg-secondary border border-border rounded-lg p-4">
      <div className="text-text-secondary mb-3 flex items-center gap-2">
        <Terminal size={13} aria-hidden />
        <span>wsi-pipeline.sh</span>
      </div>
      <motion.ol
        variants={list}
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      >
        {steps.map((step, i) => (
          <motion.li
            key={step}
            variants={row}
            className="flex items-center gap-2 py-1.5"
          >
            <span aria-hidden className="text-accent/80 w-5 text-right shrink-0">
              {i + 1}.
            </span>
            <motion.div
              aria-hidden
              variants={rule}
              className="h-px bg-border flex-1 origin-left"
            />
            <motion.span
              variants={chip}
              className="text-text-secondary px-2 py-0.5 rounded border border-border bg-bg-tertiary"
            >
              {step}
            </motion.span>
          </motion.li>
        ))}
      </motion.ol>
    </div>
  );
}
