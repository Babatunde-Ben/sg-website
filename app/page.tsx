import HeroSection from "@/app/_components/home/HeroSection";
import type { Metadata } from "next";
import IntroSection from "@/app/_components/home/IntroSection";
import StatsSection from "@/app/_components/home/StatsSection";
import GallerySneakPeek from "@/app/_components/home/GallerySneakPeek";
import DepthSection from "@/app/_components/home/DepthSection";
import ServicesSection from "@/app/_components/home/ServicesSection";
import TestimonialsSection from "@/app/_components/home/TestimonialsSection";
import { client } from "@/lib/sanity/client";
import { getAllTestimonialsQuery, getStatsQuery } from "@/lib/sanity/queries";
import { buildPageMetadata } from "@/lib/seo";

export const revalidate = 3600;
export const metadata: Metadata = buildPageMetadata({
  title: "Home",
  description:
    "Truth and soul for the moments that matter. Explore hosting, speaking, podcast episodes, and stories from Stephanie George.",
  path: "/",
});

export default async function Home() {
  const allTestimonials = await client.fetch(getAllTestimonialsQuery, {}, { next: { tags: ['testimonial'] } });
  const testimonials = allTestimonials.filter(t => t.category === 'room');
  const statsData = await client.fetch(getStatsQuery, {}, { next: { tags: ['stats'] } });


  return (
    <>
      <HeroSection />
      <IntroSection />
      <StatsSection stats={statsData} />
      <GallerySneakPeek />
      <DepthSection />
      <ServicesSection />
      <TestimonialsSection testimonials={testimonials} />
    </>
  );
}
