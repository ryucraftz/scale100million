import React from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/background.png";
import { ArrowRight } from "lucide-react";

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
      className="relative w-full h-screen overflow-hidden bg-white"
      onMouseMove={handleMouseMove}
    >
      {/* Background Image/Video */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-100 ease-out"
        style={{
          backgroundImage: `url(${bgImage})`,
          transform: `scale(1.05) translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />
      </div>

      {/* Decorative Gradient Blobs with Parallax */}
      <motion.div
        animate={{ x: mousePosition.x * 0.02, y: mousePosition.y * 0.02 }}
        className="absolute top-20 right-0 w-72 h-72 bg-blue-400/20 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{ x: mousePosition.x * -0.02, y: mousePosition.y * -0.02 }}
        className="absolute bottom-20 left-0 w-96 h-96 bg-red-400/10 rounded-full blur-[120px] pointer-events-none"
      />

      {/* Content Container */}
      <div className="relative z-10 h-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col justify-center">
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
          className="max-w-2xl space-y-6 md:space-y-8"
        >
          {/* Badge/Tag */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-gray-100/80 backdrop-blur-md w-fit border border-gray-200/50 shadow-sm hover:shadow-md transition-all hover:scale-105 cursor-default"
          >
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] md:text-sm font-bold text-gray-500 tracking-wider uppercase">
              Founder Club Mentorship
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-5xl sm:text-6xl md:text-8xl font-black text-text-primary leading-[1.1] md:leading-[0.9] tracking-tight"
          >
            SCALE <br className="hidden md:block" />
            <span className="md:hidden">TO </span>
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 animate-shine bg-[length:200%_auto]">
              8 FIGURES
              {/* Underline decoration */}
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </motion.h1>

          {/* Subheading & List */}
          <div className="space-y-6">
            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-lg md:text-xl text-text-secondary max-w-lg leading-relaxed font-normal"
            >
              Founder Club helps you build the systems required to scale your business to 8 figures.
            </motion.p>

            <ul className="text-text-secondary space-y-3">
              {[
                "Less guesswork",
                "Faster execution",
                "Scalable operations"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                  className="flex items-center gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                  <span className="text-base md:text-lg group-hover:text-primary transition-colors">{item}</span>
                </motion.li>
              ))}
            </ul>

            <motion.p
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              className="text-text-primary font-bold italic text-lg pt-2"
            >
              Built with you.
            </motion.p>
          </div>

          {/* CTAs */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-4"
          >
            <a
              href="https://nas.io/scale100million"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center group px-8 py-4 bg-primary hover:bg-blue-600 text-white text-base md:text-lg font-bold rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:scale-105 flex justify-center items-center gap-2 overflow-hidden relative"
            >
              <span className="relative z-10 flex items-center gap-2">
                Join Founder Club
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </div>
  );
}
