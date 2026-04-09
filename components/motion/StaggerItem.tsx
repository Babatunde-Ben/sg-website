"use client";

import { motion, useReducedMotion } from "motion/react";
import { staggerItem, staggerItemReduced } from "@/lib/motion";

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
}

export default function StaggerItem({ children, className }: StaggerItemProps) {
  const shouldReduceMotion = useReducedMotion();
  const variants = shouldReduceMotion ? staggerItemReduced : staggerItem;

  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
}
