import type { Metadata } from "next";
import PodcastHeroSection from "@/components/podcast/PodcastHeroSection";
import PodcastIntroSection from "@/components/podcast/PodcastIntroSection";
import WhyListenSection from "@/components/podcast/WhyListenSection";
import AvailableOnSection from "@/components/podcast/AvailableOnSection";
import RecentEpisodesSection from "@/components/podcast/RecentEpisodesSection";
import FromTheListenersSection from "@/components/podcast/FromTheListenersSection";
import StoryFormSection from "@/components/podcast/StoryFormSection";
import { client } from "@/lib/sanity/client";
import { getEpisodesQuery, getAllTestimonialsQuery, getContactInfoQuery } from "@/lib/sanity/queries";
import { buildPageMetadata } from "@/lib/seo";

export const revalidate = 3600;
export const metadata: Metadata = buildPageMetadata({
  title: "Podcast",
  description:
    "Listen to honest conversations on faith, money, relationships, and growth from Stephanie George.",
  path: "/podcast",
});

export default async function Podcast() {
  const episodes = await client.fetch(getEpisodesQuery, {}, { next: { tags: ['episode'] } });
  const allTestimonials = await client.fetch(getAllTestimonialsQuery, {}, { next: { tags: ['testimonial'] } });
  const testimonials = allTestimonials.filter(t => t.category === 'listener');
  const contactInfo = await client.fetch(getContactInfoQuery, {}, { next: { tags: ['contactInfo'] } });

  return (
    <>
      <PodcastHeroSection />
      <PodcastIntroSection />
      <WhyListenSection />
      <AvailableOnSection contactInfo={contactInfo} />
      <RecentEpisodesSection episodes={episodes} />
      <FromTheListenersSection testimonials={testimonials} />
      <StoryFormSection />
    </>
  );
}
