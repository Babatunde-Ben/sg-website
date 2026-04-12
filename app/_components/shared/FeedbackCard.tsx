"use client";

import Image, { StaticImageData } from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { hoverLift } from "@/lib/motion";

interface FeedbackCardProps {
  quote: string;
  author: string;
  location: string;
  image: string;
  imageLqip?: string;
}
export default function FeedbackCard({
  quote,
  author,
  location,
  image,
  imageLqip,
}: FeedbackCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={shouldReduceMotion ? undefined : hoverLift}
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 92%, 10% 92%, 0 100%)" }}
      className="bg-primary-400 px-6 pt-14 pb-20 relative flex flex-col justify-between min-h-88"
    >
      <p className="text-tertiary-700 md:text-lg mb-10 relative z-10 font-light">
        {quote}
      </p>
      <div className="flex items-center gap-4">
        <div className="group relative size-12 shrink-0 rounded-full overflow-hidden bg-tertiary-200/20">
            <Image
              src={image}
              alt={author}
              fill
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              placeholder={imageLqip ? "blur" : "empty"}
              blurDataURL={imageLqip}
            />
        </div>
        <p className="text-white">
          <span className=" font-bold text-lg md:text-xl">{author},</span>
          <span className="md:text-lg ml-2">{location}.</span>
        </p>
      </div>
    </motion.div>
  );
}
