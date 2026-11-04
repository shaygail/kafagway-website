import { siteConfig } from "@/config/site";
import { addressOneLine, clinic } from "@/content/clinic";
import { services } from "@/content/services";

/** Structured data uses only details published by the clinic. No reviews or ratings. */
export function dentistSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Dentist", "LocalBusiness"],
    name: clinic.name,
    url: siteConfig.url,
    telephone: clinic.phone.tel,
    email: clinic.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${clinic.address.line1}, ${clinic.address.line2}`,
      addressLocality: clinic.address.city,
      addressRegion: clinic.address.region,
      postalCode: clinic.address.postalCode,
      addressCountry: clinic.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: clinic.geo.latitude,
      longitude: clinic.geo.longitude,
    },
    hasMap: clinic.mapUrl,
    openingHoursSpecification: clinic.hours.entries.flatMap((entry) =>
      entry.days.map((day) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: day,
        opens: entry.opens,
        closes: entry.closes,
      })),
    ),
    sameAs: [clinic.facebook.url, clinic.instagram.url],
    areaServed: clinic.address.city,
    description: `${clinic.name} is a dental clinic at ${addressOneLine()}.`,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Published dental services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.summary,
        },
      })),
    },
  };
}
