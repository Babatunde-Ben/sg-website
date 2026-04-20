export default function GalleryLoading() {
  return (
    <>
      <section className="section-padding-x mt-36 mb-16 md:mb-20 lg:mt-40 lg:mb-22">
        <div className="mx-auto h-10 w-80 max-w-full animate-pulse bg-tertiary-900/30 md:h-14 md:w-96" />
        <div className="mx-auto mt-8 h-5 w-full max-w-2xl animate-pulse bg-tertiary-900/20" />
        <div className="mx-auto mt-3 h-5 w-2/3 max-w-xl animate-pulse bg-tertiary-900/20" />
      </section>

      <section className="px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto mb-16 md:mb-10 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="w-full bg-[#FAF8F5] p-3"
              style={{ transform: `rotate(${i % 2 === 0 ? -2 : 2}deg)` }}
            >
              <div className="aspect-square w-full animate-pulse bg-tertiary-300/70" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
