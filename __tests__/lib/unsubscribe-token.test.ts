import { describe, it, expect, afterEach, vi } from "vitest";
import {
  signUnsubscribeToken,
  verifyUnsubscribeToken,
  buildUnsubscribeUrl,
} from "@/lib/unsubscribe-token";

const TEST_SECRET = "supersecretkey1234567890";

function setupEnv() {
  vi.stubEnv("NEWSLETTER_UNSUBSCRIBE_SECRET", TEST_SECRET);
  vi.stubEnv("NEXT_PUBLIC_BASE_URL", "https://example.com");
}

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("signUnsubscribeToken", () => {
  it("returns a non-empty string", () => {
    setupEnv();
    expect(signUnsubscribeToken("user@example.com")).toBeTruthy();
  });

  it("is deterministic — same email always produces the same token", () => {
    setupEnv();
    const a = signUnsubscribeToken("user@example.com");
    const b = signUnsubscribeToken("user@example.com");
    expect(a).toBe(b);
  });

  it("normalizes email before signing (case + trim)", () => {
    setupEnv();
    const lower = signUnsubscribeToken("user@example.com");
    const upper = signUnsubscribeToken("  USER@EXAMPLE.COM  ");
    expect(lower).toBe(upper);
  });

  it("produces different tokens for different emails", () => {
    setupEnv();
    const a = signUnsubscribeToken("alice@example.com");
    const b = signUnsubscribeToken("bob@example.com");
    expect(a).not.toBe(b);
  });

  it("throws when secret is not set", () => {
    vi.stubEnv("NEWSLETTER_UNSUBSCRIBE_SECRET", "");
    expect(() => signUnsubscribeToken("user@example.com")).toThrow();
  });

  it("throws when secret is too short (< 16 chars)", () => {
    vi.stubEnv("NEWSLETTER_UNSUBSCRIBE_SECRET", "short");
    expect(() => signUnsubscribeToken("user@example.com")).toThrow();
  });
});

describe("verifyUnsubscribeToken", () => {
  it("returns true for a valid email/token pair", () => {
    setupEnv();
    const token = signUnsubscribeToken("user@example.com");
    expect(verifyUnsubscribeToken("user@example.com", token)).toBe(true);
  });

  it("returns false for a tampered token", () => {
    setupEnv();
    expect(
      verifyUnsubscribeToken("user@example.com", "tampered-token"),
    ).toBe(false);
  });

  it("returns false when email does not match the token", () => {
    setupEnv();
    const token = signUnsubscribeToken("alice@example.com");
    expect(verifyUnsubscribeToken("bob@example.com", token)).toBe(false);
  });

  it("returns false for empty email", () => {
    setupEnv();
    const token = signUnsubscribeToken("user@example.com");
    expect(verifyUnsubscribeToken("", token)).toBe(false);
  });

  it("returns false for empty token", () => {
    setupEnv();
    expect(verifyUnsubscribeToken("user@example.com", "")).toBe(false);
  });

  it("normalizes email during verification (case-insensitive match)", () => {
    setupEnv();
    const token = signUnsubscribeToken("user@example.com");
    expect(verifyUnsubscribeToken("USER@EXAMPLE.COM", token)).toBe(true);
  });
});

describe("buildUnsubscribeUrl", () => {
  it("returns a valid URL string", () => {
    setupEnv();
    const url = buildUnsubscribeUrl("user@example.com");
    expect(() => new URL(url)).not.toThrow();
  });

  it("includes the unsubscribe path", () => {
    setupEnv();
    const url = buildUnsubscribeUrl("user@example.com");
    expect(url).toContain("/unsubscribe");
  });

  it("includes the email as a query param", () => {
    setupEnv();
    const url = new URL(buildUnsubscribeUrl("user@example.com"));
    expect(url.searchParams.get("email")).toBe("user@example.com");
  });

  it("includes the token as a query param", () => {
    setupEnv();
    const url = new URL(buildUnsubscribeUrl("user@example.com"));
    expect(url.searchParams.get("token")).toBeTruthy();
  });

  it("normalizes email in the URL", () => {
    setupEnv();
    const url = new URL(buildUnsubscribeUrl("  USER@EXAMPLE.COM  "));
    expect(url.searchParams.get("email")).toBe("user@example.com");
  });

  it("produces a URL whose token verifies correctly", () => {
    setupEnv();
    const url = new URL(buildUnsubscribeUrl("user@example.com"));
    const email = url.searchParams.get("email")!;
    const token = url.searchParams.get("token")!;
    expect(verifyUnsubscribeToken(email, token)).toBe(true);
  });
});
