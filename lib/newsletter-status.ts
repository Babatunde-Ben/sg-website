type SubscriptionStatus = "subscribed" | "not_subscribed" | "unknown";

/**
 * Asks the Google Sheets Apps Script whether `email` is currently on the
 * subscriber list. Returns `"unknown"` if the webhook is unset, fails, or
 * returns an unexpected shape — the caller should treat that as "still
 * subscribed" so the user gets the normal confirm flow instead of being
 * locked out.
 */
export async function checkSubscriptionStatus(
  email: string,
): Promise<SubscriptionStatus> {
  const webhookUrl = process.env.GOOGLE_SHEETS_NEWSLETTER_WEBHOOK_URL;
  if (!webhookUrl) return "unknown";

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "status",
        email: email.trim().toLowerCase(),
      }),
      cache: "no-store",
      redirect: "follow",
    });

    const raw = await response.text();
    let data: { ok?: boolean; subscribed?: boolean } | null = null;
    try {
      data = raw ? JSON.parse(raw) : null;
    } catch {
      return "unknown";
    }

    if (data?.subscribed === true) return "subscribed";
    if (data?.subscribed === false) return "not_subscribed";
    return "unknown";
  } catch (err) {
    console.error("[newsletter-status] check failed:", err);
    return "unknown";
  }
}
