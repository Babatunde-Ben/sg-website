import { CheckCircle } from "lucide-react";

const reasons = [
  "You want wisdom that is practical, not just quotable.",
  "You appreciate nuance and different perspectives.",
  "You believe growth can be gentle and still be honest.",
  "You are willing to ask hard questions without losing hope.",
];

export default function WhyListenSection() {
  return (
    <section className="px-6 md:px-12 lg:px-20 max-w-6xl mx-auto mb-24 md:mb-32">
      <div className="flex flex-col md:flex-row rounded-sm overflow-hidden">
        <div className="flex-1 bg-[#120A06] p-12 md:p-20 flex items-center justify-center min-h-[300px] md:min-h-[450px]">
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold font-albert text-white text-center md:text-left leading-tight">
            You will feel at
            <br className="hidden md:block" /> home here if:
          </h2>
        </div>
        <div className="flex-1 bg-[#261A14] p-12 md:p-20 flex flex-col justify-center gap-10 min-h-[300px] md:min-h-[450px]">
          {reasons.map((text) => (
            <div key={text} className="flex gap-6 items-start">
              <CheckCircle
                className="text-tertiary-500 shrink-0 mt-1"
                size={26}
                strokeWidth={1.5}
              />
              <p className="text-tertiary-200 text-xl font-light leading-snug">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
