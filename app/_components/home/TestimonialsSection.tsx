"use client";

import Profile1 from "@/app/_assets/images/profile-1.png";
import Profile2 from "@/app/_assets/images/profile-2.png";
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

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Love your style Stephanie George, you lead with power and spark.",
      author: "Pastor T.",
      location: "Lagos",
      image: Profile1,
    },
    {
      quote:
        "In a functioning state, she'll be my top pick for a Ministerial position. Won't be surprised if this manifested someday soon.",
      author: "Mensah, Hr Lead",
      location: "Lagos",
      image: Profile2,
    },
    {
      quote: "The things I've learnt from this podcast are invaluable",
      author: "Maureen O., Hr Lead",
      location: "Lagos",
      image: Profile2,
    },
    {
      quote: "I love your energy and the way you carry yourself",
      author: "Maureen O., Hr Lead",
      location: "Lagos",
      image: Profile2,
    },
  ];
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
                  key={index}
                  className="pl-5 basis-[85%] sm:basis-[75%] md:basis-1/2"
                >
                  <FeedbackCard
                    author={testimonial.author}
                    location={testimonial.location}
                    image={testimonial.image}
                    quote={testimonial.quote}
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
