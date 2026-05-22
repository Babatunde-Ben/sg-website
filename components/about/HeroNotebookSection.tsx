"use client";

import Image from "next/image";
import AboutBookImage from "@/app/_assets/images/about-book.png";
import AboutBackgroundImage from "@/app/_assets/images/about-background.jpg";
import { ScaleIn } from "@/components/motion";
import { motion } from "motion/react";
import HeroPencil from "@/app/_assets/SVGs/hero-pencil.svg";

export default function HeroNotebookSection() {
  return (
    <section
      className="section-padding-x pb-16 pt-24 md:pb-24 md:pt-32 mx-auto flex justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${AboutBackgroundImage.src})` }}
    >
      <div className="absolute inset-0 bg-linear-to-t from-primary-500 from-5% via-transparent to-transparent z-10 " />

      <ScaleIn delay={0.2} className="relative z-20">
        <div className="relative">
          <Image placeholder="blur" src={AboutBookImage} alt="About Book" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: "0%" }}
            transition={{
              duration: 0.8,
              delay: 1.1,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="absolute z-40 w-[27%] left-[20%] bottom-[5%] rotate-90"
          >
            <HeroPencil className="w-full" />
          </motion.div>
        </div>
      </ScaleIn>
    </section>
  );
}
