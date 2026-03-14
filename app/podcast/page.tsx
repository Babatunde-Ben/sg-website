"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import placeholderImage from "@/app/_assets/images/placeholder-image.jpg";
import { CheckCircle, Music } from "lucide-react";

export default function Podcast() {
  return (
    <>
      {/* Hero Scattered Images Section */}
      <section className="px-6 md:px-12 lg:px-20 max-w-6xl mx-auto mb-20 md:mb-32 relative h-[40vh] md:h-[65vh] flex items-center justify-center">
        <div className="relative w-full max-w-4xl aspect-video md:aspect-[21/9]">
          <div className="absolute inset-0 bg-white p-3 md:p-5 rotate-2 shadow-2xl z-10 filter contrast-125">
            <div className="relative w-full h-full bg-tertiary-200">
              <Image
                src={placeholderImage}
                alt="Podcast Hero Image 1"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-white p-3 md:p-5 -rotate-3 translate-x-4 md:translate-x-12 translate-y-4 md:translate-y-12 shadow-xl z-0 filter contrast-125">
            <div className="relative w-full h-full bg-tertiary-200">
              <Image
                src={placeholderImage}
                alt="Podcast Hero Image 2"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="px-6 md:px-12 lg:px-20 max-w-6xl mx-auto mb-20 md:mb-32">
        <div className="border border-tertiary-800 p-10 md:p-16 flex flex-col md:flex-row gap-12 lg:gap-16 items-center rounded-sm">
          <div className="flex-1 w-full flex flex-col md:items-start items-center text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold font-albert text-white mb-8 leading-[1.1]">
              Real Stories. Honest Reflection. Always With Love.
            </h1>
            <p className="text-tertiary-500 text-lg mb-10 leading-relaxed font-light">
              Faith with questions. Money with honesty. Relationships with
              complexity. Love with imperfections. This is a space to slow down,
              ask hard questions, and find the courage to be real—with yourself,
              with others, and with God.
            </p>
            <Button className="rounded-full bg-tertiary-200 text-primary-500 hover:bg-white font-medium px-10 py-7 text-lg w-fit transition-transform hover:scale-[1.02]">
              Listen to the Latest Episode
            </Button>
          </div>
          <div className="flex-1 w-full">
            <div className="relative w-full aspect-[4/3] filter contrast-125 rounded-sm overflow-hidden">
              <Image
                src={placeholderImage}
                alt="Stephanie in studio"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Listen Section */}
      <section className="px-6 md:px-12 lg:px-20 max-w-6xl mx-auto mb-24 md:mb-32">
        <div className="flex flex-col md:flex-row rounded-sm overflow-hidden">
          <div className="flex-1 bg-[#120A06] p-12 md:p-20 flex items-center justify-center min-h-[300px] md:min-h-[450px]">
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold font-albert text-white text-center md:text-left leading-tight">
              You will feel at
              <br className="hidden md:block" /> home here if:
            </h2>
          </div>
          <div className="flex-1 bg-[#261A14] p-12 md:p-20 flex flex-col justify-center gap-10 min-h-[300px] md:min-h-[450px]">
            <div className="flex gap-6 items-start">
              <CheckCircle
                className="text-tertiary-500 shrink-0 mt-1"
                size={26}
                strokeWidth={1.5}
              />
              <p className="text-tertiary-200 text-xl font-light leading-snug">
                You want wisdom that is practical, not just quotable.
              </p>
            </div>
            <div className="flex gap-6 items-start">
              <CheckCircle
                className="text-tertiary-500 shrink-0 mt-1"
                size={26}
                strokeWidth={1.5}
              />
              <p className="text-tertiary-200 text-xl font-light leading-snug">
                You appreciate nuance and different perspectives.
              </p>
            </div>
            <div className="flex gap-6 items-start">
              <CheckCircle
                className="text-tertiary-500 shrink-0 mt-1"
                size={26}
                strokeWidth={1.5}
              />
              <p className="text-tertiary-200 text-xl font-light leading-snug">
                You believe growth can be gentle and still be honest.
              </p>
            </div>
            <div className="flex gap-6 items-start">
              <CheckCircle
                className="text-tertiary-500 shrink-0 mt-1"
                size={26}
                strokeWidth={1.5}
              />
              <p className="text-tertiary-200 text-xl font-light leading-snug">
                You are willing to ask hard questions without losing hope.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Available On Section */}
      <section className="px-6 md:px-12 lg:px-20 max-w-6xl mx-auto mb-24 md:mb-32">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {/* Spotify */}
          <div className="border border-tertiary-800/50 rounded-sm p-10 flex flex-col items-center justify-center aspect-square gap-6 transition-colors hover:bg-[#261A14] cursor-pointer">
            <p className="text-tertiary-500 text-sm font-light tracking-wide">
              Available On
            </p>
            <h3 className="text-white font-bold text-xl md:text-2xl font-albert">
              Spotify
            </h3>
            <div className="w-20 h-20 rounded-full bg-[#1DB954] flex items-center justify-center mt-2 group-hover:scale-110 transition-transform">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.24 1.021zM19.08 14.4c-.3.42-.84.54-1.26.24-3.36-2.04-8.52-2.64-12.54-1.44-.48.12-1.02-.12-1.14-.6-.12-.48.12-1.02.6-1.14 4.56-1.32 10.2-1.021 14.04 1.32.48.3.6.84.3 1.26zm.12-3.12c-4.02-2.4-10.56-2.64-14.4-1.44-.6.18-1.2-.12-1.38-.72-.18-.6.12-1.2.72-1.38 4.38-1.32 11.52-1.02 16.08 1.68.54.3.72 1.02.42 1.56-.3.54-1.02.72-1.56.42z" />
              </svg>
            </div>
          </div>
          {/* Sound Cloud */}
          <div className="border border-tertiary-800/50 rounded-sm p-10 flex flex-col items-center justify-center aspect-square gap-6 transition-colors hover:bg-[#261A14] cursor-pointer">
            <p className="text-tertiary-500 text-sm font-light tracking-wide">
              Available On
            </p>
            <h3 className="text-white font-bold text-xl md:text-2xl font-albert">
              Sound Cloud
            </h3>
            <div className="w-20 h-20 flex items-center justify-center mt-2 text-[#FF5500] group-hover:scale-110 transition-transform">
              <svg
                width="60"
                height="40"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M11.3 14.8c0 .2-.1.4-.2.6-.2.2-.4.3-.6.3s-.4-.1-.6-.3c-.2-.2-.2-.5-.2-.7 0-.2.1-.4.2-.6.2-.2.4-.3.6-.3s.4.1.6.3c.1.2.2.4.2.7zm.8-6.1c-.2-.2-.4-.3-.6-.3s-.4.1-.6.3c-.2.2-.2.4-.2.6 0 .3.1.5.2.7.2.2.4.3.6.3s.4-.1.6-.3c.2-.2.2-.5.2-.7-.1-.2-.1-.5-.2-.6zm2.4 6.1c0 .2-.1.4-.2.6-.2.2-.4.3-.6.3s-.4-.1-.6-.3c-.2-.2-.2-.5-.2-.7 0-.2.1-.4.2-.6.2-.2.4-.3.6-.3s.5.1.7.3c.1.2.1.4.1.7zm.8-6.1c-.2-.2-.4-.3-.6-.3s-.4.1-.6.3c-.2.2-.2.4-.2.6 0 .3.1.5.2.7.2.2.4.3.6.3s.4-.1.6-.3c.2-.2.2-.4.2-.6 0-.2-.1-.5-.2-.6zM24 10.4c-.1-1.3-.6-2.5-1.5-3.4-.8-.9-2-1.4-3.3-1.4-1.1 0-2.2.4-3 .9-.2-.3-.5-.7-.8-1-1.3-1.1-3-1.7-4.8-1.7-1.1 0-2.2.2-3.2.7-1 .4-1.8 1-2.5 1.8-.7.7-1.2 1.6-1.5 2.6-.3 1-.5 2-.4 3.1-.2-.2-.5-.3-.8-.3h-.2c-.8 0-1.6.3-2.2.9C.3 13.1 0 13.9 0 14.8c0 .9.3 1.7.9 2.3.6.6 1.4.9 2.2.9h18c1.3 0 2.5-.5 3.4-1.5 1-.9 1.5-2.1 1.5-3.4 0-.9-.3-1.8-1-2.7h-1z" />
              </svg>
            </div>
          </div>
          {/* Google Podcast */}
          <div className="border border-tertiary-800/50 rounded-sm p-10 flex flex-col items-center justify-center aspect-square gap-6 transition-colors hover:bg-[#261A14] cursor-pointer">
            <p className="text-tertiary-500 text-sm font-light tracking-wide">
              Available On
            </p>
            <h3 className="text-white font-bold text-xl md:text-2xl font-albert">
              Google Podcast
            </h3>
            <div className="w-20 h-20 flex justify-center items-center mt-2 group-hover:scale-110 transition-transform">
              <div className="flex gap-1.5 items-center h-12">
                <div className="w-2.5 rounded-full h-5 bg-[#EA4335]"></div>
                <div className="w-2.5 rounded-full h-9 bg-[#FBBC05]"></div>
                <div className="w-2.5 rounded-full h-12 bg-[#34A853]"></div>
                <div className="w-2.5 rounded-full h-7 bg-[#4285F4]"></div>
                <div className="w-2.5 rounded-full h-4 bg-[#EA4335]"></div>
              </div>
            </div>
          </div>
          {/* Apple Podcast */}
          <div className="border border-tertiary-800/50 rounded-sm p-10 flex flex-col items-center justify-center aspect-square gap-6 transition-colors hover:bg-[#261A14] cursor-pointer">
            <p className="text-tertiary-500 text-sm font-light tracking-wide">
              Available On
            </p>
            <h3 className="text-white font-bold text-xl md:text-2xl font-albert">
              Apple Podcast
            </h3>
            <div className="w-16 h-16 rounded-2xl bg-[#B066FE] flex items-center justify-center mt-4 text-white group-hover:scale-110 transition-transform shadow-[0_4px_20px_rgba(176,102,254,0.3)]">
              <svg
                width="34"
                height="34"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.5 0-4.5-2-4.5-4.5S9.5 7.5 12 7.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5zm0-7c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Episodes Sections */}
      <section className="px-6 md:px-12 lg:px-20 max-w-6xl mx-auto mb-24 md:mb-32">
        <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold font-albert text-white mb-16">
          Recent Episodes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#261A14] p-10 rounded-sm flex flex-col justify-between min-h-[340px] border border-transparent hover:border-tertiary-800 transition-colors">
            <div>
              <h3 className="text-2xl font-bold font-albert text-white mb-6">
                Ep. 01: When Faith Feels Heavy
              </h3>
              <p className="text-tertiary-500 text-base font-light leading-relaxed mb-8">
                What do you do when prayer feels like work and you are not sure
                what you believe anymore—but you still want to stay honest with
                God?
              </p>
            </div>
            <Button
              variant="outline"
              className="rounded-full bg-transparent border-tertiary-200 text-tertiary-200 hover:bg-tertiary-200 hover:text-primary-500 mt-auto w-fit px-10 py-6 text-base transition-colors"
            >
              Listen
            </Button>
          </div>

          <div className="bg-[#261A14] p-10 rounded-sm flex flex-col justify-between min-h-[340px] border border-transparent hover:border-tertiary-800 transition-colors">
            <div>
              <h3 className="text-2xl font-bold font-albert text-white mb-6">
                Ep. 02: Money and Shame
              </h3>
              <p className="text-tertiary-500 text-base font-light leading-relaxed mb-8">
                Let's talk about debt, financial pressure, and the quiet shame
                many of us carry. How do we untangle our worth from our bank
                accounts?
              </p>
            </div>
            <Button
              variant="outline"
              className="rounded-full bg-transparent border-tertiary-200 text-tertiary-200 hover:bg-tertiary-200 hover:text-primary-500 mt-auto w-fit px-10 py-6 text-base transition-colors"
            >
              Listen
            </Button>
          </div>

          <div className="bg-[#261A14] p-10 rounded-sm flex flex-col justify-between min-h-[340px] border border-transparent hover:border-tertiary-800 transition-colors">
            <div>
              <h3 className="text-2xl font-bold font-albert text-white mb-6">
                Ep. 03: Friendship as an Adult
              </h3>
              <p className="text-tertiary-500 text-base font-light leading-relaxed mb-8">
                Why is making and keeping friends so complicated now? How do we
                show up with courage, clarity, and boundaries that still make
                room for love?
              </p>
            </div>
            <Button
              variant="outline"
              className="rounded-full bg-transparent border-tertiary-200 text-tertiary-200 hover:bg-tertiary-200 hover:text-primary-500 mt-auto w-fit px-10 py-6 text-base transition-colors"
            >
              Listen
            </Button>
          </div>
        </div>
      </section>

      {/* From the Listeners Section */}
      <section className="px-6 md:px-12 lg:px-20 max-w-6xl mx-auto mb-32 pb-6">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-start">
          <div className="md:w-[35%] flex flex-col justify-start pt-4">
            <Music className="text-[#362722] w-40 h-40 mb-10" strokeWidth={1} />
            <h2 className="text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-bold font-albert text-white">
              From the <br className="hidden md:block" /> Listeners
            </h2>
          </div>
          <div className="md:w-[65%] grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {/* Testimonial 1 */}
            <div className="bg-[#3A2D28] p-10 rounded-sm relative flex flex-col justify-between min-h-[320px]">
              <div className="absolute -bottom-6 left-12 w-0 h-0 border-l-[24px] border-l-transparent border-t-[32px] border-t-[#3A2D28] border-r-[24px] border-r-transparent"></div>
              <p className="text-tertiary-300 text-lg leading-relaxed mb-10 font-light">
                I started listening while I was cooking dinner, and I ended up
                sitting on the kitchen floor with my headphones in, just
                thinking. It feels like someone finally put words to things I've
                been feeling for years.
              </p>
              <div className="flex items-center gap-5 mt-auto">
                <div className="w-14 h-14 rounded-full relative overflow-hidden bg-white/10 shrink-0">
                  <Image
                    src={placeholderImage}
                    alt="Listener"
                    fill
                    className="object-cover filter contrast-125"
                  />
                </div>
                <p className="text-white text-lg">
                  <span className="font-bold">Listener,</span> Vancouver
                </p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-[#2A201C] p-10 rounded-sm relative flex flex-col justify-between min-h-[320px]">
              <div className="absolute -bottom-6 left-12 w-0 h-0 border-l-[24px] border-l-transparent border-t-[32px] border-t-[#2A201C] border-r-[24px] border-r-transparent"></div>
              <p className="text-tertiary-300 text-lg leading-relaxed mb-10 font-light">
                This is the only podcast I don't listen to on 2x speed. Her
                voice is so beautiful and the insights are so rich, I want to
                catch every single word.
              </p>
              <div className="flex items-center gap-5 mt-auto">
                <div className="w-14 h-14 rounded-full relative overflow-hidden bg-white/10 shrink-0">
                  <Image
                    src={placeholderImage}
                    alt="Listener"
                    fill
                    className="object-cover filter contrast-125"
                  />
                </div>
                <p className="text-white text-lg">
                  <span className="font-bold">Listener,</span> Lagos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Form Section */}
      <section className="px-6 md:px-12 lg:px-20 max-w-5xl mx-auto mb-32 pb-10">
        <div className="border border-tertiary-800/50 p-12 md:p-20 text-center rounded-sm bg-[#1A0E08]/50">
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold font-albert text-white mb-8">
            Have a story worth telling?
          </h2>
          <p className="text-tertiary-500 text-lg md:text-xl font-light mb-16 max-w-3xl mx-auto leading-relaxed">
            I am always looking for people with stories. Lessons learned.
            Valleys walked through. Perspectives that might help someone else
            feel a little less alone. If that sounds like you, or you know
            someone who should be heard, I would love to hear from you.
          </p>

          <form
            className="space-y-12 text-left max-w-3xl mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-2 relative">
              <Input
                id="name"
                placeholder=""
                className="bg-transparent border-0 border-b border-tertiary-800 rounded-none px-0 py-6 text-white text-lg focus-visible:ring-0 focus-visible:border-tertiary-200 peer"
              />
              <label
                htmlFor="name"
                className="text-tertiary-400 absolute left-0 top-3 text-lg transition-all peer-focus:-top-4 peer-focus:text-sm peer-focus:text-tertiary-200 peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-sm"
              >
                Name
              </label>
            </div>

            <div className="space-y-2 pt-4 relative">
              <label
                htmlFor="story"
                className="text-tertiary-400 block mb-2 text-lg"
              >
                Story
              </label>
              <Textarea
                id="story"
                placeholder=""
                className="bg-transparent border-0 border-b border-tertiary-800 rounded-none px-0 py-2 text-white text-lg min-h-[80px] resize-none focus-visible:ring-0 focus-visible:border-tertiary-200"
              />
            </div>

            <div className="pt-8 text-center">
              <Button
                type="submit"
                className="rounded-full bg-tertiary-200 text-primary-500 hover:bg-white font-medium px-12 py-7 text-lg w-fit transition-transform hover:scale-[1.02]"
              >
                Submit Your Story
              </Button>
            </div>
          </form>
        </div>
      </section>

    </>
  );
}
