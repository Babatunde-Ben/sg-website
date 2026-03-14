import Image from "next/image";
import HeroImage1 from "@/app/_assets/images/portrait-1.jpg";
import HeroImage2 from "@/app/_assets/images/portrait-2.jpg";
import HeroImage3 from "@/app/_assets/images/portrait-3.jpg";
import HollaWriting from "@/app/_assets/SVGs/holla.svg";
import HeroPencil from "@/app/_assets/SVGs/hero-pencil.svg";

export default function HeroSection() {
  return (
    <section className="relative pt-40 pb-32 section-padding-x flex flex-col items-center justify-center bg-primary-500">
      <div className="relative w-10/12 max-w-5xl h-52 sm:h-80 md:h-128 lg:h-[680px]">
        <HollaWriting className="absolute z-10 w-24 left-3 top-2/5 sm:w-32 sm:left-6 md:w-40 md:left-10 md:top-2/5 lg:w-96" />
        <HeroPencil className="absolute z-10 w-104 -right-40 -top-14 hidden xl:block" />
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
            className="object-cover object-top"
            priority
          />
        </div>
      </div>
    </section>
  );
}
