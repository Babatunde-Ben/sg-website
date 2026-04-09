"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useAnimationControls } from "motion/react";
import WithLoveWriting from "@/app/_assets/SVGs/with-love.svg";
import HeroImage1 from "@/app/_assets/images/portrait-11.jpg";
import HeroImage2 from "@/app/_assets/images/portrait-4.jpg";
import HeroImage3 from "@/app/_assets/images/portrait-12.jpg";

const cards = [
  {
    src: HeroImage1,
    alt: "Stephanie George Hero 1",
    objectPosition: "object-[10%_20%]",
  },
  {
    src: HeroImage2,
    alt: "Stephanie George Hero 2",
    objectPosition: "object-top",
  },
  {
    src: HeroImage3,
    alt: "Stephanie George Hero 3",
    objectPosition: "object-top",
  },
];

// Resting positions — matches the original pre-animation CSS layout exactly
const REST_POSITIONS = [
  // Front card (no transform)
  { x: "0%", y: "0%", rotate: 0 },
  // Middle card (translate-x-[3%] -translate-y-[3%] rotate-2)
  { x: "3%", y: "-3%", rotate: 2 },
  // Back card (translate-x-[5%] translate-y-[5%] -rotate-2)
  { x: "5%", y: "5%", rotate: -2 },
];

const Z_LAYERS = [30, 20, 10];

const SHUFFLE_INTERVAL_MS = 4500;
const PULLOUT_DURATION_S = 0.55;
const SETTLE_DURATION_S = 0.7;

export default function PodcastHeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const [order, setOrder] = useState([0, 1, 2]);
  const [pullingOut, setPullingOut] = useState(false);
  const [pullDirection, setPullDirection] = useState(1);
  const isAnimatingRef = useRef(false);

  // Reactive SVG asset animation
  const withLoveControls = useAnimationControls();

  const shuffle = useCallback(() => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    setPullingOut(true);

    // Sympathetic SVG asset pulse
    if (!shouldReduceMotion) {
      withLoveControls.start({
        scale: [1, 1.05, 1],
        y: [0, -4, 0],
        transition: { duration: 0.9, ease: "easeInOut" },
      });
    }

    setTimeout(() => {
      setPullingOut(false);
      setOrder((prev) => {
        const [front, ...rest] = prev;
        return [...rest, front];
      });
      setPullDirection((d) => d * -1);

      setTimeout(() => {
        isAnimatingRef.current = false;
      }, SETTLE_DURATION_S * 1000);
    }, PULLOUT_DURATION_S * 1000);
  }, []);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const id = setInterval(shuffle, SHUFFLE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [shuffle, shouldReduceMotion]);

  return (
    <section className="relative pt-40 pb-10 section-padding-x flex flex-col items-center justify-center bg-primary-500 lg:pb-28">
      <div
        className="relative -translate-x-3 w-11/12 max-w-5xl h-72 sm:h-96 md:h-128 lg:h-[680px]"
        style={{ perspective: 1200 }}
      >
        {/* SVG asset – animated in on load */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={withLoveControls}
          onViewportEnter={() => withLoveControls.start({ opacity: 1, scale: 1 })}
          transition={{
            duration: 0.6,
            delay: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="absolute z-40 w-[30%] left-3 top-1/5 sm:left-6 md:left-10 md:top-3/12"
        >
          <WithLoveWriting className="text-primary-500 w-full" />
        </motion.div>

        {/* Shuffling card stack */}
        {order.map((cardIndex, stackPos) => {
          const card = cards[cardIndex];
          const rest = REST_POSITIONS[stackPos];
          const isFrontPulling = stackPos === 0 && pullingOut;

          const target = isFrontPulling
            ? {
                x: `${pullDirection * 55}%`,
                y: "-6%",
                rotate: pullDirection * 12,
                scale: 0.92,
                rotateY: pullDirection * -15,
              }
            : {
                x: rest.x,
                y: rest.y,
                rotate: rest.rotate,
                scale: 1,
                rotateY: 0,
              };

          const depthFactor = 2 - stackPos;
          const shadow = `0 ${4 + depthFactor * 4}px ${12 + depthFactor * 8}px rgba(0, 0, 0, ${0.08 + depthFactor * 0.04})`;

          return (
            <motion.div
              key={cardIndex}
              initial={false}
              animate={target}
              transition={{
                duration: isFrontPulling
                  ? PULLOUT_DURATION_S
                  : SETTLE_DURATION_S,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="absolute w-full h-full border-4 border-secondary-50 sm:border-8"
              style={{
                zIndex: isFrontPulling ? 35 : Z_LAYERS[stackPos],
                transformStyle: "preserve-3d",
                boxShadow: shadow,
              }}
            >
              <Image
                src={card.src}
                alt={card.alt}
                fill
                className={`object-cover ${card.objectPosition}`}
                priority
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
