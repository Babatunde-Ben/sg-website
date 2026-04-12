"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import PodcastImage from "@/app/_assets/images/portrait-4.jpg";
import {
  SectionReveal,
  StaggerContainer,
  StaggerItem,
  ScaleIn,
} from "@/components/motion";

export default function PodcastIntroSection() {
  return (
    <section className="section-padding-x my-20 md:my-24 lg:my-32f">
      <Separator className="my-20 bg-white/20" />

      <SectionReveal>
        <div className="border border-primary-400 px-4 py-16 sm:px-10 md:px-12 lg:py-20 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 ">
          <StaggerContainer>
            <StaggerItem>
              <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-tertiary-50 mb-6 lg:mb-8">
                Real Stories. Honest Reflection. Always With Love.
              </h2>
            </StaggerItem>
            <StaggerItem>
              <p className="text-tertiary-600 sm:text-lg md:text-xl mb-6 lg:mb-8">
                Faith with questions. Money with honesty. Relationships with
                complexity. Love with imperfections. This is a space to slow down,
                ask hard questions, and find the courage to be real—with yourself,
                with others, and with God.
              </p>
            </StaggerItem>
            <StaggerItem>
              <Button className="w-full sm:max-w-xs">
                Listen to the Latest Episode
              </Button>
            </StaggerItem>
          </StaggerContainer>

          <ScaleIn className="group relative w-full min-h-56 sm:min-h-72 md:min-h-80 h-full overflow-hidden">
            <Image placeholder="blur"
              src={PodcastImage}
              alt="Stephanie in studio"
              fill
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </ScaleIn>
        </div>
      </SectionReveal>
    </section>
  );
}
