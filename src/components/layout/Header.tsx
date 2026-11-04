"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Logo } from "@/components/ui/Logo";
import { ArrowButton } from "@/components/ui/ArrowButton";
import { Navigation } from "@/components/layout/Navigation";
import { useMenu } from "@/components/layout/MenuContext";
import { clinic } from "@/content/clinic";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const { open, setOpen } = useMenu();
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    setOpen(false);
  }, [pathname, setOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, setOpen]);

  const overlay = pathname === "/" && !scrolled && !open;

  return (
    <>
    <header
      className={cn(
        "fixed z-40",
        overlay
          ? "top-[var(--frame)] right-[var(--frame)] left-[var(--frame)] text-paper"
          : "inset-x-0 top-0 border-b border-ink/10 bg-paper/92 text-ink backdrop-blur-md",
      )}
    >
      <div className="flex h-[var(--header)] items-center justify-between gap-4 px-4 md:px-8">
        <Logo inverse={overlay} />
        <nav aria-label="Primary" className="hidden lg:block">
          <Navigation tone={overlay ? "paper" : "ink"} />
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden lg:block">
            <ArrowButton href="/booking" variant={overlay ? "ghost" : "ink"}>
              Book
            </ArrowButton>
          </div>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X aria-hidden /> : <Menu aria-hidden />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>
      </header>
      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile"
            className="fixed inset-0 z-50 flex flex-col bg-paper px-6 pt-[max(1.25rem,env(safe-area-inset-top))] text-ink"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex items-center justify-between">
              <Logo />
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center"
                onClick={() => setOpen(false)}
              >
                <X aria-hidden />
                <span className="sr-only">Close menu</span>
              </button>
            </div>
            <div className="flex flex-1 flex-col justify-between py-10">
              <Navigation orientation="vertical" onNavigate={() => setOpen(false)} />
              <div className="space-y-5 border-t border-ink/10 pt-6">
                <ArrowButton href="/booking" variant="red" className="w-full justify-between">
                  Book a Consultation
                </ArrowButton>
                <a className="block text-lg" href={`tel:${clinic.phone.tel}`}>
                  {clinic.phone.display}
                </a>
              </div>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </>
  );
}
