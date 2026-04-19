import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Albert_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/_components/shared/Navbar";
import Footer from "@/app/_components/shared/Footer";
import { client } from "@/lib/sanity/client";
import { getContactInfoQuery } from "@/lib/sanity/queries";
import { absoluteUrl, getBaseUrl, SITE_DESCRIPTION, SITE_NAME } from "@/lib/seo";

const albertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getBaseUrl()),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Stephanie George",
    "event host",
    "conference host",
    "emcee",
    "keynote speaker",
    "public speaker",
    "panel moderator",
    "moderator",
    "podcast host",
    "podcast creator",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: absoluteUrl("/"),
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: absoluteUrl("/stephanie-george-logo.png") }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [absoluteUrl("/stephanie-george-logo.png")],
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/stephanie-george-logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#150800",
};
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerList = await headers();
  const isStudio = headerList.get("x-sg-studio") === "1";

  const contactInfo = await client.fetch(getContactInfoQuery, {}, { next: { tags: ['contactInfo'] } });
  const sameAs = [
    contactInfo?.socialLinks?.x,
    contactInfo?.socialLinks?.instagram,
    contactInfo?.socialLinks?.linkedin,
    contactInfo?.socialLinks?.spotify,
    contactInfo?.socialLinks?.soundcloud,
    contactInfo?.socialLinks?.applePodcast,
    contactInfo?.socialLinks?.youtubeMusic,
  ].filter(Boolean) as string[];

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: absoluteUrl("/"),
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_NAME,
    url: absoluteUrl("/"),
    image: absoluteUrl("/stephanie-george-logo.png"),
    jobTitle: "Host, Speaker, and Podcast Creator",
    description: SITE_DESCRIPTION,
    email: contactInfo?.email || undefined,
    telephone: contactInfo?.phone || undefined,
    sameAs,
  };

  return (
    <html lang="en">
      <body
        className={`${albertSans.variable} font-albert antialiased bg-primary-500 text-tertiary-50 flex flex-col min-h-screen`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {isStudio ? (
          <div className="flex min-h-screen flex-1 flex-col">{children}</div>
        ) : (
          <>
            <Navbar />
            <main className="flex-1 overflow-hidden 2xl:max-w-[1536px] 2xl:mx-auto">
              {children}
            </main>
            <Footer contactInfo={contactInfo} />
          </>
        )}
      </body>
    </html>
  );
}
