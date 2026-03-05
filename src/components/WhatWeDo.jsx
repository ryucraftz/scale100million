import React from "react";
import { motion } from "framer-motion";

export default function WhatWeDo() {
    return (
        <section id="what-we-do" className="py-20 md:py-32 px-5 md:px-12 bg-background text-white overflow-hidden relative border-t border-gray-800">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center md:text-left flex flex-col justify-center"
                >
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-xs font-black uppercase tracking-[0.2em] mb-8 w-fit mx-auto md:mx-0 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        The Problem
                    </div>
                    <h2 className="text-3xl md:text-5xl lg:text-[4.5rem] font-bold tracking-tight mb-8 leading-[1.1] font-['Inter',sans-serif] text-gray-100">
                        Most online businesses don't fail from lack of <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-white to-gray-400 font-black">effort.</span>
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-transparent rounded-full mb-8 mx-auto md:mx-0" />
                    <p className="text-xl md:text-2xl text-gray-400 font-light tracking-wide leading-relaxed font-['Inter',sans-serif]">
                        They fail from <span className="text-blue-400 font-bold tracking-tight drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">unstructured growth.</span>
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="relative group h-full flex items-center"
                >
                    {/* Glowing Backlight */}
                    <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600/30 to-purple-600/30 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

                    {/* Decorative Elements */}
                    <div className="absolute -top-6 -right-6 w-24 h-24 border-t border-r border-white/20 rounded-tr-3xl transition-all duration-700 group-hover:w-32 group-hover:h-32" />
                    <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b border-l border-white/20 rounded-bl-3xl transition-all duration-700 group-hover:w-32 group-hover:h-32" />

                    {/* Image Container */}
                    <div className="relative aspect-square md:aspect-[4/3] w-full rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] z-10">
                        <img
                            src="/ai.png"
                            alt="Structured Growth Engine AI"
                            className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-[1.5s] ease-out brightness-90 group-hover:brightness-110"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />

                        {/* Glassmorphic Text Box */}
                        <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 p-6 md:p-8 bg-black/60 backdrop-blur-xl rounded-[1.5rem] border border-white/10 shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                            <p className="text-sm md:text-lg text-gray-300 leading-relaxed tracking-wide">
                                Scale100million works with founders to <span className="text-white font-bold drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">build, systemize, and scale</span> their businesses using <span className="text-primary font-bold drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">AI, automation, and clear growth systems</span>.
                            </p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
