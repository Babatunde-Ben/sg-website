import CheckMarkCircle01 from "@/app/_assets/SVGs/checkmark-circle-01.svg";

const reasons = [
  "You want wisdom that is practical, not just quotable.",
  "You appreciate nuance and different perspectives.",
  "You believe growth can be gentle and still be honest.",
  "You are willing to ask hard questions without losing hope.",
];

export default function WhyListenSection() {
  return (
    <section className="section-padding-x my-20 md:my-24 lg:my-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white/4 px-4 py-14 sm:px-10 sm:py-20 md:px-12 md:py-24 lg:px-16 flex items-center justify-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-tertiary-50 text-center">
            You will feel at home here if:
          </h2>
        </div>
        <div className="bg-primary-400 px-8 py-16 space-y-10 md:px-10 xl:px-16">
          {reasons.map((text, index) => (
            <div
              key={index}
              className="flex gap-4 items-start text-tertiary-600"
            >
              <CheckMarkCircle01 className=" shrink-0 size-6 lg:size-8" />
              <p className="sm:text-lg xl:text-xl">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
