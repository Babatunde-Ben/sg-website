"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import placeholderImage from "@/app/_assets/images/placeholder-image.jpg";
import PinkHeart from "@/app/_assets/SVGs/pink-heart.svg";
import DragonFly from "@/app/_assets/SVGs/dragon-fly.svg";
import { FadeInUp } from "@/components/motion";
import { transitions, viewportOnce } from "@/lib/motion";

export default function Gallery() {
  const shouldReduceMotion = useReducedMotion();

  type CollageSlot = {
    rotate: string;
    transform: string;
    z: string;
    sticker?: "dragon" | "heart";
  };

  const placeholderImages = Array.from({ length: 18 }, (_, index) => ({
    id: index + 1,
    src: placeholderImage,
  }));

  // Fixed 12-slot collage pattern (content can come from CMS independently)
  const collagePattern: CollageSlot[] = [
    {
      rotate: "-rotate-3",
      transform: "translate-y-4 md:translate-x-4",
      z: "z-10",
    },
    {
      rotate: "rotate-2",
      transform: "-translate-y-4",
      z: "z-20",
      sticker: "dragon",
    },
    {
      rotate: "rotate-3",
      transform: "translate-y-8 md:-translate-x-4",
      z: "z-10",
    },
    {
      rotate: "-rotate-2",
      transform: "-translate-y-6 md:-translate-y-12 md:translate-x-2",
      z: "z-20",
    },
    {
      rotate: "-rotate-1",
      transform: "-translate-y-4 md:-translate-y-16 scale-100 md:scale-110",
      z: "z-30",
    },
    {
      rotate: "rotate-2",
      transform: "-translate-y-8 md:-translate-y-20 md:-translate-x-4",
      z: "z-20",
    },
    {
      rotate: "-rotate-3",
      transform: "-translate-y-10 md:-translate-y-24 md:translate-x-4",
      z: "z-30",
    },
    {
      rotate: "rotate-2",
      transform: "-translate-y-8 md:-translate-y-20",
      z: "z-40",
    },
    {
      rotate: "-rotate-1",
      transform: "-translate-y-12 md:-translate-y-32 md:-translate-x-4",
      z: "z-30",
      sticker: "heart",
    },
    {
      rotate: "rotate-3",
      transform: "-translate-y-16 md:-translate-y-36 md:translate-x-2",
      z: "z-40",
    },
    {
      rotate: "-rotate-2",
      transform: "-translate-y-14 md:-translate-y-32",
      z: "z-20",
    },
    {
      rotate: "rotate-2",
      transform: "-translate-y-18 md:-translate-y-44 md:-translate-x-6",
      z: "z-50",
    },
  ];
  const imageChunks = Array.from(
    { length: Math.ceil(placeholderImages.length / collagePattern.length) },
    (_, chunkIndex) =>
      placeholderImages.slice(
        chunkIndex * collagePattern.length,
        (chunkIndex + 1) * collagePattern.length,
      ),
  );

  return (
    <>
      <section className="section-padding-x mt-36 mb-16 md:mb-20 lg:mt-40 lg:mb-22">
        <FadeInUp>
          <h1 className="text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-tertiary-50 mb-8">
            Moments That Matter
          </h1>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <p className="text-center text-tertiary-600 mb-12 sm:mb-14 sm:text-lg md:text-xl md:max-w-2xl md:mx-auto md:mb-16 lg:mb-22 ">
            Behind every event, every conversation, every episode, there&apos;s a story
            being told. This is where you&apos;ll see some of that work in motion.
          </p>
        </FadeInUp>
      </section>

      {/* Gallery Grid Section */}
      <section className="px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto mb-16 md:mb-10 pb-10">
        {imageChunks.map((chunk, chunkIndex) => (
          <div
            key={`gallery-chunk-${chunkIndex}`}
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-start justify-items-center ${
              chunkIndex > 0 ? "-mt-28 md:-mt-44" : ""
            }`}
          >
            {chunk.map((image, index) => {
              const pattern = collagePattern[index];
              // Stagger by row: items 0-2 row 0, 3-5 row 1, etc.
              const rowIndex = Math.floor(index / 3);
              const colIndex = index % 3;
              const staggerDelay = rowIndex * 0.15 + colIndex * 0.08;

              return (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={viewportOnce}
                  transition={{
                    ...transitions.default,
                    delay: shouldReduceMotion ? 0 : staggerDelay,
                  }}
                  className={`relative w-full bg-[#FAF8F5] p-3 shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-transform hover:z-60 hover:scale-105 hover:rotate-0 duration-300 ${pattern.rotate} ${pattern.transform} ${pattern.z}`}
                >
                  <div className="relative w-full aspect-square bg-tertiary-200 overflow-hidden">
                    <Image
                      src={image.src}
                      alt={`Gallery Image ${image.id}`}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Stickers logic */}
                  {pattern.sticker === "dragon" && (
                    <DragonFly className="absolute -top-6 -left-6" />
                  )}
                  {pattern.sticker === "heart" && (
                    <PinkHeart className="absolute -top-6 -left-6" />
                  )}
                </motion.div>
              );
            })}
          </div>
        ))}
      </section>
    </>
  );
}
