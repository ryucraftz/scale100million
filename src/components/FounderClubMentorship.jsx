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
        <section className="relative w-full py-24 bg-background overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Content Side */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 font-['Inter',sans-serif]">
                                Founder Club <span className="text-primary block mt-2">Mentorship</span>
                            </h2>
                            <p className="text-lg text-text-secondary leading-relaxed max-w-xl">
                                Founder Club helps you build the systems required to scale your business to 8 figures.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-4"
                        >
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                        <Check className="w-5 h-5 text-primary" />
                                    </div>
                                    <span className="text-xl text-text-primary font-medium">{benefit}</span>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="pt-4"
                        >
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                                <a
                                    href="https://nas.io/scale100million"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative px-8 py-4 bg-primary text-white font-bold rounded-full overflow-hidden shadow-lg hover:shadow-primary/25 transition-all hover:scale-105"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer" />
                                    <span className="relative flex items-center gap-2">
                                        Join Founder Club
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </a>
                                <span className="text-text-secondary font-medium tracking-wide">
                                    BUILT WITH YOU.
                                </span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-surface/50 backdrop-blur-sm p-2">
                            <div className="aspect-square md:aspect-video w-full rounded-xl bg-gradient-to-br from-surface to-background relative overflow-hidden group">
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

                                {/* Abstract Visualization */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="relative w-48 h-48">
                                        <div className="absolute inset-0 border-2 border-primary/30 rounded-full animate-[spin_10s_linear_infinite]" />
                                        <div className="absolute inset-4 border-2 border-blue-400/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse" />
                                        </div>
                                    </div>
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
