"use client";

import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/motion";

export default function DepthSection() {
  const depthSectionItems = [
    "You need a host who can handle inevitable schedule changes with grace and composure.",
    "You want a voice of reason and kindness on the mic.",
    "You care about what people do after they leave the venue, not just how the event looked while it was happening.",
  ];
  return (
    <section className="pt-32 pb-10 section-padding-x lg:pt-44">
      <div className="max-w-5xl mx-auto text-center">
        <FadeInUp>
          <h3 className="text-3xl font-bold text-tertiary-50 mb-8 sm:text-4xl md:mb-10 md:text-5xl lg:text-6xl">
            You are looking for depth.
          </h3>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <p className="text-tertiary-700 sm:text-lg md:text-xl mb-18 max-w-2xl mx-auto md:mb-20">
            You have seen enough performances. Now you want authentic
            connection. You are probably here because:
          </p>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {depthSectionItems.map((item, index) => (
            <StaggerItem key={index}>
              <div className="border border-primary-400 h-full px-10 py-18 flex flex-col items-center justify-center min-h-56 transition-colors hover:bg-primary-700/20">
                <p className="text-tertiary-50 opacity-40 text-center md:text-lg lg:text-xl">
                  {item}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
