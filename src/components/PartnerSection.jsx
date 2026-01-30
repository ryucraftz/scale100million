import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function PartnerSection() {
    return (
        <section id="partner" className="py-24 px-6 md:px-12 bg-background text-white overflow-hidden relative">
            <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
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

                    <div className="mt-8 flex flex-col items-center gap-2 mb-12">
                        <p className="text-gray-500 font-medium tracking-wide uppercase text-sm">Not advisory.</p>
                        <p className="text-white font-bold text-xl">Built together.</p>
                    </div>

                    <div className="flex justify-center">
                        <Link
                            to="/partner"
                            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                        >
                            Apply Now
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
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
