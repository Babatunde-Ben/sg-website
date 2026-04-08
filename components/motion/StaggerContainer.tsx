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
}

export default function StaggerContainer({
  children,
  staggerDelay,
  className,
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
      whileInView="visible"
      viewport={viewportOnce}
      className={className}
    >
      {children}
    </motion.div>
  );
}
