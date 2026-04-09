"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  fadeInUp,
  fadeInUpReduced,
  transitions,
  viewportOnceSmall,
} from "@/lib/motion";

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function SectionReveal({
  children,
  className,
  delay = 0,
}: SectionRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const variants = shouldReduceMotion ? fadeInUpReduced : fadeInUp;

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnceSmall}
      transition={{ ...transitions.slow, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
