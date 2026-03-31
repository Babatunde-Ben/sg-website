"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Field, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const storyFormSchema = z.object({
  name: z.string().min(1, "Name is required."),
  story: z.string().min(20, "Story should be at least 20 characters."),
});

type StoryFormValues = z.infer<typeof storyFormSchema>;

export default function StoryFormSection() {
  const form = useForm<StoryFormValues>({
    resolver: zodResolver(storyFormSchema),
    defaultValues: {
      name: "",
      story: "",
    },
  });

  function onSubmit(_values: StoryFormValues) {}

  return (
    <section className="section-padding-x mb-40 lg:mb-60">
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
          onSubmit={form.handleSubmit(onSubmit)}
          noValidate
        >
          <Controller
            name="name"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <Input
                  {...field}
                  id="name"
                  placeholder=""
                  autoComplete="name"
                  aria-invalid={fieldState.invalid}
                />
                <Label floating required htmlFor="name">
                  Name
                </Label>
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <Controller
            name="story"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field className="mb-16" data-invalid={fieldState.invalid}>
                <Textarea
                  {...field}
                  id="story"
                  placeholder=""
                  aria-invalid={fieldState.invalid}
                />
                <Label floating required htmlFor="story">
                  Story
                </Label>
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

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
