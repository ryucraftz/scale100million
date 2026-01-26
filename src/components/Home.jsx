import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Instagram, Send, Youtube } from "lucide-react";


export default function Home() {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });



  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const moveX = clientX - window.innerWidth / 2;
    const moveY = clientY - window.innerHeight / 2;
    setMousePosition({ x: moveX, y: moveY });
  };

  return (
    <div
      id="mentorship"
      className="relative w-full h-[75vh] md:h-screen overflow-hidden bg-background font-['Satoshi',sans-serif]"
      onMouseMove={handleMouseMove}
    >
      {/* Background Image/Video */}
      {/* Background - Professional Grid & Spotlight */}
      <div className="absolute inset-0 bg-black overflow-hidden">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-black to-black" />

        {/* Subtle Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
          }}
        />

        {/* Moving Spotlight (Follows Mouse) */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2 mix-blend-screen"
          animate={{
            x: mousePosition.x,
            y: mousePosition.y
          }}
          transition={{ type: "tween", ease: "linear", duration: 0.2 }}
        />

        {/* Top Ambient Light */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent shadow-[0_0_80px_rgba(59,130,246,0.5)]" />
      </div>

      {/* Navbar Gradient - Strong Top Scrim */}
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-black via-black/60 to-transparent z-0 pointer-events-none" />

      {/* Decorative Gradient Blobs with Parallax */}
      <motion.div
        animate={{ x: mousePosition.x * 0.02, y: mousePosition.y * 0.02 }}
        className="absolute top-20 right-0 w-72 h-72 bg-blue-400/10 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{ x: mousePosition.x * -0.02, y: mousePosition.y * -0.02 }}
        className="absolute bottom-20 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"
      />

      {/* Content Container */}
      <div className="relative z-10 h-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col justify-center items-center pt-20 md:pt-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
              }
            }
          }}
          className="max-w-5xl space-y-6 md:space-y-12 text-center"
        >
          {/* Main Headline */}
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-3xl sm:text-5xl md:text-7xl font-bold text-text-primary leading-tight md:leading-normal tracking-tight font-['Inter',sans-serif]"
          >
            WE HELP ONLINE <br className="hidden md:block" />
            BUSINESSES <span className="text-primary block mt-1 md:mt-0">BUILD AND SCALE</span>
          </motion.h1>

          {/* Subheading */}
          <div className="space-y-6 flex flex-col items-center">
            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed font-light text-center"
            >
              THE ENGINE BEHIND GROWING BUSINESSES.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4"
            >
              <a
                href="https://nas.io/scale100million"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center group px-8 py-4 bg-primary hover:bg-blue-600 text-white text-sm md:text-base font-black uppercase tracking-wider rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:scale-105 flex justify-center items-center gap-2 overflow-hidden relative"
              >
                <span className="relative z-10 flex items-center gap-2">
                  EXPLORE SERVICES
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shimmer" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Area: Scroll Indicator & Socials */}
      <div className="absolute bottom-8 left-0 w-full z-20 flex justify-center pointer-events-none">
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
