import React from "react";
import { motion } from "framer-motion";

const Marquee = ({ children, direction = "left", speed = 20 }) => {
    return (
        <div className="w-full overflow-hidden flex relative z-10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex gap-4 min-w-full">
                <motion.div
                    className="flex gap-4 flex-shrink-0"
                    initial={{ x: direction === "left" ? 0 : "-100%" }}
                    animate={{ x: direction === "left" ? "-100%" : 0 }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: speed,
                    }}
                >
                    {children}
                </motion.div>
                <motion.div
                    className="flex gap-4 flex-shrink-0"
                    initial={{ x: direction === "left" ? 0 : "-100%" }}
                    animate={{ x: direction === "left" ? "-100%" : 0 }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: speed,
                    }}
                >
                    {children}
                </motion.div>
            </div>
        </div>
    );
};

export default Marquee;
