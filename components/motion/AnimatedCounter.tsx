"use client";

import { useEffect, useRef } from "react";
import {
  useMotionValue,
  useTransform,
  motion,
  animate,
  useInView,
  useReducedMotion,
} from "motion/react";

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export default function AnimatedCounter({
  target,
  duration = 1.5,
  suffix = "+",
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const shouldReduceMotion = useReducedMotion();

  const count = useMotionValue(0);
  const display = useTransform(count, (v) => {
    const num = Math.round(v);
    return num >= 1000 ? num.toLocaleString() : String(num);
  });

  useEffect(() => {
    if (!isInView) return;

    if (shouldReduceMotion) {
      count.set(target);
      return;
    }

    const controls = animate(count, target, {
      duration,
      ease: [0.25, 0.1, 0.25, 1],
    });

    return () => {
      controls.stop();
    };
  }, [isInView, target, duration, count, shouldReduceMotion]);

  return (
    <span ref={ref} className={className}>
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}
