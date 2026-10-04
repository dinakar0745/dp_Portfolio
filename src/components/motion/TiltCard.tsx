"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

type TiltCardProps = {
  children: React.ReactNode;
  className?: string;
  /** Maximum tilt in degrees. */
  max?: number;
};

const spring = { stiffness: 220, damping: 22, mass: 0.6 };

/**
 * Tilts its content in 3D toward the cursor and adds a soft highlight that
 * follows it. Mouse only: touch, keyboard and reduced-motion users get a
 * plain, static card.
 */
export default function TiltCard({
  children,
  className = "",
  max = 5,
}: TiltCardProps) {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const active = useMotionValue(0);

  const sx = useSpring(x, spring);
  const sy = useSpring(y, spring);
  const rotateX = useTransform(sy, [0, 1], [max, -max]);
  const rotateY = useTransform(sx, [0, 1], [-max, max]);
  const glareX = useTransform(sx, (v) => `${v * 100}%`);
  const glareY = useTransform(sy, (v) => `${v * 100}%`);
  const glareOpacity = useSpring(active, { stiffness: 180, damping: 24 });
  const glare = useMotionTemplate`radial-gradient(280px circle at ${glareX} ${glareY}, rgba(88, 166, 255, 0.13), transparent 65%)`;

  function handleMove(event: React.PointerEvent<HTMLDivElement>) {
    if (reduceMotion || event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width);
    y.set((event.clientY - rect.top) / rect.height);
    active.set(1);
  }

  function handleLeave() {
    x.set(0.5);
    y.set(0.5);
    active.set(0);
  }

  return (
    <div
      className={`[perspective:900px] ${className}`}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      <motion.div
        className="relative h-full [transform-style:preserve-3d]"
        style={{ rotateX, rotateY }}
      >
        {children}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-lg"
          style={{ background: glare, opacity: glareOpacity }}
        />
      </motion.div>
    </div>
  );
}
