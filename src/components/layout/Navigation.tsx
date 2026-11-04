"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/content/clinic";
import { cn } from "@/lib/cn";

export function Navigation({
  tone = "ink",
  onNavigate,
  className,
  orientation = "horizontal",
}: {
  tone?: "ink" | "paper";
  onNavigate?: () => void;
  className?: string;
  orientation?: "horizontal" | "vertical";
}) {
  const pathname = usePathname();
  return (
    <ul
      className={cn(
        orientation === "horizontal" ? "flex items-center gap-7" : "flex flex-col gap-2",
        className,
      )}
    >
      {navigation.map((item) => {
        const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={active ? "page" : undefined}
              onClick={onNavigate}
              className={cn(
                "inline-flex min-h-11 items-center text-[0.95rem]",
                orientation === "vertical" && "display-md",
                tone === "paper" ? "text-paper" : "text-ink",
                active && "underline decoration-red decoration-2 underline-offset-8",
              )}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
