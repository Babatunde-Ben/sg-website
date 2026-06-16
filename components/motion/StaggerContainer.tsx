"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  staggerContainer,
  staggerContainerReduced,
  viewportOnce,
} from "@/lib/motion";

interface StaggerContainerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
  /** Reveal on mount instead of on scroll-into-view (for first-paint content). */
  playOnMount?: boolean;
}

export default function StaggerContainer({
  children,
  staggerDelay,
  className,
  playOnMount = false,
}: StaggerContainerProps) {
  const shouldReduceMotion = useReducedMotion();
  const baseVariants = shouldReduceMotion
    ? staggerContainerReduced
    : staggerContainer;

  const variants = staggerDelay
    ? {
        ...baseVariants,
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.05,
          },
        },
      }
    : baseVariants;

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      {...(playOnMount
        ? { animate: "visible" }
        : { whileInView: "visible", viewport: viewportOnce })}
      className={className}
    >
      {children}
    </motion.div>
  );
}
