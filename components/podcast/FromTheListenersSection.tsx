"use client";

import MusicNote from "@/app/_assets/SVGs/music-note.svg";
import FeedbackCard from "@/app/_components/shared/FeedbackCard";
import Profile1 from "@/app/_assets/images/profile-1.png";
import Profile2 from "@/app/_assets/images/profile-2.png";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/motion";

const testimonials = [
  {
    quote: "Love your style Stephanie George, you lead with power and spark",
    author: "Melody Biringer",
    location: "Founder at Women in Tech Regatta",
    image: Profile1,
  },
  {
    quote:
      "In a functioning state, she'll be my top pick for a Ministerial position. Won't be surprised if this manifested someday soon.",
    author: "Tammy Tolofari",
    location: "Lagos",
    image: Profile2,
  },
];

export default function FromTheListenersSection() {
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
    </section>
  );
}
