import { parseBody } from "next-sanity/webhook";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const secret = process.env.SANITY_REVALIDATE_SECRET;

    if (!secret) {
      console.error("Missing SANITY_REVALIDATE_SECRET");
      return new Response("Configuration error", { status: 500 });
    }

    // `parseBody` mathematically verifies the Sanity signature header against your secret.
    // It returns the parsed body if it's legit, or null if it's a hacker.
    const { isValidSignature, body } = await parseBody<{ _type: string }>(
      req,
      secret
    );

    if (!isValidSignature) {
      return new Response("Invalid signature", { status: 401 });
    }

    const type = body?._type;

    // We do a full sweep of the site's layout caching to guarantee freshness safely.
    // This is the most bulletproof way to revalidate across all routes.
    revalidatePath("/", "layout");
    console.log(`[Revalidated] Full layout sweep triggered by _type: ${type}`);

    return NextResponse.json({
      status: 200,
      revalidated: true,
      now: Date.now(),
      path: "/",
      typeTriggered: type
    });
  } catch (err: any) {
    console.error("Webhook error:", err.message);
    return new Response("Webhook processing error", { status: 500 });
  }
}
