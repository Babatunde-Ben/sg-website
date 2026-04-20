"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/constant";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[app/error]", error);
  }, [error]);

  return (
    <section className="section-padding-x pt-40 pb-24 min-h-[60vh]">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-tertiary-600">
          Something went wrong
        </p>

        <div
          aria-hidden
          className="flex items-center justify-center gap-3 mt-5"
        >
          <span className="block h-px w-8 bg-tertiary-800/40" />
          <span className="block h-1.5 w-1.5 rotate-45 bg-tertiary-500" />
          <span className="block h-px w-8 bg-tertiary-800/40" />
        </div>

        <h1 className="mt-6 text-3xl font-bold text-tertiary-50 md:text-4xl lg:text-5xl tracking-tight">
          We hit a snag
        </h1>
        <p className="mt-6 text-tertiary-500 leading-relaxed md:text-lg">
          Something unexpected happened while loading this page. Please try
          again in a moment.
        </p>

        {error?.digest ? (
          <p className="mt-3 text-xs text-tertiary-700">
            Reference: {error.digest}
          </p>
        ) : null}

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button type="button" onClick={reset} className="w-full sm:w-auto">
            Try again
          </Button>
          <Link href={ROUTES.HOME}>
            <Button
              type="button"
              variant="outline"
              className="w-full sm:w-auto"
            >
              Go to homepage
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
