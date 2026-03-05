import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

const Counter = ({ from = 0, to, duration = 3, prefix = "", suffix = "" }) => {
    const ref = useRef(null);
    const count = useMotionValue(from);
    const rounded = useTransform(count, (latest) => `${prefix}${Math.round(latest)}${suffix}`);
    // Increased margin to trigger slightly earlier, ensuring animation runs while scrolling
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    useEffect(() => {
        if (isInView) {
            // Using a spring animation instead of easeOut for much smoother deceleration on numbers
            const controls = animate(count, to, {
                type: "spring",
                bounce: 0,
                duration: duration,
                delay: 0.2
            });
            return controls.stop;
        }
    }, [isInView, count, to, duration]);

    return (
        <span className="relative inline-grid items-center justify-items-center tabular-nums">
            <span className="opacity-0 pointer-events-none select-none col-start-1 row-start-1">
                {prefix}
                {to}
                {suffix}
            </span>
            <motion.span ref={ref} className="col-start-1 row-start-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-primary to-blue-600">
                {rounded}
            </motion.span>
        </span>
    );
};

export default function OurGoal() {
    return (
        <section id="our-goal" className="py-24 md:py-40 px-5 md:px-12 bg-black text-white flex items-center justify-center relative overflow-hidden border-t border-white/5">
            {/* Background Decorative Rings */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
                <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute w-[800px] h-[800px] border border-primary/20 rounded-full"
                />
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute w-[1200px] h-[1200px] border border-blue-500/10 rounded-full"
                />
                <motion.div
                    animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.3, 0.1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px]"
                />
            </div>

            <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 max-w-6xl mx-auto text-center"
            >
                <div className="flex justify-center mb-8 md:mb-12">
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Our Mission
                    </div>
                </div>

                <h2 className="text-2xl leading-[1.1] sm:text-3xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-black md:leading-[1.1] tracking-tight md:tracking-tighter uppercase max-w-[100vw] overflow-wrap-anywhere flex flex-col md:block items-center text-center">
                    <span className="block md:inline">OUR GOAL IS SIMPLE:</span>
                    <span className="block md:inline mt-1 md:mt-0">
                        <span className="text-gray-400 inline-block md:mt-5">HELP</span>{" "}
                        <span className="inline-block drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] pr-1 md:pr-1 min-w-[2.5em] md:min-w-[3em]">
                            <Counter to={100} duration={2.5} />
                        </span>{" "}
                        <span className="text-gray-400 inline-block pl-1 md:pl-2">BUSINESSES</span>
                    </span>
                    <span className="block md:inline mt-1 md:mt-0">
                        <span className="text-gray-400 inline-block">SCALE TO</span>{" "}
                        <span className="relative inline-block text-white pl-1 md:pl-2">
                            <Counter to={100} prefix="$" suffix=" MILLION." duration={2.5} />
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                viewport={{ once: true }}
                                transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
                                className="absolute -bottom-1 md:-bottom-4 left-0 h-[3px] md:h-2.5 bg-gradient-to-r from-primary to-blue-400 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.6)]"
                            />
                        </span>
                    </span>
                </h2>
            </motion.div>
        </section>
    );
}
