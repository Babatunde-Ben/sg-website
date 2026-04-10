import { defineType, defineField } from 'sanity'
import { BlockContentIcon } from '@sanity/icons'

export const episodeType = defineType({
  name: 'episode',
  title: 'Podcast Episode',
  type: 'document',
  icon: BlockContentIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'listenUrl',
      title: 'Listen URL',
      type: 'url',
    }),
    defineField({
      name: 'publishDate',
      title: 'Publish Date',
      type: 'date',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'publishDate',
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle ? `Published: ${subtitle}` : undefined,
      }
    },
  },
})
