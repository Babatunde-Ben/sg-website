"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { motion, useReducedMotion } from "motion/react";
import { transitions, viewportOnce } from "@/lib/motion";

import { cn } from "@/lib/utils";

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      asChild
      {...props}
    >
      <motion.div
        initial={{
          scaleX: shouldReduceMotion ? 1 : orientation === "horizontal" ? 0 : 1,
          scaleY: shouldReduceMotion ? 1 : orientation === "vertical" ? 0 : 1,
          opacity: shouldReduceMotion ? 1 : 0.5,
        }}
        whileInView={{ scaleX: 1, scaleY: 1, opacity: 1 }}
        viewport={viewportOnce}
        transition={transitions.slow}
        style={
          orientation === "horizontal" ? { originX: 0.5 } : { originY: 0.5 }
        }
        className={cn(
          "bg-white/30 shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
          className,
        )}
      />
    </SeparatorPrimitive.Root>
  );
}

export { Separator };
