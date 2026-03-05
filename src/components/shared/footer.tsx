import Link from "next/link";
import { Facebook, Linkedin, Mail, Phone, Twitter, MapPin, ArrowRight, Instagram } from "lucide-react";
import CustomImage from "@/components/shared/CustomImage";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Case Studies", href: "/case-study" },
      { name: "Careers", href: "/career" },
    ],
    services: [
      { name: "IWMS Consulting", href: "/services" },
      { name: "IWMS Implementation", href: "/services" },
      { name: "System Integration", href: "/services" },
      { name: "Managed Support", href: "/services" },
    ],
    resources: [
      { name: "Contact Us", href: "/contact" },
      { name: "FAQ", href: "/faq" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms" },
    ],
  };

  const socialLinks = [
    { name: "Facebook", icon: <Facebook className="h-5 w-5" />, href: "https://facebook.com" },
    { name: "Twitter", icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com" },
    { name: "LinkedIn", icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com" },
    { name: "Instagram", icon: <Instagram className="h-5 w-5" />, href: "https://instagram.com" },
  ];

  return (
    <footer className="mt-16 w-full bg-[#0d67a9] text-white overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 pt-16 pb-8 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block transition-transform hover:scale-105 duration-300">
              <picture>
                <source media="(min-width:1280px)" srcSet="/logo/fotter-logo-xl.svg" />
                <source media="(min-width:1024px)" srcSet="/logo/fotter-logo-lg.svg" />
                <source media="(min-width:768px)" srcSet="/logo/fotter-logo-md.svg" />
                <source media="(min-width:640px)" srcSet="/logo/fotter-logo-sm.svg" />
                <CustomImage
                  src="/logo/fotter-logo.svg"
                  alt="IWMS Advisors Footer Logo"
                  width={160}
                  height={100}
                  className="w-40 h-auto"
                />
              </picture>
            </Link>
            <p className="text-white/90 text-sm leading-relaxed max-w-sm">
              We are working to create your workplace smarter. Built with smart city challenges in a trusted company. Empowering organizations through innovative IWMS solutions.
            </p>
            <div className="flex flex-col space-y-3">
              <a href="mailto:info@iwmsadvisors.com" className="flex items-center gap-3 text-sm text-white/90 hover:text-white transition-colors group w-fit">
                <div className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-colors">
                  <Mail className="h-4 w-4" />
                </div>
                <span>info@iwmsadvisors.com</span>
              </a>
              <a href="tel:+14444444" className="flex items-center gap-3 text-sm text-white/90 hover:text-white transition-colors group w-fit">
                <div className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-colors">
                  <Phone className="h-4 w-4" />
                </div>
                <span>+1 444 44 44</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-white/90 w-fit">
                <div className="bg-white/10 p-2 rounded-lg">
                  <MapPin className="h-4 w-4" />
                </div>
                <span>123 Business Way, City, Country</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-lg font-bold relative pb-2 inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-white/30"></span>
            </h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/80 hover:text-white transition-all hover:translate-x-1 inline-flex items-center group">
                    <ArrowRight className="h-0 w-0 group-hover:w-3 group-hover:h-3 mr-0 group-hover:mr-2 transition-all opacity-0 group-hover:opacity-100" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-lg font-bold relative pb-2 inline-block">
              Our Services
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-white/30"></span>
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/80 hover:text-white transition-all hover:translate-x-1 inline-flex items-center group">
                    <ArrowRight className="h-0 w-0 group-hover:w-3 group-hover:h-3 mr-0 group-hover:mr-2 transition-all opacity-0 group-hover:opacity-100" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-lg font-bold relative pb-2 inline-block">
              Newsletter
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-white/30"></span>
            </h3>
            <p className="text-white/80 text-sm italic">
              Subscribe to stay updated with our latest insights.
            </p>
            <form className="mt-4 flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-white/40 flex-grow placeholder:text-white/50"
              />
              <button className="bg-white text-[#0d67a9] font-bold px-6 py-2.5 rounded-lg text-sm hover:bg-white/90 transition-all active:scale-95 whitespace-nowrap">
                Join Now
              </button>
            </form>
            <div className="pt-4">
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 p-2.5 rounded-full hover:bg-white text-white hover:text-[#0d67a9] transition-all transform hover:-translate-y-1 active:scale-90"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
            <p>© {currentYear} <span className="text-white font-medium">IWMS Advisors</span>. All Rights Reserved.</p>
            <div className="flex gap-8">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
