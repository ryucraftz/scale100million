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
        <section id="why-built" className="py-20 md:pt-32 md:pb-0 px-5 md:px-12 bg-black text-white relative overflow-hidden md:min-h-screen md:flex md:flex-col">
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

            <div className="max-w-7xl mx-auto relative z-10 md:flex md:flex-col md:flex-grow">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="md:flex md:flex-col md:flex-grow"
                >
                    <div className="md:flex-grow">
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
                    </div>

                    {/* Unbound Immersive Footer Section */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-32 md:mt-auto relative w-screen -ml-[50vw] left-1/2 flex flex-col items-center text-center overflow-hidden"
                    >
                        {/* Atmospheric Lighting - Desktop Only */}
                        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] md:w-[80vw] h-[200px] md:h-[300px] bg-blue-500/10 md:bg-blue-500/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none z-0" />

                        {/* AI Core Immersive Visual - Desktop Only */}
                        <motion.div
                            className="hidden md:flex absolute top-[35%] md:top-1/3 left-1/2 w-[110vw] md:w-[80vw] max-w-[1000px] aspect-square pointer-events-none z-0 mix-blend-screen opacity-50 md:opacity-60 items-center justify-center"
                            initial={{ opacity: 0, x: "-50%", y: "-50%", scale: 0.9 }}
                            whileInView={{ opacity: 0.6, x: "-50%", y: "-50%", scale: 1 }}
                            transition={{
                                opacity: { duration: 2 },
                                scale: { duration: 2 }
                            }}
                        >
                            <div
                                className="w-full h-full relative"
                                style={{ animation: "float-core 20s ease-in-out infinite" }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303] z-10" />
                                <img
                                    src="/ai-core.png"
                                    alt="Autonomous Ecosystem Core"
                                    className="w-full h-full object-contain mix-blend-screen"
                                    style={{ WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 15%, transparent 55%)', maskImage: 'radial-gradient(circle at 50% 50%, black 15%, transparent 55%)' }}
                                />
                            </div>
                        </motion.div>

                        {/* Ambient Floating Dust - Desktop Only */}
                        <div className="hidden md:block absolute inset-0 pointer-events-none overflow-hidden z-0">
                            {[...Array(20)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-1 h-1 bg-blue-400 rounded-full mix-blend-screen"
                                    style={{
                                        left: `${Math.random() * 100}%`,
                                        top: `${Math.random() * 100}%`,
                                        opacity: Math.random() * 0.3 + 0.1
                                    }}
                                    animate={{
                                        y: [0, -100 - Math.random() * 200],
                                        x: [0, (Math.random() - 0.5) * 100],
                                        opacity: [0, Math.random() * 0.4 + 0.1, 0],
                                        scale: [0, Math.random() * 1 + 0.5, 0]
                                    }}
                                    transition={{
                                        duration: 10 + Math.random() * 15,
                                        repeat: Infinity,
                                        ease: "linear",
                                        delay: Math.random() * 10
                                    }}
                                />
                            ))}
                        </div>

                        {/* Minimalist Professional Badge */}
                        <div className="relative inline-flex items-center gap-2 md:gap-3 px-3 py-1.5 md:px-4 md:py-2 border border-white/10 md:border-white/5 text-gray-400 md:text-gray-500 text-[12px] sm:text-xs font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] mb-16 md:mb-16 mix-blend-screen bg-black/50 md:bg-transparent rounded-full backdrop-blur-md md:backdrop-blur-none">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                            <span className="relative z-10">The Operation Model</span>
                        </div>

                        {/* Ultra-Refined Typography */}
                        <div className="max-w-[1400px] mx-auto px-5 md:px-6 relative z-10 mb-10 md:mb-20">
                            {/* Subtle Text Backdrop for Contrast - Desktop Only */}
                            <div className="hidden md:block absolute inset-0 bg-black/40 blur-[40px] rounded-full pointer-events-none -z-10" />

                            <p className="text-2xl sm:text-xl md:text-6xl lg:text-8xl text-gray-400 leading-[1.3] md:leading-[1.1] font-light tracking-tight md:tracking-[-0.03em] font-['Inter',sans-serif] relative drop-shadow-xl z-10 max-w-[320px] sm:max-w-none mx-auto">
                                Scale100million was <br className="block md:hidden" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-300 to-gray-500 font-bold drop-shadow-md">
                                    built to combine strategy,
                                </span> <br className="block md:hidden" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-300 to-gray-500 font-bold drop-shadow-md">
                                    AI, & execution into one
                                </span> <br className="block md:hidden" />
                                <span className="relative inline-block mt-2 lg:mt-0">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-400 to-blue-500 font-extrabold pb-2 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                                        autonomous ecosystem.
                                    </span>
                                </span>
                            </p>
                        </div>

                        {/* Immersive Stroke Mega Text - Built to Scale - Desktop Only */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="hidden md:block relative text-[18vw] md:text-[15vw] xl:text-[18vw] font-black tracking-tighter uppercase select-none w-full text-center overflow-hidden whitespace-nowrap leading-none px-4 md:px-0"
                            style={{ WebkitTextStroke: '1px rgba(255,255,255,0.05)', color: 'transparent' }}
                        >
                            <span className="relative z-0">
                                Built to scale
                            </span>

                            {/* Static Faded Blue Fill */}
                            <span
                                className="absolute left-0 top-0 w-full h-full z-10 transition-opacity"
                                style={{
                                    color: 'rgba(59,130,246,0.25)', // Further dimmed blue
                                }}
                            >
                                Built to scale
                            </span>

                            {/* Deep Fade at Bottom */}
                            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/90 to-transparent z-20 pointer-events-none" />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
