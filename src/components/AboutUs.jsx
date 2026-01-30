import { motion } from "framer-motion";
import { Users, Target, Zap, BarChart, Rocket, BrainCircuit } from "lucide-react";

export default function AboutUs() {
    return (
        <section
            id="about-us"
            className="w-full min-h-screen bg-background text-text-primary py-12 md:py-24 px-6 md:px-20 flex justify-center"
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-4xl w-full"
            >
                {/* Header Section */}
                <div className="text-center mb-16 space-y-6">
                    <div className="inline-block p-4 rounded-full bg-primary/10 mb-4 text-primary">
                        <Users size={40} />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Scale100Million</span>
                    </h1>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
                        Scale100Million exists to help entrepreneurs, service providers, and founders build <span className="text-white font-semibold">scalable, system-driven businesses</span>—not hype-based shortcuts.
                    </p>
                </div>

                <div className="bg-surface/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-800 p-8 md:p-12 space-y-16 relative overflow-hidden">

                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-[100px] -translate-y-1/4 translate-x-1/4 pointer-events-none" />

                    {/* We Focus On */}
                    <div className="relative z-10">
                        <h2 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
                            <Target className="text-primary" />
                            We Focus On
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { icon: <Zap size={24} />, title: "Practical Execution", desc: "Actionable steps, not just theory." },
                                { icon: <BrainCircuit size={24} />, title: "Real-world Systems", desc: "Proven frameworks that actually work." },
                                { icon: <BarChart size={24} />, title: "Sustainable Growth", desc: "Long-term strategies over quick hacks." }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-zinc-900/40 border border-white/5 p-6 rounded-xl hover:bg-zinc-900/60 transition-colors text-center group">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <h3 className="font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-sm text-gray-400">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Our Philosophy */}
                    <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                                <Rocket className="text-primary" />
                                Who This Is For
                            </h2>
                            <div className="bg-blue-900/10 border border-blue-900/30 rounded-xl p-6 text-gray-300 leading-relaxed">
                                <p>
                                    Our programs are designed for people who value <span className="text-white font-medium">clarity, structure, and long-term thinking</span> over quick wins.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                                <span className="text-primary font-serif italic text-3xl">"</span>
                                Our Promise
                            </h2>
                            <div className="bg-zinc-900/30 border border-gray-800 rounded-xl p-6 text-gray-300 leading-relaxed space-y-4">
                                <p>We don’t promise overnight success.</p>
                                <p className="text-xl font-medium text-white">We teach how businesses actually scale.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </motion.div>
        </section>
    );
}
