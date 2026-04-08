"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import HostingImage from "@/app/_assets/images/portrait-6.jpg";
import SpeakingImage from "@/app/_assets/images/portrait-7.jpg";
import CheckMarkCircle01 from "@/app/_assets/SVGs/checkmark-circle-01.svg";
import { ROUTES } from "@/lib/constant";
import {
  FadeInUp,
  ScaleIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion";

export default function WhatIDoSection() {
  const whatIDoItems = [
    "Unlock new ways of thinking.",
    "Gain perspective on what matters.",
    "Leave equipped for what comes next.",
  ];
  return (
    <section className="section-padding-x">
      <FadeInUp>
        <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-center text-tertiary-50 mb-10 sm:mb-14 md:mb-16 lg:mb-20">
          What I Do
        </h2>
      </FadeInUp>

      {/* Hosting & Moderation */}
      <div className="grid grid-cols-1 mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-20 xl:grid-cols-2 ">
        <ScaleIn className="group w-full relative min-h-80 sm:min-h-96 md:min-h-128 xl:min-h-full overflow-hidden">
          <Image
            src={HostingImage}
            alt="Stephanie Hosting & Moderating"
            fill
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
        </ScaleIn>
        <FadeInUp delay={0.15}>
          <div className="bg-primary-400 px-4 py-14 sm:px-8 md:px-10 md:py-16 lg:px-19 lg:py-24">
            <h3 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-tertiary-50 mb-6">
              Hosting & Moderation
            </h3>
            <p className="text-tertiary-600 sm:text-lg mb-6 sm:mb-10 lg:text-xl">
              A great event feels effortless. As your Host, I am there to unify
              the different parts of your program into a single, wholesome
              experience.
            </p>
            <p className="text-tertiary-600 sm:text-lg mb-6 sm:mb-12 md:mb-16 lg:text-xl lg:mb-20">
              I keep the energy focused. I guide the transitions with warmth. I
              ensure that every speaker feels supported and every attendee feels
              included.
            </p>
            <Link href={ROUTES.CONTACT}>
              <Button className="w-full sm:max-w-2xs ">Let&apos;s Chat</Button>
            </Link>
          </div>
        </FadeInUp>
      </div>

      {/* Speaker */}
      <FadeInUp>
        <div className="px-6 py-16 border border-primary-400 sm:px-10 md:px-12 lg:px-14 xl:px-18 xl:py-20">
          <div className="grid grid-cols-1 gap-20 xl:grid-cols-2 ">
            <div>
              <FadeInUp>
                <h3 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-tertiary-50 mb-6 md:mb-10 xl:mb-12">
                  What happens when I take the stage as a speaker?
                </h3>
              </FadeInUp>
              <FadeInUp delay={0.1}>
                <p className="text-tertiary-600 sm:text-lg mb-6 sm:mb-10 lg:text-xl">
                  When I enter a room, I create an environment where people feel
                  seen and challenged to grow.
                </p>
              </FadeInUp>
              <FadeInUp delay={0.15}>
                <p className="text-tertiary-600 sm:text-lg mb-12 md:mb-8 lg:text-xl">
                  I use storytelling and clear language to help your audience:
                </p>
              </FadeInUp>
              <StaggerContainer>
                <ul className="space-y-6">
                  {whatIDoItems.map((item, index) => (
                    <StaggerItem key={index}>
                      <li className="flex items-center gap-4 text-tertiary-600">
                        <CheckMarkCircle01 className=" shrink-0 size-6 lg:size-8" />
                        <p className=" sm:text-lg xl:text-xl ">{item}</p>
                      </li>
                    </StaggerItem>
                  ))}
                </ul>
              </StaggerContainer>
            </div>
            <ScaleIn className="group w-full relative min-h-80 sm:min-h-96 md:min-h-128 xl:min-h-full overflow-hidden">
              <Image
                src={SpeakingImage}
                alt="Stephanie speaking"
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
            </ScaleIn>
          </div>
        </div>
      </FadeInUp>
    </section>
  );
}
