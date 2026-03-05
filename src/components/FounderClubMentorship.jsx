import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const FounderClubMentorship = () => {
    const benefits = [
        "LESS GUESSWORK",
        "FASTER EXECUTION",
        "SCALABLE OPERATIONS"
    ];

    return (
        <section id="mentorship" className="relative w-full pt-16 pb-20 md:py-32 bg-background overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-5 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

                    {/* Content Side */}
                    <div className="space-y-8 text-center md:text-left flex flex-col items-center md:items-start">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-text-primary mb-5 md:mb-8 leading-[1.1] tracking-tight font-['Inter',sans-serif]">
                                FOUNDER CLUB <span className="text-primary block mt-2">MENTORSHIP</span>
                            </h2>
                            <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-xl tracking-wide md:tracking-normal font-light">
                                Founder Club helps you build the systems required to scale your business to 8 figures.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-4 flex flex-col w-fit mx-auto md:mx-0"
                        >
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                        <Check className="w-5 h-5 text-primary" />
                                    </div>
                                    <span className="text-lg md:text-xl text-text-primary font-medium tracking-tight">{benefit}</span>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="pt-4 flex flex-col items-center md:items-start"
                        >
                            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-6">
                                <motion.a
                                    href="https://nas.io/scale100million"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05, backgroundColor: "#2563EB" }} // Blue-600
                                    whileTap={{ scale: 0.95 }}
                                    className="group relative px-8 py-4 bg-primary text-white font-bold rounded-full overflow-hidden shadow-lg hover:shadow-primary/50 transition-all duration-300"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer" />
                                    <span className="relative flex items-center gap-2">
                                        JOIN FOUNDER CLUB
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </motion.a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full flex justify-center lg:justify-end"
                    >
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-surface/50 backdrop-blur-sm p-4 w-full max-w-[600px]">
                            <div className="h-56 md:h-[350px] w-full rounded-xl bg-gradient-to-br from-surface to-background relative overflow-hidden group">
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

                                {/* Founder Club Badge Image */}
                                <div className="absolute inset-0 flex items-center justify-center p-2 md:p-4">
                                    {/* Backlight / Glow effect */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-48 h-48 bg-primary/20 rounded-full blur-[80px] animate-pulse" />
                                    </div>
                                    <img
                                        src="/HLwYB0HJr9juasTFx9l9plHQ3g.avif"
                                        alt="Founder Club Mentorship Badge"
                                        className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_30px_rgba(59,130,246,0.5)] transform hover:scale-[1.02] transition-transform duration-500"
                                        style={{ filter: 'hue-rotate(157deg) drop-shadow(0 0 30px rgba(59,130,246,0.5))' }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -z-10 -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />
                        <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px]" />
                    </motion.div>
                </div>
            </div >
        </section >
    );
};

export default FounderClubMentorship;
