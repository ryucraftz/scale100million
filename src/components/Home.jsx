import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Instagram, Twitter, Youtube } from "lucide-react";
import bgImage from "../assets/background.png";

export default function Home() {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  // Typing State
  const [displayText, setDisplayText] = React.useState("");
  const [phase, setPhase] = React.useState("typing1"); // typing1, pause1, deleting, typing2, done

  const text1 = "online businesses";
  const text2 = "BUILD AND SCALE";

  React.useEffect(() => {
    let timeout;

    if (phase === "typing1") {
      if (displayText.length < text1.length) {
        timeout = setTimeout(() => {
          setDisplayText(text1.slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => setPhase("pause1"), 1500); // Wait before deleting
      }
    } else if (phase === "pause1") {
      timeout = setTimeout(() => setPhase("deleting"), 500);
    } else if (phase === "deleting") {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(text1.slice(0, displayText.length - 1));
        }, 50); // Faster delete
      } else {
        setPhase("typing2");
      }
    } else if (phase === "typing2") {
      if (displayText.length < text2.length) {
        timeout = setTimeout(() => {
          setDisplayText(text2.slice(0, displayText.length + 1));
        }, 100);
      } else {
        setPhase("done");
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, phase]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const moveX = clientX - window.innerWidth / 2;
    const moveY = clientY - window.innerHeight / 2;
    setMousePosition({ x: moveX, y: moveY });
  };

  return (
    <div
      id="mentorship"
      className="relative w-full h-[75vh] md:h-screen overflow-hidden bg-white font-['Satoshi',sans-serif]"
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
      <div className="relative z-10 h-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col justify-center items-center pt-12">
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
          className="max-w-5xl space-y-8 md:space-y-12 text-center"
        >
          {/* Main Headline */}
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-4xl sm:text-6xl md:text-7xl font-bold text-text-primary leading-snug md:leading-normal tracking-tight font-['Inter',sans-serif]"
          >
            We Help{" "}
            <span className="text-text-primary inline-block min-h-[1.1em]">
              {/* Logic: If phase is typing1/pause1/deleting -> Show text (which is 'online businesses' part)
                          If phase is typing2 -> Show text (which is 'BUILD AND SCALE' part)
                  Wait. The user said:
                  "We Help" static.
                  Then "online businesses" types.
                  Then cancels.
                  Then "BUILD AND SCALE" types.
                  
                  Current logic:
                  "We Help " is static in h1.
                  The span contains {displayText}.
                  Phase 1: displayText becomes "online businesses".
                  Phase 2: displayText becomes "".
                  Phase 3: displayText becomes "BUILD AND SCALE".
                  
                  Color: "online businesses" and "We Help" are usually same color (Dark). 
                  "BUILD AND SCALE" might be Blue (Primary)?
                  User didn't specify color change, but previous design had Blue typing.
                  "online businesses" in the middle of a sentence is usually black.
                  "BUILD AND SCALE" is the emphasized part.
                  
                  I'll make "online businesses" Text Color.
                  And "BUILD AND SCALE" Primary Color?
                  User said: "after it cancels build and scale should be typed".
                  
                  Let's check phase.
               */}
              <span className={`${phase === 'typing2' || phase === 'done' ? 'text-primary' : 'text-text-primary'}`}>
                {displayText}
              </span>
              <span className="animate-pulse ml-1 text-black font-thin">|</span>
            </span>
          </motion.h1>

          {/* Subheading */}
          <div className="space-y-6 flex flex-col items-center">
            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed font-light text-center"
            >
              The engine behind growing businesses.
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
                className="w-full sm:w-auto text-center group px-8 py-4 bg-primary hover:bg-blue-600 text-white text-base md:text-lg font-bold rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:scale-105 flex justify-center items-center gap-2 overflow-hidden relative"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Join Founder Club
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
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
          <span className="text-base font-medium text-text-primary tracking-wide">Uncover What's Next</span>
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
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-primary transition-colors transform hover:scale-110 duration-200">
            <Youtube className="w-6 h-6" />
          </a>
        </motion.div>
      </div>

      {/* Subtle Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white via-white/60 to-transparent backdrop-blur-[2px] pointer-events-none" />
    </div>
  );
}
