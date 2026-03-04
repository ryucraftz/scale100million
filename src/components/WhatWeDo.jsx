import React from "react";
import { motion } from "framer-motion";

export default function WhatWeDo() {
    return (
        <section id="what-we-do" className="py-20 md:py-32 px-5 md:px-12 bg-background text-white overflow-hidden relative border-t border-gray-800">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center md:text-left"
                >
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight mb-5 md:mb-6 leading-[1.1] md:leading-tight">
                        MOST ONLINE BUSINESSES DON’T FAIL FROM LACK OF EFFORT.
                    </h2>
                    <p className="text-lg md:text-2xl text-primary font-bold tracking-wide leading-relaxed">
                        THEY FAIL FROM UNSTRUCTURED GROWTH.
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
                    <div className="relative bg-surface p-8 md:p-10 rounded-2xl border border-gray-800 shadow-2xl text-center md:text-left">
                        <p className="text-base md:text-xl text-gray-300 leading-relaxed font-light tracking-wide md:tracking-normal">
                            Scale100million works with founders to <span className="text-white font-bold">build, systemize, and scale</span> their businesses using <span className="text-primary font-bold">AI, automation, and clear growth systems</span>.
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
