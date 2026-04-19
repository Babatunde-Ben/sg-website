import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

const routes = [
  "/",
  "/about",
  "/gallery",
  "/podcast",
  "/contact",
  "/privacy-policy",
  "/terms-of-service",
] as const;

const LOW_PRIORITY = new Set<(typeof routes)[number]>([
  "/privacy-policy",
  "/terms-of-service",
]);

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : LOW_PRIORITY.has(route) ? 0.3 : 0.8,
  }));
}
