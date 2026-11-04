import { ArrowButton } from "@/components/ui/ArrowButton";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { aboutCopy, gallery, homeCopy, team } from "@/content/copy";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About",
  description:
    "Kafagway Dental Center is a dental clinic on Kisad Road in Baguio City. Care is planned around the patient, with an aim to keep treatment approachable.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero id="about-heading" eyebrow={aboutCopy.eyebrow} title={aboutCopy.headline} lede={aboutCopy.lede} />
      <section className="py-[clamp(4rem,8vw,7rem)]" aria-labelledby="philosophy-heading">
        <div className="shell grid gap-10 lg:grid-cols-12">
          <h2 id="philosophy-heading" className="display-md lg:col-span-5">
            {aboutCopy.philosophyTitle}
          </h2>
          <div className="space-y-6 text-ink-soft lg:col-span-6 lg:col-start-7">
            {aboutCopy.philosophy.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-neutral py-[clamp(4rem,8vw,7rem)]" aria-labelledby="rooms-heading">
        <div className="shell">
          <Reveal>
            <h2 id="rooms-heading" className="display-md max-w-[12ch]">
              {aboutCopy.environmentTitle}
            </h2>
            <p className="measure mt-5 text-ink-soft">{aboutCopy.environmentBody}</p>
          </Reveal>
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {gallery.map((item) => (
              <li key={item.caption}>
                <MediaFrame image={item.image} className="aspect-[4/5]" sizes="(min-width: 768px) 30vw, 100vw" />
                <p className="mt-3 text-sm text-brown">{item.caption}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="py-[clamp(4rem,8vw,7rem)]" aria-labelledby="team-heading">
        <div className="shell">
          <h2 id="team-heading" className="display-md max-w-[14ch]">
            {aboutCopy.teamTitle}
          </h2>
          <p className="measure mt-5 text-ink-soft">{aboutCopy.teamBody}</p>
          <ul className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
            {team.map((person) => (
              <li key={person.name} className="grid gap-3 py-8 md:grid-cols-12">
                <h3 className="font-display text-2xl tracking-[-0.03em] md:col-span-6">{person.name}</h3>
                <p className="text-ink-soft md:col-span-6">
                  {person.qualifications || person.bio || aboutCopy.teamEmpty}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="bg-ink py-[clamp(4rem,8vw,7rem)] text-paper">
        <div className="shell grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="display-md">{aboutCopy.ctaTitle}</h2>
            <p className="mt-5 max-w-xl text-paper-soft">{aboutCopy.ctaBody}</p>
          </div>
          <div className="lg:col-span-5 lg:justify-self-end">
            <ArrowButton href="/booking" variant="red">
              {homeCopy.hero.primaryCta}
            </ArrowButton>
          </div>
        </div>
      </section>
    </>
  );
}
