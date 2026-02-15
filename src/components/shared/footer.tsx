import Link from "next/link";
import { Facebook, Linkedin, Mail, Phone, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-12 md:mt-16 w-full bg-[#0f66a6] text-white">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[11px] font-bold text-[#0f66a6]">
                IWM
              </div>
              <div className="leading-tight">
                <h6 className="text-base font-semibold tracking-wide text-white">
                  IWMS
                </h6>
                <h6 className="text-base font-medium uppercase tracking-[0.2em] text-white">
                  Advisors
                </h6>
              </div>
            </Link>
            <h6 className="mt-3 text-base text-white">
              We are working to create your workplace
              <br />
              smarter. Built with smart city challenges
              <br />
              in a trusted company.
            </h6>
            <div className="mt-4 space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5" />
                <a
                  href="mailto:info@iwmsadvisors.com"
                  className="hover:text-white/80"
                >
                  info@iwmsadvisors.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5" />
                <a href="tel:+14444444" className="hover:text-white/80">
                  +1 444 44 44
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="mt-3 space-y-2 text-base">
              <li>
                <Link href="#home" className="hover:text-white/80">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white/80">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#case-studies" className="hover:text-white/80">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white/80">
                  About
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white/80">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-2xl font-semibold uppercase tracking-wider">
              Services
            </h3>
            <ul className="mt-3 space-y-2 text-base">
              <li>
                <Link href="#services" className="hover:text-white/80">
                  IWMS Consulting
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white/80">
                  IWMS Implementation
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white/80">
                  System Integration
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white/80">
                  Managed Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-2xl font-semibold uppercase tracking-wider">
              Resources
            </h3>
            <ul className="mt-3 space-y-2 text-base">
              <li>
                <Link href="#case-studies" className="hover:text-white/80">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white/80">
                  Blog & Articles
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white/80">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white/80">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-6 text-base sm:flex-row">
          <h6 className="text-base text-white">
            Copyright © 2026 IWMS Advisors. All Rights Reserved.
          </h6>
          <div className="flex items-center gap-3">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 p-1.5 transition-colors hover:bg-white/20"
              aria-label="Twitter"
            >
              <Twitter className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 p-1.5 transition-colors hover:bg-white/20"
              aria-label="Facebook"
            >
              <Facebook className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 p-1.5 transition-colors hover:bg-white/20"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
