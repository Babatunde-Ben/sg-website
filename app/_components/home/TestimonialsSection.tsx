"use client";

import Profile1 from "@/app/_assets/images/profile-1.png";
import Profile2 from "@/app/_assets/images/profile-2.png";
import QuoteIcon from "@/app/_assets/SVGs/quote.svg";
import FeedbackCard from "@/app/_components/shared/FeedbackCard";
import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion";
import { Separator } from "@/components/ui/separator";

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

        <StaggerContainer className="w-full xl:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-4">
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <FeedbackCard
                author={testimonial.author}
                location={testimonial.location}
                image={testimonial.image}
                quote={testimonial.quote}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
      <Separator className="my-36" />
    </section>
  );
}
