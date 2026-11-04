import { ArrowButton } from "@/components/ui/ArrowButton";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Reveal } from "@/components/ui/Reveal";
import { homeCopy } from "@/content/copy";

export function AboutPreview() {
  const copy = homeCopy.about;
  return (
    <section className="bg-neutral" aria-labelledby="about-preview-heading">
      <div className="grid lg:grid-cols-2">
        <MediaFrame image="aboutClinic" parallax className="min-h-[22rem] lg:min-h-[40rem]" sizes="(min-width: 1024px) 50vw, 100vw" />
        <div className="flex items-center px-5 py-16 sm:px-10 lg:px-16">
          <Reveal>
            <p className="eyebrow text-brown">{copy.eyebrow}</p>
            <h2 id="about-preview-heading" className="display-md mt-5 max-w-[14ch]">
              {copy.headline}
            </h2>
            <p className="measure mt-6 text-ink-soft">{copy.body}</p>
            <div className="mt-8">
              <ArrowButton href="/about" variant="ink">
                {copy.cta}
              </ArrowButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
