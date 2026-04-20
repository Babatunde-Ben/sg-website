#!/usr/bin/env node
/**
 * Appends an `unsubscribe_url` column to a CSV of subscribers.
 *
 * Usage:
 *   pnpm newsletter:urls <input.csv> [output.csv]
 *
 * - Reads <input.csv>. Assumes either (a) a header row with an "email" column,
 *   or (b) no header and the first column is the email address.
 * - Signs a tamper-proof HMAC token per email using NEWSLETTER_UNSUBSCRIBE_SECRET.
 * - Writes the augmented CSV to <output.csv> if given, otherwise stdout.
 *
 * The resulting `unsubscribe_url` value is the one to drop into the footer of
 * each campaign in whatever cold-mailing platform you use, via a merge tag.
 */

import { createHmac } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";

const SECRET = process.env.NEWSLETTER_UNSUBSCRIBE_SECRET;
const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL?.trim() || "https://www.stephaniegeorge.co";

if (!SECRET || SECRET.length < 16) {
  console.error(
    "NEWSLETTER_UNSUBSCRIBE_SECRET is not set or too short.\n" +
      "Run with: node --env-file=.env scripts/generate-unsubscribe-urls.mjs ...\n" +
      "Or use the pnpm script: pnpm newsletter:urls <input.csv> [output.csv]",
  );
  process.exit(1);
}

const [, , inputPath, outputPath] = process.argv;
if (!inputPath) {
  console.error(
    "Usage: pnpm newsletter:urls <input.csv> [output.csv]",
  );
  process.exit(1);
}

function normalize(email) {
  return String(email ?? "").trim().toLowerCase();
}

function buildUrl(email) {
  const normalized = normalize(email);
  const token = createHmac("sha256", SECRET)
    .update(normalized)
    .digest("base64url");
  const base = BASE_URL.replace(/\/$/, "");
  const cleanBase = /^https?:\/\//i.test(base) ? base : `https://${base}`;
  return `${cleanBase}/unsubscribe?email=${encodeURIComponent(
    normalized,
  )}&token=${token}`;
}

function isEmail(s) {
  return typeof s === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.trim());
}

// Minimal RFC-4180 CSV parser: handles quoted fields, escaped quotes, CRLF.
function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += c;
      }
      continue;
    }
    if (c === '"') {
      inQuotes = true;
    } else if (c === ",") {
      row.push(field);
      field = "";
    } else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++;
      row.push(field);
      if (!(row.length === 1 && row[0] === "")) rows.push(row);
      row = [];
      field = "";
    } else {
      field += c;
    }
  }
  if (field !== "" || row.length) {
    row.push(field);
    if (!(row.length === 1 && row[0] === "")) rows.push(row);
  }
  return rows;
}

function toCsv(rows) {
  return (
    rows
      .map((r) =>
        r
          .map((f) => {
            if (f == null) return "";
            const s = String(f);
            return /[",\n\r]/.test(s)
              ? `"${s.replace(/"/g, '""')}"`
              : s;
          })
          .join(","),
      )
      .join("\n") + "\n"
  );
}

const text = readFileSync(inputPath, "utf8");
const rows = parseCsv(text);

if (rows.length === 0) {
  console.error("Input CSV is empty.");
  process.exit(1);
}

const header = rows[0];
const headerHasEmailCol = header.some(
  (h) => typeof h === "string" && /^email$/i.test(h.trim()),
);
const emailIdx = headerHasEmailCol
  ? header.findIndex((h) => /^email$/i.test(String(h).trim()))
  : 0;
const firstCellLooksLikeEmail = isEmail(header[0]);
const hasHeader = headerHasEmailCol || !firstCellLooksLikeEmail;

let outRows;
let skipped = 0;

if (hasHeader) {
  const newHeader = [...header, "unsubscribe_url"];
  const dataRows = rows.slice(1).map((r) => {
    const email = r[emailIdx];
    if (!isEmail(email)) {
      skipped++;
      return [...r, ""];
    }
    return [...r, buildUrl(email)];
  });
  outRows = [newHeader, ...dataRows];
} else {
  outRows = rows.map((r) => {
    const email = r[0];
    if (!isEmail(email)) {
      skipped++;
      return [...r, ""];
    }
    return [...r, buildUrl(email)];
  });
}

const output = toCsv(outRows);
const rowCount = outRows.length - (hasHeader ? 1 : 0);

if (outputPath) {
  writeFileSync(outputPath, output);
  console.error(
    `Wrote ${rowCount - skipped} rows to ${outputPath}` +
      (skipped > 0 ? ` (${skipped} rows had invalid emails, left blank).` : "."),
  );
} else {
  process.stdout.write(output);
  if (skipped > 0) {
    console.error(
      `Note: ${skipped} rows had invalid emails and got a blank unsubscribe_url.`,
    );
  }
}
