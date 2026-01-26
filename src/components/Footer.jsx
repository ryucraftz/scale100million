import React from "react";
import { Instagram, Youtube, Send, ArrowRight, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logoWhite from "../assets/logowhite.png";

export default function Footer() {
  const socialLinks = [
    { icon: <Instagram size={24} />, href: "https://www.instagram.com/scale100million/", label: "Instagram", color: "hover:text-[#E1306C]" },
    { icon: <Send size={24} />, href: "https://t.me/+t5a5E6TJ7JowNjg1", label: "Telegram", color: "hover:text-[#229ED9]" },
    { icon: <Youtube size={24} />, href: "https://www.youtube.com/@scale100million-yt", label: "YouTube", color: "hover:text-[#FF0000]" },
  ];

  return (
    <footer id="site-footer" className="bg-black text-white pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6 text-center md:text-left">
            <Link to="/" className="inline-block">
              <img
                src={logoWhite}
                alt="Scale100Million"
                className="h-12 md:h-14 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
              Empowering founders to build scalable, systemized, and profitable 8-figure businesses.
            </p>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-2" />

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-6 text-center md:text-left">
            <h4 className="text-white font-bold tracking-wide text-sm uppercase opacity-90">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {/* Using standard anchors for these if routes don't exist yet, or Links if they do. Assuming some exist based on App.jsx */}
              <li><button onClick={() => document.getElementById('mentorship')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary transition-colors">Mentorship</button></li>
              <li><Link to="/join-team" className="hover:text-primary transition-colors">Join Our Team</Link></li>
              <li><Link to="/partner" className="hover:text-primary transition-colors">Partner With Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="lg:col-span-2 space-y-6 text-center md:text-left">
            <h4 className="text-white font-bold tracking-wide text-sm uppercase opacity-90">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms of Use</Link></li>
              <li><Link to="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link></li>
              <li><Link to="/shipping-policy" className="hover:text-white transition-colors">Shipping Policy</Link></li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="lg:col-span-2 space-y-6 flex flex-col items-center md:items-start">
            <h4 className="text-white font-bold tracking-wide text-sm uppercase opacity-90">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 ${social.color} hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm group`}
                  aria-label={social.label}
                >
                  <span className="transition-transform duration-300 group-hover:scale-110">
                    {social.icon}
                  </span>
                </motion.a>
              ))}
            </div>
            <a
              href="mailto:support@scale100million.com"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors group"
            >
              support@scale100million.com
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="hidden md:block pt-4 space-y-4">
              <div className="flex items-start gap-3 group">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-primary/50 transition-colors">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <p className="text-sm text-gray-400 leading-relaxed max-w-[280px]">
                  NIRMAN AJINKYATARA, VADGAON BUDRUK 411041, Vadgaon Budruk, MH, 411041
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <a href="tel:+919325847844" className="flex items-center gap-3 group w-fit">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-primary/50 transition-colors">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors">+91 9325847844</span>
                </a>

                <a href="tel:+918806400205" className="flex items-center gap-3 group w-fit">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-primary/50 transition-colors">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors">+91 8806400205</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} SCALE100MILLION. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Built for visionaries by visionaries.</span>
          </div>
        </div>
      </div>
    </footer >
  );
}
