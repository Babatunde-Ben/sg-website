import CheckMarkCircle01 from "@/app/_assets/SVGs/checkmark-circle-01.svg";

export default function WhatSetsMeApartSection() {
  const whatSetsMeApartItems = [
    "Is it true? (Does it have integrity?)",
    "Is it kind? (Does it respect the dignity of the listener?)",
    "Is it useful? (Can you actually do something with it?)",
  ];
  return (
    <section className="section-padding-x my-20 md:my-24 lg:my-32">
      <div>
        <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl text-tertiary-50 mb-8 md:mb-10 lg:mb-12 ">
          What sets me apart
        </h2>
        <p className="text-tertiary-600 sm:text-lg md:text-xl mb-10">
          I serve audiences looking for depth and help people find the courage
          to live and lead with integrity. When I enter a room, I create an
          environment where people feel seen and challenged to grow. I use
          storytelling and clear language to help your audience:
        </p>

        <div className="flex flex-col lg:flex-row justify-between gap-8 px-8 py-12 md:px-10 border border-primary-400">
          {whatSetsMeApartItems.map((text, index) => (
            <div
              key={index}
              className="flex items-center gap-4 w-full text-tertiary-600 lg:w-1/3 lg:items-start "
            >
              <CheckMarkCircle01 className=" shrink-0 size-6 lg:size-8" />
              <p className="text-lg">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
