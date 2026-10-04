"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Thin reading-progress line along the bottom edge of the navbar. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      className="absolute bottom-0 left-0 right-0 h-px origin-left bg-accent"
      style={{ scaleX }}
    />
  );
}
