import React from "react";
import { motion } from "framer-motion";
import { Settings, Layout, Zap, Workflow, TrendingUp } from "lucide-react";
import SectionLabel from "./SectionLabel";

export default function WhyBuilt() {
    const reasons = [
        {
            icon: Workflow,
            text: "REDUCE MANUAL WORK"
        },
        {
            icon: Zap,
            text: "MOVE FASTER"
        },
        {
            icon: TrendingUp,
            text: "SCALE WITHOUT CHAOS"
        }
    ];

    return (
        <section id="why-built" className="py-24 px-6 md:px-12 bg-background text-text-primary relative border-t border-gray-800">
            <SectionLabel number="01" />
            <div className="max-w-4xl mx-auto space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                        WHY WE BUILT SCALE100MILLION
                    </h2>
                    <div className="h-1 w-20 bg-primary rounded-full mb-8" />

                    <div className="space-y-6 text-lg md:text-xl text-gray-300">
                        <p className="font-medium text-white">FOUNDERS DON’T NEED MORE ADVICE.</p>
                        <p>THEY NEED SYSTEMS THAT:</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid md:grid-cols-3 gap-6"
                >
                    {reasons.map((item, index) => (
                        <div
                            key={index}
                            className="group relative p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-primary/50 transition-all duration-500 hover:bg-zinc-900/80 hover:-translate-y-2 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)] overflow-hidden flex flex-col items-center"
                        >
                            {/* Hover Gradient Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className="w-16 h-16 mb-6 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:border-primary transition-all duration-500 shadow-xl">
                                    <item.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-500" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
                                    {item.text}
                                </h3>
                            </div>
                        </div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="pt-8 border-t border-gray-200"
                >
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
                        Scale100million was built to <span className="text-primary font-bold">combine strategy, AI, and execution</span> into one operating model.
                    </p>
                    <p className="mt-6 text-2xl md:text-3xl font-black text-white tracking-tight uppercase">
                        Built to scale.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
