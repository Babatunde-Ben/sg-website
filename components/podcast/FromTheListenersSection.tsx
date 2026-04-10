"use client";

import MusicNote from "@/app/_assets/SVGs/music-note.svg";
import FeedbackCard from "@/app/_components/shared/FeedbackCard";
import { FadeInUp } from "@/components/motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export interface ListenerTestimonial {
  _id: string;
  quote: string | null;
  author: string | null;
  locationOrRole?: string | null;
  avatarUrl?: string | null;
}

interface FromTheListenersSectionProps {
  testimonials: ListenerTestimonial[];
}

export default function FromTheListenersSection({
  testimonials,
}: FromTheListenersSectionProps) {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="section-padding-x mb-24 md:mb-32">
      <div className="flex flex-col xl:flex-row gap-8 xl:gap-14 ">
        <FadeInUp className="w-full xl:w-1/3 flex flex-col text-center xl:text-left xl:px-10">
          <MusicNote className="w-40 text-primary-400 mb-2 xl:inline-block hidden" />
          <div>
            <h3 className="text-3xl font-bold text-tertiary-50 sm:text-4xl md:text-5xl ">
              From the Listeners
            </h3>
          </div>
        </FadeInUp>

        <FadeInUp delay={0.15} className="w-full xl:w-2/3">
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
            <CarouselContent className="-ml-5">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={testimonial._id}
                  className="pl-5 py-2 basis-[85%] sm:basis-[75%] md:basis-1/2"
                >
                  <FeedbackCard
                    author={testimonial.author || ""}
                    location={testimonial.locationOrRole || ""}
                    image={testimonial.avatarUrl || ""}
                    quote={testimonial.quote || ""}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </FadeInUp>
      </div>
    </section>
  );
}
