export default function HeroNotebookSection() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto flex justify-center bg-primary-500">
      <div className="w-full max-w-6xl aspect-[4/3] md:aspect-auto md:min-h-[700px] bg-[#EBE9E8] rounded-xl shadow-2xl flex flex-col md:flex-row relative overflow-visible border-l-[12px] border-l-[#261A14]">
        {/* Notebook Paper Styling - horizontal lines */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20 z-0"
          style={{
            backgroundImage: "linear-gradient(transparent 95%, #A19996 95%)",
            backgroundSize: "100% 2.5rem",
          }}
        />

        {/* Book Spine (middle) */}
        <div className="hidden md:block absolute top-[2%] bottom-[2%] left-1/2 -ml-[10px] w-[20px] bg-gradient-to-r from-transparent via-black/20 to-transparent z-10 rounded-full shadow-inner" />

        {/* Book Mark ribbon */}
        <div className="hidden md:block absolute top-0 right-1/2 mr-[40px] w-[30px] h-[150px] bg-[#261A14] z-20 shadow-md">
          <div className="absolute bottom-0 w-full h-[20px] bg-[#EBE9E8] clip-ribbon" />
        </div>

        <style>{`
          .clip-ribbon {
            clip-path: polygon(0 100%, 50% 0, 100% 100%, 100% 0, 0 0);
          }
        `}</style>

        {/* Left Page */}
        <div className="w-full md:w-1/2 p-12 md:p-20 flex flex-col justify-center relative z-10 border-b-2 md:border-b-0 border-r-0 md:border-r border-black/10">
          <div className="flex justify-center mb-12">
            <svg
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1A0E08"
              strokeWidth="1"
              className="opacity-80"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[64px] font-black text-[#1A0E08] leading-[1.1] italic text-center text-balance">
            A lot can go wrong at an event. The host is the one thing you
            can't get wrong.
          </h1>
        </div>

        {/* Right Page */}
        <div className="w-full md:w-1/2 p-12 md:p-20 flex flex-col justify-center gap-8 relative z-10 pl-12 md:pl-24">
          <p className="text-[#1A0E08] font-bold italic text-xl">
            I am Stephanie George.
          </p>
          <p className="text-[#1A0E08] text-lg font-medium leading-relaxed italic pr-4">
            My job is to be a steady presence in the room. The one who keeps
            your program moving, supports your speakers, adapts to schedule
            changes, and keeps your audience connected from the opening moment
            to the final close.
          </p>
          <p className="text-[#1A0E08] text-lg font-medium leading-relaxed italic pr-4">
            I work with organizations, conferences, leaders, and creators who
            care about the weight of words and what their audience actually
            walks away with.
          </p>
          <p className="text-[#1A0E08] text-lg font-medium leading-relaxed italic pr-4">
            I know how to read a room — because I have been in a number of
            them across Africa, Europe and North America.
          </p>
        </div>
      </div>
    </section>
  );
}

