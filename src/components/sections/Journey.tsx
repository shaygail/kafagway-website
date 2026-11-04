import { MediaFrame } from "@/components/ui/MediaFrame";
import { Reveal } from "@/components/ui/Reveal";
import { homeCopy } from "@/content/copy";

export function Journey() {
  const copy = homeCopy.journey;
  return (
    <section className="bg-paper py-[clamp(4.5rem,11vw,9rem)]" aria-labelledby="journey-heading">
      <div className="shell grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow text-brown">{copy.eyebrow}</p>
            <h2 id="journey-heading" className="display-md mt-5 max-w-[12ch]">
              {copy.headline}
            </h2>
            <p className="mt-5 max-w-sm text-sm text-brown">{copy.note}</p>
          </Reveal>
          <MediaFrame
            image="patientExperience"
            className="mt-8 aspect-[5/4] max-lg:hidden"
            sizes="36vw"
          />
        </div>
        <ol className="lg:col-span-7 lg:pt-16">
          {copy.steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.05}>
              <li className="grid grid-cols-[auto_1fr] gap-6 border-t border-ink/15 py-8">
                <span className="font-display text-3xl text-brown">{step.number}</span>
                <div>
                  <h3 className="font-display text-3xl tracking-[-0.03em]">{step.title}</h3>
                  <p className="mt-3 max-w-lg text-ink-soft">{step.body}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
