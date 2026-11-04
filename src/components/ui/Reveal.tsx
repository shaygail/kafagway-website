"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";

const shift = {
  up: { y: 56 },
  down: { y: -40 },
  left: { x: -48 },
  right: { x: 48 },
} as const;

export function Reveal({
  children,
  className,
  delay = 0,
  from = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  from?: keyof typeof shift;
}) {
  const reduce = useReducedMotion();
  if (reduce) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...shift[from] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export function Rule({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  if (reduce) {
    return <span className={cn("mt-8 block h-px w-24 bg-red", className)} />;
  }
  return (
    <motion.span
      aria-hidden
      className={cn("mt-8 block h-px w-24 origin-left bg-red", className)}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}
