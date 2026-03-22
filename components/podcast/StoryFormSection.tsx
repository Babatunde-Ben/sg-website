"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function StoryFormSection() {
  return (
    <section className="px-6 md:px-12 lg:px-20 max-w-5xl mx-auto mb-32 pb-10">
      <div className="border border-tertiary-800/50 p-12 md:p-20 text-center rounded-sm bg-[#1A0E08]/50">
        <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold font-albert text-white mb-8">
          Have a story worth telling?
        </h2>
        <p className="text-tertiary-500 text-lg md:text-xl font-light mb-16 max-w-3xl mx-auto leading-relaxed">
          I am always looking for people with stories. Lessons learned. Valleys
          walked through. Perspectives that might help someone else feel a
          little less alone. If that sounds like you, or you know someone who
          should be heard, I would love to hear from you.
        </p>

        <form
          className="space-y-12 text-left max-w-3xl mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
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

          <div className="space-y-2 pt-4 relative">
            <label
              htmlFor="story"
              className="text-tertiary-400 block mb-2 text-lg"
            >
              Story
            </label>
            <Textarea
              id="story"
              placeholder=""
              className="bg-transparent border-0 border-b border-tertiary-800 rounded-none px-0 py-2 text-white text-lg min-h-[80px] resize-none focus-visible:ring-0 focus-visible:border-tertiary-200"
            />
          </div>

          <div className="pt-8 text-center">
            <Button
              type="submit"
              className="rounded-full bg-tertiary-200 text-primary-500 hover:bg-white font-medium px-12 py-7 text-lg w-fit transition-transform hover:scale-[1.02]"
            >
              Submit Your Story
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
