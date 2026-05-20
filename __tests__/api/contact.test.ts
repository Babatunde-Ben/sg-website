import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";

const mockEmailSend = vi.hoisted(() => vi.fn());

vi.mock("resend", () => ({
  Resend: class {
    emails = { send: mockEmailSend };
  },
}));

vi.mock("@/components/emails/ContactFormEmail", () => ({
  ContactFormEmail: vi.fn(() => null),
}));

vi.mock("@/components/emails/ContactAutoReplyEmail", () => ({
  ContactAutoReplyEmail: vi.fn(() => null),
}));

function makeRequest(body: unknown) {
  return new Request("https://example.com/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

const validBody = {
  name: "Alice",
  email: "alice@example.com",
  message: "Hello, I would like to inquire about your services.",
};

beforeEach(() => {
  vi.stubEnv("CONTACT_EMAIL_TO", "hello@stephaniegeorge.co");
  vi.stubEnv("CONTACT_EMAIL_FROM", "Stephanie George <hello@stephaniegeorge.co>");
  vi.stubEnv("CONTACT_EMAIL_AUTOREPLY_FROM", "no-reply@stephaniegeorge.co");
  mockEmailSend.mockResolvedValue({ data: { id: "email-id-123" }, error: null });
});

afterEach(() => {
  vi.unstubAllEnvs();
  vi.clearAllMocks();
  vi.resetModules();
});

describe("POST /api/contact", () => {
  it("returns 400 for unparseable body", async () => {
    const { POST } = await import("@/app/api/contact/route");
    const req = new Request("https://example.com/api/contact", {
      method: "POST",
      body: "not-json",
      headers: { "Content-Type": "application/json" },
    });
    const res = await POST(req);
    expect(res.status).toBe(400);
    const data = await res.json();
    expect(data.ok).toBe(false);
  });

  it("returns 400 when name is missing", async () => {
    const { POST } = await import("@/app/api/contact/route");
    const res = await POST(makeRequest({ ...validBody, name: "" }));
    expect(res.status).toBe(400);
    const data = await res.json();
    expect(data.ok).toBe(false);
  });

  it("returns 400 for an invalid email", async () => {
    const { POST } = await import("@/app/api/contact/route");
    const res = await POST(makeRequest({ ...validBody, email: "bad-email" }));
    expect(res.status).toBe(400);
  });

  it("returns 400 when message is too short", async () => {
    const { POST } = await import("@/app/api/contact/route");
    const res = await POST(makeRequest({ ...validBody, message: "Hi" }));
    expect(res.status).toBe(400);
  });

  it("returns 400 when message exceeds 1000 characters", async () => {
    const { POST } = await import("@/app/api/contact/route");
    const res = await POST(
      makeRequest({ ...validBody, message: "a".repeat(1001) }),
    );
    expect(res.status).toBe(400);
  });

  it("returns 500 when CONTACT_EMAIL_TO is not configured", async () => {
    vi.stubEnv("CONTACT_EMAIL_TO", "");
    const { POST } = await import("@/app/api/contact/route");
    const res = await POST(makeRequest(validBody));
    expect(res.status).toBe(500);
    const data = await res.json();
    expect(data.ok).toBe(false);
  });

  it("returns 500 when CONTACT_EMAIL_FROM is not configured", async () => {
    vi.stubEnv("CONTACT_EMAIL_FROM", "");
    const { POST } = await import("@/app/api/contact/route");
    const res = await POST(makeRequest(validBody));
    expect(res.status).toBe(500);
  });

  it("returns 200 and ok: true on successful send", async () => {
    const { POST } = await import("@/app/api/contact/route");
    const res = await POST(makeRequest(validBody));
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.ok).toBe(true);
    expect(data.id).toBe("email-id-123");
  });

  it("sends the notification email with correct subject", async () => {
    const { POST } = await import("@/app/api/contact/route");
    await POST(makeRequest(validBody));
    expect(mockEmailSend).toHaveBeenCalledWith(
      expect.objectContaining({
        subject: `New Contact Inquiry from ${validBody.name}`,
        to: ["hello@stephaniegeorge.co"],
      }),
    );
  });

  it("returns 500 when Resend returns an error", async () => {
    mockEmailSend.mockResolvedValueOnce({
      data: null,
      error: { message: "API error" },
    });
    const { POST } = await import("@/app/api/contact/route");
    const res = await POST(makeRequest(validBody));
    expect(res.status).toBe(500);
    const data = await res.json();
    expect(data.ok).toBe(false);
  });

  it("accepts optional phone and organization fields", async () => {
    const { POST } = await import("@/app/api/contact/route");
    const res = await POST(
      makeRequest({ ...validBody, phone: "+1234567890", organization: "Acme" }),
    );
    expect(res.status).toBe(200);
  });
});
