import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { ROUTES } from "@/lib/constant";
import { verifyUnsubscribeToken } from "@/lib/unsubscribe-token";
import { checkSubscriptionStatus } from "@/lib/newsletter-status";
import UnsubscribeClient from "@/app/_components/unsubscribe/UnsubscribeClient";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Unsubscribe",
    description:
      "Unsubscribe from the Stephanie George newsletter.",
    path: ROUTES.UNSUBSCRIBE,
  }),
  robots: { index: false, follow: false },
};

export default async function UnsubscribePage({
  searchParams,
}: {
  searchParams: Promise<{ email?: string; token?: string; state?: string }>;
}) {
  const { email, token, state } = await searchParams;
  const isValid =
    !!email && !!token && verifyUnsubscribeToken(email, token);

  let startDone = state === "done";
  if (isValid && !startDone) {
    const status = await checkSubscriptionStatus(email!);
    if (status === "not_subscribed") {
      startDone = true;
    }
  }

  return (
    <section className="pt-40 pb-24 section-padding-x xl:px-28">
      <div className="max-w-xl mx-auto">
        <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-tertiary-600 text-center">
          Newsletter
        </p>

        <div
          className="flex items-center justify-center gap-3 mt-5"
          aria-hidden
        >
          <span className="block h-px w-8 bg-tertiary-800/40" />
          <span className="block h-1.5 w-1.5 rotate-45 bg-tertiary-500" />
          <span className="block h-px w-8 bg-tertiary-800/40" />
        </div>

        <h1 className="mt-6 text-3xl font-bold text-tertiary-50 text-center md:text-4xl lg:text-5xl tracking-tight">
          Unsubscribe
        </h1>

        {isValid ? (
          <UnsubscribeClient
            email={email!}
            token={token!}
            initialDone={startDone}
          />
        ) : (
          <div className="mt-10 text-center">
            <p className="text-tertiary-500 leading-relaxed">
              This unsubscribe link is invalid or has expired.
            </p>
            <p className="mt-4 text-sm text-tertiary-700">
              If you are trying to unsubscribe, please use the link from the
              bottom of the most recent newsletter. If you keep running into
              this, contact{" "}
              <a
                href="mailto:hello@stephaniegeorge.co"
                className="underline hover:text-tertiary-400 transition-colors"
              >
                hello@stephaniegeorge.co
              </a>
              .
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
