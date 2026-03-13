"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function NewsletterCTA() {
  return (
    <section className="bg-[#1C120C] pt-20 pb-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 md:gap-8 justify-between">
        {/* Left Side: Newsletter */}
        <div className="w-full md:w-5/12 bg-[#261A14] p-8 md:p-12 rounded-sm flex flex-col justify-center">
          <h2 className="text-3xl text-white mb-4">Words for the Journey</h2>
          <p className="text-tertiary-600 text-sm mb-8 leading-relaxed">
            I send a note bi-weekly with thoughts on what it means to live with
            integrity and to navigate life with grace. It is a space for honest
            reflection and a moment to find language for what matters most.
          </p>

          <form
            className="flex flex-col gap-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs text-white">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                className="bg-transparent border-0 border-b border-tertiary-700 rounded-none px-0 focus-visible:ring-0 focus-visible:border-white text-white placeholder-tertiary-600"
              />
            </div>
            <Button className="w-full rounded-full bg-tertiary-50 hover:bg-white text-primary-500 py-6 font-medium mt-2">
              Send me a note
            </Button>
          </form>
        </div>

        {/* Right Side: Contact Details */}
        <div className="w-full md:w-6/12 flex flex-col justify-center">
          <h2 className="text-4xl text-white mb-4">
            Let's start the conversation.
          </h2>
          <p className="text-tertiary-600 text-sm mb-10 w-4/5 leading-relaxed">
            Ready to bring depth and connection to your next event? I'd love to
            hear from you.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="mailto:StephGeorge@gmail.com">
              <div className="bg-[#261A14] py-4 px-6 rounded-sm text-center text-sm text-tertiary-200 hover:bg-[#32241D] transition-colors cursor-pointer">
                StephGeorge@gmail.com
              </div>
            </Link>
            <Link href="tel:+12362342810">
              <div className="bg-[#261A14] py-4 px-6 rounded-sm text-center text-sm text-tertiary-200 hover:bg-[#32241D] transition-colors cursor-pointer">
                +1(236)2342810
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
