import React from "react";
import { motion } from "framer-motion";

export default function SectionLabel({ number, inverted = false }) {
    return (
        // We use an absolute container that spans the full height of the PARENT section
        // The parent section MUST have 'relative' class.
        // The sticky element inside will stick within this absolute container.
        <div className="absolute left-0 top-0 h-full w-full pointer-events-none z-40 overflow-hidden">
            {/* We add 'overflow-hidden' to the container to ensure no accidental spilling, though 'absolute' usually contains it. 
          Currently set w-full to ensure it covers width if needed, but pointer-events-none prevents blocking. 
      */}

            <div className="sticky top-24 md:top-32 left-2 md:left-6 w-max pointer-events-auto scale-75 md:scale-100 origin-top-left">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-3 origin-left"
                >
                    {/* The Geometric Shape - Small & Sleek */}
                    <div
                        className={`shadow-lg ${inverted ? "bg-white" : "bg-black"}`}
                        style={{
                            clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
                            width: "40px",
                            height: "8px",
                        }}
                    />

                    {/* The Connecting Line */}
                    <motion.div
                        className={`h-[1px] origin-left ${inverted ? "bg-white" : "bg-black"}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: "40px" }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{ marginLeft: "-5px" }}
                    />

                    {/* The Number */}
                    <div className="ml-3 flex flex-col items-start overflow-hidden h-6 justify-center">
                        <span className={`text-lg font-bold tracking-widest font-mono ${inverted ? "text-white" : "text-black"}`}>
                            {number}
                        </span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
