import React from "react";
import { motion } from "framer-motion";

export default function WhatWeDo() {
    return (
        <section id="what-we-do" className="py-24 px-6 md:px-12 bg-gray-50 text-text-primary overflow-hidden relative border-t border-gray-200">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
                        Most online businesses don’t fail from lack of effort.
                    </h2>
                    <p className="text-xl md:text-2xl text-red-600 font-medium">
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
                    <div className="absolute -inset-4 bg-gray-200 rounded-2xl blur-xl opacity-50" />
                    <div className="relative bg-white p-8 rounded-2xl border border-gray-100 shadow-2xl">
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                            Scale100million works with founders to <span className="text-gray-900 font-bold">build, systemize, and scale</span> their businesses using <span className="text-primary font-bold">AI, automation, and clear growth systems</span>.
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
