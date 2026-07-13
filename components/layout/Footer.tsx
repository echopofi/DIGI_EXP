import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa"

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];


const socialLinks = [
  { label: "facebook", href: "https://facebook.com/digiexpressionsMEDIAandARTS", icon: <FaFacebook size={18} /> },
  { label: "instagram", href: "https://www.instagram.com/digiexpressions", icon: <FaInstagram size={18} /> },
  { label: "youtube", href: "https://www.youtube.com/@DIGIexpressions", icon: <FaYoutube size={18} /> }
];
const serviceLinks = [
  { label: "Audio & Sound", href: "/services/audio" },
  { label: "Video & AV", href: "/services/video" },
  { label: "Lighting & Staging", href: "/services/lighting" },
  { label: "IT & Rigging", href: "/services/it-rigging" },
  { label: "Equipment Rental", href: "/services" },
  { label: "Event Consulting", href: "/services" },
];

export default function Footer() {
  return (
    <footer className="bg-dark-800 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              
              <img src="/images/dg-transparent.png" alt="Logo" className="h-12 w-auto" />
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Social Handles
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-gold-500 hover:text-dark-900 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 text-sm hover:text-gold-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 tracking-wide">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 text-sm hover:text-gold-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 tracking-wide">Contact Us</h4>
            <ul className="space-y-3 text-zinc-400 text-sm">
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-gold-500 mt-1 shrink-0"/>
                Miri Drive, Behind Bethel International Christian Academy,
                Gold & Base, Rayfield, Jos, Plateau State </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-gold-500 mt-1 shrink-0"/>
                0803 512 5177 | 0904 330 2516
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-gold-500 mt-1 shrink-0"/>
                digiexpressions@hotmail.com,
                digiexpressions@yahoo.com
              </li>
            </ul>
          </div>
        </div>
           

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-xs">
            &copy; {new Date().getFullYear()} DIGI Expressions. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-zinc-500 text-xs hover:text-gold-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-zinc-500 text-xs hover:text-gold-500 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
