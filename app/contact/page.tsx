"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import placeholderImage from "@/app/_assets/images/placeholder-image.jpg";
import { Phone, Mail, Globe } from "lucide-react";

export default function Contact() {
  return (
    <>
      {/* Header Section */}
      <section className="px-6 md:px-12 lg:px-20 max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold font-albert text-white mb-6">
          Bookings & Collaborations
        </h1>
        <p className="text-tertiary-500 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
          For hosting & speaking engagements, workshops, and thoughtful
          collaborations, I would love to have a conversation with you.
        </p>
      </section>

      {/* Hero Image Section */}
      <section className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto mb-20 md:mb-32">
        <div className="relative w-full h-[40vh] md:h-[60vh] max-h-[600px] overflow-hidden rounded-sm filter contrast-125 sepia-[0.2]">
          <Image
            src={placeholderImage}
            alt="Stephanie speaking at event"
            fill
            className="object-cover object-top"
          />
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto mb-32">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 xl:gap-16 justify-center max-w-6xl mx-auto">
          {/* Left: Contact Info Snippet */}
          <div className="w-full lg:w-5/12 border border-tertiary-800/50 p-12 md:p-16 rounded-sm bg-transparent h-fit flex flex-col gap-12">
            <div>
              <div className="flex items-center gap-4 text-white mb-2">
                <Phone
                  size={22}
                  className="text-tertiary-200"
                  strokeWidth={1.5}
                />
                <h3 className="font-albert text-xl font-medium tracking-wide">
                  Phone Number
                </h3>
              </div>
              <p className="text-tertiary-500 ml-[38px] font-light text-lg">
                +234 900 234 5678
              </p>
            </div>

            <div>
              <div className="flex items-center gap-4 text-white mb-2">
                <Mail
                  size={22}
                  className="text-tertiary-200"
                  strokeWidth={1.5}
                />
                <h3 className="font-albert text-xl font-medium tracking-wide">
                  Email Address
                </h3>
              </div>
              <p className="text-tertiary-500 ml-[38px] font-light text-lg">
                StephGeorge@gmail.com
              </p>
            </div>

            <div>
              <div className="flex items-center gap-4 text-white mb-4">
                <Globe
                  size={22}
                  className="text-tertiary-200"
                  strokeWidth={1.5}
                />
                <h3 className="font-albert text-xl font-medium tracking-wide">
                  Social Media
                </h3>
              </div>
              <div className="flex items-center gap-3 ml-[38px]">
                <a
                  href="#"
                  className="w-11 h-11 rounded-full bg-[#261A14] flex items-center justify-center text-tertiary-400 hover:bg-tertiary-200 hover:text-primary-500 transition-colors"
                >
                  <span className="sr-only">X (formerly Twitter)</span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4l16 16" />
                    <path d="M4 20L20 4" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-11 h-11 rounded-full bg-[#261A14] flex items-center justify-center text-tertiary-400 hover:bg-tertiary-200 hover:text-primary-500 transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-11 h-11 rounded-full bg-[#261A14] flex items-center justify-center text-tertiary-400 hover:bg-tertiary-200 hover:text-primary-500 transition-colors"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="w-full lg:w-6/12 bg-[#261A14] p-12 md:p-16 rounded-sm">
            <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2 relative">
                <Input
                  id="name"
                  placeholder=""
                  className="bg-transparent border-0 border-b border-tertiary-800 rounded-none px-0 py-6 text-white text-lg focus-visible:ring-0 focus-visible:border-tertiary-200 peer"
                />
                <label
                  htmlFor="name"
                  className="text-tertiary-400 absolute left-0 top-3 text-lg transition-all peer-focus:-top-4 peer-focus:text-sm peer-focus:text-tertiary-200 peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-sm"
                >
                  Name
                </label>
              </div>

              <div className="space-y-2 relative">
                <Input
                  id="email"
                  type="email"
                  placeholder=""
                  className="bg-transparent border-0 border-b border-tertiary-800 rounded-none px-0 py-6 text-white text-lg focus-visible:ring-0 focus-visible:border-tertiary-200 peer"
                />
                <label
                  htmlFor="email"
                  className="text-tertiary-400 absolute left-0 top-3 text-lg transition-all peer-focus:-top-4 peer-focus:text-sm peer-focus:text-tertiary-200 peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-sm"
                >
                  Email Address
                </label>
              </div>

              <div className="space-y-2 relative">
                <Input
                  id="phone"
                  type="tel"
                  placeholder=""
                  className="bg-transparent border-0 border-b border-tertiary-800 rounded-none px-0 py-6 text-white text-lg focus-visible:ring-0 focus-visible:border-tertiary-200 peer"
                />
                <label
                  htmlFor="phone"
                  className="text-tertiary-400 absolute left-0 top-3 text-lg transition-all peer-focus:-top-4 peer-focus:text-sm peer-focus:text-tertiary-200 peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-sm"
                >
                  Phone Number
                </label>
              </div>

              <div className="space-y-2 relative">
                <Input
                  id="organization"
                  placeholder=""
                  className="bg-transparent border-0 border-b border-tertiary-800 rounded-none px-0 py-6 text-white text-lg focus-visible:ring-0 focus-visible:border-tertiary-200 peer"
                />
                <label
                  htmlFor="organization"
                  className="text-tertiary-400 absolute left-0 top-3 text-lg transition-all peer-focus:-top-4 peer-focus:text-sm peer-focus:text-tertiary-200 peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-sm"
                >
                  Organization
                </label>
              </div>

              <div className="space-y-2 relative pt-4">
                <label
                  htmlFor="message"
                  className="text-tertiary-400 block mb-2 text-lg"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder=""
                  className="bg-transparent border-0 border-b border-tertiary-800 rounded-none px-0 py-2 text-white text-lg min-h-[60px] resize-none focus-visible:ring-0 focus-visible:border-tertiary-200"
                />
              </div>

              <div className="pt-8">
                <Button
                  type="submit"
                  className="w-full rounded-full bg-tertiary-200 text-primary-500 hover:bg-white font-medium py-7 text-lg hover:scale-[1.02] transition-transform"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

    </>
  );
}
