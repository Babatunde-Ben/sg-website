"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useAnimationControls } from "motion/react";
import HeroImage1 from "@/app/_assets/images/portrait-1.jpg";
import HeroImage2 from "@/app/_assets/images/portrait-2.jpg";
import HeroImage3 from "@/app/_assets/images/portrait-3.jpg";
import HollaWriting from "@/app/_assets/SVGs/holla.svg";
import HeroPencil from "@/app/_assets/SVGs/hero-pencil.svg";
import StephWriting from "@/app/_assets/SVGs/steph.svg";
import HeroBackgroundImage from "@/app/_assets/images/hero-bg.jpg";

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

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  // order[0] = front card index, order[2] = back card index
  const [order, setOrder] = useState([0, 1, 2]);
  const [pullingOut, setPullingOut] = useState(false);
  const [pullDirection, setPullDirection] = useState(1); // 1 = right, -1 = left
  const isAnimatingRef = useRef(false);

  // Reactive SVG asset animations
  const hollaControls = useAnimationControls();
  const pencilControls = useAnimationControls();
  const stephControls = useAnimationControls();

  const shuffle = useCallback(() => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    // Phase 1: Front card sweeps out to the side
    setPullingOut(true);

    // Sympathetic SVG asset pulse
    if (!shouldReduceMotion) {
      hollaControls.start({
        scale: [1, 1.05, 1],
        y: [0, -4, 0],
        transition: { duration: 0.9, ease: "easeInOut" },
      });
      pencilControls.start({
        rotate: [0, -3, 0],
        y: [0, -2, 0],
        transition: { duration: 1, ease: "easeInOut", delay: 0.05 },
      });
      stephControls.start({
        scale: [1, 1.04, 1],
        y: [0, 2, 0],
        transition: { duration: 0.8, ease: "easeInOut", delay: 0.1 },
      });
    }

    // Phase 2: Reorder the stack, let everything settle
    setTimeout(() => {
      setPullingOut(false);
      setOrder((prev) => {
        const [front, ...rest] = prev;
        return [...rest, front];
      });
      // Alternate direction for the next shuffle
      setPullDirection((d) => d * -1);

      // Cooldown before allowing next shuffle
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
    <section
      className="relative pt-40 pb-10 section-padding-x flex flex-col items-center justify-center bg-cover bg-center lg:pb-28"
      style={{ backgroundImage: `url(${HeroBackgroundImage.src})` }}
    >
      <div
        className="relative -translate-x-3 w-11/12 max-w-5xl h-72 sm:h-96 md:h-128 lg:h-[680px]"
        style={{ perspective: 1200 }}
      >
        {/* SVG assets – animated in sequentially once */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={hollaControls}
          onViewportEnter={() => hollaControls.start({ opacity: 1, scale: 1 })}
          transition={{
            duration: 0.6,
            delay: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="absolute z-40 w-1/3 left-3 top-2/5 sm:left-6 md:left-10 md:top-3/12"
        >
          <HollaWriting className="w-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={stephControls}
          onViewportEnter={() => stephControls.start({ opacity: 1, scale: 1 })}
          transition={{
            duration: 0.6,
            delay: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="absolute z-40 w-2/15 right-4 bottom-10 sm:right-6 md:right-10 md:bottom-4 lg:right-15 lg:w-2/18"
        >
          <StephWriting className="w-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={pencilControls}
          onViewportEnter={() => pencilControls.start({ opacity: 1, y: 0 })}
          transition={{
            duration: 0.8,
            delay: 1.1,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="absolute z-40 w-52 -right-14 -top-10 md:w-72 md:-right-20 md:-top-12 lg:w-104 lg:-right-40 lg:-top-14"
        >
          <HeroPencil className="w-full" />
        </motion.div>

        {/* Shuffling card stack */}
        {order.map((cardIndex, stackPos) => {
          const card = cards[cardIndex];
          const rest = REST_POSITIONS[stackPos];
          const isFrontPulling = stackPos === 0 && pullingOut;

          // During pullout: the front card sweeps out to the side with 3D tilt
          // During settle: all cards glide to their new resting positions
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

          // Depth-based shadow: front cards cast stronger shadows
          const depthFactor = 2 - stackPos; // 2 for front, 0 for back
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
