import HeroSection from "@/app/_components/home/HeroSection";
import IntroSection from "@/app/_components/home/IntroSection";
import StatsSection from "@/app/_components/home/StatsSection";
import GallerySneakPeek from "@/app/_components/home/GallerySneakPeek";
import DepthSection from "@/app/_components/home/DepthSection";
import ServicesSection from "@/app/_components/home/ServicesSection";
import TestimonialsSection from "@/app/_components/home/TestimonialsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <StatsSection />
      <GallerySneakPeek />
      <DepthSection />
      <ServicesSection />
      <TestimonialsSection />
    </>
  );
}
