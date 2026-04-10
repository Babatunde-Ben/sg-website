"use server";

import { client } from "@/lib/sanity/client";
import { getMoreGalleryImagesQuery } from "@/lib/sanity/queries";

export async function fetchMoreGalleryImages(lastCreatedAt: string, limit: number = 6) {
  try {
    const data = await client.fetch(getMoreGalleryImagesQuery, { lastCreatedAt, limit });
    return data;
  } catch (error) {
    console.error("Failed to fetch more gallery images:", error);
    return [];
  }
}
