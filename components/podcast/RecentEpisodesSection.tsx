"use client";

import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import { FadeInUp } from "@/components/motion";
import { hoverLift } from "@/lib/motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import Link from "next/link";

export interface Episode {
  _id: string;
  title: string | null;
  description: string | null;
  listenUrl?: string | null;
}

interface RecentEpisodesSectionProps {
  episodes: Episode[];
}

export default function RecentEpisodesSection({ episodes }: RecentEpisodesSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  if (!episodes || episodes.length === 0) return null;

  return (
    <section className="section-padding-x mb-24 md:mb-32">
      <FadeInUp>
        <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-tertiary-50 mb-12">
          Recent Episodes
        </h2>
      </FadeInUp>
      <FadeInUp delay={0.15}>
        <Carousel
          opts={{ align: "start", dragFree: true, loop: true }}
          plugins={[
            Autoplay({
              delay: 4000,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-5 md:-ml-8">
            {episodes.map((ep) => (
              <CarouselItem
                key={ep._id}
                className="pl-5 md:pl-8 basis-[85%] sm:basis-[75%] md:basis-[48%] lg:basis-1/3"
              >
                <motion.div
                  whileHover={shouldReduceMotion ? undefined : hoverLift}
                  className="bg-white/4 px-6 py-14 flex flex-col justify-between sm:px-8 md:px-10 xl:px-14 h-full"
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-bold font-albert text-tertiary-50 mb-6 lg:text-2xl">
                      {ep.title}
                    </h3>
                    <p className="text-tertiary-500/40 lg:text-lg mb-10">
                      {ep.description}
                    </p>
                  </div>

                  {ep.listenUrl ? (
                    <Link href={ep.listenUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full">
                        Listen
                      </Button>
                    </Link>
                  ) : (
                    <Button variant="outline" className="w-full" disabled>
                      Processing...
                    </Button>
                  )}
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </FadeInUp>
    </section>
  );
}
