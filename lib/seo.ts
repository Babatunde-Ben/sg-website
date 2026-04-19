import type { Metadata } from "next";

const FALLBACK_BASE_URL = "https://www.stephaniegeorge.co";

export const SITE_NAME = "Stephanie George";
export const SITE_DESCRIPTION =
  "Stephanie George is an event host, moderator, and speaker bringing depth, composure, and kindness to conferences, panels, and podcast conversations.";

export function getBaseUrl() {
  const raw = process.env.NEXT_PUBLIC_BASE_URL?.trim();
  if (!raw) return FALLBACK_BASE_URL;
  const withProtocol = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  return withProtocol.endsWith("/") ? withProtocol.slice(0, -1) : withProtocol;
}

export function absoluteUrl(path = "/") {
  const base = getBaseUrl();
  if (path === "/") return `${base}/`;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      images: [{ url: absoluteUrl("/stephanie-george-logo.png") }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl("/stephanie-george-logo.png")],
    },
  };
}
