import { NextResponse } from "next/server";
import { z } from "zod";
import { verifyUnsubscribeToken } from "@/lib/unsubscribe-token";

const payloadSchema = z.object({
  email: z.email(),
  token: z.string().min(1),
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = payloadSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, message: "Invalid request." },
      { status: 400 },
    );
  }

  const { email, token } = parsed.data;

  if (!verifyUnsubscribeToken(email, token)) {
    return NextResponse.json(
      { ok: false, message: "This unsubscribe link is invalid or expired." },
      { status: 400 },
    );
  }

  const webhookUrl = process.env.GOOGLE_SHEETS_NEWSLETTER_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json(
      { ok: false, message: "Unsubscribe is unavailable right now." },
      { status: 500 },
    );
  }

  try {
    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "unsubscribe",
        email: email.toLowerCase(),
        timestamp: new Date().toISOString(),
      }),
      cache: "no-store",
    });

    const webhookResult = (await webhookResponse.json().catch(() => null)) as
      | { ok?: boolean; message?: string; code?: string }
      | null;

    if (!webhookResponse.ok || webhookResult?.ok === false) {
      console.error(
        "[unsubscribe] Apps Script failed:",
        webhookResponse.status,
        webhookResult,
      );
      return NextResponse.json(
        {
          ok: false,
          message:
            webhookResult?.message ??
            "Could not complete your unsubscribe. Please try again.",
        },
        { status: 502 },
      );
    }

    const alreadyOff =
      webhookResult?.code === "ALREADY_UNSUBSCRIBED" ||
      webhookResult?.code === "NOT_SUBSCRIBED";

    if (alreadyOff) {
      return NextResponse.json({
        ok: true,
        alreadyUnsubscribed: true,
        message:
          "You are already unsubscribed from the newsletter. No action was needed.",
      });
    }

    return NextResponse.json({
      ok: true,
      message: "You have been unsubscribed. We're sorry to see you go.",
    });
  } catch (err) {
    console.error("[unsubscribe] Unexpected error:", err);
    return NextResponse.json(
      { ok: false, message: "Something went wrong. Please try again." },
      { status: 502 },
    );
  }
}
