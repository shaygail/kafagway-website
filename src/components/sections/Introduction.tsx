import { Reveal } from "@/components/ui/Reveal";
import { homeCopy } from "@/content/copy";

export function Introduction() {
  const copy = homeCopy.introduction;
  return (
    <section className="bg-paper py-[clamp(4.5rem,11vw,9rem)]" aria-labelledby="intro-heading">
      <div className="shell grid items-end gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-8">
          <p className="eyebrow text-brown">{copy.eyebrow}</p>
          <h2 id="intro-heading" className="display-md mt-5 max-w-[14ch]">
            {copy.headline}
          </h2>
        </Reveal>
        <Reveal className="lg:col-span-4" delay={0.08}>
          <p className="text-ink-soft">{copy.body}</p>
        </Reveal>
      </div>
    </section>
  );
}
