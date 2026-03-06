import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Box } from "lucide-react";

export default function JoinTeamSection() {
    return (
        <section id="join-team" className="py-12 md:py-32 px-5 md:px-12 bg-background text-text-primary relative overflow-hidden border-t border-gray-800">
            <div className="max-w-4xl mx-auto text-center z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex justify-center mb-4 md:mb-6">
                        <Box className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 md:mb-12 leading-[1.1] md:leading-tight">
                        JOIN OUR TEAM
                    </h2>

                    <div className="space-y-3 md:space-y-6 text-base md:text-2xl font-light text-gray-300 leading-snug md:leading-relaxed mb-8 md:mb-12 tracking-wide md:tracking-normal max-w-sm md:max-w-none mx-auto">
                        <p>WE’RE BUILDING SYSTEMS, NOT SLIDES.</p>
                        <p>IF YOU LIKE STRATEGY, EXECUTION, AND AI-POWERED SCALE,</p>
                        <p>AND YOU WANT <span className="text-white font-semibold">REAL OWNERSHIP IN REAL WORK</span>,</p>
                        <p>WE’D LIKE TO HEAR FROM YOU.</p>
                    </div>

                    <div className="flex justify-center">
                        <Link
                            to="/join-team"
                            className="group inline-flex items-center gap-2 md:gap-3 px-6 py-3.5 md:px-8 md:py-4 bg-white text-black rounded-full font-bold text-base md:text-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                        >
                            View Open Roles
                            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
