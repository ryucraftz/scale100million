import React, { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/background.jpg";

export default function HeroSection() {
  const line1 = "Do you want to scale Your";
  const line2 = "Online Coaching Business ?";

  const step = 0.08;
  const letterDur = 0.35;
  const hold = 1.2;

  const lettersCount = useMemo(
    () => (line1 + line2).replace(/\s/g, "").length,
    []
  );
  const cycleMs = Math.ceil((lettersCount * step + letterDur + hold) * 1000);

  const [cycle, setCycle] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setCycle((c) => c + 1), cycleMs);
    return () => clearInterval(id);
  }, [cycleMs]);

  const letterVar = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * step, duration: letterDur, ease: "easeOut" },
    }),
  };

  let globalIndex = -1;

  return (
    <div
      id="home"
      className="relative w-screen h-screen overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content shifted to bottom */}
      <section className="relative flex flex-col items-center justify-end text-center text-white h-full px-4 pb-16 sm:pb-20 lg:pb-24">
        {/* First Line */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight drop-shadow-lg leading-snug">
          {line1.split(" ").map((word, wi) => (
            <span
              key={`${cycle}-l1-w${wi}`}
              className="inline-block whitespace-nowrap mr-3"
            >
              {word.split("").map((ch, ci) => {
                globalIndex += 1;
                return (
                  <motion.span
                    key={`${cycle}-l1-w${wi}-c${ci}`}
                    custom={globalIndex}
                    variants={letterVar}
                    initial="hidden"
                    animate="visible"
                    className="inline-block"
                  >
                    {ch}
                  </motion.span>
                );
              })}
            </span>
          ))}
        </h1>

        {/* Second Line */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight drop-shadow-lg leading-snug mt-2">
          {line2.split(" ").map((word, wi) => (
            <span
              key={`${cycle}-l2-w${wi}`}
              className="inline-block whitespace-nowrap mr-3"
            >
              {word.split("").map((ch, ci) => {
                globalIndex += 1;
                return (
                  <motion.span
                    key={`${cycle}-l2-w${wi}-c${ci}`}
                    custom={globalIndex}
                    variants={letterVar}
                    initial="hidden"
                    animate="visible"
                    className="inline-block"
                  >
                    {ch}
                  </motion.span>
                );
              })}
            </span>
          ))}
        </h2>

        {/* Static subheading */}
        <p className="mt-6 max-w-xl sm:max-w-2xl text-sm sm:text-lg md:text-xl text-gray-200 drop-shadow-md px-2">
          Your entire business backend — built and launched: Marketing, Sales,
          Funnels, Ads & Delivery Systems. All under one roof.
        </p>

        {/* Static buttons */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <a
            href="#services"
            className="px-6 py-3 bg-transparent border border-white/70 text-white/90 
               hover:bg-white/10 hover:text-white font-semibold text-sm sm:text-base md:text-lg 
               rounded-full shadow-lg transition transform hover:scale-105 duration-300 ease-out"
          >
            Explore Services
          </a>
        </div>



      </section>
    </div>
  );
}
