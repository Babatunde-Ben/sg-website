"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ROUTES } from "@/lib/constant";
import { Label } from "@/components/ui/label";

const footerNavItems = [
  { label: "Home", href: ROUTES.HOME },
  { label: "About", href: ROUTES.ABOUT },
  { label: "Speaking", href: ROUTES.CONTACT },
  { label: "Gallery", href: ROUTES.GALLERY },
];

export default function Footer() {
  return (
    <footer className="pb-12 section-padding-x xl:px-28">
      <div className="mx-auto bg-white/4 px-6 py-12 text-center mb-16 md:px-14 lg:px-16">
        <h3 className="text-2xl md:text-3xl font-bold text-tertiary-400 mb-6 md:mb-10 lg:text-4xl">
          Words for the Journey
        </h3>
        <p className="text-secondary-300 md:text-lg ">
          I send a note bi-weekly with thoughts on what it means to live with
          integrity and to navigate life with grace. It is a space for honest
          reflection and a moment to find language for what matters most.
        </p>
      </div>

      <section className="grid grid-cols-1 gap-12 lg:grid-cols-[1.5fr_1fr]">
        <form className="" onSubmit={(e) => e.preventDefault()}>
          <div className="mb-12">
            <Label htmlFor="footer-email">Email Address</Label>
            <Input id="footer-email" type="email" placeholder="" />
          </div>
          <Button type="submit" className="w-full">
            Send me a note
          </Button>
        </form>
        <div>
          <h3 className="text-2xl font-bold text-tertiary-50 mb-6 md:text-3xl">
            Let’s start the conversation.
          </h3>
          <p className="text-tertiary-700 md:text-lg">
            Ready to bring depth and connection to your next event? I’d love to
            hear from you.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <Link
            href="mailto:StephGeorge@gmail.com"
            className="inline-flex items-center justify-center bg-primary-400/30 hover:bg-primary-400/40 text-tertiary-700 py-4 px-7 transition-colors duration-200"
          >
            StephGeorge@gmail.com
          </Link>
          <Link
            href="tel:+12362342810"
            className="inline-flex items-center justify-center bg-primary-400/30 hover:bg-primary-400/40 text-tertiary-700 py-4 px-7 transition-colors duration-200"
          >
            +1(236)2342810
          </Link>
        </div>
        <ul className="flex flex-col items-center gap-10 md:flex-row md:gap-8 lg:justify-end ">
          {footerNavItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-lg font-medium text-tertiary-50 hover:text-tertiary-400 transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </footer>
  );
}
