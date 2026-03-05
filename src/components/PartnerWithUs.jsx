import React from "react";
import { motion } from "framer-motion";

export default function PartnerWithUs() {
    return (
        <section id="partner" className="w-full min-h-screen bg-black text-white pt-24 md:pt-28 pb-16 px-5 md:px-8 relative overflow-hidden">

            {/* Ambient glows */}
            <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-600/12 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-blue-500/8 rounded-full blur-[140px] pointer-events-none" />
            {/* Decorative line */}
            <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

            <div className="max-w-3xl mx-auto relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 md:mb-10"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-400 text-xs font-bold uppercase tracking-widest mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                        Built Together
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-3">
                        WE PARTNER AND<br className="hidden md:block" />{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">INVEST IN FOUNDERS</span>
                    </h1>
                    <p className="text-sm md:text-base text-gray-500 max-w-xl leading-relaxed mb-4">
                        We partner with founders to build, systemize, and grow their businesses.
                    </p>
                    <div className="flex items-center gap-3">
                        <span className="text-gray-600 text-xs font-medium uppercase tracking-widest">Not advisory.</span>
                        <span className="w-1 h-1 rounded-full bg-gray-700" />
                        <span className="text-white text-sm font-bold">Built together.</span>
                    </div>
                </motion.div>

                {/* Gradient-border iframe wrapper */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="relative"
                >
                    <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-purple-500/40 via-blue-500/20 to-purple-500/10 blur-[0.5px]" />
                    <div className="relative rounded-2xl overflow-hidden bg-zinc-950">
                        <iframe
                            aria-label="Partner With Us"
                            frameBorder="0"
                            style={{ height: '700px', width: '100%', border: 'none', filter: 'invert(1) hue-rotate(180deg)', display: 'block' }}
                            src="https://forms.zohopublic.in/scale100millioncom1/form/PartnerWithUs/formperma/8Qt5_o_Yk6KnSstpUzQOq0pFyA1kvEaL45hhQqSpB7A"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
