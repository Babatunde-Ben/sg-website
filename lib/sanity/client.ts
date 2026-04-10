import { createClient } from 'next-sanity'

// Fallbacks for type generation
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your_project_id_here'
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-04-09'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false if using Next.js caching or ISR
})
