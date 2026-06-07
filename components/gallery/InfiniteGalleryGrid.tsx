"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { useInView } from "react-intersection-observer";
import PinkHeart from "@/app/_assets/SVGs/pink-heart.svg";
import DragonFly from "@/app/_assets/SVGs/dragon-fly.svg";
import { transitions, viewportOnce } from "@/lib/motion";
import { fetchMoreGalleryImages } from "@/app/actions/gallery";

export interface GalleryImage {
  _id: string;
  altText: string | null;
  imageUrl: string | null;
  imageLqip: string | null;
  orderRank: string | null;
}

type CollageSlot = {
  rotate: number;
  transform: string;
  z: string;
  sticker?: "dragon" | "heart";
};

// Fixed 12-slot collage pattern mapped across infinite items
const collagePattern: CollageSlot[] = [
  { rotate: -3, transform: "translate-y-4 md:translate-x-4", z: "z-10" },
  { rotate: 2, transform: "-translate-y-4", z: "z-20", sticker: "dragon" },
  { rotate: 3, transform: "translate-y-8 md:-translate-x-4", z: "z-10" },
  { rotate: -2, transform: "-translate-y-6 md:-translate-y-12 md:translate-x-2", z: "z-20" },
  { rotate: -1, transform: "-translate-y-4 md:-translate-y-16 scale-100 md:scale-110", z: "z-30" },
  { rotate: 2, transform: "-translate-y-8 md:-translate-y-20 md:-translate-x-4", z: "z-20" },
  { rotate: -3, transform: "-translate-y-10 md:-translate-y-24 md:translate-x-4", z: "z-30" },
  { rotate: 2, transform: "-translate-y-8 md:-translate-y-20", z: "z-40" },
  { rotate: -1, transform: "-translate-y-12 md:-translate-y-32 md:-translate-x-4", z: "z-30", sticker: "heart" },
  { rotate: 3, transform: "-translate-y-16 md:-translate-y-36 md:translate-x-2", z: "z-40" },
  { rotate: -2, transform: "-translate-y-14 md:-translate-y-32", z: "z-20" },
  { rotate: 2, transform: "-translate-y-18 md:-translate-y-44 md:-translate-x-6", z: "z-50" },
];

export default function InfiniteGalleryGrid({ initialImages }: { initialImages: GalleryImage[] }) {
  const shouldReduceMotion = useReducedMotion();
  const [images, setImages] = useState<GalleryImage[]>(initialImages);
  const [hasMore, setHasMore] = useState(initialImages.length >= 6);
  const [isLoading, setIsLoading] = useState(false);
  // Which image is "brought forward" via tap (the mobile equivalent of hover)
  const [activeId, setActiveId] = useState<string | null>(null);
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "400px",
  });

  useEffect(() => {
    if (inView && hasMore && !isLoading) {
      loadMore();
    }
  }, [inView, hasMore, isLoading]);

  const loadMore = async () => {
    setIsLoading(true);
    const lastItem = images[images.length - 1];
    if (!lastItem || !lastItem.orderRank) {
      setHasMore(false);
      setIsLoading(false);
      return;
    }

    try {
      const newImages = await fetchMoreGalleryImages(lastItem.orderRank, 6);
      if (newImages && newImages.length > 0) {
        setImages((prev) => [...prev, ...newImages]);
        if (newImages.length < 6) {
          setHasMore(false);
        }
      } else {
        setHasMore(false);
      }
    } catch (e) {
      console.error(e);
      setHasMore(false); // don't retry continuously on error
    } finally {
      setIsLoading(false);
    }
  };

  // Split images into chunks of 12 pattern arrays
  const imageChunks = Array.from(
    { length: Math.ceil(images.length / collagePattern.length) },
    (_, chunkIndex) =>
      images.slice(
        chunkIndex * collagePattern.length,
        (chunkIndex + 1) * collagePattern.length,
      ),
  );

  return (
    <>
      <section className="isolate px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto mb-16 md:mb-10 pb-10">
        {imageChunks.map((chunk, chunkIndex) => (
          <div
            key={`gallery-chunk-${chunkIndex}`}
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-start justify-items-center ${
              chunkIndex > 0 ? "-mt-[64px] sm:-mt-[48px] lg:-mt-44" : ""
            }`}
          >
            {chunk.map((image, index) => {
              const pattern = collagePattern[index];
              const rowIndex = Math.floor(index / 3);
              const colIndex = index % 3;
              const staggerDelay = rowIndex * 0.15 + colIndex * 0.08;

              const finalRotate = pattern.rotate;

              // Real vertical overlap for small screens (the translate-* classes
              // below are overridden by Framer Motion's transform, so overlap is
              // done with negative margins which motion does not touch).
              // 1-col (base): every item after the first overlaps the one above.
              // 2-col (sm → lg): every item after the first row overlaps.
              // 3-col (lg+): reset to 0 to preserve the desktop layout.
              const overlapClass =
                index === 0
                  ? "mt-0"
                  : index === 1
                    ? "-mt-[64px] sm:mt-0"
                    : "-mt-[64px] sm:-mt-[48px] lg:mt-0";

              // Cards carrying a sticker (dragonfly / heart) always sit above
              // everything — including a brought-forward card (z 60) — so the
              // sticker is never covered by an overlapping image.
              const baseZ = pattern.sticker
                ? 70
                : Number(pattern.z.replace("z-", "")) || 10;
              const activeZ = pattern.sticker ? 70 : 60;
              const isActive = activeId === image._id;

              return (
                <motion.div
                  key={image._id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  // Resting vs "brought forward" (tap on mobile). Hover handles
                  // the same effect on desktop via whileHover below.
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : isActive
                        ? { scale: 1.05, rotate: 0, zIndex: activeZ }
                        : { scale: 1, rotate: finalRotate, zIndex: baseZ }
                  }
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          scale: 1.05,
                          rotate: 0,
                          zIndex: 60,
                          transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
                        }
                  }
                  onTap={() =>
                    setActiveId((prev) => (prev === image._id ? null : image._id))
                  }
                  viewport={viewportOnce}
                  transition={{
                    opacity: { ...transitions.default, delay: shouldReduceMotion ? 0 : staggerDelay },
                    default: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
                  }}
                  style={
                    shouldReduceMotion
                      ? { rotate: finalRotate, zIndex: baseZ }
                      : undefined
                  }
                  className={`relative w-full cursor-pointer bg-[#FAF8F5] p-3 shadow-[0_20px_40px_rgba(0,0,0,0.5)] ${overlapClass} ${pattern.transform} ${pattern.z}`}
                >
                  <div className="relative w-full aspect-square bg-tertiary-200 overflow-hidden">
                    <Image
                      src={image.imageUrl || ""}
                      alt={image.altText || "Gallery Image"}
                      fill
                      className="object-cover"
                      placeholder={image.imageLqip ? "blur" : "empty"}
                      blurDataURL={image.imageLqip || undefined}
                    />
                  </div>

                  {pattern.sticker === "dragon" && (
                    <DragonFly className="absolute -top-6 -left-6" />
                  )}
                  {pattern.sticker === "heart" && (
                    <PinkHeart className="absolute -top-6 -left-6" />
                  )}
                </motion.div>
              );
            })}
          </div>
        ))}

        {hasMore && (
           <div ref={ref} className="h-40 flex items-center justify-center w-full mt-20">
             {isLoading && <span className="text-tertiary-500 animate-pulse">Loading more moments...</span>}
           </div>
        )}
      </section>
    </>
  );
}
