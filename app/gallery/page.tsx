import type { Metadata } from "next";
import { FadeInUp } from "@/components/motion";
import { client } from "@/lib/sanity/client";
import { getInitialGalleryImagesQuery } from "@/lib/sanity/queries";
import InfiniteGalleryGrid from "@/components/gallery/InfiniteGalleryGrid";
import { buildPageMetadata } from "@/lib/seo";

export const revalidate = 3600;
export const metadata: Metadata = buildPageMetadata({
  title: "Gallery",
  description:
    "Browse moments from events, conversations, and episodes hosted by Stephanie George.",
  path: "/gallery",
});

export default async function Gallery() {
  const initialImages = await client.fetch(getInitialGalleryImagesQuery, { limit: 12 }, { next: { tags: ['gallery'] } });

  return (
    <>
      <section className="section-padding-x mt-36 mb-16 md:mb-20 lg:mt-40 lg:mb-22">
        <FadeInUp>
          <h1 className="text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-tertiary-50 mb-8">
            Moments That Matter
          </h1>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <p className="text-center text-tertiary-600 mb-12 sm:mb-14 sm:text-lg md:text-xl md:max-w-2xl md:mx-auto md:mb-16 lg:mb-22 ">
            Behind every event, every conversation, every episode, there&apos;s a story
            being told. This is where you&apos;ll see some of that work in motion.
          </p>
        </FadeInUp>
      </section>

      <InfiniteGalleryGrid initialImages={initialImages || []} />
    </>
  );
}
