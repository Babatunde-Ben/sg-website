"use client";
import Image from "next/image";

import { Button } from "@/components/ui/button";

import { ROUTES } from "@/lib/constant";
import { useRouter } from "next/navigation";
import HostingImage from "@/app/_assets/images/portrait-3.jpg";
import SpeakingImage from "@/app/_assets/images/portrait-5.jpg";
import PodcastImage from "@/app/_assets/images/portrait-1.jpg";
import { Separator } from "@/components/ui/separator";

export default function ServicesSection() {
  const router = useRouter();
  const serviceItems = [
    {
      image: HostingImage,
      title: "Hosting & Moderation",
      description:
        "When I host, I am there to keep the room steady. I support your speakers and ensure the audience stays engaged, even when the schedule shifts or the plans change.",
      buttonText: "Learn About Hosting",
      onClick: () => router.push(ROUTES.CONTACT),
    },
    {
      image: SpeakingImage,
      title: "Speaking",
      description:
        "I help your audience put words to what they have been feeling but couldn’t name. My sessions explore communication and leadership in a way that is honest and immediately usable in real life.",
      buttonText: "Learn About Speaking",
      onClick: () => router.push(ROUTES.ABOUT),
    },
    {
      image: PodcastImage,
      title: "The Podcast",
      description:
        "Real conversations about faith, money, relationships, and growth. It is practical. It is authentic.  And yes, there’s usually laughter. ",
      buttonText: "Listen",
      onClick: () => router.push(ROUTES.PODCAST),
    },
  ];
  return (
    <section className="pt-24 md:pt-32 section-padding-x">
      <h3 className="text-3xl text-center font-bold text-tertiary-50 mb-12 sm:text-4xl md:mb-14 md:text-5xl lg:text-6xl">
        How We Can Work Together.
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-8">
        {serviceItems.map((item, index) => (
          <div key={index} className="flex flex-col h-full group">
            <div className="relative aspect-square w-full mb-2 overflow-hidden  group-hover:opacity-90 transition-opacity">
              <Image
                src={item.image}
                alt="Hosting & Moderation"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-white/4 px-4 py-6 flex flex-col flex-1">
              <p className="text-xl font-bold text-tertiary-50 mb-4 md:text-2xl">
                {item.title}
              </p>
              <p className="text-tertiary-500 mb-10 flex-1 md:text-lg ">
                {item.description}
              </p>
              <Button onClick={item.onClick} className="w-full">
                {item.buttonText}
              </Button>
            </div>
          </div>
        ))}
      </div>
      <Separator className="my-28" />
    </section>
  );
}
