import { createHmac, timingSafeEqual } from "crypto";
import { absoluteUrl } from "@/lib/seo";
import { ROUTES } from "@/lib/constant";

function getSecret(): string {
  const secret = process.env.NEWSLETTER_UNSUBSCRIBE_SECRET;
  if (!secret || secret.length < 16) {
    throw new Error(
      "NEWSLETTER_UNSUBSCRIBE_SECRET is not set or too short (need ≥16 chars).",
    );
  }
  return secret;
}

function normalize(email: string) {
  return email.trim().toLowerCase();
}

export function signUnsubscribeToken(email: string): string {
  return createHmac("sha256", getSecret())
    .update(normalize(email))
    .digest("base64url");
}

export function verifyUnsubscribeToken(
  email: string,
  token: string,
): boolean {
  if (!email || !token) return false;
  let expected: Buffer;
  let provided: Buffer;
  try {
    expected = Buffer.from(signUnsubscribeToken(email), "base64url");
    provided = Buffer.from(token, "base64url");
  } catch {
    return false;
  }
  if (expected.length !== provided.length) return false;
  return timingSafeEqual(expected, provided);
}

export function buildUnsubscribeUrl(email: string): string {
  const token = signUnsubscribeToken(email);
  const url = new URL(absoluteUrl(ROUTES.UNSUBSCRIBE));
  url.searchParams.set("email", normalize(email));
  url.searchParams.set("token", token);
  return url.toString();
}
