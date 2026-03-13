"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  const footerItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Speaking", href: "/contact" },
    { label: "Gallery", href: "/gallery" },
  ];

  return (
    <footer className="bg-primary-500 py-12 px-6 md:px-12 lg:px-20 border-t border-tertiary-900/30">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center">
        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-8 md:gap-12 text-tertiary-50">
          {footerItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm font-medium hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
