import React from "react";
import { motion } from "framer-motion";

export default function WhatWeDo() {
    return (
        <section id="what-we-do" className="py-12 md:py-40 px-5 md:px-12 bg-black text-white overflow-hidden relative border-t border-white/5">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
                <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '12s' }} />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-24 items-center relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center md:text-left flex flex-col justify-center relative"
                >
                    {/* Glowing Orb behind text */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-[0.25em] mb-6 md:mb-10 w-fit mx-auto md:mx-0 shadow-[0_0_20px_rgba(59,130,246,0.15)] backdrop-blur-md relative overflow-hidden group">
                        <div className="absolute inset-0 bg-blue-400/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        <span className="relative z-10">The Problem</span>
                    </div>
                    <h2 className="text-2xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4 md:mb-8 leading-[1.1] font-['Inter',sans-serif] text-white">
                        Most businesses don't fail from lack of{' '}
                        <span className="relative inline-block">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-[length:200%_auto] animate-gradient-x">
                                effort.
                            </span>
                            <motion.span
                                className="absolute -bottom-1 lg:-bottom-2 left-0 h-[3px] bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full"
                                initial={{ width: 0 }}
                                whileInView={{ width: '100%' }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            />
                        </span>
                    </h2>
                    <div className="flex items-center gap-4 mb-6 md:mb-10 mx-auto md:mx-0 opacity-80 w-full max-w-sm">
                        <div className="h-[2px] w-12 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.6)]" />
                        <div className="h-[1px] flex-1 bg-gradient-to-r from-blue-500/50 to-transparent" />
                    </div>
                    <p className="text-lg md:text-2xl text-gray-400 font-light tracking-wide leading-relaxed font-['Inter',sans-serif]">
                        They fail from <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 font-bold tracking-tight drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">unstructured growth.</span>
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="relative group h-full flex items-center justify-center md:justify-end"
                >
                    {/* Continuous Levitation Animation */}
                    <motion.div
                        className="relative w-full max-w-lg"
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    >
                        {/* Glowing Backlight */}
                        <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/40 to-emerald-600/20 rounded-[3rem] blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-700" />
                        <div className="absolute inset-10 bg-purple-600/30 blur-[80px] rounded-full mix-blend-screen pointer-events-none" />

                        {/* Floating Decorative Elements */}
                        <motion.div
                            className="absolute -top-10 -right-8 w-20 h-20 border border-t border-r border-white/20 rounded-tr-3xl backdrop-blur-sm z-20 hidden md:block mix-blend-overlay"
                            animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        />
                        <motion.div
                            className="absolute -bottom-8 -left-10 w-24 h-24 border border-b border-l border-blue-500/30 rounded-bl-3xl bg-blue-500/5 backdrop-blur-md z-20 hidden md:block"
                            animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        />

                        {/* Image Container */}
                        <div className="relative aspect-square w-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_20px_70px_rgba(0,0,0,0.7)] z-10 bg-black/50">
                            <img
                                src="/ai.png"
                                alt="Structured Growth Engine AI"
                                className="w-full h-full object-cover transform scale-[1.02] group-hover:scale-110 transition-transform duration-[2s] ease-out opacity-90 group-hover:opacity-100 mix-blend-luminosity hover:mix-blend-normal"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-70" />
                            <div className="absolute inset-0 bg-blue-900/10 mix-blend-color pointer-events-none" />

                            {/* Premium Glassmorphic Text Box */}
                            <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 p-4 md:p-8 bg-black/40 backdrop-blur-2xl rounded-[1.5rem] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-out overflow-hidden">
                                <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:left-[200%] transition-all duration-[1.5s] ease-in-out" />
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-50" />

                                <p className="relative z-10 text-xs md:text-[1.05rem] text-gray-300 leading-[1.8] tracking-wide font-light">
                                    Scale100million works with founders to{' '}
                                    <span className="text-white font-bold drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
                                        build, systemize, and scale
                                    </span>{' '}
                                    their businesses using{' '}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 font-bold drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]">
                                        AI, automation, and clear growth systems
                                    </span>.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                </motion.div>

            </div >
        </section >
    );
}
