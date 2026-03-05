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

                {/* Ultra-Premium Immersive Footer Section */}
                <motion.div
                    variants={itemVariants}
                    className="mt-20 md:mt-40 relative group/footer"
                >
                    {/* Deep Blur Container with Technical Grid */}
                    <div className="relative p-12 md:p-20 rounded-[2.5rem] bg-black/40 border border-white/5 backdrop-blur-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col items-center text-center">

                        {/* Technical Ecosystem Grid */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

                        {/* Animated Scanning Lazer (Top Border) */}
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent -translate-x-full group-hover/footer:translate-x-full transition-transform duration-[2s] ease-in-out" />

                        {/* Subtle Background Lighting (No harsh glows) */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />

                        {/* Professional Badge */}
                        <div className="relative inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-black/50 border border-white/10 text-gray-300 text-xs font-bold uppercase tracking-[0.25em] mb-12 backdrop-blur-md">
                            <Zap size={14} className="text-blue-400" />
                            <span className="relative z-10">The Operation Model</span>
                        </div>

                        {/* Precise, High-Contrast Typography */}
                        <p className="relative z-10 text-3xl md:text-5xl lg:text-6xl text-gray-400 leading-[1.2] max-w-5xl font-light tracking-tight font-['Inter',sans-serif] mb-8">
                            Scale100million was built to{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 font-bold tracking-tighter">
                                combine strategy, AI, & execution
                            </span>{' '}
                            into one{' '}
                            <span className="relative inline-block mt-2 md:mt-0">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-black tracking-tighter">
                                    autonomous ecosystem.
                                </span>
                            </span>
                        </p>

                        {/* Immersive Stroke Mega Text - Built to Scale */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="mt-16 relative text-[5rem] md:text-[8rem] lg:text-[11rem] font-black tracking-tighter uppercase select-none hidden md:block w-full text-center overflow-hidden"
                            style={{ WebkitTextStroke: '1px rgba(255,255,255,0.08)', color: 'transparent' }}
                        >
                            <span className="relative z-0">
                                Built to scale
                            </span>

                            {/* Sweeping Gradient over the Stroke */}
                            <span
                                className="absolute left-0 top-0 w-full h-full z-10"
                                style={{
                                    backgroundImage: `linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.8) 50%, transparent 100%)`,
                                    backgroundSize: "200% auto",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    WebkitTextStroke: '1px transparent',
                                    animation: "gradient-x 6s linear infinite",
                                }}
                            >
                                Built to scale
                            </span>

                            {/* Deep Fade at Bottom */}
                            <div className="absolute -bottom-4 left-0 w-full h-24 bg-gradient-to-t from-black via-black/80 to-transparent z-20 pointer-events-none" />
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
