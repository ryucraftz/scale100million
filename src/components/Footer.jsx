import React, { useEffect, useState } from "react";
import { FaInstagram, FaYoutube, FaPaperPlane } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../assets/logo first.png";
import AnimatedGradientLine from "../components/AnimatedGradientLine";


export default function Footer() {
  const [showLine, setShowLine] = useState(false);

  useEffect(() => {
    const benefitsSection = document.getElementById("benefits");
    if (!benefitsSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowLine(true);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(benefitsSection);
    return () => observer.disconnect();
  }, []);

  return (
    <footer className="bg-black text-gray-300 pt-10 pb-6">
      <AnimatedGradientLine />

      <div className="container mx-auto px-6 md:px-12">
        {/* Top Section: Logo & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 border-b border-gray-700 pb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <img src={logo} alt="Logo" className="w-15 h-12 object-contain mr-3" />
            <h1 className="text-2xl font-semibold">SCALE100MILLION</h1>
          </div>

          <div className="flex gap-6 text-2xl">
            <a href="https://www.instagram.com/scale100million/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition-colors"><FaInstagram /></a>
            <a href="https://www.youtube.com/@scale100million-yt" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors"><FaYoutube /></a>
            <a href="https://t.me/+SSG0wArwUcQyYTc1" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors"><FaPaperPlane /></a>
          </div>
        </div>

        {/* Middle Section: Links & Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-700 pb-8">

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 border-b-2 border-purple-500 inline-block">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-purple-400 transition-colors">Home</Link></li>
              <li><a href="#services" className="hover:text-purple-400 transition-colors">Services</a></li>
              <li><a href="#features" className="hover:text-purple-400 transition-colors">Features</a></li>
              <li><Link to="/contact" className="hover:text-purple-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 border-b-2 border-purple-500 inline-block">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy-policy" className="hover:text-purple-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/shipping-policy" className="hover:text-purple-400 transition-colors">Shipping Policy</Link></li>
              <li><Link to="/terms-and-conditions" className="hover:text-purple-400 transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-sm">
            <h3 className="text-white font-semibold mb-4 border-b-2 border-purple-500 inline-block">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <span className="block text-gray-500 text-xs">Address:</span>
                NIRMAN AJINKYATARA, VADGAON BUDRUK 411041, Vadgaon Budruk, MH, 411041
              </li>
              <li>
                <span className="block text-gray-500 text-xs">Phone:</span>
                <a href="tel:+919325847844" className="hover:text-white block">+91 9325847844</a>
                <a href="tel:+918806400205" className="hover:text-white block">+91 8806400205</a>
              </li>
              <li>
                <span className="block text-gray-500 text-xs">Email:</span>
                <a href="mailto:scale100million@gmail.com" className="hover:text-white">scale100million@gmail.com</a>
              </li>
              <li className="pt-2">
                <span className="block text-gray-500 text-xs">Billing Name:</span>
                <span className="text-white">Abhay Mukund Lagad</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="text-center text-xs text-gray-500 pt-6">
          © {new Date().getFullYear()} SCALE100MILLION. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
