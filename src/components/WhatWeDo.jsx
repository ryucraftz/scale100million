import React from "react";
import { motion } from "framer-motion";

export default function WhatWeDo() {
    return (
        <section id="what-we-do" className="py-20 md:py-32 px-5 md:px-12 bg-background text-white overflow-hidden relative border-t border-gray-800">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center md:text-left"
                >
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight mb-5 md:mb-6 leading-[1.1] md:leading-tight">
                        MOST ONLINE BUSINESSES DON’T FAIL FROM LACK OF EFFORT.
                    </h2>
                    <p className="text-lg md:text-2xl text-primary font-bold tracking-wide leading-relaxed">
                        THEY FAIL FROM UNSTRUCTURED GROWTH.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative group h-full"
                >
                    {/* Glowing Backlight */}
                    <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    {/* Image Container */}
                    <div className="relative aspect-square md:aspect-auto md:h-[450px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                        <img
                            src="/growth-engine.png"
                            alt="Structured Growth Engine"
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                        {/* Glassmorphic Text Box */}
                        <div className="absolute bottom-6 left-6 right-6 p-6 md:p-8 bg-black/40 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl">
                            <p className="text-base md:text-lg text-gray-200 leading-relaxed font-light tracking-wide">
                                Scale100million works with founders to <span className="text-white font-bold">build, systemize, and scale</span> their businesses using <span className="text-primary font-bold">AI, automation, and clear growth systems</span>.
                            </p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
