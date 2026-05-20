import { describe, it, expect } from "vitest";
import { parseNotificationRecipients } from "@/lib/notification-recipients";

describe("parseNotificationRecipients", () => {
  it("returns empty array for undefined input", () => {
    expect(parseNotificationRecipients(undefined)).toEqual([]);
  });

  it("returns empty array for empty string", () => {
    expect(parseNotificationRecipients("")).toEqual([]);
  });

  it("returns empty array for whitespace-only string", () => {
    expect(parseNotificationRecipients("   ")).toEqual([]);
  });

  it("parses a single valid email", () => {
    expect(parseNotificationRecipients("alice@example.com")).toEqual([
      "alice@example.com",
    ]);
  });

  it("parses multiple comma-separated emails", () => {
    expect(
      parseNotificationRecipients("alice@example.com, bob@example.com"),
    ).toEqual(["alice@example.com", "bob@example.com"]);
  });

  it("strips surrounding quotes from the whole value", () => {
    expect(
      parseNotificationRecipients('"alice@example.com, bob@example.com"'),
    ).toEqual(["alice@example.com", "bob@example.com"]);
  });

  it("strips per-entry quotes", () => {
    expect(
      parseNotificationRecipients('"alice@example.com", "bob@example.com"'),
    ).toEqual(["alice@example.com", "bob@example.com"]);
  });

  it("strips single quotes from entries", () => {
    expect(parseNotificationRecipients("'alice@example.com'")).toEqual([
      "alice@example.com",
    ]);
  });

  it("drops invalid email addresses", () => {
    expect(
      parseNotificationRecipients("invalid, @nodomain, alice@example.com"),
    ).toEqual(["alice@example.com"]);
  });

  it("deduplicates case-insensitively", () => {
    expect(
      parseNotificationRecipients(
        "Alice@Example.com, alice@example.com, ALICE@EXAMPLE.COM",
      ),
    ).toEqual(["Alice@Example.com"]);
  });

  it("preserves original casing of the first occurrence", () => {
    const result = parseNotificationRecipients(
      "Alice@Example.com, alice@example.com",
    );
    expect(result[0]).toBe("Alice@Example.com");
  });

  it("caps output at 10 recipients", () => {
    const emails = Array.from(
      { length: 15 },
      (_, i) => `user${i}@example.com`,
    ).join(", ");
    expect(parseNotificationRecipients(emails)).toHaveLength(10);
  });

  it("trims whitespace around each entry", () => {
    expect(
      parseNotificationRecipients(
        "  alice@example.com  ,  bob@example.com  ",
      ),
    ).toEqual(["alice@example.com", "bob@example.com"]);
  });

  it("handles entries with only whitespace between commas", () => {
    expect(
      parseNotificationRecipients("alice@example.com,  ,bob@example.com"),
    ).toEqual(["alice@example.com", "bob@example.com"]);
  });
});
