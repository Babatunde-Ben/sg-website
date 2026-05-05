import { NextResponse } from "next/server";
import { z } from "zod";
import { buildUnsubscribeUrl } from "@/lib/unsubscribe-token";

const payloadSchema = z.object({
  email: z.email(),
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = payloadSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, message: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const webhookUrl = process.env.GOOGLE_SHEETS_NEWSLETTER_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json(
      {
        ok: false,
        message: "Newsletter is unavailable right now.",
      },
      { status: 500 },
    );
  }

  try {
    const normalizedEmail = parsed.data.email.trim().toLowerCase();

    let unsubscribeUrl: string;
    try {
      unsubscribeUrl = buildUnsubscribeUrl(normalizedEmail);
    } catch (err) {
      console.error(
        "[newsletter] buildUnsubscribeUrl failed. Is NEWSLETTER_UNSUBSCRIBE_SECRET set?",
        err,
      );
      return NextResponse.json(
        {
          ok: false,
          message: "Newsletter is misconfigured. Please try again later.",
        },
        { status: 500 },
      );
    }

    const payload = {
      email: normalizedEmail,
      timestamp: new Date().toISOString(),
      unsubscribe_url: unsubscribeUrl,
    };

    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
      redirect: "follow",
    });

    const rawBody = await webhookResponse.text();

    let webhookResult:
      | { ok?: boolean; message?: string; code?: string }
      | null = null;
    try {
      webhookResult = rawBody ? JSON.parse(rawBody) : null;
    } catch {
      console.error(
        "[newsletter] Apps Script returned non-JSON response:",
        webhookResponse.status,
        rawBody.slice(0, 200),
      );
    }

    const duplicateError =
      webhookResult?.code === "DUPLICATE_EMAIL" ||
      /already exists|already subscribed|duplicate/i.test(
        webhookResult?.message ?? "",
      );

    if (duplicateError) {
      return NextResponse.json(
        {
          ok: false,
          message: "You are already subscribed with this email address.",
        },
        { status: 409 },
      );
    }

    if (webhookResult?.ok === false) {
      console.error(
        "[newsletter] Apps Script returned error:",
        webhookResult,
      );
      return NextResponse.json(
        {
          ok: false,
          message:
            webhookResult.message ??
            "Could not subscribe. Please try again.",
        },
        { status: 502 },
      );
    }

    if (!webhookResponse.ok) {
      console.error(
        "[newsletter] Apps Script HTTP error:",
        webhookResponse.status,
        webhookResponse.statusText,
      );
      return NextResponse.json(
        {
          ok: false,
          message: "Could not subscribe. Please try again.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      ok: true,
      message: "You are subscribed. Thank you for joining.",
    });
  } catch (err) {
    console.error("[newsletter] Unexpected error:", err);
    return NextResponse.json(
      {
        ok: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 502 },
    );
  }
}
