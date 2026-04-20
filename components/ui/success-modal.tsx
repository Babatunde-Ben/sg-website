"use client";

import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface SuccessModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  message: string;
  closeLabel?: string;
}

function SuccessMark({ reduced }: { reduced: boolean }) {
  const ringTransition = reduced
    ? { duration: 0 }
    : { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const };
  const checkTransition = reduced
    ? { duration: 0 }
    : { duration: 0.55, delay: 0.55, ease: [0.65, 0, 0.35, 1] as const };
  const glowTransition = reduced
    ? { duration: 0 }
    : { duration: 1.4, ease: "easeOut" as const };

  return (
    <div className="relative mx-auto flex h-24 w-24 items-center justify-center">
      {/* Ambient glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={glowTransition}
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(229,203,184,0.35) 0%, rgba(229,203,184,0) 65%)",
        }}
        aria-hidden
      />

      {/* Outer tinted ring */}
      <div
        className="absolute inset-[6px] rounded-full border border-tertiary-500/20"
        aria-hidden
      />

      <svg
        viewBox="0 0 80 80"
        className="relative h-full w-full"
        aria-hidden
      >
        <motion.circle
          cx="40"
          cy="40"
          r="30"
          fill="none"
          stroke="#bfa999"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={ringTransition}
          style={{ transform: "rotate(-90deg)", transformOrigin: "50% 50%" }}
        />
        <motion.path
          d="M27 41.5 L36 50 L54 31"
          fill="none"
          stroke="#e5cbb8"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={checkTransition}
        />
      </svg>
    </div>
  );
}

function Flourish() {
  return (
    <div className="flex items-center justify-center gap-3" aria-hidden>
      <span className="block h-px w-8 bg-primary-200/40" />
      <span className="block h-1.5 w-1.5 rotate-45 bg-tertiary-500" />
      <span className="block h-px w-8 bg-primary-200/40" />
    </div>
  );
}

export default function SuccessModal({
  open,
  onOpenChange,
  title,
  message,
  closeLabel = "Close",
}: SuccessModalProps) {
  const shouldReduceMotion = useReducedMotion();

  const item = {
    hidden: { opacity: 0, y: 12 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: shouldReduceMotion ? 0 : 0.85 + i * 0.08,
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-md border-primary-300/60 bg-primary-500 p-0 overflow-hidden"
        showCloseButton={false}
      >
        {/* Soft header glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-56"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(191,169,153,0.14) 0%, rgba(21,8,0,0) 70%)",
          }}
        />

        {/* Top accent strip */}
        <div className="h-[3px] w-full bg-tertiary-600" aria-hidden />

        <div className="relative px-8 pt-10 pb-8 md:px-10">
          <DialogHeader className="gap-5">
            <SuccessMark reduced={!!shouldReduceMotion} />

            <motion.p
              custom={0}
              initial="hidden"
              animate="visible"
              variants={item}
              className="text-[11px] font-medium uppercase tracking-[0.28em] text-tertiary-600 text-center"
            >
              Received with care
            </motion.p>

            <motion.div
              custom={1}
              initial="hidden"
              animate="visible"
              variants={item}
            >
              <Flourish />
            </motion.div>

            <motion.div
              custom={2}
              initial="hidden"
              animate="visible"
              variants={item}
            >
              <DialogTitle className="text-2xl md:text-3xl font-bold text-tertiary-50 tracking-tight">
                {title}
              </DialogTitle>
            </motion.div>

            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={item}
            >
              <DialogDescription className="text-tertiary-500 leading-relaxed md:text-base">
                {message}
              </DialogDescription>
            </motion.div>
          </DialogHeader>

          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={item}
            className="mt-8"
          >
            <DialogClose asChild>
              <Button type="button" className="w-full">
                {closeLabel}
              </Button>
            </DialogClose>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
