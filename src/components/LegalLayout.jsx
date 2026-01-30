import React from "react";
import { motion } from "framer-motion";

export default function LegalLayout({ title, icon: Icon, children }) {
    return (
        <section className="min-h-screen bg-black text-white py-20 px-4 md:px-8 flex justify-center items-start">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full max-w-4xl bg-zinc-900/50 border border-white/10 rounded-2xl p-6 md:p-12 shadow-2xl backdrop-blur-sm"
            >
                <div className="flex flex-col items-center text-center mb-12 border-b border-white/10 pb-8">
                    {Icon && (
                        <div className="p-4 bg-white/5 rounded-2xl mb-6 border border-white/10">
                            <Icon size={48} className="text-gray-200" strokeWidth={1.5} />
                        </div>
                    )}
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">{title}</h1>
                </div>

                <div className="space-y-8 text-gray-300 leading-relaxed font-light">
                    {children}
                </div>
            </motion.div>
        </section>
    );
}
