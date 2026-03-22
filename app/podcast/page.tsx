import PodcastHeroSection from "@/components/podcast/PodcastHeroSection";
import PodcastIntroSection from "@/components/podcast/PodcastIntroSection";
import WhyListenSection from "@/components/podcast/WhyListenSection";
import AvailableOnSection from "@/components/podcast/AvailableOnSection";
import RecentEpisodesSection from "@/components/podcast/RecentEpisodesSection";
import FromTheListenersSection from "@/components/podcast/FromTheListenersSection";
import StoryFormSection from "@/components/podcast/StoryFormSection";

export default function Podcast() {
  return (
    <>
      <PodcastHeroSection />
      <PodcastIntroSection />
      <WhyListenSection />
      <AvailableOnSection />
      <RecentEpisodesSection />
      <FromTheListenersSection />
      <StoryFormSection />
    </>
  );
}
