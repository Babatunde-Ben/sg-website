"use client";

import Profile1 from "@/app/_assets/images/profile-1.png";
import Profile2 from "@/app/_assets/images/profile-2.png";
import FeedbackCard from "@/app/_components/shared/FeedbackCard";
import { FadeInUp } from "@/components/motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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
    quote:
      "You carried that room with confidence, clarity, and presence. So proud of how you showed up and elevated the entire experience.",
    author: "Maureen O., Hr Lead",
    location: "Lagos",
    image: Profile2,
  },
  {
    quote: "You are a gift to this generation",
    author: "Pastor T.",
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

export default function FromTheRoomTestimonialsSection() {
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
                key={index}
                className="pl-5 basis-[85%] sm:basis-[75%] md:basis-[48%] lg:basis-1/3"
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
    </section>
  );
}
