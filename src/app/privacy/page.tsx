import { clinic } from "@/content/clinic";
import { privacyCopy } from "@/content/copy";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/sections/PageHero";

export const metadata = createMetadata({
  title: "Privacy",
  description:
    "Placeholder privacy notice for the Kafagway Dental Center website. A full policy is pending the clinic’s review.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero id="privacy-heading" eyebrow={privacyCopy.eyebrow} title={privacyCopy.headline} />
      <article className="shell max-w-3xl space-y-6 py-[clamp(3rem,7vw,5rem)] text-ink-soft">
        {privacyCopy.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <p>
          <a className="text-ink underline decoration-red underline-offset-4" href={`mailto:${clinic.email}`}>
            {clinic.email}
          </a>
        </p>
      </article>
    </>
  );
}
