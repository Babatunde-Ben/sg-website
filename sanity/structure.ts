import { StructureResolver } from "sanity/structure";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("episode").title("Podcast Episodes"),
      S.documentTypeListItem("testimonial").title("Testimonials"),
      S.divider(),
      orderableDocumentListDeskItem({
        type: "galleryImage",
        title: "Gallery Images",
        S,
        context,
      }),
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

