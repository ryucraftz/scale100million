import React from "react";
import { motion } from "framer-motion";

export default function JoinOurTeam() {
    return (
        <section id="join-team" className="w-full min-h-screen bg-black text-white pt-16 md:pt-28 pb-12 px-5 md:px-8 relative overflow-hidden">

            {/* Ambient glows */}
            <div className="absolute top-[-10%] right-[-5%] w-[450px] h-[450px] bg-emerald-600/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-[-5%] left-[-5%] w-[350px] h-[350px] bg-blue-600/8 rounded-full blur-[130px] pointer-events-none" />
            {/* Decorative line */}
            <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

            <div className="max-w-3xl mx-auto relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: typeof window !== 'undefined' && window.innerWidth < 768 ? 10 : 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6 md:mb-10"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-3 md:mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        We're Hiring
                    </div>
                    <h1 className="text-2xl md:text-5xl font-black tracking-tight mb-3 md:mb-4">
                        JOIN OUR{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">TEAM</span>
                    </h1>
                    <div className="space-y-1 text-xs md:text-base text-gray-500 leading-relaxed max-w-sm md:max-w-none">
                        <p>We're building systems, not slides.</p>
                        <p>If you like strategy, execution, and AI-powered scale,</p>
                        <p>and you want <span className="text-white font-semibold">real ownership in real work</span>,</p>
                    </div>
                </motion.div>

                {/* Gradient-border iframe wrapper */}
                <motion.div
                    initial={{ opacity: 0, y: typeof window !== 'undefined' && window.innerWidth < 768 ? 10 : 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="relative"
                >
                    <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-emerald-500/40 via-blue-500/20 to-emerald-500/10 blur-[0.5px]" />
                    <div className="relative rounded-2xl overflow-hidden bg-zinc-950">
                        <iframe
                            aria-label="Join Our Team"
                            frameBorder="0"
                            style={{ height: '900px', width: '100%', border: 'none', filter: 'invert(1) hue-rotate(180deg)', display: 'block' }}
                            src="https://forms.zohopublic.in/scale100millioncom1/form/JoinOurTeam/formperma/eLQHiGjuMoRV3CL9geAed6haQqs8J1fW--dnsSM-Lw4"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
