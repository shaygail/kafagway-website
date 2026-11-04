import { AboutPreview } from "@/components/sections/AboutPreview";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { Hero } from "@/components/sections/Hero";
import { Introduction } from "@/components/sections/Introduction";
import { Journey } from "@/components/sections/Journey";
import { LocationBand } from "@/components/sections/LocationBand";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { JsonLd } from "@/components/seo/JsonLd";
import { createMetadata } from "@/lib/metadata";
import { dentistSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Kafagway Dental Center · Baguio City",
  description:
    "Personalised dental care at Kafagway Dental Center in Baguio City. Individual treatment plans, approachable fees, and appointments via Facebook or phone.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={dentistSchema()} />
      <Hero />
      <Introduction />
      <ServicesPreview />
      <WhyChoose />
      <AboutPreview />
      <Journey />
      <LocationBand />
      <ClosingCta />
    </>
  );
}
