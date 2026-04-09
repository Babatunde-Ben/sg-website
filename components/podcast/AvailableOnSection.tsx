"use client";

import { motion, useReducedMotion } from "motion/react";
import SpotifyLogo from "@/app/_assets/SVGs/spotify-logo.svg";
import SoundCloudLogo from "@/app/_assets/SVGs/sound-cloud-logo.svg";
import YoutubeMusicLogo from "@/app/_assets/SVGs/youtube-music-logo.svg";
import ApplePodcastLogo from "@/app/_assets/SVGs/apple-podcast-logo.svg";
import { StaggerContainer, StaggerItem } from "@/components/motion";
import { hoverLift } from "@/lib/motion";
import Link from "next/link";

export default function AvailableOnSection() {
  const shouldReduceMotion = useReducedMotion();
  const channels = [
    {
      name: "Spotify",
      icon: SpotifyLogo,
      link: "https://open.spotify.com/show/3058706",
    },
    {
      name: "SoundCloud",
      icon: SoundCloudLogo,
      link: "https://soundcloud.com/stephaniegeorge-1",
    },
    {
      name: "Youtube Music",
      icon: YoutubeMusicLogo,
      link: "https://music.youtube.com/playlist?list=gtgOLAK5uy_lV31JLWwbiwXaw64RIPpWHorGrKx",
    },
    {
      name: "Apple Podcast",
      icon: ApplePodcastLogo,
      link: "https://podcasts.apple.com/ng/podcast/the-stephanie-george-podcast/id1635176164",
    },
  ];
  return (
    <section className="section-padding-x my-20 md:my-24 lg:my-32">
      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {channels.map((channel, index) => (
          <StaggerItem key={index}>
            <Link href={channel.link} target="_blank" rel="noopener noreferrer">
              <motion.div
                whileHover={shouldReduceMotion ? undefined : hoverLift}
                className="border border-white/30 px-6 py-12 flex flex-col items-center gap-6 transition-colors hover:bg-primary-400/10 cursor-pointer h-full"
              >
                <div className="w-full text-center mb-6 md:text-left lg:mb-20 xl:mb-40">
                  <p className="text-tertiary-500 mb-1 lg:mb-2 lg:text-lg">
                    Available On
                  </p>
                  <h3 className="text-tertiary-50 font-bold text-xl lg:text-2xl">
                    {channel.name}
                  </h3>
                </div>
                <div className="h-full w-full flex items-center justify-center">
                  <channel.icon className="w-14 md:w-24 lg:w-32 " />
                </div>
              </motion.div>
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
