import { describe, it, expect, afterEach, vi } from "vitest";
import { checkSubscriptionStatus } from "@/lib/newsletter-status";

const WEBHOOK = "https://script.google.com/macros/s/test/exec";

afterEach(() => {
  vi.unstubAllEnvs();
  vi.restoreAllMocks();
});

function mockFetch(body: unknown, ok = true, status = 200) {
  vi.stubGlobal(
    "fetch",
    vi.fn().mockResolvedValue({
      ok,
      status,
      text: () => Promise.resolve(typeof body === "string" ? body : JSON.stringify(body)),
    }),
  );
}

describe("checkSubscriptionStatus", () => {
  it("returns 'unknown' when webhook URL is not configured", async () => {
    vi.stubEnv("GOOGLE_SHEETS_NEWSLETTER_WEBHOOK_URL", "");
    const result = await checkSubscriptionStatus("user@example.com");
    expect(result).toBe("unknown");
  });

  it("returns 'subscribed' when webhook responds with subscribed: true", async () => {
    vi.stubEnv("GOOGLE_SHEETS_NEWSLETTER_WEBHOOK_URL", WEBHOOK);
    mockFetch({ ok: true, subscribed: true });
    expect(await checkSubscriptionStatus("user@example.com")).toBe("subscribed");
  });

  it("returns 'not_subscribed' when webhook responds with subscribed: false", async () => {
    vi.stubEnv("GOOGLE_SHEETS_NEWSLETTER_WEBHOOK_URL", WEBHOOK);
    mockFetch({ ok: true, subscribed: false });
    expect(await checkSubscriptionStatus("user@example.com")).toBe("not_subscribed");
  });

  it("returns 'unknown' when response body is not valid JSON", async () => {
    vi.stubEnv("GOOGLE_SHEETS_NEWSLETTER_WEBHOOK_URL", WEBHOOK);
    mockFetch("not-json");
    expect(await checkSubscriptionStatus("user@example.com")).toBe("unknown");
  });

  it("returns 'unknown' when response body is empty", async () => {
    vi.stubEnv("GOOGLE_SHEETS_NEWSLETTER_WEBHOOK_URL", WEBHOOK);
    mockFetch("");
    expect(await checkSubscriptionStatus("user@example.com")).toBe("unknown");
  });

  it("returns 'unknown' when response lacks a subscribed field", async () => {
    vi.stubEnv("GOOGLE_SHEETS_NEWSLETTER_WEBHOOK_URL", WEBHOOK);
    mockFetch({ ok: true, status: "ok" });
    expect(await checkSubscriptionStatus("user@example.com")).toBe("unknown");
  });

  it("returns 'unknown' when fetch throws a network error", async () => {
    vi.stubEnv("GOOGLE_SHEETS_NEWSLETTER_WEBHOOK_URL", WEBHOOK);
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("network error")));
    expect(await checkSubscriptionStatus("user@example.com")).toBe("unknown");
  });

  it("sends the email normalized (lowercased and trimmed) to the webhook", async () => {
    vi.stubEnv("GOOGLE_SHEETS_NEWSLETTER_WEBHOOK_URL", WEBHOOK);
    const fetchSpy = vi.fn().mockResolvedValue({
      ok: true,
      text: () => Promise.resolve(JSON.stringify({ subscribed: true })),
    });
    vi.stubGlobal("fetch", fetchSpy);
    await checkSubscriptionStatus("  USER@EXAMPLE.COM  ");
    const body = JSON.parse(fetchSpy.mock.calls[0][1].body);
    expect(body.email).toBe("user@example.com");
    expect(body.action).toBe("status");
  });
});
