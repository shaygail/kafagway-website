import { Suspense } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { addressLines, clinic, footerNavigation } from "@/content/clinic";
import { CopyrightYear } from "@/components/layout/CopyrightYear";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-paper pb-[var(--booking-bar)] text-ink md:pb-0">
      <div className="shell grid gap-12 py-14 md:grid-cols-12 md:py-16">
        <div className="md:col-span-4">
          <Logo />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-ink-soft">
            Personalised dental care in Baguio City. Appointments are arranged through Facebook, or by calling the clinic.
          </p>
        </div>
        <nav aria-label="Footer" className="md:col-span-3">
          <p className="eyebrow text-brown">Pages</p>
          <ul className="mt-4 space-y-2">
            {footerNavigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-10 items-center">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:col-span-5">
          <p className="eyebrow text-brown">Clinic</p>
          <address className="mt-4 space-y-1 not-italic">
            {addressLines().map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <p className="mt-4">
            <a className="inline-flex min-h-10 items-center" href={`tel:${clinic.phone.tel}`}>
              {clinic.phone.display}
            </a>
          </p>
          <p>
            <a className="inline-flex min-h-10 items-center break-all" href={`mailto:${clinic.email}`}>
              {clinic.email}
            </a>
          </p>
          <div className="mt-5">
            <SocialLinks />
          </div>
        </div>
      </div>
      <div className="shell flex flex-col gap-3 border-t border-ink/10 py-5 text-sm text-brown sm:flex-row sm:items-center sm:justify-between">
        <p>
          ©{" "}
          <Suspense fallback="2026">
            <CopyrightYear />
          </Suspense>{" "}
          {clinic.name}
        </p>
        <Link href="/privacy" className="inline-flex min-h-10 items-center">
          Privacy notice
        </Link>
      </div>
    </footer>
  );
}
