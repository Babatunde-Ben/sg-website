"use client";

import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/constant";
import { useRouter } from "next/navigation";

export default function IntroSection() {
  const router = useRouter();

  return (
    <section className="py-20 px-6 section-padding-x bg-primary-400 md:py-24 lg:py-36">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-tertiary-50 mb-12 sm:text-4xl md:mb-14 md:text-5xl lg:text-6xl">
          Truth and Soul for the Moments That Matter.
        </h2>
        <p className="text-tertiary-600 mb-12 leading-relaxed md:text-lg lg:text-xl">
          I am Stephanie — a host, speaker, and podcast creator. I believe the
          way we speak matters just as much as what we say, and I am committed
          to delivering truth with kindness. When I step onto your stage, I
          bring preparation, presence, and purpose — guiding the room, keeping
          your program flowing, and leaving your audience with something that
          stays with them long after they’ve gone home.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            className="w-full max-w-2xs"
            onClick={() => router.push(ROUTES.CONTACT)}
          >
            Book me as a Host
          </Button>
          <Button
            variant="outline"
            className="w-full max-w-2xs"
            onClick={() => router.push(ROUTES.PODCAST)}
          >
            Listen to the Podcast
          </Button>
        </div>
      </div>
    </section>
  );
}
