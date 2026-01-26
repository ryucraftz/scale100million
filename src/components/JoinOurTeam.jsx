import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function JoinOurTeam() {
    return (
        <section id="join-team" className="py-16 md:py-24 px-6 md:px-12 bg-background text-text-primary relative overflow-hidden border-t border-gray-800">
            <div className="max-w-4xl mx-auto text-center space-y-10 z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
                        JOIN OUR TEAM
                    </h2>

                    <div className="space-y-4 md:space-y-6 text-lg md:text-2xl font-light text-gray-300 leading-relaxed">
                        <p>WE’RE BUILDING SYSTEMS, NOT SLIDES.</p>
                        <p>IF YOU LIKE STRATEGY, EXECUTION, AND AI-POWERED SCALE,</p>
                        <p>AND YOU WANT <span className="text-white font-semibold">REAL OWNERSHIP IN REAL WORK</span>,</p>
                        <p>WE’D LIKE TO HEAR FROM YOU.</p>
                    </div>

                    <div className="mt-12">
                        <a
                            href="https://www.linkedin.com/company/scale100million/jobs/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-transparent border border-white hover:bg-white hover:text-black hover:border-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-none uppercase tracking-widest transition-all duration-300"
                        >
                            See Open Roles
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
