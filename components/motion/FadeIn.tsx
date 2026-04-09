"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  fadeIn,
  fadeInReduced,
  transitions,
  viewportOnce,
} from "@/lib/motion";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function FadeIn({
  children,
  delay = 0,
  duration,
  className,
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();
  const variants = shouldReduceMotion ? fadeInReduced : fadeIn;

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
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
