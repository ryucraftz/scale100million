import React from "react";
import { motion } from "framer-motion";

export default function PartnerWithUs() {
    return (
        <section id="partner" className="min-h-screen pt-32 pb-24 px-6 md:px-12 bg-background text-white overflow-hidden relative flex flex-col justify-center">
            <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-800 bg-surface backdrop-blur-md mb-8">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-sm font-medium text-gray-300 uppercase tracking-wide">
                            Built Together
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
                        HAVE A BUSINESS IDEA WORTH BUILDING?
                    </h2>

                    <p className="text-lg md:text-2xl text-gray-400 font-light leading-relaxed max-w-3xl mx-auto">
                        We partner with founders to build, systemize, and grow their businesses.
                    </p>

                    <div className="mt-8 flex flex-col items-center gap-2">
                        <p className="text-gray-500 font-medium tracking-wide uppercase text-sm">Not advisory.</p>
                        <p className="text-white font-bold text-xl">Built together.</p>
                    </div>

                    <div className="mt-12 w-full flex justify-center">
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

