import { ArrowButton } from "@/components/ui/ArrowButton";
import { Reveal } from "@/components/ui/Reveal";
import { homeCopy } from "@/content/copy";

export function ClosingCta() {
  const copy = homeCopy.closing;
  return (
    <section className="bg-ink py-[clamp(5rem,12vw,10rem)] text-paper" aria-labelledby="closing-heading">
      <div className="shell">
        <Reveal>
          <p className="eyebrow text-red">{copy.eyebrow}</p>
          <h2 id="closing-heading" className="display mt-6 max-w-[12ch]">
            {copy.headline}
          </h2>
          <p className="measure mt-6 text-paper-soft">{copy.body}</p>
          <div className="mt-10">
            <ArrowButton href="/booking" variant="red">
              {copy.cta}
            </ArrowButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
