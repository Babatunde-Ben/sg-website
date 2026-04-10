import { defineType, defineField } from 'sanity'
import { ChartUpwardIcon } from '@sanity/icons'

export const statsType = defineType({
  name: 'stats',
  title: 'Global Stats',
  type: 'document',
  icon: ChartUpwardIcon,
  fields: [
    defineField({
      name: 'eventsWorldwide',
      title: 'Events Worldwide',
      type: 'number',
      validation: (Rule) => Rule.required().integer(),
    }),
    defineField({
      name: 'peopleImpacted',
      title: 'People Impacted',
      type: 'number',
      validation: (Rule) => Rule.required().integer(),
    }),
    defineField({
      name: 'yearsExperience',
      title: 'Years Experience',
      type: 'number',
      validation: (Rule) => Rule.required().integer(),
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Global Stats' }
    },
  },
})
