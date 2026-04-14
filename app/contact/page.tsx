import type { Metadata } from "next";
import { client } from "@/lib/sanity/client";
import { getContactInfoQuery } from "@/lib/sanity/queries";
import ContactClient from "@/components/contact/ContactClient";
import { buildPageMetadata } from "@/lib/seo";
import { ROUTES } from "@/lib/constant";

export const revalidate = 3600;
export const metadata: Metadata = buildPageMetadata({
  title: "Contact",
  description:
    "Book Stephanie George for hosting, speaking engagements, workshops, and thoughtful collaborations.",
  path: ROUTES.CONTACT,
});

export default async function Contact() {
  const contactInfo = await client.fetch(
    getContactInfoQuery,
    {},
    { next: { tags: ["contactInfo"] } },
  );
  return <ContactClient contactInfo={contactInfo} />;
}
