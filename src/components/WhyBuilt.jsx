import React from "react";
import { motion } from "framer-motion";
import { Settings, fastForward, Layout } from "lucide-react";

export default function WhyBuilt() {
    const reasons = [
        {
            icon: <Settings className="w-6 h-6 text-primary" />,
            text: "Reduce manual work"
        },
        {
            icon: <Settings className="w-6 h-6 text-primary rotate-90" />, // Using rotate for variation or different icon if available
            text: "Move faster"
        },
        {
            icon: <Layout className="w-6 h-6 text-primary" />,
            text: "Scale without chaos"
        }
    ];

    return (
        <section className="py-24 px-6 md:px-12 bg-black text-white relative border-t border-white/5">
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
                        <div key={index} className="bg-white/5 border border-white/10 p-6 rounded-xl flex flex-col items-center text-center gap-4 hover:bg-white/10 transition-colors">
                            <div className="p-3 bg-black rounded-lg border border-white/10">
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
                    className="pt-8 border-t border-white/10"
                >
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
                        Scale100million was built to <span className="text-white font-bold">combine strategy, AI, and execution</span> into one operating model.
                    </p>
                    <p className="mt-6 text-2xl md:text-3xl font-black text-white tracking-tight uppercase">
                        Built to scale.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
