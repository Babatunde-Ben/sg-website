import { defineQuery } from "next-sanity";

export const getEpisodesQuery = defineQuery(`
  *[_type == "episode"] | order(publishDate desc, _createdAt desc) {
    _id,
    title,
    description,
    listenUrl,
    publishDate
  }
`);

export const getAllTestimonialsQuery = defineQuery(`
  *[_type == "testimonial"] | order(_createdAt desc) {
    _id,
    quote,
    author,
    locationOrRole,
    category,
    "avatarUrl": avatar.asset->url,
    "avatarLqip": avatar.asset->metadata.lqip
  }
`);

export const getGalleryImagesQuery = defineQuery(`
  *[_type == "galleryImage"] | order(orderRank) [0...$limit] {
    _id,
    altText,
    "imageUrl": image.asset->url,
    "imageLqip": image.asset->metadata.lqip
  }
`);

// Pagination query for infinite scroll (cursor-based on orderRank)
export const getMoreGalleryImagesQuery = defineQuery(`
  *[_type == "galleryImage" && orderRank > $lastOrderRank] | order(orderRank) [0...$limit] {
    _id,
    altText,
    "imageUrl": image.asset->url,
    "imageLqip": image.asset->metadata.lqip,
    orderRank
  }
`);

// Initial gallery load with orderRank for pagination cursor
export const getInitialGalleryImagesQuery = defineQuery(`
  *[_type == "galleryImage"] | order(orderRank) [0...$limit] {
    _id,
    altText,
    "imageUrl": image.asset->url,
    "imageLqip": image.asset->metadata.lqip,
    orderRank
  }
`);

export const getContactInfoQuery = defineQuery(`
  *[_type == "contactInfo"][0] {
    phone,
    email,
    socialLinks {
      x,
      instagram,
      linkedin,
      spotify,
      soundcloud,
      applePodcast,
      youtubeMusic
    }
  }
`);

export const getStatsQuery = defineQuery(`
  *[_type == "stats"][0] {
    eventsWorldwide,
    peopleImpacted,
    yearsExperience
  }
`);
