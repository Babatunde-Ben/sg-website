"use client";

import Link from "next/link";
import {
  PUBLIC_CONTACT_EMAIL,
  PUBLIC_CONTACT_PHONE_DISPLAY,
  PUBLIC_CONTACT_PHONE_E164,
  ROUTES,
} from "@/lib/constant";
import { FadeInUp, FadeIn } from "@/components/motion";

const quickNavlinks = [
  { label: "Home", href: ROUTES.HOME },
  { label: "About", href: ROUTES.ABOUT },
  { label: "Gallery", href: ROUTES.GALLERY },
  { label: "Podcast", href: ROUTES.PODCAST },
];

const legalLinks = [
  { label: "Privacy Policy", href: ROUTES.PRIVACY_POLICY },
  { label: "Terms of Service", href: ROUTES.TERMS_OF_SERVICE },
];
export interface ContactInfo {
  phone?: string | null;
  email?: string | null;
}

interface FooterProps {
  contactInfo?: ContactInfo | null;
}

export default function Footer({ contactInfo }: FooterProps) {
  return (
    <footer className="pb-12 section-padding-x xl:px-28 w-full max-w-[1536px] mx-auto bg-primary-700 py-14 sm:py-16 md:py-20 lg:py-32">
      <section className="grid grid-cols-1 gap-12 lg:grid-cols-[1.5fr_1fr]">
        <FadeInUp delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link
              href={`mailto:${contactInfo?.email || PUBLIC_CONTACT_EMAIL}`}
              className="inline-flex items-center justify-center bg-white/5 hover:bg-primary-400/40 text-tertiary-700 py-4 px-7 transition-colors duration-200"
            >
              {contactInfo?.email || PUBLIC_CONTACT_EMAIL}
            </Link>
            <Link
              href={`tel:${contactInfo?.phone || PUBLIC_CONTACT_PHONE_E164}`}
              className="inline-flex items-center justify-center bg-white/5 hover:bg-primary-400/40 text-tertiary-700 py-4 px-7 transition-colors duration-200"
            >
              {contactInfo?.phone || PUBLIC_CONTACT_PHONE_DISPLAY}
            </Link>
          </div>
        </FadeInUp>
        <FadeIn className="flex items-center">
          <ul className="w-full flex flex-col items-center gap-10 mb-10 md:mb-8 sm:flex-row md:gap-8 lg:justify-end lg:mb-0">
            {quickNavlinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-lg font-medium text-tertiary-50 hover:text-tertiary-400 transition-colors xl:text-xl"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </FadeIn>
      </section>

      <FadeIn>
        <div className="mt-16 pt-8f border-tf border-white/10f flex flex-col items-center gap-4 text-sm text-tertiary-700 md:flex-row md:justify-between md:gap-6 md:text-base">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Stephanie George. All rights
            reserved.
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:justify-end">
            {legalLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-tertiary-400 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>
    </footer>
  );
}
