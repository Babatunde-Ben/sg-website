import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/constant";

export default function CTASection() {
  return (
    <section className="section-padding-x mb-40 mt-20 md:mt-24 lg:mt-36 lg:mb-60">
      <div className="px-6 py-24 border border-primary-400  xl:py-28">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-tertiary-50 mb-8">
            Let's create something meaningful.
          </h2>
          <p className="text-tertiary-600 sm:text-lg lg:text-xl mb-8 max-w-3xl mx-auto">
            If you are planning an event and you care about how people speak to
            each other during and after it, I would love to hear more.
          </p>
          <Link href={ROUTES.CONTACT}>
            <Button className="w-full sm:max-w-60">Submit Inquiry</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
