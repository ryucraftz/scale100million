import { motion } from "framer-motion";
import { Zap, BrainCircuit, BarChart, CheckCircle2, Rocket } from "lucide-react";

export default function AboutUs() {
    const pillars = [
        {
            icon: <Zap size={22} />,
            title: "Practical Execution",
            desc: "Every strategy is designed to be implemented immediately. No theory without action.",
            iconColor: "text-yellow-400",
            bg: "bg-yellow-400/10 border-yellow-400/20"
        },
        {
            icon: <BrainCircuit size={22} />,
            title: "System-Driven",
            desc: "We build robust frameworks that remove dependency on sheer willpower.",
            iconColor: "text-blue-400",
            bg: "bg-blue-400/10 border-blue-400/20"
        },
        {
            icon: <BarChart size={22} />,
            title: "Sustainable Growth",
            desc: "We build engines that produce consistent, long-term revenue — not flash-trends.",
            iconColor: "text-green-400",
            bg: "bg-green-400/10 border-green-400/20"
        }
    ];

    const audience = [
        "Entrepreneurs ready to move from hustle to scale.",
        "Service providers seeking to productize their offerings.",
        "Founders who value clarity over confirmation bias.",
        "Leaders looking for proven operational frameworks."
    ];

    return (
        <section id="about-us" className="w-full min-h-screen bg-black text-white pt-24 md:pt-28 pb-16 px-5 md:px-8 relative overflow-hidden">

            {/* Subtle glows */}
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[130px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/8 rounded-full blur-[130px] pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 md:mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                        Our Mission
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-3">
                        Scale <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-purple-500 animate-gradient-x">100 Million</span>
                    </h1>
                    <p className="text-sm md:text-base text-gray-500 max-w-xl leading-relaxed">
                        We exist to bridge the gap between <span className="text-white">ambition</span> and <span className="text-white">execution</span>. No fluff. Just scalable systems for serious founders.
                    </p>
                </motion.div>

                {/* Core Pillars */}
                <div className="grid md:grid-cols-3 gap-4 mb-12 md:mb-16">
                    {pillars.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.08 }}
                            className="group p-5 rounded-2xl bg-white/3 border border-white/8 hover:border-white/15 hover:bg-white/5 transition-all duration-300"
                        >
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 border ${item.bg} ${item.iconColor}`}>
                                {item.icon}
                            </div>
                            <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Who it's for + Promise */}
                <div className="grid lg:grid-cols-2 gap-8 items-start">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-5">Who Is This For?</h2>
                        <div className="space-y-3">
                            {audience.map((text, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className="p-0.5 rounded-full bg-primary/20 text-primary mt-0.5 flex-shrink-0">
                                        <CheckCircle2 size={16} />
                                    </div>
                                    <p className="text-sm text-gray-400 leading-relaxed">{text}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-600/10 rounded-2xl blur-xl opacity-30 transform rotate-1" />
                        <div className="relative bg-zinc-900/60 border border-white/10 rounded-2xl p-6 space-y-4">
                            <Rocket className="text-primary w-8 h-8" />
                            <h3 className="text-lg font-bold text-white">Our Promise</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                We don't promise overnight millions. We promise <span className="text-white">clarity</span>. We promise <span className="text-white">strategy</span>. If you do the work, you will have a business that serves you — not the other way around.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
