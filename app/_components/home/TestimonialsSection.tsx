"use client";

import QuoteIcon from "@/app/_assets/SVGs/quote.svg";
import FeedbackCard from "@/app/_components/shared/FeedbackCard";
import { FadeInUp } from "@/components/motion";
import { Separator } from "@/components/ui/separator";
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
}

interface TestimonialsSectionProps {
  testimonials: RoomTestimonial[];
}

export default function TestimonialsSection({
  testimonials,
}: TestimonialsSectionProps) {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="section-padding-x ">
      <div className="flex flex-col xl:flex-row gap-14 xl:gap-8">
        <FadeInUp className="w-full xl:w-1/3 flex flex-col justify-between text-center xl:text-left">
          <QuoteIcon className="w-40 text-primary-400 mb-2 xl:inline-block hidden" />
          <div>
            <h3 className="text-3xl font-bold text-tertiary-50 mb-6 sm:text-4xl md:text-5xl ">
              From the Room
            </h3>
            <p className="text-tertiary-700 max-w-2xl mx-auto xl:mx-0 sm:text-lg">
              Authentic experiences, heartfelt feedback, and the moments that
              made a difference, straight from those who were here to see it
              all.
            </p>
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
      <Separator className="my-36" />
    </section>
  );
}
