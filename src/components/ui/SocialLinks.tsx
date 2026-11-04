import { clinic } from "@/content/clinic";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden className="fill-current">
      <path d="M14.5 8.5V6.8c0-.7.5-1 1.2-1H17V3h-2.1C12.4 3 11 4.4 11 6.6v1.9H9v2.7h2V21h3.5v-9.8h2.3l.4-2.7h-2.7z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden className="fill-none stroke-current">
      <rect x="4" y="4" width="16" height="16" rx="4" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="3.4" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function SocialLinks({ tone = "ink" }: { tone?: "ink" | "paper" }) {
  const className =
    tone === "paper"
      ? "inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-paper"
      : "inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 text-ink";
  return (
    <div className="flex gap-3">
      <a href={clinic.facebook.url} className={className} target="_blank" rel="noopener noreferrer">
        <FacebookIcon />
        <span className="sr-only">Facebook (opens in a new tab)</span>
      </a>
      <a href={clinic.instagram.url} className={className} target="_blank" rel="noopener noreferrer">
        <InstagramIcon />
        <span className="sr-only">Instagram (opens in a new tab)</span>
      </a>
    </div>
  );
}
