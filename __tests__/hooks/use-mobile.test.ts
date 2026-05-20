import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useIsMobile } from "@/hooks/use-mobile";

function setupMatchMedia(matches: boolean) {
  const listeners: Array<(e: { matches: boolean }) => void> = [];
  const mql = {
    matches,
    addEventListener: vi.fn((_: string, cb: (e: { matches: boolean }) => void) => {
      listeners.push(cb);
    }),
    removeEventListener: vi.fn((_: string, cb: (e: { matches: boolean }) => void) => {
      const idx = listeners.indexOf(cb);
      if (idx > -1) listeners.splice(idx, 1);
    }),
    dispatchEvent: vi.fn(),
    _fire: (newMatches: boolean) => {
      listeners.forEach((cb) => cb({ matches: newMatches }));
    },
  };

  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn(() => mql),
  });

  return mql;
}

beforeEach(() => {
  Object.defineProperty(window, "innerWidth", { writable: true, value: 1024 });
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe("useIsMobile", () => {
  it("returns false on desktop (innerWidth >= 768)", () => {
    Object.defineProperty(window, "innerWidth", { writable: true, value: 1024 });
    setupMatchMedia(false);
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(false);
  });

  it("returns true on mobile (innerWidth < 768)", () => {
    Object.defineProperty(window, "innerWidth", { writable: true, value: 375 });
    setupMatchMedia(true);
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(true);
  });

  it("updates when viewport crosses the mobile breakpoint", () => {
    Object.defineProperty(window, "innerWidth", { writable: true, value: 1024 });
    const mql = setupMatchMedia(false);
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(false);

    act(() => {
      Object.defineProperty(window, "innerWidth", { writable: true, value: 375 });
      mql._fire(true);
    });

    expect(result.current).toBe(true);
  });

  it("removes the matchMedia listener on unmount", () => {
    setupMatchMedia(false);
    const { unmount } = renderHook(() => useIsMobile());
    const mql = (window.matchMedia as ReturnType<typeof vi.fn>).mock.results[0].value;
    unmount();
    expect(mql.removeEventListener).toHaveBeenCalledOnce();
  });
});
