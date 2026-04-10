import { client } from "@/lib/sanity/client";
import { getContactInfoQuery } from "@/lib/sanity/queries";
import ContactClient from "@/components/contact/ContactClient";

export const revalidate = 3600;

export default async function Contact() {
  const contactInfo = await client.fetch(
    getContactInfoQuery,
    {},
    { next: { tags: ["contactInfo"] } },
  );
  return <ContactClient contactInfo={contactInfo} />;
}
