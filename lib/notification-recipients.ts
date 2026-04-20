const MAX_RECIPIENTS = 10;

/**
 * Parses `CONTACT_EMAIL_TO`: one address or several separated by commas.
 * Trims whitespace, drops empties, dedupes case-insensitively, caps count.
 */
export function parseNotificationRecipients(
  raw: string | undefined,
): string[] {
  if (!raw?.trim()) return [];
  const seen = new Set<string>();
  const out: string[] = [];
  for (const part of raw.split(",")) {
    const trimmed = part.trim();
    if (!trimmed) continue;
    const key = trimmed.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(trimmed);
    if (out.length >= MAX_RECIPIENTS) break;
  }
  return out;
}
