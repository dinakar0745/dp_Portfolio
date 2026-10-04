"use client";

import { motion } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Seconds to wait before animating. */
  delay?: number;
  /** "mount" animates as soon as the page loads; "view" waits until scrolled into view. */
  when?: "mount" | "view";
  /** Adds a slight tilt-up-from-the-page effect on top of the fade. */
  depth?: boolean;
};

/** Fade-and-rise entrance used across the site. */
export default function Reveal({
  children,
  className,
  delay = 0,
  when = "view",
  depth = false,
}: RevealProps) {
  const hidden = depth
    ? { opacity: 0, y: 20, rotateX: 8 }
    : { opacity: 0, y: 16 };
  const shown = depth ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 1, y: 0 };
  const transition = { duration: 0.5, delay, ease: "easeOut" as const };
  const style = depth
    ? { transformPerspective: 900, transformOrigin: "50% 100%" }
    : undefined;

  if (when === "mount") {
    return (
      <motion.div
        className={className}
        style={style}
        initial={hidden}
        animate={shown}
        transition={transition}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      style={style}
      initial={hidden}
      whileInView={shown}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
