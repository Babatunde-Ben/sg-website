import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { getBaseUrl, absoluteUrl, buildPageMetadata, SITE_NAME } from "@/lib/seo";

describe("getBaseUrl", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("returns the fallback URL when env var is not set", () => {
    vi.stubEnv("NEXT_PUBLIC_BASE_URL", "");
    expect(getBaseUrl()).toBe("https://www.stephaniegeorge.co");
  });

  it("returns the configured URL trimmed of trailing slash", () => {
    vi.stubEnv("NEXT_PUBLIC_BASE_URL", "https://example.com/");
    expect(getBaseUrl()).toBe("https://example.com");
  });

  it("preserves URL without trailing slash", () => {
    vi.stubEnv("NEXT_PUBLIC_BASE_URL", "https://example.com");
    expect(getBaseUrl()).toBe("https://example.com");
  });

  it("prepends https:// when protocol is missing", () => {
    vi.stubEnv("NEXT_PUBLIC_BASE_URL", "example.com");
    expect(getBaseUrl()).toBe("https://example.com");
  });

  it("preserves http:// protocol", () => {
    vi.stubEnv("NEXT_PUBLIC_BASE_URL", "http://localhost:3000");
    expect(getBaseUrl()).toBe("http://localhost:3000");
  });

  it("trims whitespace from env var", () => {
    vi.stubEnv("NEXT_PUBLIC_BASE_URL", "  https://example.com  ");
    expect(getBaseUrl()).toBe("https://example.com");
  });
});

describe("absoluteUrl", () => {
  beforeEach(() => {
    vi.stubEnv("NEXT_PUBLIC_BASE_URL", "https://example.com");
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("returns base URL with trailing slash for root path", () => {
    expect(absoluteUrl("/")).toBe("https://example.com/");
  });

  it("appends an absolute path", () => {
    expect(absoluteUrl("/about")).toBe("https://example.com/about");
  });

  it("prepends slash to a relative path", () => {
    expect(absoluteUrl("about")).toBe("https://example.com/about");
  });

  it("uses default path of / when no argument given", () => {
    expect(absoluteUrl()).toBe("https://example.com/");
  });

  it("handles nested paths", () => {
    expect(absoluteUrl("/gallery/image")).toBe("https://example.com/gallery/image");
  });
});

describe("buildPageMetadata", () => {
  beforeEach(() => {
    vi.stubEnv("NEXT_PUBLIC_BASE_URL", "https://example.com");
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  const base = {
    title: "About",
    description: "About page description",
    path: "/about",
  };

  it("sets title and description", () => {
    const meta = buildPageMetadata(base);
    expect(meta.title).toBe("About");
    expect(meta.description).toBe("About page description");
  });

  it("sets canonical alternate", () => {
    const meta = buildPageMetadata(base);
    expect(meta.alternates?.canonical).toBe("/about");
  });

  it("sets OpenGraph fields with correct URL", () => {
    const meta = buildPageMetadata(base);
    expect(meta.openGraph?.title).toBe("About");
    expect(meta.openGraph?.url).toBe("https://example.com/about");
    expect(meta.openGraph?.siteName).toBe(SITE_NAME);
    expect(meta.openGraph?.type).toBe("website");
  });

  it("includes logo image in OG and Twitter", () => {
    const meta = buildPageMetadata(base);
    const ogImages = meta.openGraph?.images as Array<{ url: string }>;
    expect(ogImages?.[0]?.url).toContain("stephanie-george-logo.png");
    const twitterImages = meta.twitter?.images as string[];
    expect(twitterImages?.[0]).toContain("stephanie-george-logo.png");
  });

  it("sets Twitter card type", () => {
    const meta = buildPageMetadata(base);
    expect(meta.twitter?.card).toBe("summary_large_image");
  });

  it("includes optional keywords when provided", () => {
    const meta = buildPageMetadata({ ...base, keywords: ["speaker", "host"] });
    expect(meta.keywords).toEqual(["speaker", "host"]);
  });

  it("omits keywords when not provided", () => {
    const meta = buildPageMetadata(base);
    expect(meta.keywords).toBeUndefined();
  });
});
