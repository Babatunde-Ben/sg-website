import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { ROUTES } from "@/lib/constant";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy",
  description:
    "How Stephanie George collects, uses, and protects your information.",
  path: ROUTES.PRIVACY_POLICY,
});

export default function PrivacyPolicyPage() {
  return (
    <section className="pt-40 pb-24 section-padding-x xl:px-28">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-tertiary-400 md:text-5xl lg:text-6xl">
          Privacy Policy
        </h1>
        <p className="mt-6 text-tertiary-700 md:text-lg">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>
      </div>
    </section>
  );
}
