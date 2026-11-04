import { ArrowButton } from "@/components/ui/ArrowButton";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Reveal } from "@/components/ui/Reveal";
import { clinic } from "@/content/clinic";
import { homeCopy } from "@/content/copy";

export function Hero() {
  const copy = homeCopy.hero;
  return (
    <section className="bg-ink text-paper" aria-labelledby="hero-heading">
      <div className="p-[var(--frame)]">
        <div className="flex min-h-[calc(100svh-2*var(--frame))] flex-col border border-white/25">
          <div className="grid flex-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
            <div className="relative order-1 min-h-[34svh] pt-[var(--header)] lg:order-2 lg:min-h-full lg:pt-0">
              <MediaFrame
                image="heroDental"
                priority
                parallax
                fill
                className="media-zoom top-3 right-3 bottom-3 left-3 border border-white/35 sm:top-4 sm:right-4 sm:bottom-4 sm:left-4 lg:top-24 lg:right-8 lg:bottom-8 lg:left-8"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
            <div className="order-2 flex flex-col justify-end px-5 pt-6 pb-6 sm:px-8 lg:order-1 lg:px-12 lg:pt-28 lg:pb-10">
              <Reveal>
                <p className="eyebrow text-paper-soft">{copy.eyebrow}</p>
                <h1 id="hero-heading" className="display mt-4 max-w-[11ch]">
                  {copy.headline}
                </h1>
                <p className="measure mt-5 text-base text-paper-soft sm:text-lg">{copy.supporting}</p>
                <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
                  <ArrowButton href="/booking" variant="red">
                    {copy.primaryCta}
                  </ArrowButton>
                  <ArrowButton href="/services" variant="ghost">
                    {copy.secondaryCta}
                  </ArrowButton>
                </div>
                <p className="mt-5 text-sm text-paper/80">{copy.originalHeadline}</p>
              </Reveal>
            </div>
          </div>
          <div className="grid gap-2 border-t border-white/20 px-5 py-4 pb-[calc(var(--booking-bar)+0.5rem)] text-[0.72rem] font-semibold tracking-[0.12em] text-paper-soft uppercase sm:px-8 md:pb-4 lg:grid-cols-3 lg:px-12">
            <p>
              {clinic.address.line1}
              <span className="hidden sm:inline">, {clinic.address.line2}</span>
            </p>
            <a className="inline-flex min-h-11 items-center lg:justify-center" href={`tel:${clinic.phone.tel}`}>
              {clinic.phone.display}
            </a>
            <p className="lg:text-right">{clinic.address.city}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
