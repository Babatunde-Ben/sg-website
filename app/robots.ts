import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // "/studio" already blocks all sub-paths; "/api/" blocks all API routes
        disallow: ["/studio/", "/api/", "/unsubscribe"],
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
