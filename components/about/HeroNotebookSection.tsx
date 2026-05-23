"use client";

import Image from "next/image";
import AboutBookImage from "@/app/_assets/images/empty-book.png";
import LeftPageImage from "@/app/_assets/images/left-page.png";
import RightPageImage from "@/app/_assets/images/right-page.png";
import AboutBackgroundImage from "@/app/_assets/images/about-background.jpg";
import { ScaleIn, FadeInUp } from "@/components/motion";
import { motion, useReducedMotion } from "motion/react";
import HeroPencil from "@/app/_assets/SVGs/hero-pencil.svg";
import Heart from "@/app/_assets/SVGs/heart.svg";

// ─── Text constants ───────────────────────────────────────────────────────────
// Edit here — both desktop and mobile pick up the change automatically.

const QUOTE =
  "A lot can go\nwrong at an\nevent. The host is\nthe one thing you\ncan't get wrong.";

const BIO_HEADING = "I am Stephanie George.";

const BIO_PARAGRAPHS = [
  "My job is to be a steady presence in the room. The one who keeps your program moving, supports your speakers, adapts to schedule changes, and keeps your audience connected from the opening moment to the final close.",
  "I work with organizations, conferences, leaders, and creators who care about the weight of words and what their audience actually walks away with.",
  "I know how to read a room — because I have been in a number of them across Africa, Europe and North America.",
];

// ─── Typing animation helper ──────────────────────────────────────────────────

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

// ─── Component ───────────────────────────────────────────────────────────────
//
// Desktop timing (open book):
//   Quote         76 chars × 0.035 s → starts 0.8 s,  ends ~3.5 s
//   BIO_HEADING   22 chars × 0.008 s → starts 0.8 s,  ends ~1.0 s
//   BIO_PARA[0]  215 chars × 0.008 s → starts 1.0 s,  ends ~2.7 s
//   BIO_PARA[1]  143 chars × 0.008 s → starts 2.8 s,  ends ~3.9 s
//   BIO_PARA[2]  108 chars × 0.008 s → starts 4.0 s,  ends ~4.9 s
//
// Mobile timing (two separate pages):
//   Left  — Quote starts 0.6 s, stagger 0.025 → ends ~2.5 s
//   Right — Heading starts 0.5 s (its own FadeIn context)
//            Paragraphs chain sequentially from 0.8 s

export default function HeroNotebookSection() {
  return (
    <section
      className="section-padding-x pb-16 pt-24 md:pb-24 md:pt-32 mx-auto flex justify-center bg-cover bg-center relative mask-b-from-90% md:mask-b-from-50%"
      style={{ backgroundImage: `url(${AboutBackgroundImage.src})` }}
    >
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

      {/* ── Mobile: two stacked pages ────────────────────────────────────── */}
      <div className="relative z-20 flex flex-col w-full md:hidden select-none">
        {/* Left page — quote */}
        <ScaleIn delay={0.2} className="relative w-full mb-4">
          <div className="relative w-full">
            <Image
              src={LeftPageImage}
              alt="Left page"
              placeholder="blur"
              className="w-full h-auto"
            />

            {/* Heart */}
            <span className="absolute text-primary-400 right-[27%] top-[10%]">
              <Heart className="w-9" />
            </span>

            {/* Quote — left edge starts after spine (~14%), capped to stay on page */}
            <p className="absolute font-gwathlyn text-primary-500 text-5xl left-[22%] top-[25%] sm:text-7xl">
              <TypingText text={QUOTE} delay={0.6} stagger={0.025} />
            </p>

            {/* Pencil */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: "0%" }}
              transition={{
                duration: 0.8,
                delay: 1.0,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="absolute z-40 rotate-90 w-[70%] left-[14%] -bottom-24"
            >
              <HeroPencil className="w-full" />
            </motion.div>
          </div>
        </ScaleIn>

        {/* Right page — bio */}
        <FadeInUp delay={0.3} className="relative w-full">
          <div className="relative w-full">
            <Image
              src={RightPageImage}
              alt="Right page"
              placeholder="blur"
              className="w-full h-auto"
            />

            {/* Text — right edge stops before spine (~84%) */}
            <div className="absolute font-gwathlyn text-primary-500 text-xl leading-[22px] space-y-6 left-[10%] top-[10%] w-[74%] sm:text-4xl sm:leading-[40px] sm:space-y-8">
              <p>
                <TypingText text={BIO_HEADING} delay={0.5} stagger={0.012} />
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
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
