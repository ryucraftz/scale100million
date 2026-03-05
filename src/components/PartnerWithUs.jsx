import React from "react";
import { motion } from "framer-motion";

export default function PartnerWithUs() {
    return (
        <section id="partner" className="min-h-screen pt-20 md:pt-32 pb-16 md:pb-24 px-6 md:px-12 bg-background text-white overflow-hidden relative flex flex-col justify-center">
            <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-12 relative z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 backdrop-blur-md mb-8 md:mb-12 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        <span className="text-xs md:text-sm font-black text-blue-400 uppercase tracking-[0.2em]">
                            Built Together
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-6xl lg:text-[5rem] font-black tracking-tighter mb-8 md:mb-10 leading-[1.05]">
                        WE PARTNER AND INVEST IN <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-primary to-blue-600 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">FOUNDERS</span>
                    </h2>

                    <div className="h-1 w-24 bg-gradient-to-r from-primary to-transparent rounded-full mb-10 mx-auto" />

                    <p className="text-xl md:text-3xl text-gray-300 font-light leading-relaxed max-w-4xl mx-auto tracking-wide">
                        We partner with founders to <span className="text-white font-bold drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">build, systemize, and grow</span> their businesses.
                    </p>

                    <div className="mt-10 md:mt-14 flex flex-col items-center gap-2 md:gap-3 p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl max-w-md mx-auto">
                        <p className="text-gray-400 font-bold tracking-[0.2em] uppercase text-sm md:text-base">Not advisory.</p>
                        <p className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500 font-black tracking-tight uppercase text-2xl md:text-3xl">Built together.</p>
                    </div>

                    <div className="mt-8 md:mt-12 w-full flex justify-center">
                        <iframe
                            aria-label='Partner With Us'
                            frameBorder="0"
                            style={{ height: '700px', width: '99%', border: 'none', filter: 'invert(1) hue-rotate(180deg)' }}
                            src='https://forms.zohopublic.in/scale100millioncom1/form/PartnerWithUs/formperma/8Qt5_o_Yk6KnSstpUzQOq0pFyA1kvEaL45hhQqSpB7A'
                        />
                    </div>
                </motion.div>
            </div>

            {/* Background Accents */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] opacity-30" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] opacity-30" />
            </div>
        </section>
    );
}

