import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Stephanie George",
    short_name: "Stephanie George",
    description:
      "Host, speaker, and podcast creator sharing truth and soul for the moments that matter.",
    start_url: "/",
    display: "standalone",
    background_color: "#150800",
    theme_color: "#150800",
    icons: [
      {
        src: "/stephanie-george-logo.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/logo.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
