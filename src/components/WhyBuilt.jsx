import React from "react";
import { motion } from "framer-motion";
import { Settings, Layout, Zap, Workflow, TrendingUp } from "lucide-react";
import SectionLabel from "./SectionLabel";

export default function WhyBuilt() {
    const reasons = [
        {
            icon: Workflow,
            text: "REDUCE MANUAL WORK",
            description: "Replace repetitive tasks with autonomous AI agents."
        },
        {
            icon: Zap,
            text: "MOVE FASTER",
            description: "Deploy systems that execute in minutes, not months."
        },
        {
            icon: TrendingUp,
            text: "SCALE WITHOUT CHAOS",
            description: "Maintain peak performance as your traffic explodes."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section id="why-built" className="py-20 md:py-32 px-5 md:px-12 bg-black text-white relative border-t border-gray-900 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px]"
                />
            </div>

            <SectionLabel number="01" />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-6xl mx-auto relative z-10"
            >
                {/* Header */}
                <motion.div variants={itemVariants} className="text-center mb-16 md:mb-24">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-tight">
                        WHY WE BUILT <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-blue-600">
                            SCALE100MILLION
                        </span>
                    </h2>
                    <div className="flex flex-col items-center gap-4">
                        <div className="h-1.5 w-24 bg-primary rounded-full mb-4 shadow-[0_0_20px_rgba(59,130,246,0.5)]" />
                        <p className="text-xl md:text-2xl text-gray-300 font-medium tracking-wide">
                            FOUNDERS DON’T NEED MORE ADVICE.
                        </p>
                        <p className="text-sm md:text-base text-gray-500 font-bold uppercase tracking-[0.3em]">
                            They need systems.
                        </p>
                    </div>
                </motion.div>

                {/* Cards Container with Connection Lines */}
                <div className="relative">
                    {/* Animated Connection Lines (Desktop Only) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full -translate-y-1/2 pointer-events-none">
                        <svg className="w-full h-24 overflow-visible" viewBox="0 0 1000 100">
                            <motion.path
                                d="M 0,50 Q 250,50 500,50 Q 750,50 1000,50"
                                fill="none"
                                stroke="url(#lineGradient)"
                                strokeWidth="2"
                                strokeDasharray="10 10"
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 0.3 }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                            />
                            <defs>
                                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
                                    <stop offset="50%" stopColor="#3B82F6" stopOpacity="1" />
                                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 md:gap-10">
                        {reasons.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -15, scale: 1.02 }}
                                className="group relative"
                            >
                                {/* 3D Tilt Wrapper Placeholder (using framer-motion for interaction) */}
                                <div className="relative p-8 md:p-10 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 group-hover:border-primary/40 transition-all duration-500 hover:bg-zinc-900/80 hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.2)] overflow-hidden h-full flex flex-col items-center text-center">
                                    {/* Inner Glow */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Icon Container with Magnetic Effect */}
                                    <motion.div
                                        whileHover={{ rotateY: 180, scale: 1.1 }}
                                        transition={{ duration: 0.6 }}
                                        className="relative w-24 h-24 mb-8 rounded-3xl bg-black/60 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all duration-500 shadow-2xl overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
                                        <item.icon className="w-10 h-10 text-primary group-hover:text-black transition-colors duration-500" />
                                    </motion.div>

                                    <h3 className="text-xl md:text-2xl font-black text-white mb-4 tracking-tight uppercase group-hover:text-primary transition-colors">
                                        {item.text}
                                    </h3>
                                    <p className="text-gray-400 font-light leading-relaxed group-hover:text-gray-200 transition-colors">
                                        {item.description}
                                    </p>

                                    {/* Bottom Indicator */}
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-primary group-hover:w-full transition-all duration-700" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Footer Message */}
                <motion.div
                    variants={itemVariants}
                    className="mt-12 md:mt-32 pt-10 md:pt-16 border-t border-white/5 flex flex-col items-center text-center"
                >
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-[0.2em] mb-10 shadow-lg">
                        <Zap size={14} className="animate-pulse" /> The Operation Model
                    </div>
                    <p className="text-2xl md:text-5xl text-gray-300 leading-[1.3] max-w-5xl font-light tracking-tight font-['Inter',sans-serif]">
                        Scale100million was built to <span className="text-white font-bold drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">combine strategy, AI, and execution</span> into one <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 font-black tracking-tighter drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">autonomous ecosystem.</span>
                    </p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="mt-12 relative text-5xl md:text-7xl lg:text-9xl font-black tracking-[0.05em] uppercase select-none hidden md:block group cursor-crosshair w-full text-center"
                    >
                        <span className="text-white/5 transition-opacity duration-700 group-hover:opacity-0 relative z-0">
                            Built to scale
                        </span>
                        <span
                            className="absolute left-0 top-0 w-full h-full opacity-0 group-hover:opacity-100 transition-all duration-700 bg-clip-text text-transparent pointer-events-none z-10"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E"), linear-gradient(110deg, #71717a 0%, #ffffff 50%, #71717a 100%)`,
                                backgroundSize: "120px 120px, 200% auto",
                                backgroundBlendMode: "multiply",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                filter: "drop-shadow(0 0 25px rgba(255,255,255,0.3))"
                            }}
                        >
                            Built to scale
                        </span>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
