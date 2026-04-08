"use client";

import {
  SectionReveal,
  FadeInUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion";

export default function BackstorySection() {
  return (
    <SectionReveal>
      <section className="section-padding-x">
        <div className="px-6 sm:px-10 bg-primary-400 lg:px-14 py-18">
          <FadeInUp>
            <h2 className="mb-6 text-2xl font-bold md:text-3xl text-tertiary-50">
              A little backstory
            </h2>
          </FadeInUp>
          <StaggerContainer className="space-y-6 text-tertiary-600 sm:text-lg md:text-xl">
            <StaggerItem>
              <p>
                Years ago, I was at an event when the program began to unravel.
                There was no script. The schedule had collapsed. The room was
                getting restless.
              </p>
            </StaggerItem>
            <StaggerItem>
              <p>
                In a moment that should have felt chaotic, I stepped in—and felt a
                deep sense of certainty. I realized that this was my assignment: to
                be the anchor. To hold the room together, even when the plans were
                falling apart.
              </p>
            </StaggerItem>
            <StaggerItem>
              <p>
                Since then, I have dedicated my voice to that purpose: bringing
                clarity and composure to environments that need both.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>
    </SectionReveal>
  );
}
