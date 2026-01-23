import React, { useEffect, useState } from "react";
import { FaInstagram, FaYoutube, FaPaperPlane } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../assets/logo first.png";
import AnimatedGradientLine from "../components/AnimatedGradientLine";


export default function Footer({ lightMode = false }) {
  const [showLine, setShowLine] = useState(false);

  useEffect(() => {
    const benefitsSection = document.getElementById("benefits");
    // If not found, we don't strictly *need* to observe it, but keeping logic as is or adapting.
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

  // Theme Classes
  const bgClass = lightMode ? "bg-slate-50" : "bg-black";
  const textClass = lightMode ? "text-slate-600" : "text-gray-300";
  const headingClass = lightMode ? "text-slate-900" : "text-white";
  const borderClass = lightMode ? "border-slate-200" : "border-gray-700";
  const hoverClass = lightMode ? "hover:text-blue-600" : "hover:text-purple-400";
  const iconHoverClass = lightMode ? "hover:text-blue-500" : "hover:text-purple-500"; // Specific icon hovers override below

  return (
    <footer className={`${bgClass} ${textClass} pt-10 pb-6 transition-colors duration-300`}>
      <AnimatedGradientLine />

      <div className="container mx-auto px-6 md:px-12">
        {/* Top Section: Logo & Socials */}
        <div className={`flex flex-col md:flex-row justify-between items-center mb-10 border-b ${borderClass} pb-8`}>
          <div className="flex items-center mb-6 md:mb-0">
            <img src={logo} alt="Logo" className="w-15 h-12 object-contain mr-3" />
            <h1 className={`text-2xl font-semibold ${headingClass}`}>SCALE100MILLION</h1>
          </div>

          <div className="flex gap-6 text-2xl">
            <a href="https://www.instagram.com/scale100million/" target="_blank" rel="noopener noreferrer" className={`transition-colors ${lightMode ? 'hover:text-pink-600' : 'hover:text-purple-500'}`}><FaInstagram /></a>
            <a href="https://www.youtube.com/@scale100million-yt" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors"><FaYoutube /></a>
            <a href="https://t.me/+SSG0wArwUcQyYTc1" target="_blank" rel="noopener noreferrer" className={`transition-colors ${lightMode ? 'hover:text-blue-600' : 'hover:text-blue-500'}`}><FaPaperPlane /></a>
          </div>
        </div>

        {/* Middle Section: Links & Contact Info */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-10 border-b ${borderClass} pb-8`}>

          {/* Quick Links */}
          <div>
            <h3 className={`${headingClass} font-semibold mb-4 border-b-2 border-purple-500 inline-block`}>Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className={`${hoverClass} transition-colors`}>Home</Link></li>
              <li><a href="#services" className={`${hoverClass} transition-colors`}>Services</a></li>
              <li><a href="#features" className={`${hoverClass} transition-colors`}>Features</a></li>
              <li><Link to="/contact" className={`${hoverClass} transition-colors`}>Contact Us</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className={`${headingClass} font-semibold mb-4 border-b-2 border-purple-500 inline-block`}>Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy-policy" className={`${hoverClass} transition-colors`}>Privacy Policy</Link></li>
              <li><Link to="/shipping-policy" className={`${hoverClass} transition-colors`}>Shipping Policy</Link></li>
              <li><Link to="/terms-and-conditions" className={`${hoverClass} transition-colors`}>Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-sm">
            <h3 className={`${headingClass} font-semibold mb-4 border-b-2 border-purple-500 inline-block`}>Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <span className={`block ${lightMode ? 'text-slate-500' : 'text-gray-500'} text-xs`}>Address:</span>
                NIRMAN AJINKYATARA, VADGAON BUDRUK 411041, Vadgaon Budruk, MH, 411041
              </li>
              <li>
                <span className={`block ${lightMode ? 'text-slate-500' : 'text-gray-500'} text-xs`}>Phone:</span>
                <a href="tel:+919325847844" className={`${lightMode ? 'hover:text-slate-900' : 'hover:text-white'} block`}>+91 9325847844</a>
                <a href="tel:+918806400205" className={`${lightMode ? 'hover:text-slate-900' : 'hover:text-white'} block`}>+91 8806400205</a>
              </li>
              <li>
                <span className={`block ${lightMode ? 'text-slate-500' : 'text-gray-500'} text-xs`}>Email:</span>
                <a href="mailto:scale100million@gmail.com" className={`${lightMode ? 'hover:text-slate-900' : 'hover:text-white'}`}>scale100million@gmail.com</a>
              </li>
              <li className="pt-2">
                <span className={`block ${lightMode ? 'text-slate-500' : 'text-gray-500'} text-xs`}>Billing Name:</span>
                <span className={`${lightMode ? 'text-slate-900' : 'text-white'}`}>Abhay Mukund Lagad</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className={`text-center text-xs ${lightMode ? 'text-slate-400' : 'text-gray-500'} pt-6`}>
          © {new Date().getFullYear()} SCALE100MILLION. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
