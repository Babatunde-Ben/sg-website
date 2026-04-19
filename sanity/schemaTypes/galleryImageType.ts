import { defineType, defineField } from 'sanity'
import { ImagesIcon } from '@sanity/icons'
import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list'

export const galleryImageType = defineType({
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'document',
  icon: ImagesIcon,
  orderings: [orderRankOrdering],
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
    orderRankField({ type: 'galleryImage' }),
  ],
  preview: {
    select: {
      title: 'altText',
      media: 'image',
    },
  },
})
