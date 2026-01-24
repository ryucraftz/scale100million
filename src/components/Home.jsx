import React from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/background.jpg";
import { Play } from "lucide-react";

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
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
              Scale Your Coaching Business
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tight">
            SCALE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              100 MILLION
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed">
            Your entire business backend — built and launched: Marketing, Sales,
            Funnels, Ads & Delivery Systems. All under one roof with <span className="text-white font-semibold">Zero Headache</span>.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-4">
            <a
              href="#services"
              className="w-full sm:w-auto text-center group px-6 py-3 md:px-8 md:py-4 bg-primary hover:bg-red-600 text-white text-sm md:text-base font-bold rounded-pill transition-all duration-300 shadow-[0_0_20px_rgba(230,0,0,0.3)] hover:shadow-[0_0_30px_rgba(230,0,0,0.5)] flex justify-center items-center gap-2"
            >
              Explore Services
              <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <a
              href="#features"
              className="w-full sm:w-auto text-center group px-6 py-3 md:px-8 md:py-4 bg-transparent border border-white/20 hover:border-white text-white text-sm md:text-base font-semibold rounded-pill transition-all duration-300 flex justify-center items-center gap-3"
            >
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Play className="w-3 h-3 md:w-4 md:h-4 fill-current ml-0.5" />
              </div>
              How we work
            </a>
          </div>

          {/* Trust Indicators / Stats */}
          <div className="pt-8 md:pt-12 flex items-center gap-8 md:gap-12 border-t border-white/10 mt-8 md:mt-12 max-w-fit">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-white">100+</p>
              <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wider mt-1">Clients Scaled</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-white">$10M+</p>
              <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wider mt-1">Revenue Generated</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute right-0 bottom-0 w-1/3 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />
    </div>
  );
}
