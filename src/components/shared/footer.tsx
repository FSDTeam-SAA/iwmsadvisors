import Link from "next/link";
import { Facebook, Linkedin, Mail, Phone, Twitter } from "lucide-react";
import CustomImage from "@/components/shared/CustomImage";

const Footer = () => {
  return (
    <footer className="mt-12 md:mt-16 w-full bg-[#0f66a6] text-white">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2">
              <CustomImage
                src={"/images/footerLogo.png"}
                width={100}
                height={67}
                alt="IWMS Advisors Footer Logo "
                className="w-full h-full"
              />
            </Link>
            <p className="mt-3 text-sm text-white">
              We are working to create your workplace
              <br />
              smarter. Built with smart city challenges
              <br />
              in a trusted company.
            </p>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5" />
                <a
                  href="mailto:info@iwmsadvisors.com"
                  className="hover:text-white"
                >
                  info@iwmsadvisors.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5" />
                <a href="tel:+14444444" className="hover:text-white">
                  +1 444 44 44
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            {/* <h3 className="text-xs font-semibold uppercase tracking-wider">
              Quick Links
            </h3> */}
            <ul className="mt-3 space-y-2 text-base">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white/80">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-white/80">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white/80">
                  About
                </Link>
              </li>
             
              <li>
                <Link href="/career" className="hover:text-white/80">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            {/* <h3 className="text-xs font-semibold uppercase tracking-wider">
              Services
            </h3> */}
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
            {/* <h3 className="text-xs font-semibold uppercase tracking-wider">
              Contact us
            </h3> */}
            <ul className="mt-3 space-y-2 text-base">
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white/80">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-6 text-xs sm:flex-row">
          <p className="text-white/70">
            Copyright © 2026 IWMS Advisors. All Rights Reserved.
          </p>
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
