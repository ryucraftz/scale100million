import React from "react";
import { motion } from "framer-motion";

export default function OurGoal() {
    return (
        <section id="our-goal" className="py-32 px-6 md:px-12 bg-background text-text-primary flex items-center justify-center relative overflow-hidden">

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
                <h2 className="text-3xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                    Our goal is simple: <brWrapper />
                    <span className="text-gray-300">help 100 businesses scale to</span> <span className="text-white underline decoration-primary underline-offset-8 decoration-4">$100 million.</span>
                </h2>
            </motion.div>
        </section>
    );
}
