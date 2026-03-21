import HeroNotebookSection from "@/components/about/HeroNotebookSection";
import BackstorySection from "@/components/about/BackstorySection";
import WhatSetsMeApartSection from "@/components/about/WhatSetsMeApartSection";
import WhatIDoSection from "@/components/about/WhatIDoSection";
import SignatureTopicsSection from "@/components/about/SignatureTopicsSection";
import FromTheRoomTestimonialsSection from "@/components/about/FromTheRoomTestimonialsSection";
import CTASection from "@/components/about/CTASection";

export default function About() {
  return (
    <>
      <HeroNotebookSection />
      <BackstorySection />
      <WhatSetsMeApartSection />
      <WhatIDoSection />
      <SignatureTopicsSection />
      <FromTheRoomTestimonialsSection />
      <CTASection />
    </>
  );
}
