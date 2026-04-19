"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
import SuccessModal from "@/components/ui/success-modal";
import { Button } from "@/components/ui/button";
import { Field, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { ROUTES } from "@/lib/constant";
import { Label } from "@/components/ui/label";
import { SectionReveal, FadeInUp, FadeIn } from "@/components/motion";

const footerFormSchema = z.object({
  email: z.email("Enter a valid email address."),
});

type FooterFormValues = z.infer<typeof footerFormSchema>;

const quickNavlinks = [
  { label: "Home", href: ROUTES.HOME },
  { label: "About", href: ROUTES.ABOUT },
  { label: "Speaking", href: ROUTES.CONTACT },
  { label: "Gallery", href: ROUTES.GALLERY },
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
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState(
    "Thank you. You are now subscribed.",
  );

  const form = useForm<FooterFormValues>({
    resolver: zodResolver(footerFormSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: FooterFormValues) {
    form.clearErrors("email");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: values.email,
        }),
      });

      const result = (await response.json().catch(() => null)) as {
        ok?: boolean;
        message?: string;
      } | null;

      if (!response.ok || !result?.ok) {
        form.setError("email", {
          type: "manual",
          message:
            result?.message ??
            (response.status === 409
              ? "This email is already subscribed."
              : "Something went wrong. Please try again."),
        });
        return;
      }

      setSuccessMessage(result.message ?? "Thank you. You are now subscribed.");
      setIsSuccessModalOpen(true);
      form.reset();
    } catch {
      form.setError("email", {
        type: "manual",
        message: "Network error. Please try again shortly.",
      });
    }
  }

  return (
    <footer className="pb-12 section-padding-x xl:px-28 2xl:max-w-[1920px] 2xl:mx-auto">
      <SectionReveal>
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
      </SectionReveal>

      <section className="grid grid-cols-1 gap-12 lg:grid-cols-[1.5fr_1fr]">
        <FadeInUp>
          <form className="" onSubmit={form.handleSubmit(onSubmit)} noValidate>
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field className="mb-12" data-invalid={fieldState.invalid}>
                  <Input
                    {...field}
                    id="footer-email"
                    type="email"
                    placeholder=""
                    autoComplete="email"
                    aria-invalid={fieldState.invalid}
                  />
                  <Label floating required htmlFor="footer-email">
                    Email Address
                  </Label>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Button
              type="submit"
              className="w-full"
              loading={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? "Sending..." : "Send me a note"}
            </Button>
          </form>
        </FadeInUp>
        <FadeInUp delay={0.15}>
          <div>
            <h3 className="text-2xl font-bold text-tertiary-50 mb-6 md:text-3xl">
              Let&apos;s start the conversation.
            </h3>
            <p className="text-tertiary-700 md:text-lg">
              Ready to bring depth and connection to your next event? I&apos;d
              love to hear from you.
            </p>
          </div>
        </FadeInUp>
        <FadeInUp delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link
              href={`mailto:${contactInfo?.email || "StephGeorge@gmail.com"}`}
              className="inline-flex items-center justify-center bg-primary-400/30 hover:bg-primary-400/40 text-tertiary-700 py-4 px-7 transition-colors duration-200"
            >
              {contactInfo?.email || "StephGeorge@gmail.com"}
            </Link>
            <Link
              href={`tel:${contactInfo?.phone || "+12362342810"}`}
              className="inline-flex items-center justify-center bg-primary-400/30 hover:bg-primary-400/40 text-tertiary-700 py-4 px-7 transition-colors duration-200"
            >
              {contactInfo?.phone || "+1(236)2342810"}
            </Link>
          </div>
        </FadeInUp>
        <FadeIn>
          <ul className="flex flex-col items-center gap-10 mb-10 md:mb-8 md:flex-row md:gap-8 lg:justify-end ">
            {quickNavlinks.map((item) => (
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
        </FadeIn>
      </section>

      <FadeIn>
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col items-center gap-4 text-sm text-tertiary-700 md:flex-row md:justify-between md:gap-6">
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

      <SuccessModal
        open={isSuccessModalOpen}
        onOpenChange={setIsSuccessModalOpen}
        title="Subscription successful"
        message={successMessage}
      />
    </footer>
  );
}
