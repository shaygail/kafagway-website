"use client";

import { usePathname } from "next/navigation";

export function HeaderSpacer() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return <div className="h-[var(--header)]" aria-hidden />;
}
