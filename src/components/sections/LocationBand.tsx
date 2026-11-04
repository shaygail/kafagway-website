import { ArrowButton } from "@/components/ui/ArrowButton";
import { Hours } from "@/components/ui/Hours";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Reveal } from "@/components/ui/Reveal";
import { addressLines, clinic } from "@/content/clinic";
import { homeCopy } from "@/content/copy";

export function LocationBand() {
  const copy = homeCopy.location;
  return (
    <section className="bg-neutral py-[clamp(4.5rem,11vw,9rem)]" aria-labelledby="location-heading">
      <div className="shell grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow text-brown">{copy.eyebrow}</p>
          <h2 id="location-heading" className="display-md mt-5 max-w-[12ch]">
            {copy.headline}
          </h2>
          <address className="mt-8 space-y-1 text-lg not-italic">
            {addressLines().map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <ArrowButton href="/contact" variant="ink">
              {copy.cta}
            </ArrowButton>
            <ArrowButton href={clinic.mapUrl} variant="ghost" external>
              {copy.directions}
            </ArrowButton>
          </div>
          <div className="mt-10 max-w-md">
            <Hours />
          </div>
          <p className="mt-6 max-w-md text-sm text-brown">{clinic.parkingNote}</p>
        </Reveal>
        <MediaFrame image="clinicInterior" className="aspect-[4/5] min-h-[22rem]" sizes="(min-width: 1024px) 46vw, 100vw" />
      </div>
    </section>
  );
}
