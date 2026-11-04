import { Reveal } from "@/components/ui/Reveal";
import { homeCopy } from "@/content/copy";

export function WhyChoose() {
  const copy = homeCopy.why;
  return (
    <section className="bg-paper py-[clamp(4.5rem,11vw,9rem)]" aria-labelledby="why-heading">
      <div className="shell">
        <Reveal>
          <p className="eyebrow text-brown">{copy.eyebrow}</p>
          <h2 id="why-heading" className="display-md mt-5 max-w-[16ch]">
            {copy.headline}
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-px bg-ink/10 md:grid-cols-3">
          {copy.pillars.map((pillar, index) => (
            <Reveal key={pillar.number} delay={index * 0.06} className="bg-paper">
              <article className="group h-full px-0 py-8 md:px-8 md:py-10">
                <p className="font-display text-6xl tracking-[-0.05em] text-brown md:text-7xl">{pillar.number}</p>
                <h3 className="mt-6 max-w-[12ch] font-display text-3xl tracking-[-0.03em]">
                  <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0_1px] bg-bottom-left bg-no-repeat transition-[background-size] duration-300 group-hover:bg-[length:100%_1px]">
                    {pillar.title}
                  </span>
                </h3>
                <p className="mt-4 max-w-sm text-ink-soft">{pillar.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
