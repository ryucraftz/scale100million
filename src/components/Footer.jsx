import React from "react";
import { Instagram, Youtube, Twitter, Send } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo100m.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-10 border-t border-gray-900 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 w-full">

        {/* Logo - Main top element */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Scale100Million" className="h-16 md:h-20 w-auto object-contain filter brightness-0 invert" />
          </div>
        </div>

        {/* Socials */}
        <div className="mb-16">
          <p className="text-gray-500 text-sm font-medium tracking-wide uppercase mb-6">Follow us on</p>
          <div className="flex justify-center gap-8">
            <a href="https://www.instagram.com/scale100million/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors">
              <Instagram size={32} />
            </a>
            <a href="https://t.me/+SSG0wArwUcQyYTc1" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors">
              <Send size={32} />
            </a>
            <a href="https://www.youtube.com/@scale100million-yt" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors">
              <Youtube size={32} />
            </a>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="border-t border-gray-800 pt-10 flex flex-wrap justify-center gap-6 md:gap-8 text-sm text-gray-500 font-medium">
          <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/shipping-policy" className="hover:text-white transition-colors">Refund Policy</Link>
          <Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms of Use</Link>
          <Link to="/shipping-policy" className="hover:text-white transition-colors">Shipping & Delivery Policy</Link>
          <a href="mailto:support@scale100million.com" className="hover:text-white transition-colors">Support</a>
          <Link to="/contact" className="hover:text-white transition-colors">Contact us</Link>
        </div>

        <div className="mt-8 text-xs text-gray-600">
          © {new Date().getFullYear()} SCALE100MILLION. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
