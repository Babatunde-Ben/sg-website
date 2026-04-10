import { defineType, defineField } from 'sanity'
import { ImagesIcon } from '@sanity/icons'

export const galleryImageType = defineType({
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'document',
  icon: ImagesIcon,
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'altText',
      title: 'Alt Text (for accessibility)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

  ],
  preview: {
    select: {
      title: 'altText',
      media: 'image',
    },
  },
})
