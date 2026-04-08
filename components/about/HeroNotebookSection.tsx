"use client";

import Image from "next/image";
import AboutBookImage from "@/app/_assets/images/about-book.png";
import AboutBackgroundImage from "@/app/_assets/images/about-background.jpg";
import { ScaleIn } from "@/components/motion";

export default function HeroNotebookSection() {
  return (
    <section
      className="section-padding-x pb-16 pt-24 md:pb-24 md:pt-32 mx-auto flex justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${AboutBackgroundImage.src})` }}
    >
      <div className="absolute inset-0 bg-linear-to-t from-primary-500 from-5% via-transparent to-transparent z-10 " />

      <ScaleIn delay={0.2} className="relative z-20">
        <Image
          src={AboutBookImage}
          alt="About Book"
        />
      </ScaleIn>
    </section>
  );
}
