import type { Metadata } from "next";
import {  Albert_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/_components/Navbar";
import Footer from "@/app/_components/Footer";



const albertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
});

  export const metadata: Metadata = {
  title: "Stephanie George",
  description: "Stephanie is a dynamic public speaker who captivates audiences with powerful stories, relatable experiences, and practical insights that inspire personal growth and collective impact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${albertSans.variable} font-albert antialiased bg-[#150800] pb-16`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
