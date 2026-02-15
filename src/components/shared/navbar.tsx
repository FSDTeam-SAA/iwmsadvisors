"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("#home");
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "/services" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "About", href: "/about" },
  ];

  useEffect(() => {
    const updateActiveLink = () => {
      if (pathname?.startsWith("/services")) {
        setActiveLink("/services");
        return;
      }

      const hash = window.location.hash;
      if (hash) {
        setActiveLink(hash);
      } else {
        setActiveLink("#home");
      }
    };

    updateActiveLink();
    window.addEventListener("hashchange", updateActiveLink);
    window.addEventListener("popstate", updateActiveLink);

    return () => {
      window.removeEventListener("hashchange", updateActiveLink);
      window.removeEventListener("popstate", updateActiveLink);
    };
  }, [pathname]);

  return (
    <header className="w-full border-b border-slate-200 bg-white">
      <div className="mx-auto flex w-full container items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-[11px] font-bold text-slate-700">
            IWM
          </div>
          <div className="leading-tight">
            <p className="text-base font-semibold tracking-wide text-slate-900">
              IWMS
            </p>
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
              Advisors
            </p>
          </div>
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
        </nav>

        <div className="flex items-center gap-3">
          <Button
            className="h-9 rounded-full bg-blue-600 px-5 text-xs font-semibold uppercase tracking-wide text-white hover:bg-blue-700"
            asChild
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
