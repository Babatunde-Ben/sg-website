import Image from "next/image";
import type { ReactNode } from "react";
import { Music } from "lucide-react";
import placeholderImage from "@/app/_assets/images/placeholder-image.jpg";

const testimonials: {
  cardBg: string;
  triangleClassName: string;
  quote: string;
  attribution: ReactNode;
}[] = [
  {
    cardBg: "bg-[#3A2D28]",
    triangleClassName:
      "absolute -bottom-6 left-12 w-0 h-0 border-l-[24px] border-l-transparent border-t-[32px] border-t-[#3A2D28] border-r-[24px] border-r-transparent",
    quote:
      "I started listening while I was cooking dinner, and I ended up sitting on the kitchen floor with my headphones in, just thinking. It feels like someone finally put words to things I've been feeling for years.",
    attribution: (
      <>
        <span className="font-bold">Listener,</span> Vancouver
      </>
    ),
  },
  {
    cardBg: "bg-[#2A201C]",
    triangleClassName:
      "absolute -bottom-6 left-12 w-0 h-0 border-l-[24px] border-l-transparent border-t-[32px] border-t-[#2A201C] border-r-[24px] border-r-transparent",
    quote:
      "This is the only podcast I don't listen to on 2x speed. Her voice is so beautiful and the insights are so rich, I want to catch every single word.",
    attribution: (
      <>
        <span className="font-bold">Listener,</span> Lagos.
      </>
    ),
  },
];

export default function FromTheListenersSection() {
  return (
    <section className="px-6 md:px-12 lg:px-20 max-w-6xl mx-auto mb-32 pb-6">
      <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-start">
        <div className="md:w-[35%] flex flex-col justify-start pt-4">
          <Music className="text-[#362722] w-40 h-40 mb-10" strokeWidth={1} />
          <h2 className="text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-bold font-albert text-white">
            From the <br className="hidden md:block" /> Listeners
          </h2>
        </div>
        <div className="md:w-[65%] grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {testimonials.map((t) => (
            <div
              key={t.quote}
              className={`${t.cardBg} p-10 rounded-sm relative flex flex-col justify-between min-h-[320px]`}
            >
              <div className={t.triangleClassName} />
              <p className="text-tertiary-300 text-lg leading-relaxed mb-10 font-light">
                {t.quote}
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
                <p className="text-white text-lg">{t.attribution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
