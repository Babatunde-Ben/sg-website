import HeroNotebookSection from "@/components/about/HeroNotebookSection";
import BackstorySection from "@/components/about/BackstorySection";
import WhatSetsMeApartSection from "@/components/about/WhatSetsMeApartSection";
import WhatIDoSection from "@/components/about/WhatIDoSection";
import SignatureTopicsSection from "@/components/about/SignatureTopicsSection";
import FromTheRoomTestimonialsSection from "@/components/about/FromTheRoomTestimonialsSection";
import CTASection from "@/components/about/CTASection";
import { client } from "@/lib/sanity/client";
import { getAllTestimonialsQuery } from "@/lib/sanity/queries";

export const revalidate = 3600;

export default async function About() {
  const allTestimonials = await client.fetch(getAllTestimonialsQuery, {}, { next: { tags: ['testimonial'] } });
  const testimonials = allTestimonials.filter(t => t.category === 'room');

  return (
    <>
      <HeroNotebookSection />
      <BackstorySection />
      <WhatSetsMeApartSection />
      <WhatIDoSection />
      <SignatureTopicsSection />
      <FromTheRoomTestimonialsSection testimonials={testimonials} />
      <CTASection />
    </>
  );
}
