import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

const routes = ["/", "/about", "/gallery", "/podcast", "/contact"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
