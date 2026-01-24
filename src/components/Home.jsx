import React from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/background.jpg";
import { Play } from "lucide-react";

export default function Home() {
  return (
    <div id="mentorship" className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Image/Video */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl space-y-6 md:space-y-8"
        >
          {/* Badge/Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md w-fit">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs md:text-sm font-medium text-gray-300 tracking-wide uppercase">
              Founder Club Mentorship
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tight">
            SCALE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              TO 8 FIGURES
            </span>
          </h1>

          {/* Subheading */}
          <div className="space-y-4">
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed">
              Founder Club helps you build the systems required to scale your business to 8 figures.
            </p>
            <ul className="text-gray-300 space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Less guesswork
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Faster execution
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Scalable operations
              </li>
            </ul>
            <p className="text-white font-semibold italic">Built with you.</p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-4">
            <a
              href="#contact"
              className="w-full sm:w-auto text-center group px-6 py-3 md:px-8 md:py-4 bg-primary hover:bg-red-600 text-white text-sm md:text-base font-bold rounded-pill transition-all duration-300 shadow-[0_0_20px_rgba(230,0,0,0.3)] hover:shadow-[0_0_30px_rgba(230,0,0,0.5)] flex justify-center items-center gap-2"
            >
              Join Founder Club
              <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute right-0 bottom-0 w-1/3 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />
    </div>
  );
}
