import SpotifyLogo from "@/app/_assets/SVGs/spotify-logo.svg";
import SoundCloudLogo from "@/app/_assets/SVGs/sound-cloud-logo.svg";
import GooglePodcastLogo from "@/app/_assets/SVGs/google-podcast-logo.svg";
import ApplePodcastLogo from "@/app/_assets/SVGs/apple-podcast-logo.svg";

export default function AvailableOnSection() {
  const channels = [
    {
      name: "Spotify",
      icon: SpotifyLogo,
    },

    {
      name: "SoundCloud",
      icon: SoundCloudLogo,
    },
    {
      name: "Google Podcast",
      icon: GooglePodcastLogo,
    },
    {
      name: "Apple Podcast",
      icon: ApplePodcastLogo,
    },
  ];
  return (
    <section className="section-padding-x my-20 md:my-24 lg:my-32">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {channels.map((channel, index) => (
          <div
            key={index}
            className="border border-white/30 px-6 py-12 flex flex-col items-center justify-betweenf gap-6 transition-colors hover:bg-primary-400/30 cursor-pointer"
          >
            <div className="w-full text-center mb-6 md:text-left lg:mb-20 xl:mb-40">
              <p className="text-tertiary-500 mb-1 lg:mb-2 lg:text-lg">
                Available On
              </p>
              <h3 className="text-tertiary-50 font-bold text-xl lg:text-2xl">
                {channel.name}
              </h3>
            </div>
            <div className="h-full w-full flex items-center justify-center">
              <channel.icon className="w-14 md:w-24 lg:w-32 " />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
