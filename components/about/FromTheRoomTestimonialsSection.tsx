"use client";

import FeedbackCard from "@/app/_components/shared/FeedbackCard";
import { FadeInUp } from "@/components/motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export interface RoomTestimonial {
  _id: string;
  quote: string | null;
  author: string | null;
  locationOrRole?: string | null;
  avatarUrl?: string | null;
  avatarLqip?: string | null;
}

interface FromTheRoomTestimonialsSectionProps {
  testimonials: RoomTestimonial[];
}

export default function FromTheRoomTestimonialsSection({
  testimonials,
}: FromTheRoomTestimonialsSectionProps) {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="section-padding-x my-20 md:my-24 lg:my-32">
      <FadeInUp>
        <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-center text-tertiary-50 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          From the Room
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
          <CarouselContent className="-ml-5">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={testimonial._id}
                className="pl-5 py-2 basis-[85%] sm:basis-[75%] md:basis-[48%] lg:basis-1/3"
              >
                <FeedbackCard
                  author={testimonial.author || ""}
                  location={testimonial.locationOrRole || ""}
                  image={testimonial.avatarUrl || ""}
                  imageLqip={testimonial.avatarLqip || undefined}
                  quote={testimonial.quote || ""}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </FadeInUp>
    </section>
  );
}
