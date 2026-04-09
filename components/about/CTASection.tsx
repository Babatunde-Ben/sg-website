"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/constant";
import {
  SectionReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion";

export default function CTASection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionReveal>
      <section className="section-padding-x mb-40 mt-20 md:mt-24 lg:mt-36 lg:mb-60">
        <div className="px-6 py-24 border border-primary-400  xl:py-28">
          <StaggerContainer className="max-w-5xl mx-auto text-center">
            <StaggerItem>
              <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-tertiary-50 mb-8">
                Let&apos;s create something meaningful.
              </h2>
            </StaggerItem>
            <StaggerItem>
              <p className="text-tertiary-600 sm:text-lg lg:text-xl mb-8 max-w-3xl mx-auto">
                If you are planning an event and you care about how people speak
                to each other during and after it, I would love to hear more.
              </p>
            </StaggerItem>
            <StaggerItem>
              <Link href={ROUTES.CONTACT}>
                <Button className="w-full sm:max-w-60">Submit Inquiry</Button>
              </Link>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>
    </SectionReveal>
  );
}
