import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

const variants = {
  red: "bg-red text-paper",
  ink: "bg-ink text-paper",
  paper: "bg-paper text-ink",
  ghost: "bg-transparent text-current",
} as const;

type Variant = keyof typeof variants;

function Inner({ children }: { children: React.ReactNode }) {
  return (
    <>
      <span>{children}</span>
      <span
        aria-hidden
        className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-current transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      >
        <ArrowUpRight size={16} strokeWidth={1.5} />
      </span>
    </>
  );
}

const classNameFor = (variant: Variant, className?: string) =>
  cn(
    "group inline-flex min-h-12 items-center gap-4 text-[0.98rem] leading-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red",
    variant === "ghost" ? "py-1" : "py-1.5 pl-5 pr-1.5",
    variants[variant],
    className,
  );

export function ArrowButton({
  href,
  children,
  variant = "ink",
  external = false,
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
}) {
  const classes = cn(classNameFor(variant, className), "relative");
  const native = external || href.startsWith("tel:") || href.startsWith("mailto:");
  if (native) {
    return (
      <a href={href} className={classes} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
        <Inner>{children}</Inner>
        {external ? <span className="sr-only"> (opens in a new tab)</span> : null}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      <Inner>{children}</Inner>
    </Link>
  );
}

export function ArrowSubmit({
  children,
  disabled,
  variant = "red",
}: {
  children: React.ReactNode;
  disabled?: boolean;
  variant?: Variant;
}) {
  return (
    <button type="submit" disabled={disabled} className={cn(classNameFor(variant), "disabled:opacity-60")}>
      <Inner>{children}</Inner>
    </button>
  );
}
