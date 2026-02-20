"use client";

import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import CustomImage from "@/components/shared/CustomImage";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("#home");

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Case Studies", href: "/case-study" },
    { label: "About", href: "/about" },
  ];

  return (
    <header className="w-full border-b border-slate-200 bg-white">
      <div className="mx-auto flex w-full container items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 ">
          <CustomImage src="/images/logo.png" alt="Logo" width={180} height={150} />
        </Link>

        <nav className="hidden items-center gap-6 text-base font-medium md:flex">
          {navItems.map((item) => {
            const isActive = activeLink === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setActiveLink(item.href)}
                aria-current={isActive ? "page" : undefined}
                className={`transition-colors ${
                  isActive
                    ? "text-slate-900"
                    : "text-slate-700 hover:text-slate-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="flex items-center gap-3">
            <Button
              className="h-9 rounded-full px-5 text-xs font-semibold uppercase tracking-wide"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
