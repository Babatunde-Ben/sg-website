"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import AboutBookImage from "@/app/_assets/images/empty-book.png";
import AboutBackgroundImage from "@/app/_assets/images/about-background.jpg";
import { ScaleIn } from "@/components/motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { motion, useReducedMotion } from "motion/react";
import HeroPencil from "@/app/_assets/SVGs/hero-pencil.svg";
import Heart from "@/app/_assets/SVGs/heart.svg";

const QUOTE =
  "A lot can go\nwrong at an\nevent. The host is\nthe one thing you\ncan't get wrong.";

const BIO_HEADING = "I am Stephanie George.";

const BIO_PARAGRAPHS = [
  "My job is to be a steady presence in the room. The one who keeps your program moving, supports your speakers, adapts to schedule changes, and keeps your audience connected from the opening moment to the final close.",
  "I work with organizations, conferences, leaders, and creators who care about the weight of words and what their audience actually walks away with.",
  "I know how to read a room — because I have been in a number of them across Africa, Europe and North America.",
];

const charVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function TypingText({
  text,
  delay = 0,
  stagger = 0.03,
}: {
  text: string;
  delay?: number;
  stagger?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <>
        {text.split("\n").map((line, i, arr) => (
          <span key={i}>
            {line}
            {i < arr.length - 1 && <br />}
          </span>
        ))}
      </>
    );
  }

  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
    >
      {text.split("").map((char, i) =>
        char === "\n" ? (
          <br key={i} />
        ) : (
          <motion.span key={i} variants={charVariants}>
            {char}
          </motion.span>
        ),
      )}
    </motion.span>
  );
}

export default function HeroNotebookSection() {
  // Track the active carousel page so the edge fade follows it:
  // page 1 → fade the right edge, page 2 → fade the left edge.
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [selectedPage, setSelectedPage] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;
    const onSelect = () => setSelectedPage(carouselApi.selectedScrollSnap());
    onSelect();
    carouselApi.on("select", onSelect);
    carouselApi.on("reInit", onSelect);
    return () => {
      carouselApi.off("select", onSelect);
      carouselApi.off("reInit", onSelect);
    };
  }, [carouselApi]);

  const pageFadeMask =
    selectedPage === 0 ? "mask-r-from-90%" : "mask-l-from-90%";

  return (
    <section className="section-padding-x pb-16 pt-32 md:pb-24 mx-auto flex justify-center relative mask-b-from-90% md:mask-b-from-50%">
      {/* Background image — shifted 120px left on mobile, centered on larger screens */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-[position:calc(50%_-_-250px)_center] md:bg-center"
        style={{ backgroundImage: `url(${AboutBackgroundImage.src})` }}
      />

      <div className="absolute inset-0 bg-linear-to-t from-primary-500 from-5% via-transparent to-transparent z-10" />

      {/* ── Desktop: open book ──────────────────────────────────────────── */}
      <ScaleIn delay={0.2} className="relative z-20 hidden md:block">
        <div className="relative select-none">
          <Image placeholder="blur" src={AboutBookImage} alt="Open book" />

          {/* Left page */}
          <span className="absolute text-primary-400 left-[27%] top-[12%]">
            <Heart className="w-8 md:w-10 lg:w-14" />
          </span>

          <p className="absolute font-gwathlyn text-primary-500 left-[10%] top-[28%] w-[36%] sm:text-3xl md:text-5xl md:leading-[40px] lg:text-6xl lg:leading-[56px] xl:leading-[64px] xl:text-7xl">
            <TypingText text={QUOTE} delay={0.8} stagger={0.035} />
          </p>

          {/* Right page */}
          <div className="absolute z-10 text-primary-500 font-gwathlyn text-2xl leading-[20px] left-[55%] top-[12%] w-[38%] lg:text-3xl lg:leading-[28px] space-y-4 xl:space-y-6 xl:text-[42px] xl:leading-[40px]">
            <p>
              <TypingText text={BIO_HEADING} delay={0.8} stagger={0.008} />
            </p>
            <p>
              <TypingText
                text={BIO_PARAGRAPHS[0]}
                delay={1.0}
                stagger={0.008}
              />
            </p>
            <p>
              <TypingText
                text={BIO_PARAGRAPHS[1]}
                delay={2.8}
                stagger={0.008}
              />
            </p>
            <p>
              <TypingText
                text={BIO_PARAGRAPHS[2]}
                delay={4.0}
                stagger={0.008}
              />
            </p>
          </div>

          {/* Pencil */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: "0%" }}
            transition={{
              duration: 0.8,
              delay: 1.1,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="absolute z-40 w-[27%] left-[20%] bottom-[3%] rotate-90"
          >
            <HeroPencil className="w-full" />
          </motion.div>
        </div>
      </ScaleIn>

      {/* ── Mobile: swipeable pages (first page full, next page peeking) ──── */}
      <div className="relative z-20 w-full md:hidden select-none">
        <Carousel
          setApi={setCarouselApi}
          opts={{ align: "start", containScroll: "trimSnaps" }}
          className={`w-full transition-[mask] duration-500 ${pageFadeMask}`}
        >
          <CarouselContent className="relative ml-0">
            {/* One continuous open book (the desktop two-page image) spanning
                both pages. The two empty CarouselItems below are just snap
                anchors so swiping pans from the left page to the right page of
                the SAME book. */}
            <ScaleIn
              delay={0.2}
              className="pointer-events-none absolute top-0 left-0 z-10 w-[180%]"
            >
              <div className="relative w-full">
                <Image
                  src={AboutBookImage}
                  alt="Open book"
                  placeholder="blur"
                  className="w-full h-auto"
                />

                {/* Heart — left page */}
                <span className="absolute text-primary-400 left-[27%] top-[12%]">
                  <Heart className="w-10" />
                </span>

                {/* Quote — left page */}
                <p className="absolute font-gwathlyn text-primary-500 text-5xl leading-[40px] left-[10%] top-[28%] w-[36%]">
                  <TypingText text={QUOTE} delay={0.6} stagger={0.025} />
                </p>

                {/* Bio — right page */}
                <div className="absolute font-gwathlyn text-primary-500 text-2xl leading-[20px] space-y-4 left-[55%] top-[12%] w-[38%]">
                  <p>
                    <TypingText
                      text={BIO_HEADING}
                      delay={0.5}
                      stagger={0.012}
                    />
                  </p>
                  <p>
                    <TypingText
                      text={BIO_PARAGRAPHS[0]}
                      delay={0.8}
                      stagger={0.007}
                    />
                  </p>
                  <p>
                    <TypingText
                      text={BIO_PARAGRAPHS[1]}
                      delay={2.4}
                      stagger={0.007}
                    />
                  </p>
                  <p>
                    <TypingText
                      text={BIO_PARAGRAPHS[2]}
                      delay={3.5}
                      stagger={0.007}
                    />
                  </p>
                </div>

                {/* Pencil — left page */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: "0%" }}
                  transition={{
                    duration: 0.8,
                    delay: 1.0,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="absolute z-40 rotate-[95deg] w-[27%] left-[20%] -bottom-[9%]"
                >
                  <HeroPencil className="w-full" />
                </motion.div>
              </div>
            </ScaleIn>

            {/* Snap anchors — one per page (transparent) */}
            <CarouselItem className="basis-[90%] pl-0 aspect-[631/789]" />
            <CarouselItem className="basis-[90%] pl-0 aspect-[631/789]" />
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
