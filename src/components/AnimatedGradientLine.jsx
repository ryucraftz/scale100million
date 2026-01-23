import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function GlowingLine() {
  const [showLine, setShowLine] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const triggerPoint = document.body.offsetHeight * 0.7;

      setShowLine(scrollPosition > triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-[2px] w-full mb-10 overflow-hidden">
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: showLine ? 1 : 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="origin-center h-full w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
      />
    </div>
  );
}
