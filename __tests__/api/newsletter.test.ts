import { describe, it, expect, afterEach, beforeEach, vi } from "vitest";

const WEBHOOK = "https://script.google.com/macros/s/test/exec";
const SECRET = "supersecretkey1234567890";
const BASE_URL = "https://example.com";

function makeRequest(body: unknown) {
  return new Request("https://example.com/api/newsletter", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

function mockWebhook(response: unknown, ok = true, status = 200) {
  vi.stubGlobal(
    "fetch",
    vi.fn().mockResolvedValue({
      ok,
      status,
      statusText: ok ? "OK" : "Error",
      text: () =>
        Promise.resolve(
          typeof response === "string" ? response : JSON.stringify(response),
        ),
    }),
  );
}

beforeEach(() => {
  vi.stubEnv("GOOGLE_SHEETS_NEWSLETTER_WEBHOOK_URL", WEBHOOK);
  vi.stubEnv("NEWSLETTER_UNSUBSCRIBE_SECRET", SECRET);
  vi.stubEnv("NEXT_PUBLIC_BASE_URL", BASE_URL);
});

afterEach(() => {
  vi.unstubAllEnvs();
  vi.restoreAllMocks();
  vi.resetModules();
});

describe("POST /api/newsletter", () => {
  it("returns 400 for missing body", async () => {
    const { POST } = await import("@/app/api/newsletter/route");
    const req = new Request("https://example.com/api/newsletter", {
      method: "POST",
      body: "not-json",
      headers: { "Content-Type": "application/json" },
    });
    const res = await POST(req);
    expect(res.status).toBe(400);
    const data = await res.json();
    expect(data.ok).toBe(false);
  });

  it("returns 400 for an invalid email", async () => {
    const { POST } = await import("@/app/api/newsletter/route");
    const res = await POST(makeRequest({ email: "not-an-email" }));
    expect(res.status).toBe(400);
    const data = await res.json();
    expect(data.ok).toBe(false);
  });

  it("returns 500 when webhook URL is not configured", async () => {
    vi.stubEnv("GOOGLE_SHEETS_NEWSLETTER_WEBHOOK_URL", "");
    const { POST } = await import("@/app/api/newsletter/route");
    const res = await POST(makeRequest({ email: "user@example.com" }));
    expect(res.status).toBe(500);
    const data = await res.json();
    expect(data.ok).toBe(false);
  });

  it("returns 500 when unsubscribe secret is not configured", async () => {
    vi.stubEnv("NEWSLETTER_UNSUBSCRIBE_SECRET", "");
    const { POST } = await import("@/app/api/newsletter/route");
    mockWebhook({ ok: true });
    const res = await POST(makeRequest({ email: "user@example.com" }));
    expect(res.status).toBe(500);
    const data = await res.json();
    expect(data.ok).toBe(false);
  });

  it("returns 200 on successful subscription", async () => {
    const { POST } = await import("@/app/api/newsletter/route");
    mockWebhook({ ok: true });
    const res = await POST(makeRequest({ email: "user@example.com" }));
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.ok).toBe(true);
    expect(data.message).toContain("subscribed");
  });

  it("returns 409 when webhook signals DUPLICATE_EMAIL code", async () => {
    const { POST } = await import("@/app/api/newsletter/route");
    mockWebhook({ ok: false, code: "DUPLICATE_EMAIL" });
    const res = await POST(makeRequest({ email: "user@example.com" }));
    expect(res.status).toBe(409);
    const data = await res.json();
    expect(data.ok).toBe(false);
  });

  it("returns 409 when webhook message contains 'already subscribed'", async () => {
    const { POST } = await import("@/app/api/newsletter/route");
    mockWebhook({ ok: false, message: "Email already subscribed" });
    const res = await POST(makeRequest({ email: "user@example.com" }));
    expect(res.status).toBe(409);
  });

  it("returns 502 when webhook returns ok: false without a duplicate error", async () => {
    const { POST } = await import("@/app/api/newsletter/route");
    mockWebhook({ ok: false, message: "Internal error" });
    const res = await POST(makeRequest({ email: "user@example.com" }));
    expect(res.status).toBe(502);
    const data = await res.json();
    expect(data.ok).toBe(false);
  });

  it("returns 502 when webhook HTTP response is not ok", async () => {
    const { POST } = await import("@/app/api/newsletter/route");
    mockWebhook(null, false, 500);
    const res = await POST(makeRequest({ email: "user@example.com" }));
    expect(res.status).toBe(502);
  });

  it("normalizes the email to lowercase before sending to webhook", async () => {
    const { POST } = await import("@/app/api/newsletter/route");
    const fetchSpy = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      text: () => Promise.resolve(JSON.stringify({ ok: true })),
    });
    vi.stubGlobal("fetch", fetchSpy);
    await POST(makeRequest({ email: "USER@EXAMPLE.COM" }));
    const body = JSON.parse(fetchSpy.mock.calls[0][1].body);
    expect(body.email).toBe("user@example.com");
  });
});
