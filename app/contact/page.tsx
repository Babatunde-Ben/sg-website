"use client";

import { motion, useReducedMotion } from "motion/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Field, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import SpeakingImage from "@/app/_assets/images/portrait-7.jpg";
import Phone from "@/app/_assets/SVGs/call-02.svg";
import Mail from "@/app/_assets/SVGs/mail-01.svg";
import Globe from "@/app/_assets/SVGs/earth.svg";
import Link from "next/link";
import LinkedIn from "@/app/_assets/SVGs/linkedin.svg";
import Instagram from "@/app/_assets/SVGs/instagram.svg";
import X from "@/app/_assets/SVGs/x.svg";
import {
  FadeInUp,
  FadeIn,
  ScaleIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion";
import { transitions } from "@/lib/motion";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required."),
  email: z.email("Enter a valid email address."),
  phone: z.string().optional(),
  organization: z.string().optional(),
  message: z.string().min(10, "Message should be at least 10 characters."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();

  const socialLinks = [
    {
      href: "https://x.com",
      icon: X,
      label: "X (formerly Twitter)",
    },
    {
      href: "https://www.instagram.com",
      icon: Instagram,
      label: "Instagram",
    },
    {
      href: "https://www.linkedin.com",
      icon: LinkedIn,
      label: "LinkedIn",
    },
  ];
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      organization: "",
      message: "",
    },
  });

  function onSubmit(_values: ContactFormValues) {}

  return (
    <>
      {/* Header Section */}
      <section className="section-padding-x mt-36 mb-16 md:mb-20 lg:mt-40 lg:mb-22">
        <FadeInUp>
          <h1 className="text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-tertiary-50 mb-8">
            Bookings & Collaborations
          </h1>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <p className="text-center text-tertiary-600 mb-12 sm:mb-14 sm:text-lg md:text-xl md:max-w-2xl md:mx-auto md:mb-16 lg:mb-22 ">
            For hosting & speaking engagements, workshops, and thoughtful
            collaborations, I would love to have a conversation with you.
          </p>
        </FadeInUp>
        <ScaleIn>
          <div className="group relative w-full h-[40vh] md:h-[60vh] max-h-[400px] overflow-hidden">
            <Image
              src={SpeakingImage}
              alt="Stephanie speaking at event"
              fill
              className="object-cover object-[10%_20%] transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </div>
        </ScaleIn>
      </section>

      {/* Contact Content Section */}
      <section className="mb-32 section-padding-x">
        <div className="mb-40 grid grid-cols-1 gap-10 lg:grid-cols-[40%_60%] lg:mb-60">
          {/* Left: Contact Info Snippet */}
          <StaggerContainer className="border border-primary-400 px-20 py-14 space-y-12 md:py-16 lg:space-y-16 lg:py-18 xl:px-32">
            <StaggerItem>
              <div className="flex flex-col items-center lg:items-start">
                <p className="flex items-center gap-4 text-tertiary-500 mb-4">
                  <Phone className="size-6" />
                  <span className="font-medium sm:text-lg md:text-xl">
                    Phone Number
                  </span>
                </p>
                <p className="text-primary-300 sm:text-lg md:text-xl">
                  +234 900 234 5678
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="flex flex-col items-center lg:items-start">
                <p className="flex items-center gap-4 text-tertiary-500 mb-4">
                  <Mail className="size-6" />
                  <span className="font-medium sm:text-lg md:text-xl">
                    Email Address
                  </span>
                </p>
                <p className="text-primary-300 sm:text-lg md:text-xl">
                  StephGeorge@gmail.com
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="flex flex-col items-center lg:items-start">
                <p className="flex items-center gap-4 text-tertiary-500 mb-4">
                  <Globe className="size-6" />
                  <span className="font-medium sm:text-lg md:text-xl">
                    Social Media
                  </span>
                </p>
                <div className="flex items-center gap-1.5 ">
                  {socialLinks.map((link) => (
                    <motion.div
                      key={link.href}
                      whileHover={
                        shouldReduceMotion
                          ? undefined
                          : { y: -2, transition: transitions.hover }
                      }
                    >
                      <Link
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="size-8 rounded-full bg-primary-400 flex items-center justify-center text-tertiary-400 hover:bg-primary-400/70 transition-colors"
                      >
                        <span className="sr-only">{link.label}</span>
                        <link.icon className="size-4" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* Right: Contact Form */}
          <FadeIn>
            <div className=" bg-white/4 px-8 py-14 sm:px-12 md:px-16 lg:px-20">
              <form
                className="space-y-12"
                onSubmit={form.handleSubmit(onSubmit)}
                noValidate
              >
                <Controller
                  name="name"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <Input
                        {...field}
                        id="name"
                        placeholder=""
                        autoComplete="name"
                        aria-invalid={fieldState.invalid}
                      />
                      <Label floating required htmlFor="name">
                        Full Name
                      </Label>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <Controller
                  name="email"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <Input
                        {...field}
                        id="email"
                        type="email"
                        placeholder=""
                        autoComplete="email"
                        aria-invalid={fieldState.invalid}
                      />
                      <Label floating required htmlFor="email">
                        Email Address
                      </Label>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <Controller
                  name="phone"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <Input
                        {...field}
                        id="phone"
                        type="tel"
                        placeholder=""
                        autoComplete="tel"
                        aria-invalid={fieldState.invalid}
                      />
                      <Label floating htmlFor="phone">
                        Phone Number
                      </Label>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <Controller
                  name="organization"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <Input
                        {...field}
                        id="organization"
                        placeholder=""
                        autoComplete="organization"
                        aria-invalid={fieldState.invalid}
                      />
                      <Label floating htmlFor="organization">
                        Organization
                      </Label>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <Controller
                  name="message"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <Textarea
                        {...field}
                        id="message"
                        placeholder=""
                        aria-invalid={fieldState.invalid}
                      />
                      <Label floating required htmlFor="message">
                        Message
                      </Label>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <div>
                  <Button type="submit" className="w-full">
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
