import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";

const mockEmailSend = vi.hoisted(() => vi.fn());

vi.mock("resend", () => ({
  Resend: class {
    emails = { send: mockEmailSend };
  },
}));

vi.mock("@/components/emails/StoryFormEmail", () => ({
  StoryFormEmail: vi.fn(() => null),
}));

function makeRequest(body: unknown) {
  return new Request("https://example.com/api/story", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

const validBody = {
  name: "Alice",
  story: "This is a story that is long enough to meet the minimum requirement.",
};

beforeEach(() => {
  vi.stubEnv("CONTACT_EMAIL_TO", "hello@stephaniegeorge.co");
  vi.stubEnv("CONTACT_EMAIL_FROM", "Stephanie George <hello@stephaniegeorge.co>");
  mockEmailSend.mockResolvedValue({ data: { id: "story-id-456" }, error: null });
});

afterEach(() => {
  vi.unstubAllEnvs();
  vi.clearAllMocks();
  vi.resetModules();
});

describe("POST /api/story", () => {
  it("returns 400 for unparseable body", async () => {
    const { POST } = await import("@/app/api/story/route");
    const req = new Request("https://example.com/api/story", {
      method: "POST",
      body: "not-json",
      headers: { "Content-Type": "application/json" },
    });
    const res = await POST(req);
    expect(res.status).toBe(400);
  });

  it("returns 400 when name is missing", async () => {
    const { POST } = await import("@/app/api/story/route");
    const res = await POST(makeRequest({ ...validBody, name: "" }));
    expect(res.status).toBe(400);
  });

  it("returns 400 when story is shorter than 20 characters", async () => {
    const { POST } = await import("@/app/api/story/route");
    const res = await POST(makeRequest({ ...validBody, story: "Too short" }));
    expect(res.status).toBe(400);
    const data = await res.json();
    expect(data.ok).toBe(false);
  });

  it("returns 400 when story exceeds 2000 characters", async () => {
    const { POST } = await import("@/app/api/story/route");
    const res = await POST(
      makeRequest({ ...validBody, story: "a".repeat(2001) }),
    );
    expect(res.status).toBe(400);
  });

  it("returns 500 when email config is missing", async () => {
    vi.stubEnv("CONTACT_EMAIL_TO", "");
    const { POST } = await import("@/app/api/story/route");
    const res = await POST(makeRequest(validBody));
    expect(res.status).toBe(500);
    const data = await res.json();
    expect(data.ok).toBe(false);
  });

  it("returns 200 and ok: true on successful submission", async () => {
    const { POST } = await import("@/app/api/story/route");
    const res = await POST(makeRequest(validBody));
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.ok).toBe(true);
    expect(data.id).toBe("story-id-456");
  });

  it("sends email with correct subject including submitter name", async () => {
    const { POST } = await import("@/app/api/story/route");
    await POST(makeRequest(validBody));
    expect(mockEmailSend).toHaveBeenCalledWith(
      expect.objectContaining({
        subject: `New Story Submission from ${validBody.name}`,
      }),
    );
  });

  it("returns 500 when Resend returns an error", async () => {
    mockEmailSend.mockResolvedValueOnce({
      data: null,
      error: { message: "API key invalid" },
    });
    const { POST } = await import("@/app/api/story/route");
    const res = await POST(makeRequest(validBody));
    expect(res.status).toBe(500);
    const data = await res.json();
    expect(data.ok).toBe(false);
  });
});
