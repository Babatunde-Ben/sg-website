"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  scaleIn,
  scaleInReduced,
  transitions,
  viewportOnce,
} from "@/lib/motion";

interface ImageRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function ImageReveal({
  children,
  delay = 0,
  className,
}: ImageRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const variants = shouldReduceMotion ? scaleInReduced : scaleIn;

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ ...transitions.slow, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
