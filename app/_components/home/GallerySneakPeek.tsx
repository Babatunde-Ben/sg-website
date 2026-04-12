"use client";

import Image from "next/image";
import GalleryImage1 from "@/app/_assets/images/portrait-4.jpg";
import GalleryImage2 from "@/app/_assets/images/portrait-1.jpg";
import WithLoveWriting from "@/app/_assets/SVGs/with-love.svg";
import { ScaleIn, FadeIn } from "@/components/motion";

export default function GallerySneakPeek() {
  return (
    <section className="py-2 section-padding-x">
      <div className="relative grid grid-cols-1 md:grid-cols-2 justify-center items-center">
        <FadeIn delay={0.5} className="text-tertiary-500 absolute z-10 -bottom-40 left-1/2 -translate-x-1/2 w-60 md:-bottom-12 md:left-52 md:w-72 lg:w-96 lg:left-1/4">
          <WithLoveWriting className="w-full" />
        </FadeIn>
        <ScaleIn delay={0} className="group relative w-full h-[464px] sm:h-[600px] lg:h-[700px] overflow-hidden">
          <Image placeholder="blur"
            src={GalleryImage1}
            alt="Gallery Preview 1"
            fill
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
          <div className="size-full absolute  bg-linear-to-b from-primary-500/40 from-50% to-primary-500" />
        </ScaleIn>
        <ScaleIn delay={0.15} className="group relative w-full h-[464px] sm:h-[600px] lg:h-[700px] overflow-hidden">
          <Image placeholder="blur"
            src={GalleryImage2}
            alt="Gallery Preview 2"
            fill
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
          <div className="size-full absolute  bg-linear-to-b from-primary-500/40 from-50% to-primary-500" />
        </ScaleIn>
      </div>
    </section>
  );
}
