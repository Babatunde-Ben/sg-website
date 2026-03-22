import { Button } from "@/components/ui/button";

const episodes = [
  {
    title: "Ep. 01: When Faith Feels Heavy",
    description:
      "What do you do when prayer feels like work and you are not sure what you believe anymore—but you still want to stay honest with God?",
  },
  {
    title: "Ep. 02: Money and Shame",
    description:
      "Let's talk about debt, financial pressure, and the quiet shame many of us carry. How do we untangle our worth from our bank accounts?",
  },
  {
    title: "Ep. 03: Friendship as an Adult",
    description:
      "Why is making and keeping friends so complicated now? How do we show up with courage, clarity, and boundaries that still make room for love?",
  },
];

export default function RecentEpisodesSection() {
  return (
    <section className="px-6 md:px-12 lg:px-20 max-w-6xl mx-auto mb-24 md:mb-32">
      <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold font-albert text-white mb-16">
        Recent Episodes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {episodes.map((ep) => (
          <div
            key={ep.title}
            className="bg-[#261A14] p-10 rounded-sm flex flex-col justify-between min-h-[340px] border border-transparent hover:border-tertiary-800 transition-colors"
          >
            <div>
              <h3 className="text-2xl font-bold font-albert text-white mb-6">
                {ep.title}
              </h3>
              <p className="text-tertiary-500 text-base font-light leading-relaxed mb-8">
                {ep.description}
              </p>
            </div>
            <Button
              variant="outline"
              className="rounded-full bg-transparent border-tertiary-200 text-tertiary-200 hover:bg-tertiary-200 hover:text-primary-500 mt-auto w-fit px-10 py-6 text-base transition-colors"
            >
              Listen
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
