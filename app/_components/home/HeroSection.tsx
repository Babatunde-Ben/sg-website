import Image from "next/image";
import HeroImage1 from "@/app/_assets/images/portrait-1.jpg";
import HeroImage2 from "@/app/_assets/images/portrait-2.jpg";
import HeroImage3 from "@/app/_assets/images/portrait-3.jpg";
import HollaWriting from "@/app/_assets/SVGs/holla.svg";
import HeroPencil from "@/app/_assets/SVGs/hero-pencil.svg";
import StephWriting from "@/app/_assets/SVGs/steph.svg";

export default function HeroSection() {
  return (
    <section className="relative pt-40 pb-10 section-padding-x flex flex-col items-center justify-center bg-primary-500 lg:pb-28">
      <div className="relative -translate-x-3 w-11/12 max-w-5xl h-72 sm:h-96 md:h-128 lg:h-[680px]">
        <HollaWriting className="absolute z-10 w-1/3 left-3 top-2/5 sm:left-6 md:left-10 md:top-3/12" />
        <StephWriting className="absolute z-10 w-2/15 right-4 bottom-10 sm:right-6 md:right-10 md:bottom-4 lg:right-15 lg:w-2/18" />
        <HeroPencil className="absolute z-10 w-52 -right-14 -top-10 md:w-72 md:-right-20 md:-top-12 lg:w-104 lg:-right-40 lg:-top-14" />
        <div className="absolute w-full h-full border-4 border-secondary-50 translate-x-[5%] translate-y-[5%] -rotate-2 sm:border-8">
          <Image
            src={HeroImage3}
            alt="Stephanie George Hero 3"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
        <div className="absolute w-full h-full border-4 border-secondary-50 translate-x-[3%] -translate-y-[3%] rotate-2 sm:border-8">
          <Image
            src={HeroImage2}
            alt="Stephanie George Hero 2"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
        <div className="absolute w-full h-full border-4 border-secondary-50 sm:border-8 hover:rotate-1 transition-transform duration-300">
          <Image
            src={HeroImage1}
            alt="Stephanie George Hero 1"
            fill
            className="object-cover object-[10%_20%]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
