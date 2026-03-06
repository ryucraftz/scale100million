import React from "react";
import { motion } from "framer-motion";

export default function LegalLayout({ title, icon: Icon, children }) {
    return (
        <section className="min-h-screen bg-black text-white pt-24 pb-6 md:py-20 px-3 md:px-8 flex justify-center items-start">
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full max-w-4xl bg-zinc-900/40 border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-12 shadow-2xl backdrop-blur-md"
            >
                <div className="flex flex-col items-center text-center mb-6 md:mb-12 border-b border-white/10 pb-4 md:pb-8">
                    {Icon && (
                        <div className="p-2.5 md:p-4 bg-white/5 rounded-lg md:rounded-2xl mb-3 md:mb-6 border border-white/10">
                            <Icon className="w-7 h-7 md:w-12 md:h-12 text-gray-200" strokeWidth={1.5} />
                        </div>
                    )}
                    <h1 className="text-xl md:text-5xl font-bold tracking-tight mb-1.5 md:mb-4">{title}</h1>
                </div>

                <div className="space-y-4 md:space-y-8 text-gray-300 leading-relaxed font-light">
                    {children}
                </div>
            </motion.div>
        </section>
    );
}
