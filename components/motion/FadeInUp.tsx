"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  fadeInUp,
  fadeInUpReduced,
  transitions,
  viewportOnce,
} from "@/lib/motion";

interface FadeInUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  /** Reveal on mount instead of on scroll-into-view (for first-paint content). */
  playOnMount?: boolean;
}

export default function FadeInUp({
  children,
  delay = 0,
  duration,
  className,
  playOnMount = false,
}: FadeInUpProps) {
  const shouldReduceMotion = useReducedMotion();
  const variants = shouldReduceMotion ? fadeInUpReduced : fadeInUp;

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      {...(playOnMount
        ? { animate: "visible" }
        : { whileInView: "visible", viewport: viewportOnce })}
      transition={{
        ...transitions.default,
        ...(duration ? { duration } : {}),
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
