"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { assets, type AssetKey } from "@/content/assets";
import { cn } from "@/lib/cn";

function StillImage({
  image,
  priority,
  sizes,
}: {
  image: AssetKey;
  priority: boolean;
  sizes: string;
}) {
  const asset = assets[image];
  return (
    <Image src={asset.src} alt={asset.alt} fill priority={priority} sizes={sizes} className="object-cover" />
  );
}

function ParallaxImage({
  image,
  priority,
  sizes,
  entrance,
}: {
  image: AssetKey;
  priority: boolean;
  sizes: string;
  entrance: boolean;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  if (reduce) {
    return (
      <div ref={ref} className="absolute inset-0">
        <StillImage image={image} priority={priority} sizes={sizes} />
      </div>
    );
  }
  return (
    <div ref={ref} className="absolute inset-0">
      <motion.div
        style={{ y }}
        className="absolute inset-[-12%]"
        initial={entrance ? { scale: 1.08, opacity: 0 } : false}
        whileInView={entrance ? { scale: 1, opacity: 1 } : undefined}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
      >
        <StillImage image={image} priority={priority} sizes={sizes} />
      </motion.div>
    </div>
  );
}

function RevealedImage({
  image,
  priority,
  sizes,
}: {
  image: AssetKey;
  priority: boolean;
  sizes: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) {
    return (
      <div className="absolute inset-0">
        <StillImage image={image} priority={priority} sizes={sizes} />
      </div>
    );
  }
  return (
    <motion.div
      className="absolute inset-0"
      initial={{ scale: 1.14, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.28 }}
      transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
    >
      <StillImage image={image} priority={priority} sizes={sizes} />
    </motion.div>
  );
}

export function MediaFrame({
  image,
  className,
  priority = false,
  sizes = "(min-width: 1024px) 46vw, 100vw",
  parallax = false,
  label = true,
  fill = false,
  entrance = true,
}: {
  image: AssetKey;
  className?: string;
  priority?: boolean;
  sizes?: string;
  parallax?: boolean;
  label?: boolean;
  fill?: boolean;
  /** Fade and scale as the frame enters. Off for the first-screen hero, which only drifts. */
  entrance?: boolean;
}) {
  const asset = assets[image];
  return (
    <figure
      className={cn(
        "overflow-hidden bg-neutral",
        fill ? "absolute" : "relative w-full",
        className,
      )}
    >
      {parallax ? (
        <ParallaxImage image={image} priority={priority} sizes={sizes} entrance={entrance} />
      ) : entrance ? (
        <RevealedImage image={image} priority={priority} sizes={sizes} />
      ) : (
        <StillImage image={image} priority={priority} sizes={sizes} />
      )}
      {label && asset.placeholder ? (
        <figcaption className="pointer-events-none absolute bottom-3 left-3 z-10 max-w-[16rem] text-[0.68rem] font-semibold tracking-[0.18em] text-paper uppercase [text-shadow:0_1px_10px_rgba(0,0,0,0.55)]">
          Photograph to follow
        </figcaption>
      ) : null}
    </figure>
  );
}
