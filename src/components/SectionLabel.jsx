import React from "react";
import { motion } from "framer-motion";

export default function SectionLabel({ number, inverted = false }) {
    return (
        // Absolute container spans full height of relative parent
        <div className="absolute left-0 top-0 h-full w-full pointer-events-none z-30 overflow-hidden">

            {/* Sticky wrapper. 
          Mobile: top-24, left-1, scale-60 (smaller).
          Desktop: top-32, left-6, scale-100.
      */}
            <div className="sticky top-20 md:top-28 left-1 md:left-6 w-max pointer-events-auto scale-[0.6] md:scale-100 origin-top-left transition-transform duration-300">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-1 md:gap-3 origin-left"
                >
                    {/* The Geometric Shape - Small & Sleek */}
                    <div
                        className="shadow-lg bg-white text-black"
                        style={{
                            clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
                            width: "40px",
                            height: "8px",
                        }}
                    />

                    {/* The Connecting Line - HIDDEN on Mobile (< md) to save space */}
                    <motion.div
                        className="h-[1px] origin-left hidden md:block bg-white"
                        initial={{ width: 0 }}
                        whileInView={{ width: "40px" }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{ marginLeft: "-5px" }}
                    />

                    {/* The Number */}
                    <div className="ml-2 md:ml-3 flex flex-col items-start overflow-hidden h-6 justify-center">
                        <span className="text-lg font-bold tracking-widest font-mono text-white">
                            {number}
                        </span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
