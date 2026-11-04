import Image from "next/image";
import Link from "next/link";
import { assets } from "@/content/assets";
import { clinic } from "@/content/clinic";
import { cn } from "@/lib/cn";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link
      href="/"
      aria-label={`${clinic.name}, home`}
      className={cn("inline-flex items-center gap-3", inverse ? "text-paper" : "text-ink")}
    >
      <Image
        src={assets.logo.src}
        alt=""
        width={36}
        height={36}
        unoptimized
        className={cn("h-9 w-9", inverse && "invert")}
      />
      <span className="leading-none">
        <span className="block font-display text-[0.95rem] tracking-[0.16em]">KAFAGWAY</span>
        <span className="mt-1 block text-[0.62rem] font-semibold tracking-[0.22em] uppercase">Dental Center</span>
      </span>
    </Link>
  );
}
