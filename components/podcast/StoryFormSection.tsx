"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Field } from "../ui/field";

export default function StoryFormSection() {
  return (
    <section className="section-padding-x mb-24 md:mb-32">
      <div className="border border-primary-400 px-6 py-20 sm:px-10 md:px-12 lg:px-16 xl:px-40 text-center ">
        <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-tertiary-50 mb-8">
          Have a story worth telling?
        </h2>
        <p className="text-tertiary-600 mb-18 md:text-lg lg:text-xl ">
          I am always looking for people with stories. Lessons learned. Valleys
          walked through. Perspectives that might help someone else feel a
          little less alone. If that sounds like you, or you know someone who
          should be heard, I would love to hear from you.
        </p>

        <form
          className="space-y-12 text-left mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <Field>
            <Input id="name" placeholder="" />
            <Label floating htmlFor="name">
              Name
            </Label>
          </Field>

          <Field className="mb-16">
            <Textarea id="story" placeholder="" />
            <Label floating htmlFor="story">
              Story
            </Label>
          </Field>

          <div className="text-center">
            <Button type="submit" className="w-full sm:max-w-60 sm:mx-auto">
              Submit Your Story
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
