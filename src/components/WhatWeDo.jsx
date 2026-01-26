import React from "react";
import { motion } from "framer-motion";

export default function WhatWeDo() {
    return (
        <section id="what-we-do" className="py-16 md:py-24 px-6 md:px-12 bg-background text-white overflow-hidden relative border-t border-gray-800">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
                        Most online businesses don’t fail from lack of effort.
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-300 font-medium">
                        They fail from unstructured growth.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="absolute -inset-1 bg-primary/20 rounded-2xl blur-2xl" />
                    <div className="relative bg-surface p-8 rounded-2xl border border-gray-800 shadow-2xl">
                        <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                            Scale100million works with founders to <span className="text-white font-bold">build, systemize, and scale</span> their businesses using <span className="text-primary font-bold">AI, automation, and clear growth systems</span>.
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
