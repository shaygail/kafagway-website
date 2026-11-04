import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

const paths = ["/", "/services", "/about", "/contact", "/booking", "/privacy"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: new URL(path, `${siteConfig.url}/`).toString(),
    lastModified: "2026-11-04",
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
