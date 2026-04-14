import type { Metadata } from "next";

const FALLBACK_BASE_URL = "https://stephanie-george.vercel.app";

export const SITE_NAME = "Stephanie George";
export const SITE_DESCRIPTION =
  "Stephanie George is a host, speaker, and podcast creator delivering truth with kindness through events, conversations, and practical insight.";

export function getBaseUrl() {
  const raw = process.env.NEXT_PUBLIC_BASE_URL?.trim();
  if (!raw) return FALLBACK_BASE_URL;
  return raw.endsWith("/") ? raw.slice(0, -1) : raw;
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
