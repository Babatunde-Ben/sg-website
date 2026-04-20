const MAX_RECIPIENTS = 10;
const EMAIL_PATTERN = /^[^\s@"']+@[^\s@"']+\.[^\s@"']+$/;

/**
 * Parses `CONTACT_EMAIL_TO`: one address or several separated by commas.
 * Strips surrounding quotes/whitespace from each entry, drops anything that
 * isn't a well-formed email, dedupes case-insensitively, caps count.
 */
export function parseNotificationRecipients(
  raw: string | undefined,
): string[] {
  if (!raw?.trim()) return [];
  // Strip wrapping quotes on the whole value (env var pasted with quotes).
  const cleanedRaw = raw.trim().replace(/^["']|["']$/g, "");
  const seen = new Set<string>();
  const out: string[] = [];
  for (const part of cleanedRaw.split(",")) {
    const trimmed = part.trim().replace(/^["']|["']$/g, "").trim();
    if (!trimmed || !EMAIL_PATTERN.test(trimmed)) continue;
    const key = trimmed.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(trimmed);
    if (out.length >= MAX_RECIPIENTS) break;
  }
  return out;
}
