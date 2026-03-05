import React from "react";
import { motion } from "framer-motion";

export default function PartnerWithUs() {
    return (
        <section id="partner" className="w-full min-h-screen bg-black text-white pt-24 md:pt-28 pb-16 px-5 md:px-8 relative overflow-hidden">

            {/* Subtle glow */}
            <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-3xl mx-auto relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 md:mb-10"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        Built Together
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-3">
                        WE PARTNER AND<br className="hidden md:block" /> INVEST IN FOUNDERS
                    </h1>
                    <p className="text-sm md:text-base text-gray-500 max-w-xl leading-relaxed">
                        We partner with founders to build, systemize, and grow their businesses.
                    </p>
                    <div className="flex items-center gap-3 mt-4">
                        <span className="text-gray-600 text-xs font-medium uppercase tracking-widest">Not advisory.</span>
                        <span className="text-white text-sm font-bold">Built together.</span>
                    </div>
                </motion.div>

                {/* Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="w-full rounded-2xl overflow-hidden border border-white/8"
                >
                    <iframe
                        aria-label="Partner With Us"
                        frameBorder="0"
                        style={{ height: '700px', width: '100%', border: 'none', filter: 'invert(1) hue-rotate(180deg)' }}
                        src="https://forms.zohopublic.in/scale100millioncom1/form/PartnerWithUs/formperma/8Qt5_o_Yk6KnSstpUzQOq0pFyA1kvEaL45hhQqSpB7A"
                    />
                </motion.div>
            </div>
        </section>
    );
}
