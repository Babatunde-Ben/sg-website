import { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("episode").title("Podcast Episodes"),
      S.documentTypeListItem("testimonial").title("Testimonials"),
      S.divider(),
      S.documentTypeListItem("galleryImage").title("Gallery Images"),
      S.divider(),
      S.listItem()
        .title("Contact Info")
        .child(
          S.document()
            .schemaType("contactInfo")
            .documentId("contactInfoSingleton"),
        ),
      S.listItem()
        .title("Global Stats")
        .child(
          S.document().schemaType("stats").documentId("statsSingleton"),
        ),
    ]);

