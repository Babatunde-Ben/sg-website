import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import NewsletterCTA from "@/app/_components/NewsletterCTA";
import placeholderImage from "@/app/_assets/images/placeholder-image.jpg";
import { ROUTES } from "@/lib/constant";

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 md:px-12 lg:px-20 min-h-[80vh] flex flex-col items-center justify-center bg-primary-500">
        <div className="relative w-full max-w-4xl h-[400px] md:h-[600px] flex justify-center items-center mt-8">
          {/* Back Polaroid (Right tilt) */}
          <div className="absolute w-[80%] md:w-[70%] max-w-[600px] aspect-4/3 bg-white p-3 md:p-5 shadow-2xl rotate-6 translate-x-4 translate-y-8 z-0">
            <div className="relative w-full h-full bg-tertiary-200 filter contrast-125 sepia-[0.2]">
              <Image
                src={placeholderImage}
                alt="Stephanie George Hero 1"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          {/* Middle Polaroid (Left tilt) */}
          <div className="absolute w-[85%] md:w-[75%] max-w-[650px] aspect-4/3 bg-white p-3 md:p-5 shadow-2xl -rotate-3 -translate-x-4 -translate-y-4 z-10 transition-transform hover:rotate-0 duration-500">
            <div className="relative w-full h-full bg-tertiary-200 filter contrast-125 sepia-[0.2]">
              <Image
                src={placeholderImage}
                alt="Stephanie George Hero 2"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-[#3A2D28]">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-albert font-bold text-white mb-8 leading-[1.1] tracking-tight">
            Truth and Soul for the Moments That Matter.
          </h1>
          <p className="text-tertiary-400 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto font-light">
            I am Stephanie — a Host, Speaker, and Podcast Creator. I believe
            that how we speak matters just as much as what we say. I care deeply
            about delivering the truth with kindness. When you put me on your
            stage, you get someone who shows up prepared, keeps your program
            moving, and leaves your audience with something they'll carry home.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href={ROUTES.CONTACT}>
              <Button className="w-full sm:w-auto rounded-full px-10 py-7 bg-tertiary-200 text-[#3A2D28] hover:bg-white transition-colors text-lg font-medium">
                Book me as a Host
              </Button>
            </Link>
            <Link href={ROUTES.PODCAST}>
              <Button
                variant="outline"
                className="w-full sm:w-auto rounded-full px-10 py-7 bg-transparent border-tertiary-600 text-tertiary-200 hover:bg-tertiary-800 hover:text-white transition-colors text-lg font-medium"
              >
                Listen to the Podcast
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-primary-500">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8 text-center">
          <div className="flex flex-col items-center">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold font-albert text-white mb-2 tracking-tighter">
              100<span className="text-tertiary-500">+</span>
            </h2>
            <p className="text-tertiary-600 text-sm md:text-base tracking-widest uppercase mt-2">
              Events Worldwide
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold font-albert text-white mb-2 tracking-tighter">
              50,000<span className="text-tertiary-500">+</span>
            </h2>
            <p className="text-tertiary-600 text-sm md:text-base tracking-widest uppercase mt-2">
              People Impacted
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold font-albert text-white mb-2 tracking-tighter">
              10<span className="text-tertiary-500">+</span>
            </h2>
            <p className="text-tertiary-600 text-sm md:text-base tracking-widest uppercase mt-2">
              Years Experience
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Sneak Peek */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-[#1F140F]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 justify-center items-center md:items-start">
          <div className="relative w-full max-w-sm md:max-w-md aspect-3/4 md:aspect-4/5 rounded-sm overflow-hidden filter contrast-125 z-10 md:mt-20">
            <Image
              src={placeholderImage}
              alt="Gallery Preview 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full max-w-sm md:max-w-md aspect-3/4 md:aspect-4/5 rounded-sm overflow-hidden filter contrast-125 md:-mt-10">
            <Image
              src={placeholderImage}
              alt="Gallery Preview 2"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Depth Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-[#261A14]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-albert font-bold text-white mb-6">
            You are looking for depth.
          </h2>
          <p className="text-tertiary-500 text-lg md:text-xl mb-16 max-w-2xl mx-auto font-light leading-relaxed">
            You have seen enough performances. Now you want authentic
            connection. You are probably here because:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-tertiary-800 p-10 md:p-12 flex flex-col items-center justify-center min-h-[300px] transition-colors hover:bg-tertiary-900/20">
              <p className="text-tertiary-300 text-center leading-relaxed text-lg font-light">
                You need a host who can handle inevitable schedule changes with
                grace and composure.
              </p>
            </div>
            <div className="border border-tertiary-800 p-10 md:p-12 flex flex-col items-center justify-center min-h-[300px] transition-colors hover:bg-tertiary-900/20">
              <p className="text-tertiary-300 text-center leading-relaxed text-lg font-light">
                You want a voice of reason and kindness on the mic.
              </p>
            </div>
            <div className="border border-tertiary-800 p-10 md:p-12 flex flex-col items-center justify-center min-h-[300px] transition-colors hover:bg-tertiary-900/20">
              <p className="text-tertiary-300 text-center leading-relaxed text-lg font-light">
                You care about what people do after they leave the venue, not
                just how the event looked while it was happening.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-primary-500">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-albert font-bold text-white mb-20 text-center">
            How We Can Work Together.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {/* Service 1 */}
            <div className="flex flex-col h-full group">
              <div className="relative aspect-square w-full mb-8 overflow-hidden rounded-sm filter contrast-125 group-hover:opacity-90 transition-opacity">
                <Image
                  src={placeholderImage}
                  alt="Hosting & Moderation"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold font-albert text-white mb-4">
                Hosting & Moderation
              </h3>
              <p className="text-tertiary-500 mb-10 flex-1 text-lg font-light leading-relaxed">
                When I host, I am there to keep the room steady. I support your
                speakers and ensure the audience stays engaged, even when the
                schedule shifts or the plans change.
              </p>
              <Link href={ROUTES.CONTACT} className="w-full mt-auto">
                <Button className="w-full rounded-full bg-tertiary-200 text-primary-500 hover:bg-white font-medium py-6 text-lg">
                  Learn About Hosting
                </Button>
              </Link>
            </div>

            {/* Service 2 */}
            <div className="flex flex-col h-full group">
              <div className="relative aspect-square w-full mb-8 overflow-hidden rounded-sm filter contrast-125 group-hover:opacity-90 transition-opacity">
                <Image
                  src={placeholderImage}
                  alt="Speaking"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold font-albert text-white mb-4">
                Speaking
              </h3>
              <p className="text-tertiary-500 mb-10 flex-1 text-lg font-light leading-relaxed">
                I help your audience put words to what they have been feeling
                but couldn't name. My sessions explore communication and
                leadership in a way that is honest and immediately usable in
                real life.
              </p>
              <Link href={ROUTES.ABOUT} className="w-full mt-auto">
                <Button className="w-full rounded-full bg-tertiary-200 text-primary-500 hover:bg-white font-medium py-6 text-lg">
                  Learn About Speaking
                </Button>
              </Link>
            </div>

            {/* Service 3 */}
            <div className="flex flex-col h-full group">
              <div className="relative aspect-square w-full mb-8 overflow-hidden rounded-sm filter contrast-125 group-hover:opacity-90 transition-opacity">
                <Image
                  src={placeholderImage}
                  alt="The Podcast"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold font-albert text-white mb-4">
                The Podcast
              </h3>
              <p className="text-tertiary-500 mb-10 flex-1 text-lg font-light leading-relaxed">
                Real conversations about faith, money, relationships, and
                growth. It is practical. It is authentic. And yes, there's
                usually laughter.
              </p>
              <Link href={ROUTES.PODCAST} className="w-full mt-auto">
                <Button className="w-full rounded-full bg-tertiary-200 text-primary-500 hover:bg-white font-medium py-6 text-lg">
                  Listen
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-primary-500 border-t border-tertiary-900/30">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="w-full lg:w-1/3 flex flex-col justify-center">
            <div className="text-[150px] leading-[0.8] text-tertiary-800/30 font-black mb-4 select-none">
              &ldquo;
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-albert font-bold text-white mb-6">
              From the Room
            </h2>
            <p className="text-tertiary-500 text-lg leading-relaxed font-light">
              Authentic experiences, heartfelt feedback, and the moments that
              made a difference, straight from those who were here to see it
              all.
            </p>
          </div>

          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
            {/* Testimonial 1 */}
            <div className="bg-[#3A2D28] p-10 md:p-12 rounded-sm relative flex flex-col justify-between min-h-[350px]">
              <div className="absolute -bottom-6 left-12 w-0 h-0 border-l-[24px] border-l-transparent border-t-[32px] border-t-[#3A2D28] border-r-[24px] border-r-transparent"></div>
              <p className="text-tertiary-300 text-base md:text-lg leading-relaxed mb-10 relative z-10 font-light">
                I started listening while I was cooking dinner, and I ended up
                sitting on the kitchen floor with my headphones in, just
                thinking. It feels like someone finally put words to things I've
                been feeling for years.
              </p>
              <div className="flex items-center gap-5 mt-auto">
                <div className="relative w-14 h-14 rounded-full overflow-hidden bg-tertiary-200/20">
                  <Image
                    src={placeholderImage}
                    alt="Pastor T"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Pastor T.,</h4>
                  <p className="text-tertiary-500 text-sm">Lagos.</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-[#2A201C] p-10 md:p-12 rounded-sm relative flex flex-col justify-between min-h-[350px]">
              <div className="absolute -bottom-6 left-12 w-0 h-0 border-l-[24px] border-l-transparent border-t-[32px] border-t-[#2A201C] border-r-[24px] border-r-transparent"></div>
              <p className="text-tertiary-300 text-base md:text-lg leading-relaxed mb-10 relative z-10 font-light">
                After her session, our managers finally had language for
                feedback conversations they had been avoiding. Two weeks later,
                they were still using her exact phrases in team meetings.
              </p>
              <div className="flex items-center gap-5 mt-auto">
                <div className="relative w-14 h-14 rounded-full overflow-hidden bg-tertiary-200/20">
                  <Image
                    src={placeholderImage}
                    alt="Mensah, Hr Lead"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">
                    Mensah, Hr Lead,
                  </h4>
                  <p className="text-tertiary-500 text-sm">Lagos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Newsletter CTA */}
      <NewsletterCTA />
    </main>
  );
}
