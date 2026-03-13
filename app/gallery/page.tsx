import Image from "next/image";
import NewsletterCTA from "@/app/_components/NewsletterCTA";
import placeholderImage from "@/app/_assets/images/placeholder-image.jpg";

export default function Gallery() {
  // Array to hold gallery image data, with varied rotations, aspects, and transforms for the messy polaroid effect
  const galleryImages = [
    // Top row
    {
      id: 1,
      aspect: "aspect-[3/4]",
      rotate: "-rotate-3",
      transform: "translate-y-4 md:translate-x-4",
      z: "z-10",
    },
    {
      id: 2,
      aspect: "aspect-[4/3]",
      rotate: "rotate-2",
      transform: "-translate-y-4",
      z: "z-20",
      sticker: "asterisk",
    },
    {
      id: 3,
      aspect: "aspect-square",
      rotate: "rotate-3",
      transform: "translate-y-8 md:-translate-x-4",
      z: "z-10",
    },

    // Middle row
    {
      id: 4,
      aspect: "aspect-square",
      rotate: "-rotate-2",
      transform: "-translate-y-6 md:-translate-y-12 md:translate-x-2",
      z: "z-20",
    },
    {
      id: 5,
      aspect: "aspect-[3/4]",
      rotate: "-rotate-1",
      transform: "-translate-y-4 md:-translate-y-16 scale-100 md:scale-110",
      z: "z-30",
    },
    {
      id: 6,
      aspect: "aspect-square",
      rotate: "rotate-2",
      transform: "-translate-y-8 md:-translate-y-20 md:-translate-x-4",
      z: "z-20",
    },

    // Bottom row 1
    {
      id: 7,
      aspect: "aspect-[3/4]",
      rotate: "-rotate-3",
      transform: "-translate-y-10 md:-translate-y-24 md:translate-x-4",
      z: "z-30",
    },
    {
      id: 8,
      aspect: "aspect-square",
      rotate: "rotate-2",
      transform: "-translate-y-8 md:-translate-y-20",
      z: "z-40",
      sticker: "heart",
    },
    {
      id: 9,
      aspect: "aspect-[3/4]",
      rotate: "-rotate-1",
      transform: "-translate-y-12 md:-translate-y-32 md:-translate-x-4",
      z: "z-30",
    },

    // Bottom row 2
    {
      id: 10,
      aspect: "aspect-[4/3]",
      rotate: "rotate-3",
      transform: "-translate-y-16 md:-translate-y-36 md:translate-x-2",
      z: "z-40",
    },
    {
      id: 11,
      aspect: "aspect-square",
      rotate: "-rotate-2",
      transform: "-translate-y-14 md:-translate-y-32",
      z: "z-20",
    },
    {
      id: 12,
      aspect: "aspect-[4/3]",
      rotate: "rotate-2",
      transform: "-translate-y-18 md:-translate-y-44 md:-translate-x-6",
      z: "z-50",
    },
  ];

  return (
    <main className="bg-primary-500 pt-32 overflow-hidden">
      {/* Header Section */}
      <section className="px-6 md:px-12 lg:px-20 max-w-5xl mx-auto text-center mb-16 md:mb-24">
        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold font-albert text-white mb-6">
          Moments That Matter
        </h1>
        <p className="text-tertiary-500 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
          Behind every event, every conversation, every episode, there's a story
          being told. This is where you'll see some of that work in motion.
        </p>
      </section>

      {/* Gallery Grid Section */}
      <section className="px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto mb-16 md:mb-10 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 items-start justify-items-center">
          {galleryImages.map((img) => (
            <div
              key={img.id}
              className={`relative w-full max-w-[400px] bg-[#FAF8F5] p-3 shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-transform hover:z-[60] hover:scale-105 duration-300 ${img.rotate} ${img.transform} ${img.z} filter contrast-125`}
            >
              <div
                className={`relative w-full ${img.aspect} bg-tertiary-200 overflow-hidden`}
              >
                <Image
                  src={placeholderImage}
                  alt={`Gallery Image ${img.id}`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Stickers logic */}
              {img.sticker === "asterisk" && (
                <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-[#B6C4A2] shadow-lg flex items-center justify-center -rotate-12 z-50">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2v20M2 12h20M4.9 4.9l14.2 14.2M4.9 19.1L19.1 4.9" />
                  </svg>
                </div>
              )}
              {img.sticker === "heart" && (
                <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-[#E5B5C8] shadow-lg flex items-center justify-center rotate-12 z-50">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="#D36C95"
                    stroke="#D36C95"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Global Newsletter CTA */}
      <NewsletterCTA />
    </main>
  );
}
