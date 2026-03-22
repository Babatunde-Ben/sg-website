export default function AvailableOnSection() {
  return (
    <section className="px-6 md:px-12 lg:px-20 max-w-6xl mx-auto mb-24 md:mb-32">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {/* Spotify */}
        <div className="border border-tertiary-800/50 rounded-sm p-10 flex flex-col items-center justify-center aspect-square gap-6 transition-colors hover:bg-[#261A14] cursor-pointer">
          <p className="text-tertiary-500 text-sm font-light tracking-wide">
            Available On
          </p>
          <h3 className="text-white font-bold text-xl md:text-2xl font-albert">
            Spotify
          </h3>
          <div className="w-20 h-20 rounded-full bg-[#1DB954] flex items-center justify-center mt-2 group-hover:scale-110 transition-transform">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.24 1.021zM19.08 14.4c-.3.42-.84.54-1.26.24-3.36-2.04-8.52-2.64-12.54-1.44-.48.12-1.02-.12-1.14-.6-.12-.48.12-1.02.6-1.14 4.56-1.32 10.2-1.021 14.04 1.32.48.3.6.84.3 1.26zm.12-3.12c-4.02-2.4-10.56-2.64-14.4-1.44-.6.18-1.2-.12-1.38-.72-.18-.6.12-1.2.72-1.38 4.38-1.32 11.52-1.02 16.08 1.68.54.3.72 1.02.42 1.56-.3.54-1.02.72-1.56.42z" />
            </svg>
          </div>
        </div>
        {/* Sound Cloud */}
        <div className="border border-tertiary-800/50 rounded-sm p-10 flex flex-col items-center justify-center aspect-square gap-6 transition-colors hover:bg-[#261A14] cursor-pointer">
          <p className="text-tertiary-500 text-sm font-light tracking-wide">
            Available On
          </p>
          <h3 className="text-white font-bold text-xl md:text-2xl font-albert">
            Sound Cloud
          </h3>
          <div className="w-20 h-20 flex items-center justify-center mt-2 text-[#FF5500] group-hover:scale-110 transition-transform">
            <svg
              width="60"
              height="40"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M11.3 14.8c0 .2-.1.4-.2.6-.2.2-.4.3-.6.3s-.4-.1-.6-.3c-.2-.2-.2-.5-.2-.7 0-.2.1-.4.2-.6.2-.2.4-.3.6-.3s.4.1.6.3c.1.2.2.4.2.7zm.8-6.1c-.2-.2-.4-.3-.6-.3s-.4.1-.6.3c-.2.2-.2.4-.2.6 0 .3.1.5.2.7.2.2.4.3.6.3s.4-.1.6-.3c.2-.2.2-.5.2-.7-.1-.2-.1-.5-.2-.6zm2.4 6.1c0 .2-.1.4-.2.6-.2.2-.4.3-.6.3s-.4-.1-.6-.3c-.2-.2-.2-.5-.2-.7 0-.2.1-.4.2-.6.2-.2.4-.3.6-.3s.5.1.7.3c.1.2.1.4.1.7zm.8-6.1c-.2-.2-.4-.3-.6-.3s-.4.1-.6.3c-.2.2-.2.4-.2.6 0 .3.1.5.2.7.2.2.4.3.6.3s.4-.1.6-.3c.2-.2.2-.4.2-.6 0-.2-.1-.5-.2-.6zM24 10.4c-.1-1.3-.6-2.5-1.5-3.4-.8-.9-2-1.4-3.3-1.4-1.1 0-2.2.4-3 .9-.2-.3-.5-.7-.8-1-1.3-1.1-3-1.7-4.8-1.7-1.1 0-2.2.2-3.2.7-1 .4-1.8 1-2.5 1.8-.7.7-1.2 1.6-1.5 2.6-.3 1-.5 2-.4 3.1-.2-.2-.5-.3-.8-.3h-.2c-.8 0-1.6.3-2.2.9C.3 13.1 0 13.9 0 14.8c0 .9.3 1.7.9 2.3.6.6 1.4.9 2.2.9h18c1.3 0 2.5-.5 3.4-1.5 1-.9 1.5-2.1 1.5-3.4 0-.9-.3-1.8-1-2.7h-1z" />
            </svg>
          </div>
        </div>
        {/* Google Podcast */}
        <div className="border border-tertiary-800/50 rounded-sm p-10 flex flex-col items-center justify-center aspect-square gap-6 transition-colors hover:bg-[#261A14] cursor-pointer">
          <p className="text-tertiary-500 text-sm font-light tracking-wide">
            Available On
          </p>
          <h3 className="text-white font-bold text-xl md:text-2xl font-albert">
            Google Podcast
          </h3>
          <div className="w-20 h-20 flex justify-center items-center mt-2 group-hover:scale-110 transition-transform">
            <div className="flex gap-1.5 items-center h-12">
              <div className="w-2.5 rounded-full h-5 bg-[#EA4335]"></div>
              <div className="w-2.5 rounded-full h-9 bg-[#FBBC05]"></div>
              <div className="w-2.5 rounded-full h-12 bg-[#34A853]"></div>
              <div className="w-2.5 rounded-full h-7 bg-[#4285F4]"></div>
              <div className="w-2.5 rounded-full h-4 bg-[#EA4335]"></div>
            </div>
          </div>
        </div>
        {/* Apple Podcast */}
        <div className="border border-tertiary-800/50 rounded-sm p-10 flex flex-col items-center justify-center aspect-square gap-6 transition-colors hover:bg-[#261A14] cursor-pointer">
          <p className="text-tertiary-500 text-sm font-light tracking-wide">
            Available On
          </p>
          <h3 className="text-white font-bold text-xl md:text-2xl font-albert">
            Apple Podcast
          </h3>
          <div className="w-16 h-16 rounded-2xl bg-[#B066FE] flex items-center justify-center mt-4 text-white group-hover:scale-110 transition-transform shadow-[0_4px_20px_rgba(176,102,254,0.3)]">
            <svg
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.5 0-4.5-2-4.5-4.5S9.5 7.5 12 7.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5zm0-7c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
