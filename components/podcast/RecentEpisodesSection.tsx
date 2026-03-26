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
    <section className="section-padding-x mb-24 md:mb-32">
      <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-tertiary-50 mb-12">
        Recent Episodes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {episodes.map((ep) => (
          <div
            key={ep.title}
            className="bg-white/4 px-6 py-14 flex flex-col justify-between sm:px-8 md:px-10 xl:px-14"
          >
            <div className="flex-1">
              <h3 className="text-xl font-bold font-albert text-tertiary-50 mb-6 lg:text-2xl">
                {ep.title}
              </h3>
              <p className="text-tertiary-500/40 lg:text-lg mb-10">
                {ep.description}
              </p>
            </div>
            <Button variant="outline" className="w-full">
              Listen
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
