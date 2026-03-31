import { NextResponse } from "next/server";
import { z } from "zod";

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
    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: parsed.data.email,
        timestamp: new Date().toISOString(),
      }),
      cache: "no-store",
    });

    const webhookResult = (await webhookResponse.json().catch(() => null)) as
      | { ok?: boolean; message?: string; code?: string }
      | null;

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
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 502 },
    );
  }
}
