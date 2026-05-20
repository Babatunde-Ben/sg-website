import { describe, it, expect } from "vitest";
import { cn } from "@/lib/utils";

describe("cn", () => {
  it("returns a single class unchanged", () => {
    expect(cn("text-red-500")).toBe("text-red-500");
  });

  it("merges multiple classes", () => {
    expect(cn("px-4", "py-2", "text-sm")).toBe("px-4 py-2 text-sm");
  });

  it("deduplicates conflicting Tailwind utilities, keeping the last one", () => {
    expect(cn("px-4", "px-8")).toBe("px-8");
    expect(cn("text-red-500", "text-blue-500")).toBe("text-blue-500");
  });

  it("filters out falsy values", () => {
    expect(cn("px-4", undefined, null, false, "py-2")).toBe("px-4 py-2");
  });

  it("handles conditional object syntax", () => {
    expect(cn("base", { active: true, disabled: false })).toBe("base active");
  });

  it("handles arrays of classes", () => {
    expect(cn(["px-4", "py-2"], "text-sm")).toBe("px-4 py-2 text-sm");
  });

  it("returns empty string when all inputs are falsy", () => {
    expect(cn(undefined, null, false)).toBe("");
  });

  it("merges Tailwind padding shorthand over individual sides correctly", () => {
    expect(cn("p-4", "px-8")).toBe("p-4 px-8");
  });
});
