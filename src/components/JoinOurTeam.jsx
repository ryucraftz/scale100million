import React from "react";
import { motion } from "framer-motion";

export default function JoinOurTeam() {
    return (
        <section id="join-team" className="w-full min-h-screen bg-black text-white pt-24 md:pt-28 pb-16 px-5 md:px-8 relative overflow-hidden">

            {/* Subtle glow */}
            <div className="absolute top-[-10%] right-[-5%] w-[350px] h-[350px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />

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
                        We're Hiring
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
                        JOIN OUR TEAM
                    </h1>
                    <div className="space-y-1 text-sm md:text-base text-gray-500 leading-relaxed">
                        <p>We're building systems, not slides.</p>
                        <p>If you like strategy, execution, and AI-powered scale,</p>
                        <p>and you want <span className="text-white font-semibold">real ownership in real work</span>,</p>
                        <p>we'd like to hear from you.</p>
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
                        aria-label="Join Our Team"
                        frameBorder="0"
                        style={{ height: '950px', width: '100%', border: 'none', filter: 'invert(1) hue-rotate(180deg)' }}
                        src="https://forms.zohopublic.in/scale100millioncom1/form/JoinOurTeam/formperma/eLQHiGjuMoRV3CL9geAed6haQqs8J1fW--dnsSM-Lw4"
                    />
                </motion.div>
            </div>
        </section>
    );
}
