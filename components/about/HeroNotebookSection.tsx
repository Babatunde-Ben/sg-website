"use client";

import Image from "next/image";
import AboutBookImage from "@/app/_assets/images/empty-book.png";
import AboutBackgroundImage from "@/app/_assets/images/about-background.jpg";
import { ScaleIn } from "@/components/motion";
import { motion, useReducedMotion } from "motion/react";
import HeroPencil from "@/app/_assets/SVGs/hero-pencil.svg";
import Heart from "@/app/_assets/SVGs/heart.svg";

// ─── Typing animation helper ─────────────────────────────────────────────────
// Each character is its own motion.span, revealed via staggerChildren.
// When the user prefers reduced motion the text is rendered statically.

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

// Right-page paragraph delays are calculated so each paragraph begins typing
// only after the previous one finishes:
//   Heading  22 chars × 0.008 s ≈ 0.18 s  → starts 0.80 s, ends ~1.00 s
//   P1      215 chars × 0.008 s ≈ 1.72 s  → starts 1.00 s, ends ~2.72 s
//   P2      143 chars × 0.008 s ≈ 1.14 s  → starts 2.80 s, ends ~3.94 s
//   P3      108 chars × 0.008 s ≈ 0.86 s  → starts 4.00 s, ends ~4.86 s
//
// Left-page quote:
//   76 chars × 0.035 s ≈ 2.66 s           → starts 0.80 s, ends ~3.46 s

export default function HeroNotebookSection() {
  return (
    <section
      className="section-padding-x pb-16 pt-24 md:pb-24 md:pt-32 mx-auto flex justify-center bg-cover bg-center relative mask-b-from-50%"
      style={{ backgroundImage: `url(${AboutBackgroundImage.src})` }}
    >
      <div className="absolute inset-0 bg-linear-to-t from-primary-500 from-5% via-transparent to-transparent z-10" />

      <ScaleIn delay={0.2} className="relative z-20 hidden md:block">
        <div className="relative select-none">
          <Image placeholder="blur" src={AboutBookImage} alt="Open book" />

          {/* ── LEFT PAGE ────────────────────────────────────────────── */}

          <span className="absolute text-primary-400 left-[27%] top-[12%]">
            <Heart className="w-8 md:w-10 lg:w-14" />
          </span>

          {/* Width is capped so text wraps within the left page only */}
          <p
            className="absolute font-gwathlyn text-primary-500 left-[10%] top-[28%] w-[36%] sm:text-3xl md:text-5xl md:leading-[40px] lg:text-6xl lg:leading-[56px] xl:leading-[64px] xl:text-7xl"
          >
            <TypingText
              text={"A lot can go\nwrong at an\nevent. The host is\nthe one thing you\ncan't get wrong."}
              delay={0.8}
              stagger={0.035}
            />
          </p>

          {/* ── RIGHT PAGE ───────────────────────────────────────────── */}

          <div
            className="absolute z-10 text-primary-500 font-gwathlyn text-2xl leading-[20px] lg:text-3xl lg:leading-[28px] space-y-4 xl:space-y-6 xl:text-[42px] xl:leading-[40px]"
            style={{ left: "55%", top: "12%", width: "38%" }}
          >
            <p>
              <TypingText
                text="I am Stephanie George."
                delay={0.8}
                stagger={0.008}
              />
            </p>
            <p>
              <TypingText
                text="My job is to be a steady presence in the room. The one who keeps your program moving, supports your speakers, adapts to schedule changes, and keeps your audience connected from the opening moment to the final close."
                delay={1.0}
                stagger={0.008}
              />
            </p>
            <p>
              <TypingText
                text="I work with organizations, conferences, leaders, and creators who care about the weight of words and what their audience actually walks away with."
                delay={2.8}
                stagger={0.008}
              />
            </p>
            <p>
              <TypingText
                text="I know how to read a room — because I have been in a number of them across Africa, Europe and North America."
                delay={4.0}
                stagger={0.008}
              />
            </p>
          </div>

          {/* ── Pencil ───────────────────────────────────────────────── */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: "0%" }}
            transition={{ duration: 0.8, delay: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute z-40 w-[27%] left-[20%] bottom-[3%] rotate-90"
          >
            <HeroPencil className="w-full" />
          </motion.div>
        </div>
      </ScaleIn>
    </section>
  );
}
