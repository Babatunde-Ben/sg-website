import { defineType, defineField } from "sanity";
import { EnvelopeIcon } from "@sanity/icons";

export const contactInfoType = defineType({
  name: "contactInfo",
  title: "Global Contact Info",
  type: "document",
  icon: EnvelopeIcon,
  fields: [
    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
    }),
    defineField({
      name: "socialLinks",
      title: "Social Media Links",
      type: "object",
      fields: [
        defineField({ name: "x", type: "url", title: "X (Twitter) URL" }),
        defineField({ name: "instagram", type: "url", title: "Instagram URL" }),
        defineField({ name: "linkedin", type: "url", title: "LinkedIn URL" }),
        defineField({ name: "spotify", type: "url", title: "Spotify URL" }),
        defineField({
          name: "soundcloud",
          type: "url",
          title: "SoundCloud URL",
        }),
        defineField({
          name: "applePodcast",
          type: "url",
          title: "Apple Podcast URL",
        }),
        defineField({
          name: "youtubeMusic",
          type: "url",
          title: "Youtube Music URL",
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Global Contact Settings" };
    },
  },
});
