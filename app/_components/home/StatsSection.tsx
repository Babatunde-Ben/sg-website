"use client";

import {
  SectionReveal,
  StaggerContainer,
  StaggerItem,
  AnimatedCounter,
} from "@/components/motion";

export interface GlobalStats {
  eventsWorldwide: number | null;
  peopleImpacted: number | null;
  yearsExperience: number | null;
}

interface StatsSectionProps {
  stats?: GlobalStats | null;
}

export default function StatsSection({
  stats: sanityStats,
}: StatsSectionProps) {
  const stats = [
    {
      value: sanityStats?.eventsWorldwide || 100,
      label: "Events Worldwide",
    },
    {
      value: sanityStats?.peopleImpacted || 50000,
      label: "People Impacted",
    },
    {
      value: sanityStats?.yearsExperience || 10,
      label: "Years Experience",
    },
  ];
  return (
    <SectionReveal>
      <section className="py-40 section-padding-x">
        <StaggerContainer className="flex flex-col items-center justify-between gap-12 text-center md:gap-28 md:flex-row md:justify-center">
          {stats.map((stat, index) => (
            <StaggerItem key={index}>
              <div>
                <p className="text-5xl sm:text-6xl md:text-7xl font-bold text-tertiary-50 mb-4">
                  <AnimatedCounter target={stat.value} />
                </p>
                <p className="text-tertiary-700 md:text-lg lg:text-xl">
                  {stat.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </SectionReveal>
  );
}
