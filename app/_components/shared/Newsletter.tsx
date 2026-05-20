"use client";

import Image from "next/image";
import { useReducedMotion } from "motion/react";
import { FadeInUp, SectionReveal } from "@/components/motion";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Field, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import SuccessModal from "@/components/ui/success-modal";
import NewsletterImage from "@/app/_assets/images/portrait-3.jpg";

const footerFormSchema = z.object({
  email: z.email("Enter a valid email address."),
});

type FooterFormValues = z.infer<typeof footerFormSchema>;

export default function Newsletter() {
  const shouldReduceMotion = useReducedMotion();
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
    <>
      <SectionReveal>
        <section className="md:px-16 lg:px-20 pb-24 md:pb-32">
          <div className="bg-white/4 px-6 py-12 md:px-14 flex flex-col-reverse lg:flex-row items-center gap-12 lg:py-22 lg:px-16">
            <FadeInUp className="w-full text-center sm:text-left" delay={0.1}>
              <h3 className="text-2xl md:text-3xl font-bold text-tertiary-400 mb-6 md:mb-8 lg:text-4xl">
                Words for the Journey
              </h3>
              <p className="text-secondary-400 md:text-lg mb-16 xl:mb-20">
                I send a note bi-weekly with thoughts on what it means to live
                with integrity and to navigate life with grace. It is a space
                for honest reflection and a moment to find language for what
                matters most.
              </p>
              <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
                <Controller
                  name="email"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field className="mb-8" data-invalid={fieldState.invalid}>
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
                  loading={form.formState.isSubmitting}
                  className="w-full"
                >
                  {form.formState.isSubmitting ? "Sending..." : "Send me a note"}
                </Button>
              </form>
            </FadeInUp>

            <FadeInUp className="w-full group" delay={0.2}>
              <div className="relative w-full h-[280px] overflow-hidden sm:h-[400px]">
                <Image
                  src={NewsletterImage}
                  alt="Stephanie George speaking with a microphone"
                  fill
                  placeholder="blur"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className={`object-cover transition-transform duration-500 ease-in-out ${shouldReduceMotion ? "" : "group-hover:scale-105"}`}
                />
              </div>
            </FadeInUp>
          </div>
        </section>
      </SectionReveal>
      <SuccessModal
        open={isSuccessModalOpen}
        onOpenChange={setIsSuccessModalOpen}
        title="Subscription successful"
        message={successMessage}
      />
    </>
  );
}
