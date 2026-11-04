import { Hours } from "@/components/ui/Hours";
import { Reveal } from "@/components/ui/Reveal";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { EnquiryForm } from "@/components/sections/EnquiryForm";
import { PageHero } from "@/components/sections/PageHero";
import { addressLines, clinic } from "@/content/clinic";
import { contactCopy, faqs } from "@/content/copy";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Call, email, or visit Kafagway Dental Center on Kisad Road in Baguio City. Hours are listed as published on the current clinic website.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero id="contact-heading" eyebrow={contactCopy.eyebrow} title={contactCopy.headline} lede={contactCopy.lede} />
      <section className="py-[clamp(3.5rem,8vw,6rem)]">
        <div className="shell grid gap-16 lg:grid-cols-12">
          <Reveal from="left" className="lg:col-span-5">
            <a className="font-display text-4xl tracking-[-0.04em] sm:text-5xl" href={`tel:${clinic.phone.tel}`}>
              {clinic.phone.display}
            </a>
            <p className="mt-4">
              <a className="break-all underline decoration-red underline-offset-4" href={`mailto:${clinic.email}`}>
                {clinic.email}
              </a>
            </p>
            <address className="mt-8 space-y-1 text-lg not-italic">
              {addressLines().map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <p className="mt-6">
              <a className="underline decoration-red underline-offset-4" href={clinic.facebook.url} target="_blank" rel="noopener noreferrer">
                Facebook
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </p>
            <p className="mt-4">
              <a className="underline decoration-red underline-offset-4" href={clinic.mapUrl} target="_blank" rel="noopener noreferrer">
                Get directions
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </p>
            <div className="mt-6">
              <SocialLinks />
            </div>
            <div className="mt-10 max-w-md">
              <Hours />
            </div>
            <p className="mt-6 max-w-md text-sm text-brown">{clinic.parkingNote}</p>
          </Reveal>
          <Reveal from="right" delay={0.08} className="lg:col-span-6 lg:col-start-7">
            <h2 className="font-display text-3xl tracking-[-0.03em]">{contactCopy.formTitle}</h2>
            <div className="mt-6">
              <EnquiryForm />
            </div>
          </Reveal>
        </div>
      </section>
      <section className="border-t border-ink/10 py-[clamp(3.5rem,8vw,6rem)]" aria-labelledby="faq-heading">
        <div className="shell grid gap-10 lg:grid-cols-12">
          <h2 id="faq-heading" className="display-md lg:col-span-4">
            Practical questions
          </h2>
          <dl className="lg:col-span-7 lg:col-start-6">
            {faqs.map((item, index) => (
              <Reveal key={item.question} delay={index * 0.05} className="border-t border-ink/10 py-6">
                <dt className="font-display text-2xl tracking-[-0.03em]">{item.question}</dt>
                <dd className="mt-3 max-w-xl text-ink-soft">{item.answer}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
