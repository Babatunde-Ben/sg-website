export default function StatsSection() {
  const stats = [
    {
      value: "100",
      label: "Events Worldwide",
    },
    {
      value: "50,000",
      label: "People Impacted",
    },
    {
      value: "10",
      label: "Years Experience",
    },
  ];
  return (
    <section className="py-40 section-padding-x">
      <div className="flex flex-col items-center justify-between gap-12 text-center md:gap-28 md:flex-row md:justify-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <p className="text-5xl sm:text-6xl md:text-7xl font-bold text-tertiary-50 mb-4">
              {stat.value}+
            </p>
            <p className="text-tertiary-700 md:text-lg lg:text-xl">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
