"use client";

import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";

/**
 * Decorative 3D model of a whole-slide image pyramid: the full-resolution
 * tile grid at the bottom, with each downsampled level floating above it.
 * It leans toward the cursor and the levels spread apart as you scroll.
 * Pure CSS 3D transforms — no canvas or WebGL.
 */

type Level = {
  size: number;
  cells: number;
  /** Tiles drawn as "detections", as [column, row]. */
  lit: [number, number][];
};

const levels: Level[] = [
  { size: 248, cells: 8, lit: [[2, 5], [3, 5], [3, 4], [6, 1]] },
  { size: 176, cells: 4, lit: [[1, 2], [3, 0]] },
  { size: 112, cells: 2, lit: [[0, 1]] },
  { size: 56, cells: 1, lit: [] },
];

const GAP = 46;
const line = "rgba(88, 166, 255, 0.22)";
const spring = { stiffness: 60, damping: 18, mass: 0.8 };

function Plane({
  level,
  index,
  spread,
}: {
  level: Level;
  index: number;
  spread: MotionValue<number>;
}) {
  const z = useTransform(spread, (s) => index * GAP * s);
  const cell = level.size / level.cells;

  return (
    <motion.div
      className="absolute rounded-sm border border-accent/40 bg-bg-secondary/85"
      style={{
        width: level.size,
        height: level.size,
        z,
        backgroundImage: `linear-gradient(to right, ${line} 1px, transparent 1px), linear-gradient(to bottom, ${line} 1px, transparent 1px)`,
        backgroundSize: `${cell}px ${cell}px`,
        boxShadow: "0 0 24px rgba(88, 166, 255, 0.08)",
      }}
    >
      {level.lit.map(([col, row], i) => (
        <span
          key={`${col}-${row}`}
          className="absolute bg-accent/50 motion-safe:animate-pulse"
          style={{
            left: col * cell + 1,
            top: row * cell + 1,
            width: cell - 1,
            height: cell - 1,
            animationDelay: `${(index + i) * 0.4}s`,
          }}
        />
      ))}
    </motion.div>
  );
}

export default function SlidePyramid() {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const sx = useSpring(pointerX, spring);
  const sy = useSpring(pointerY, spring);

  const rotateX = useTransform(sy, [-1, 1], [62, 52]);
  const rotateZ = useTransform(sx, [-1, 1], [-46, -30]);

  const { scrollY } = useScroll();
  const spread = useSpring(useTransform(scrollY, [0, 500], [1, 1.7]), {
    stiffness: 120,
    damping: 26,
  });

  useEffect(() => {
    if (reduceMotion) return;
    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      pointerX.set((event.clientX / window.innerWidth) * 2 - 1);
      pointerY.set((event.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduceMotion, pointerX, pointerY]);

  return (
    <motion.div
      aria-hidden
      className="relative hidden lg:block h-[340px] w-[340px] shrink-0 [perspective:1100px]"
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
    >
      <motion.div
        className="absolute inset-0"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          className="absolute inset-0 flex items-center justify-center [transform-style:preserve-3d]"
          style={{ rotateX, rotateZ, y: 40 }}
        >
          {levels.map((level, index) => (
            <Plane key={level.size} level={level} index={index} spread={spread} />
          ))}
        </motion.div>
      </motion.div>
      <p className="absolute bottom-0 left-0 right-0 text-center font-mono text-[10px] tracking-widest uppercase text-text-secondary/70">
        slide pyramid · 40× → thumbnail
      </p>
    </motion.div>
  );
}
