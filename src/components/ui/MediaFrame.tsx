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
}: {
  image: AssetKey;
  priority: boolean;
  sizes: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);
  if (reduce) {
    return (
      <div ref={ref} className="absolute inset-0">
        <StillImage image={image} priority={priority} sizes={sizes} />
      </div>
    );
  }
  return (
    <div ref={ref} className="absolute inset-0">
      <motion.div style={{ y }} className="absolute inset-[-8%]">
        <StillImage image={image} priority={priority} sizes={sizes} />
      </motion.div>
    </div>
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
}: {
  image: AssetKey;
  className?: string;
  priority?: boolean;
  sizes?: string;
  parallax?: boolean;
  label?: boolean;
  fill?: boolean;
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
        <ParallaxImage image={image} priority={priority} sizes={sizes} />
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
