import React from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/background.png";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div id="mentorship" className="relative w-full h-screen overflow-hidden bg-white">
      {/* Background Image/Video */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />
      </div>

      {/* Decorative Gradient Blobs */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-blue-400/20 rounded-full blur-[100px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-red-400/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 h-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl space-y-6 md:space-y-8"
        >
          {/* Badge/Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-gray-100/80 backdrop-blur-md w-fit border border-gray-200/50 shadow-sm hover:shadow-md transition-shadow">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] md:text-sm font-bold text-gray-500 tracking-wider uppercase">
              Founder Club Mentorship
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-text-primary leading-[1.1] md:leading-[0.9] tracking-tight">
            SCALE <br className="hidden md:block" />
            <span className="md:hidden">TO </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 animate-shine bg-[length:200%_auto]">
              8 FIGURES
            </span>
          </h1>

          {/* Subheading & List */}
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-text-secondary max-w-lg leading-relaxed font-normal">
              Founder Club helps you build the systems required to scale your business to 8 figures.
            </p>

            <ul className="text-text-secondary space-y-3">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                <span className="text-base md:text-lg">Less guesswork</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                <span className="text-base md:text-lg">Faster execution</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                <span className="text-base md:text-lg">Scalable operations</span>
              </li>
            </ul>

            <p className="text-text-primary font-bold italic text-lg pt-2">Built with you.</p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-4">
            <a
              href="https://nas.io/scale100million"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center group px-8 py-4 bg-primary hover:bg-blue-600 text-white text-base md:text-lg font-bold rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 flex justify-center items-center gap-2 overflow-hidden relative"
            >
              <span className="relative z-10 flex items-center gap-2">
                Join Founder Club
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Subtle Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </div>
  );
}
