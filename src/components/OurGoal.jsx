import React from "react";
import { motion } from "framer-motion";

export default function OurGoal() {
    return (
        <section id="our-goal" className="py-24 md:py-32 px-5 md:px-12 bg-background text-text-primary flex items-center justify-center relative overflow-hidden">

            {/* Background radial gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-40" />

            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-5xl mx-auto text-center"
            >
                <span className="block text-primary font-bold tracking-widest uppercase text-sm mb-4">Our Mission</span>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] md:leading-tight tracking-tight md:tracking-tighter">
                    OUR GOAL IS SIMPLE: <brWrapper />
                    <span className="text-gray-300">HELP 100 BUSINESSES SCALE TO</span> <span className="text-white underline decoration-primary underline-offset-8 md:underline-offset-[12px] decoration-4 md:decoration-8">$100 MILLION.</span>
                </h2>
            </motion.div>
        </section>
    );
}
