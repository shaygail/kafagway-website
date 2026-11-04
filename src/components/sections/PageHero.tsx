import { Reveal, Rule } from "@/components/ui/Reveal";

export function PageHero({
  eyebrow,
  title,
  lede,
  id,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  id: string;
}) {
  return (
    <header className="border-b border-ink/10 pt-10 pb-12 sm:pt-16 sm:pb-16">
      <div className="shell">
        <Reveal>
          <p className="eyebrow text-brown">{eyebrow}</p>
          <h1 id={id} className="display mt-5 max-w-[14ch]">
            {title}
          </h1>
          {lede ? <p className="measure mt-6 text-lg text-ink-soft">{lede}</p> : null}
          <Rule />
        </Reveal>
      </div>
    </header>
  );
}
