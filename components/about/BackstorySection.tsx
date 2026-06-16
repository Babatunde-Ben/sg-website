"use client";

import {
  SectionReveal,
  FadeInUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion";
import { useIsMobile } from "@/hooks/use-mobile";

export default function BackstorySection() {
  // On mobile, reveal on mount (the scroll observer can miss its initial
  // in-view callback there); on desktop keep the scroll-triggered reveal.
  const isMobile = useIsMobile();

  return (
    <SectionReveal playOnMount={isMobile}>
      <section className="section-padding-x">
        <div className="px-6 sm:px-10 bg-primary-400 lg:px-14 py-18">
          <FadeInUp playOnMount={isMobile}>
            <h2 className="mb-6 text-2xl font-bold md:text-3xl text-tertiary-50">
              A little backstory
            </h2>
          </FadeInUp>
          <StaggerContainer
            playOnMount={isMobile}
            className="space-y-6 text-tertiary-600 sm:text-lg md:text-xl"
          >
            <StaggerItem>
              <p>
                As a child, I would stand in front of a mirror for hours,
                speaking to an imaginary audience as though the world was
                already listening. Long before I understood what hosting or
                public speaking truly meant, I knew one thing for certain — I
                loved connecting with people through words.
              </p>
            </StaggerItem>
            <StaggerItem>
              <p>
                What once felt like childhood play slowly revealed itself to be
                purpose. Years later, I now have the privilege of living that
                dream in real time as a host and speaker — creating spaces where
                people feel seen, engaged, inspired, and connected. And
                truthfully, there are still moments where I have to pause and
                think, wow…pinch me!
              </p>
            </StaggerItem>
            <StaggerItem>
              <p>
                Whether I am hosting an event, leading a conversation, or
                speaking to a room full of people, my goal is always the same:
                to create experiences that feel meaningful, memorable, and
                genuinely human.
              </p>
            </StaggerItem>
            <StaggerItem>
              <p>
                If you are here, chances are you’re looking for someone to help
                bring your vision to life. I am so glad you found your way here.
              </p>
            </StaggerItem>
            <StaggerItem>
              <p>
                Take a look around, and when you are ready, send me a note — I
                would love to connect.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>
    </SectionReveal>
  );
}
