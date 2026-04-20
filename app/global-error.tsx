"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[app/global-error]", error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily:
            "'Albert Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          background: "#150800",
          color: "#faf5f1",
          padding: "24px",
        }}
      >
        <div style={{ maxWidth: 520, width: "100%", textAlign: "center" }}>
          <p
            style={{
              margin: 0,
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#bfa999",
            }}
          >
            Unexpected Error
          </p>

          <div
            aria-hidden
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              marginTop: 18,
            }}
          >
            <span
              style={{ width: 32, height: 1, background: "rgba(191,169,153,0.35)" }}
            />
            <span
              style={{
                width: 6,
                height: 6,
                background: "#e5cbb8",
                transform: "rotate(45deg)",
              }}
            />
            <span
              style={{ width: 32, height: 1, background: "rgba(191,169,153,0.35)" }}
            />
          </div>

          <h1
            style={{
              margin: "24px 0 12px",
              fontSize: 32,
              fontWeight: 700,
              letterSpacing: "-0.01em",
            }}
          >
            Something broke
          </h1>
          <p
            style={{
              margin: 0,
              color: "#e5cbb8",
              lineHeight: 1.7,
              fontSize: 16,
            }}
          >
            A critical error prevented the page from rendering. Please reload
            or try again shortly.
          </p>

          {error?.digest ? (
            <p
              style={{
                marginTop: 12,
                fontSize: 12,
                color: "#99877b",
              }}
            >
              Reference: {error.digest}
            </p>
          ) : null}

          <button
            type="button"
            onClick={reset}
            style={{
              marginTop: 32,
              padding: "14px 28px",
              background: "#e5cbb8",
              color: "#150800",
              border: "none",
              cursor: "pointer",
              fontWeight: 600,
              fontSize: 14,
              letterSpacing: "0.02em",
            }}
          >
            Reload
          </button>
        </div>
      </body>
    </html>
  );
}
