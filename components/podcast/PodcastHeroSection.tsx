import Image from "next/image";
import WithLoveWriting from "@/app/_assets/SVGs/with-love.svg";
import HeroImage1 from "@/app/_assets/images/portrait-11.jpg";
import HeroImage2 from "@/app/_assets/images/portrait-4.jpg";
import HeroImage3 from "@/app/_assets/images/portrait-12.jpg";

export default function PodcastHeroSection() {
  return (
    <section className="relative pt-40 pb-10 section-padding-x flex flex-col items-center justify-center bg-primary-500 lg:pb-28">
      <div className="relative -translate-x-3 w-11/12 max-w-5xl h-72 sm:h-96 md:h-128 lg:h-[680px]">
        <WithLoveWriting className="text-primary-500 absolute z-10 w-[30%] left-3 top-1/5 sm:left-6 md:left-10 md:top-3/12" />

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
