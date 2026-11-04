import { ArrowButton } from "@/components/ui/ArrowButton";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { servicesPageCopy } from "@/content/copy";
import { services } from "@/content/services";
import { createMetadata } from "@/lib/metadata";
import { cn } from "@/lib/cn";

export const metadata = createMetadata({
  title: "Services",
  description:
    "Treatments published by Kafagway Dental Center: consultation, preventive care, restorative and cosmetic dentistry, root canal treatment, oral surgery, dentures, bridges, and orthodontics.",
  path: "/services",
});

export default function ServicesPage() {
  const copy = servicesPageCopy;
  return (
    <>
      <PageHero id="services-page-heading" eyebrow={copy.eyebrow} title={copy.headline} lede={copy.lede} />
      <p className="shell py-6 text-sm text-brown">{copy.note}</p>
      <div>
        {services.map((service, index) => {
          const reversed = index % 2 === 1;
          return (
            <article
              key={service.id}
              id={service.id}
              className="scroll-mt-24 border-t border-ink/10 py-[clamp(3.5rem,8vw,6.5rem)]"
            >
              <div className="shell grid items-center gap-10 lg:grid-cols-2">
              <Reveal from={reversed ? "right" : "left"} className={cn("min-w-0", reversed && "lg:order-2")}>
                  <p className="font-display text-5xl tracking-[-0.05em] text-brown">{service.number}</p>
                  <h2 className="mt-4 font-display text-4xl tracking-[-0.04em] sm:text-5xl">{service.title}</h2>
                  <div className="mt-6 space-y-4 text-ink-soft">
                    {service.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                    <ArrowButton href="/contact" variant="ink">
                      {copy.enquire}
                    </ArrowButton>
                    <ArrowButton href="/booking" variant="ghost">
                      {copy.book}
                    </ArrowButton>
                  </div>
                </Reveal>
                <MediaFrame
                  image={service.image}
                  className={cn("aspect-[5/4] w-full min-w-0", reversed && "lg:order-1")}
                  sizes="(min-width: 1024px) 46vw, 100vw"
                />
              </div>
            </article>
          );
        })}
      </div>
      <ClosingCta />
    </>
  );
}
