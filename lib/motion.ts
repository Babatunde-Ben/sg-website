import type { Variants, Transition } from "motion/react";

// ─── Transitions ────────────────────────────────────────────────────────────

export const transitions = {
  default: {
    duration: 0.6,
    ease: [0.25, 0.1, 0.25, 1],
  } satisfies Transition,

  quick: {
    duration: 0.35,
    ease: [0.25, 0.1, 0.25, 1],
  } satisfies Transition,

  slow: {
    duration: 0.8,
    ease: [0.25, 0.1, 0.25, 1],
  } satisfies Transition,

  hover: {
    duration: 0.25,
    ease: [0.25, 0.1, 0.25, 1],
  } satisfies Transition,
};

// ─── Viewport Config ────────────────────────────────────────────────────────

export const viewportOnce = { once: true, amount: 0.2 } as const;
export const viewportOnceSmall = { once: true, amount: 0.15 } as const;

// ─── Variants ───────────────────────────────────────────────────────────────

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.default,
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: transitions.default,
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.985 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitions.slow,
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.default,
  },
};

export const hoverLift = {
  y: -4,
  transition: transitions.hover,
};

export const tapScale = {
  scale: 0.98,
};

// ─── Reduced Motion Variants ────────────────────────────────────────────────

export const fadeInUpReduced: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

export const fadeInReduced: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

export const scaleInReduced: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

export const staggerContainerReduced: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0,
    },
  },
};

export const staggerItemReduced: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};
