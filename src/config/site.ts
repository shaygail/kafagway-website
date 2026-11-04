/**
 * Site-wide metadata. The public URL is not deployed by this project.
 * Set NEXT_PUBLIC_SITE_URL when the domain is confirmed.
 */
export const siteConfig = {
  name: "Kafagway Dental Center",
  shortName: "Kafagway",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://kafagwaydentalcenter.com").replace(/\/$/, ""),
  locale: "en_PH",
  city: "Baguio City",
  country: "Philippines",
} as const;

export function absoluteUrl(path: string) {
  return new URL(path, `${siteConfig.url}/`).toString();
}
