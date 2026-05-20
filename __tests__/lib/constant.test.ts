import { describe, it, expect } from "vitest";
import {
  ROUTES,
  PUBLIC_MAILING_ADDRESS,
  PUBLIC_ADDRESS_CITY,
  PUBLIC_ADDRESS_REGION,
  PUBLIC_ADDRESS_COUNTRY,
  PUBLIC_CONTACT_PHONE_E164,
  PUBLIC_CONTACT_PHONE_DISPLAY,
} from "@/lib/constant";

describe("ROUTES", () => {
  it("defines all expected route keys", () => {
    const expected = [
      "HOME",
      "ABOUT",
      "GALLERY",
      "PODCAST",
      "CONTACT",
      "PRIVACY_POLICY",
      "TERMS_OF_SERVICE",
      "UNSUBSCRIBE",
    ];
    expected.forEach((key) => {
      expect(ROUTES).toHaveProperty(key);
    });
  });

  it("all routes start with /", () => {
    Object.values(ROUTES).forEach((route) => {
      expect(route).toMatch(/^\//);
    });
  });

  it("HOME is /", () => {
    expect(ROUTES.HOME).toBe("/");
  });

  it("UNSUBSCRIBE is /unsubscribe", () => {
    expect(ROUTES.UNSUBSCRIBE).toBe("/unsubscribe");
  });
});

describe("PUBLIC_MAILING_ADDRESS", () => {
  it("is composed from city, region, and country constants", () => {
    expect(PUBLIC_MAILING_ADDRESS).toBe(
      `${PUBLIC_ADDRESS_CITY}, ${PUBLIC_ADDRESS_REGION}, ${PUBLIC_ADDRESS_COUNTRY}`,
    );
  });
});

describe("phone constants", () => {
  it("E164 format starts with +", () => {
    expect(PUBLIC_CONTACT_PHONE_E164).toMatch(/^\+/);
  });

  it("display format contains only digits, +, (, ), and -", () => {
    expect(PUBLIC_CONTACT_PHONE_DISPLAY).toMatch(/^[\d+() -]+$/);
  });
});
