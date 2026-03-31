"use client";

import Link from "next/link";
import DesktopLogo from "@/app/_assets/SVGs/desktop-logo.svg";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { ROUTES } from "@/lib/constant";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = [
    { label: "Home", href: ROUTES.HOME },
    { label: "About", href: ROUTES.ABOUT },
    { label: "Gallery", href: ROUTES.GALLERY },
    { label: "Podcast", href: ROUTES.PODCAST },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full z-50 py-8 section-padding-x flex items-center justify-between text-tertiary-50 bg-transparent 2xl:max-w-[1920px] 2xl:left-1/2 2xl:-translate-x-1/2">
      <div
        style={{ boxShadow: "#150800ee 5px 0px 40px 50px" }}
        className="hidden lg:block absolute  w-full z-[-1] left-0 top-1/2 -translate-y-1/2"
      />
      {/* Logo */}
      <Link href={ROUTES.HOME} aria-label="Home">
        <DesktopLogo className="w-30 lg:w-38 hover:opacity-85 transition-opacity duration-200" />
      </Link>

      {/* Desktop Links */}
      <ul className="hidden lg:flex items-center gap-6 text-lg">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`transition-colors ${pathname === item.href ? "text-tertiary-50 font-bold" : "text-tertiary-700 font-medium hover:text-tertiary-600 "}`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Action / Mobile Toggle */}
      <div className="flex items-center gap-4">
        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link href={ROUTES.CONTACT}>
            <Button variant="outline">Get In Touch</Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              className="lg:hidden size-10 border-primary-400 text-tertiary-50 hover:bg-primary-400/20 hover:text-tertiary-200"
            >
              <Menu className="size-5" />
              <span className="sr-only">Toggle mobile menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" showCloseButton={false}>
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <SheetDescription className="sr-only">
              Mobile navigation links
            </SheetDescription>
            <div className="flex flex-col items-center h-full gap-22">
              <ul className="space-y-10 flex-1 my-16">
                {navItems.map((item) => (
                  <li
                    key={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className={`transition-colors px-10 w-full text-xl ${pathname === item.href ? "text-tertiary-50 font-bold" : "text-tertiary-700 font-medium hover:text-tertiary-600 "}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <Link href={ROUTES.CONTACT} className="w-full max-w-80">
                <Button
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="outline"
                  className="w-full"
                >
                  Get In Touch
                </Button>
              </Link>
              <Button
                onClick={() => setIsMobileMenuOpen(false)}
                variant="outline"
                className="lg:hidden size-12 border-primary-400 text-tertiary-50 hover:bg-primary-400/20 hover:text-tertiary-200"
              >
                <X className="size-6" />
                <span className="sr-only">Close mobile menu</span>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
