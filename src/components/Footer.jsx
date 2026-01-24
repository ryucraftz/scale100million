import React, { useEffect, useState } from "react";
import { FaInstagram, FaYoutube, FaPaperPlane } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../assets/logo first.png";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-16 pb-8 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Top Section: Logo & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 border-b border-white/10 pb-12">
          <div className="flex items-center mb-6 md:mb-0 gap-4">
            <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />
            <h1 className="text-2xl font-bold text-white tracking-tight">SCALE100MILLION</h1>
          </div>

          <div className="flex gap-6 text-2xl">
            <a href="https://www.instagram.com/scale100million/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><FaInstagram /></a>
            <a href="https://www.youtube.com/@scale100million-yt" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors"><FaYoutube /></a>
            <a href="https://t.me/+SSG0wArwUcQyYTc1" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><FaPaperPlane /></a>
          </div>
        </div>

        {/* Middle Section: Links & Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10 pb-12">

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Legal</h3>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/shipping-policy" className="hover:text-primary transition-colors">Shipping Policy</Link></li>
              <li><Link to="/terms-and-conditions" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-sm">
            <h3 className="text-white font-bold mb-6 text-lg">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <span className="block text-gray-500 text-xs uppercase tracking-wide mb-1">Address</span>
                <span className="text-gray-300">NIRMAN AJINKYATARA, VADGAON BUDRUK 411041, Pune, MH, India</span>
              </li>
              <li>
                <span className="block text-gray-500 text-xs uppercase tracking-wide mb-1">Phone</span>
                <a href="tel:+919325847844" className="hover:text-white block transition-colors">+91 9325847844</a>
                <a href="tel:+918806400205" className="hover:text-white block transition-colors">+91 8806400205</a>
              </li>
              <li>
                <span className="block text-gray-500 text-xs uppercase tracking-wide mb-1">Email</span>
                <a href="mailto:scale100million@gmail.com" className="hover:text-white transition-colors">scale100million@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="text-center text-xs text-gray-600 pt-8 font-medium">
          © {new Date().getFullYear()} SCALE100MILLION. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
