"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { useMenu } from "@/components/layout/MenuContext";

export function BookingBar() {
  const { open } = useMenu();
  const pathname = usePathname();
  const [visible, setVisible] = useState(pathname !== "/");

  useEffect(() => {
    const onScroll = () => {
      setVisible(pathname !== "/" || window.scrollY > 520);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  if (open || !visible) return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-ink/10 bg-paper/95 backdrop-blur-md md:hidden">
      <div className="px-4 pt-2 pb-[max(0.6rem,env(safe-area-inset-bottom))]">
        <Link
          href="/booking"
          className="flex min-h-12 items-center justify-between bg-ink px-4 text-paper"
        >
          <span>Book a Consultation</span>
          <ArrowUpRight size={18} aria-hidden />
        </Link>
      </div>
    </div>
  );
}
