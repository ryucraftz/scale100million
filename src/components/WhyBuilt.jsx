import React from "react";
import { motion } from "framer-motion";
import { Settings, Layout, Zap, Workflow, TrendingUp } from "lucide-react";
import SectionLabel from "./SectionLabel";

export default function WhyBuilt() {
    const reasons = [
        {
            icon: <Workflow className="w-6 h-6 text-primary" />,
            text: "Reduce manual work"
        },
        {
            icon: <Zap className="w-6 h-6 text-primary" />,
            text: "Move faster"
        },
        {
            icon: <TrendingUp className="w-6 h-6 text-primary" />,
            text: "Scale without chaos"
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
                        Why We Built Scale100million
                    </h2>
                    <div className="h-1 w-20 bg-primary rounded-full mb-8" />

                    <div className="space-y-6 text-lg md:text-xl text-gray-300">
                        <p className="font-medium text-white">Founders don’t need more advice.</p>
                        <p>They need systems that:</p>
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
                        <div key={index} className="bg-surface border border-gray-800 p-6 rounded-xl flex flex-col items-center text-center gap-4 hover:bg-gray-800 transition-colors">
                            <div className="p-3 bg-neutral-900 rounded-lg border border-gray-700 shadow-sm">
                                {item.icon}
                            </div>
                            <span className="font-semibold text-white">{item.text}</span>
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
