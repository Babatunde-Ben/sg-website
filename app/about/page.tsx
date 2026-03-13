import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import NewsletterCTA from "@/app/_components/NewsletterCTA";
import placeholderImage from "@/app/_assets/images/placeholder-image.jpg";
import { CheckCircle } from "lucide-react";
import { ROUTES } from "@/lib/constant";

export default function About() {
  return (
    <main className="bg-primary-500 pt-24 overflow-hidden">
      {/* Hero / Notebook Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto flex justify-center bg-primary-500">
        <div className="w-full max-w-6xl aspect-[4/3] md:aspect-auto md:min-h-[700px] bg-[#EBE9E8] rounded-xl shadow-2xl flex flex-col md:flex-row relative overflow-visible border-l-[12px] border-l-[#261A14]">
          {/* Notebook Paper Styling - horizontal lines */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20 z-0"
            style={{
              backgroundImage: "linear-gradient(transparent 95%, #A19996 95%)",
              backgroundSize: "100% 2.5rem",
            }}
          ></div>

          {/* Book Spine (middle) */}
          <div className="hidden md:block absolute top-[2%] bottom-[2%] left-1/2 -ml-[10px] w-[20px] bg-gradient-to-r from-transparent via-black/20 to-transparent z-10 rounded-full shadow-inner"></div>

          {/* Book Mark ribbon */}
          <div className="hidden md:block absolute top-0 right-1/2 mr-[40px] w-[30px] h-[150px] bg-[#261A14] z-20 shadow-md">
            <div className="absolute bottom-0 w-full h-[20px] bg-[#EBE9E8] clip-ribbon"></div>
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

      {/* A little backstory */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-primary-500">
        <div className="max-w-5xl mx-auto bg-[#362722] p-12 md:p-20 rounded-sm">
          <h2 className="text-3xl lg:text-4xl font-bold font-albert text-white mb-10">
            A little backstory
          </h2>
          <div className="space-y-8 text-tertiary-500 text-lg font-light leading-relaxed">
            <p>
              Years ago, I was at an event when the program began to unravel.
              There was no script. The schedule had collapsed. The room was
              getting restless.
            </p>
            <p>
              In a moment that should have felt chaotic, I stepped in—and felt a
              deep sense of certainty. I realized that this was my assignment:
              to be the anchor. To hold the room together, even when the plans
              were falling apart.
            </p>
            <p>
              Since then, I have dedicated my voice to that purpose: bringing
              clarity and composure to environments that need both.
            </p>
          </div>
        </div>
      </section>

      {/* What sets me apart */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-primary-500">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold font-albert text-white mb-8">
            What sets me apart
          </h2>
          <p className="text-tertiary-500 text-lg mb-16 max-w-5xl leading-relaxed font-light">
            I serve audiences looking for depth and help people find the courage
            to live and lead with integrity. When I enter a room, I create an
            environment where people feel seen and challenged to grow. I use
            storytelling and clear language to help your audience:
          </p>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 p-8 md:p-12 border border-tertiary-800 rounded-sm bg-[#1A0E08]/50">
            <div className="flex items-center gap-4 w-full md:w-1/3">
              <CheckCircle className="text-tertiary-600 shrink-0" size={24} />
              <p className="text-tertiary-300 font-light text-lg">
                Is it true? (Does it have integrity?)
              </p>
            </div>
            <div className="flex items-center gap-4 w-full md:w-1/3">
              <CheckCircle className="text-tertiary-600 shrink-0" size={24} />
              <p className="text-tertiary-300 font-light text-lg">
                Is it kind? (Does it respect the dignity of the listener?)
              </p>
            </div>
            <div className="flex items-center gap-4 w-full md:w-1/3">
              <CheckCircle className="text-tertiary-600 shrink-0" size={24} />
              <p className="text-tertiary-300 font-light text-lg">
                Is it useful? (Can you actually do something with it?)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-primary-500">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-albert font-bold text-center text-white mb-20">
            What I Do
          </h2>

          <div className="flex flex-col gap-16">
            {/* Hosting & Moderation */}
            <div className="flex flex-col md:flex-row bg-[#3A2D28] rounded-sm overflow-hidden min-h-[500px]">
              <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-full">
                <Image
                  src={placeholderImage}
                  alt="Stephanie hosting"
                  fill
                  className="object-cover filter contrast-125"
                />
              </div>
              <div className="w-full md:w-1/2 p-10 md:p-16 lg:p-20 flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-bold font-albert text-white mb-8">
                  Hosting & Moderation
                </h3>
                <p className="text-tertiary-500 text-lg mb-8 font-light leading-relaxed">
                  A great event feels effortless. As your Host, I am there to
                  unify the different parts of your program into a single,
                  wholesome experience.
                </p>
                <p className="text-tertiary-500 text-lg mb-12 font-light leading-relaxed">
                  I keep the energy focused. I guide the transitions with
                  warmth. I ensure that every speaker feels supported and every
                  attendee feels included.
                </p>
                <Link href={ROUTES.CONTACT}>
                  <Button className="rounded-full bg-tertiary-200 text-primary-500 hover:bg-white font-medium px-12 py-7 text-lg w-fit transition-colors">
                    Let's Chat
                  </Button>
                </Link>
              </div>
            </div>

            {/* Speaker */}
            <div className="flex flex-col md:flex-row border border-tertiary-800 rounded-sm overflow-hidden min-h-[500px] bg-[#1A0E08]">
              <div className="w-full md:w-1/2 p-10 md:p-16 lg:p-20 flex flex-col justify-center order-2 md:order-1">
                <h3 className="text-3xl md:text-4xl font-bold font-albert text-white mb-8">
                  What happens when I take the stage as a speaker?
                </h3>
                <p className="text-tertiary-500 text-lg mb-6 font-light leading-relaxed">
                  When I enter a room, I create an environment where people feel
                  seen and challenged to grow.
                </p>
                <p className="text-tertiary-500 text-lg mb-10 font-light leading-relaxed">
                  I use storytelling and clear language to help your audience:
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-5">
                    <CheckCircle
                      className="text-tertiary-600 shrink-0"
                      size={24}
                    />
                    <p className="text-tertiary-300 text-lg font-light">
                      Unlock new ways of thinking.
                    </p>
                  </div>
                  <div className="flex items-center gap-5">
                    <CheckCircle
                      className="text-tertiary-600 shrink-0"
                      size={24}
                    />
                    <p className="text-tertiary-300 text-lg font-light">
                      Gain perspective on what matters.
                    </p>
                  </div>
                  <div className="flex items-center gap-5">
                    <CheckCircle
                      className="text-tertiary-600 shrink-0"
                      size={24}
                    />
                    <p className="text-tertiary-300 text-lg font-light">
                      Leave equipped for what comes next.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-full order-1 md:order-2">
                <Image
                  src={placeholderImage}
                  alt="Stephanie speaking"
                  fill
                  className="object-cover filter contrast-125"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature topics */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-primary-500">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-albert text-white mb-6">
              Signature topics
            </h2>
            <p className="text-tertiary-500 text-lg md:text-xl font-light max-w-3xl mx-auto">
              Every session is customized for the context, but I am often
              invited to speak on:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col">
              <div className="relative aspect-square w-full mb-6 filter contrast-125 rounded-sm overflow-hidden">
                <Image
                  src={placeholderImage}
                  alt="Communication & Relationships"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-[#261A14] py-6 px-6 text-center rounded-sm border border-tertiary-900/50">
                <h4 className="text-white font-medium text-lg font-albert">
                  Communication & Relationships
                </h4>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="relative aspect-square w-full mb-6 filter contrast-125 rounded-sm overflow-hidden">
                <Image
                  src={placeholderImage}
                  alt="Identity & Purpose"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-[#261A14] py-6 px-6 text-center rounded-sm border border-tertiary-900/50">
                <h4 className="text-white font-medium text-lg font-albert">
                  Identity & Purpose
                </h4>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="relative aspect-square w-full mb-6 filter contrast-125 rounded-sm overflow-hidden">
                <Image
                  src={placeholderImage}
                  alt="Leadership & Influence"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-[#261A14] py-6 px-6 text-center rounded-sm border border-tertiary-900/50">
                <h4 className="text-white font-medium text-lg font-albert">
                  Leadership & Influence
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* From the Room (Testimonials) */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-primary-500">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-albert text-center text-white mb-24">
            From the Room
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12">
            {/* Testimonial 1 */}
            <div className="bg-[#46362F] p-10 md:p-12 rounded-sm relative flex flex-col justify-between min-h-[350px]">
              <div className="absolute -bottom-6 left-12 w-0 h-0 border-l-[24px] border-l-transparent border-t-[32px] border-t-[#46362F] border-r-[24px] border-r-transparent"></div>
              <p className="text-tertiary-300 text-base md:text-lg leading-relaxed mb-10 relative z-10 font-light">
                I've watched our church go completely quiet when she speaks. It
                is because people feel safe. She brings a calm intelligence that
                pulls you in.
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
            <div className="bg-[#3A2D28] p-10 md:p-12 rounded-sm relative flex flex-col justify-between min-h-[350px]">
              <div className="absolute -bottom-6 left-12 w-0 h-0 border-l-[24px] border-l-transparent border-t-[32px] border-t-[#3A2D28] border-r-[24px] border-r-transparent"></div>
              <p className="text-tertiary-300 text-base md:text-lg leading-relaxed mb-10 relative z-10 font-light">
                Stephanie elevated the panel. She asked the questions the
                audience was actually thinking and made the whole conversation
                feel deeper.
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

            {/* Testimonial 3 */}
            <div className="bg-[#2A201C] p-10 md:p-12 rounded-sm relative flex flex-col justify-between min-h-[350px]">
              <div className="absolute -bottom-6 left-12 w-0 h-0 border-l-[24px] border-l-transparent border-t-[32px] border-t-[#2A201C] border-r-[24px] border-r-transparent"></div>
              <p className="text-tertiary-300 text-base md:text-lg leading-relaxed mb-10 relative z-10 font-light">
                Participant feedback was some of the strongest we have seen.
                Over and over, people mentioned how safe and clear the space
                felt while she was on stage
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

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-primary-500">
        <div className="max-w-5xl mx-auto border border-tertiary-900/40 bg-[#1A0E08]/30 p-16 md:p-24 text-center rounded-sm">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-albert text-white mb-8">
            Let's create something meaningful.
          </h2>
          <p className="text-tertiary-500 text-lg md:text-xl mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            If you are planning an event and you care about how people speak to
            each other during and after it, I would love to hear more.
          </p>
          <Link href={ROUTES.CONTACT}>
            <Button className="rounded-full bg-tertiary-200 text-primary-500 hover:bg-white font-medium px-12 py-7 text-lg hover:scale-105 transition-all">
              Submit Inquiry
            </Button>
          </Link>
        </div>
      </section>

      {/* Global Newsletter CTA */}
      <NewsletterCTA />
    </main>
  );
}
