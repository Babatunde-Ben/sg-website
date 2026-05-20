import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { signUnsubscribeToken } from "@/lib/unsubscribe-token";

const WEBHOOK = "https://script.google.com/macros/s/test/exec";
const SECRET = "supersecretkey1234567890";

function makeRequest(body: unknown) {
  return new Request("https://example.com/api/unsubscribe", {
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
      json: () =>
        Promise.resolve(typeof response === "string" ? null : response),
    }),
  );
}

function validBody(email = "user@example.com") {
  const token = signUnsubscribeToken(email);
  return { email, token };
}

beforeEach(() => {
  vi.stubEnv("NEWSLETTER_UNSUBSCRIBE_SECRET", SECRET);
  vi.stubEnv("NEXT_PUBLIC_BASE_URL", "https://example.com");
  vi.stubEnv("GOOGLE_SHEETS_NEWSLETTER_WEBHOOK_URL", WEBHOOK);
});

afterEach(() => {
  vi.unstubAllEnvs();
  vi.restoreAllMocks();
  vi.resetModules();
});

describe("POST /api/unsubscribe", () => {
  it("returns 400 for unparseable body", async () => {
    const { POST } = await import("@/app/api/unsubscribe/route");
    const req = new Request("https://example.com/api/unsubscribe", {
      method: "POST",
      body: "not-json",
      headers: { "Content-Type": "application/json" },
    });
    const res = await POST(req);
    expect(res.status).toBe(400);
  });

  it("returns 400 when email is missing", async () => {
    const { POST } = await import("@/app/api/unsubscribe/route");
    const res = await POST(makeRequest({ token: "sometoken" }));
    expect(res.status).toBe(400);
  });

  it("returns 400 when token is missing", async () => {
    const { POST } = await import("@/app/api/unsubscribe/route");
    const res = await POST(makeRequest({ email: "user@example.com" }));
    expect(res.status).toBe(400);
  });

  it("returns 400 for an invalid token", async () => {
    const { POST } = await import("@/app/api/unsubscribe/route");
    const res = await POST(
      makeRequest({ email: "user@example.com", token: "invalid-token" }),
    );
    expect(res.status).toBe(400);
    const data = await res.json();
    expect(data.message).toMatch(/invalid or expired/i);
  });

  it("returns 500 when webhook URL is not configured", async () => {
    vi.stubEnv("GOOGLE_SHEETS_NEWSLETTER_WEBHOOK_URL", "");
    const { POST } = await import("@/app/api/unsubscribe/route");
    const res = await POST(makeRequest(validBody()));
    expect(res.status).toBe(500);
  });

  it("returns 200 on successful unsubscribe", async () => {
    const { POST } = await import("@/app/api/unsubscribe/route");
    mockWebhook({ ok: true });
    const res = await POST(makeRequest(validBody()));
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.ok).toBe(true);
    expect(data.message).toMatch(/unsubscribed/i);
  });

  it("returns 200 with alreadyUnsubscribed when webhook returns ALREADY_UNSUBSCRIBED", async () => {
    const { POST } = await import("@/app/api/unsubscribe/route");
    mockWebhook({ ok: true, code: "ALREADY_UNSUBSCRIBED" });
    const res = await POST(makeRequest(validBody()));
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.alreadyUnsubscribed).toBe(true);
  });

  it("returns 200 with alreadyUnsubscribed when webhook returns NOT_SUBSCRIBED", async () => {
    const { POST } = await import("@/app/api/unsubscribe/route");
    mockWebhook({ ok: true, code: "NOT_SUBSCRIBED" });
    const res = await POST(makeRequest(validBody()));
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.alreadyUnsubscribed).toBe(true);
  });

  it("returns 502 when webhook responds with ok: false", async () => {
    const { POST } = await import("@/app/api/unsubscribe/route");
    mockWebhook({ ok: false, message: "Server error" }, false, 500);
    const res = await POST(makeRequest(validBody()));
    expect(res.status).toBe(502);
    const data = await res.json();
    expect(data.ok).toBe(false);
  });

  it("returns 502 when fetch throws", async () => {
    const { POST } = await import("@/app/api/unsubscribe/route");
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("network")));
    const res = await POST(makeRequest(validBody()));
    expect(res.status).toBe(502);
  });
});
