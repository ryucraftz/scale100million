import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function DesignYourGrowthEngine() {
    return (
        <section className="py-24 px-6 md:px-12 bg-black text-white relative overflow-hidden border-t border-white/5 flex items-center justify-center">
            <div className="max-w-4xl mx-auto text-center z-10">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <a
                        href="#contact"
                        className="group inline-flex items-center gap-3 text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter hover:text-primary transition-colors duration-300"
                    >
                        Design Your Growth Engine
                        <ArrowRight className="w-8 h-8 md:w-12 md:h-12 group-hover:translate-x-2 transition-transform duration-300" />
                    </a>
                </motion.div>
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-primary/5 blur-[100px] pointer-events-none" />
        </section>
    );
}
