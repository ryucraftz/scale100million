import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Instagram, Send, Youtube } from "lucide-react";
import NeuralBackground from "./NeuralBackground";


export default function Home() {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });



  const handleMouseMove = (e) => {
    // Disable mouse follow on mobile to prevent excessive re-renders
    if (window.innerWidth < 768) return;

    const { clientX, clientY } = e;
    const moveX = clientX - window.innerWidth / 2;
    const moveY = clientY - window.innerHeight / 2;
    setMousePosition({ x: moveX, y: moveY });
  };

  return (
    <div
      className="relative w-full h-[100svh] md:h-screen overflow-hidden bg-background font-['Satoshi',sans-serif]"
      onMouseMove={handleMouseMove}
    >
      {/* Background Image/Video */}
      {/* Background - Professional Grid & Spotlight */}
      <div className="absolute inset-0 bg-black overflow-hidden">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-black to-black" />

        {/* Neural Network Animation */}
        <NeuralBackground />

        {/* Moving Spotlight (Follows Mouse) - Disabled on Mobile for performance */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2 mix-blend-screen hidden md:block"
          animate={{
            x: mousePosition.x,
            y: mousePosition.y
          }}
          transition={{ type: "tween", ease: "linear", duration: 0.2 }}
        />

        {/* Top Ambient Light - Simplified on mobile */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent md:shadow-[0_0_80px_rgba(59,130,246,0.5)]" />
      </div>

      {/* Navbar Gradient - Strong Top Scrim */}
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-black via-black/60 to-transparent z-0 pointer-events-none" />

      {/* Decorative Gradient Blobs with Parallax - Disabled on Mobile */}
      <motion.div
        animate={{ x: mousePosition.x * 0.02, y: mousePosition.y * 0.02 }}
        className="absolute top-20 right-0 w-72 h-72 bg-blue-400/10 rounded-full blur-[100px] pointer-events-none hidden md:block"
      />
      <motion.div
        animate={{ x: mousePosition.x * -0.02, y: mousePosition.y * -0.02 }}
        className="absolute bottom-20 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none hidden md:block"
      />

      {/* Content Container */}
      <div
        className="relative z-10 h-full max-w-[1400px] mx-auto px-5 md:px-12 flex flex-col justify-center items-center pt-16 md:pt-12"
        style={{ backfaceVisibility: 'hidden', transformStyle: 'preserve-3d', willChange: 'opacity, transform' }}
      >
        <div className="max-w-5xl space-y-6 md:space-y-12 text-center">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: typeof window !== 'undefined' && window.innerWidth < 768 ? 10 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: typeof window !== 'undefined' && window.innerWidth < 768 ? 0.5 : 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black text-text-primary leading-[1.15] md:leading-[1.1] tracking-tight md:tracking-tighter font-['Inter',sans-serif]"
          >
            WE HELP ONLINE <br className="hidden md:block" />
            BUSINESSES <span className="text-primary block mt-2 md:mt-0">BUILD AND SCALE</span>
          </motion.h1>

          {/* Subheading */}
          <div className="space-y-6 flex flex-col items-center">
            <motion.p
              initial={{ opacity: 0, y: typeof window !== 'undefined' && window.innerWidth < 768 ? 10 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: typeof window !== 'undefined' && window.innerWidth < 768 ? 0.5 : 0.8, delay: typeof window !== 'undefined' && window.innerWidth < 768 ? 0.1 : 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed font-light text-center tracking-wide md:tracking-normal uppercase"
            >
              THE ENGINE BEHIND GROWING BUSINESSES.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: typeof window !== 'undefined' && window.innerWidth < 768 ? 10 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: typeof window !== 'undefined' && window.innerWidth < 768 ? 0.5 : 0.8, delay: typeof window !== 'undefined' && window.innerWidth < 768 ? 0.2 : 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4"
            >
              {/* Glow ring wrapper */}
              <div className="relative group/btn">
                {/* Pulsing glow behind button */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 rounded-full blur-md opacity-60 group-hover/btn:opacity-100 transition-opacity duration-500 animate-pulse" />
                <button
                  onClick={() => {
                    const section = document.getElementById('mentorship');
                    if (section) section.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="relative w-full sm:w-auto text-center group px-10 py-4 bg-gradient-to-r from-blue-700 via-primary to-blue-500 hover:from-blue-600 hover:via-blue-500 hover:to-blue-400 text-white text-sm md:text-base font-black uppercase tracking-widest rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:shadow-[0_0_50px_rgba(59,130,246,0.8)] hover:-translate-y-1 hover:scale-105 flex justify-center items-center gap-3 overflow-hidden border border-blue-400/30"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    EXPLORE PRODUCTS
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Area: Scroll Indicator & Socials */}
      <div className="absolute bottom-4 left-0 w-full z-20 flex justify-center pointer-events-none">
        {/* Center Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="relative flex flex-col items-center gap-2 cursor-pointer pointer-events-auto"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-xs font-bold text-text-primary uppercase tracking-[0.2em]">Uncover What's Next</span>
          <ChevronDown className="w-5 h-5 text-gray-400 animate-bounce" />
        </motion.div>

        {/* Right Social Icons */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute right-8 md:right-12 top-0 hidden md:flex items-center gap-6 text-text-secondary pointer-events-auto"
        >
          <a href="#" className="hover:text-primary transition-colors transform hover:scale-110 duration-200">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-primary transition-colors transform hover:scale-110 duration-200">
            <Send className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-primary transition-colors transform hover:scale-110 duration-200">
            <Youtube className="w-6 h-6" />
          </a>
        </motion.div>
      </div>

      {/* Subtle Bottom Gradient - Stronger on Mobile to hide cut */}
      <div className="absolute bottom-0 left-0 w-full h-64 md:h-40 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />
    </div>
  );
}
