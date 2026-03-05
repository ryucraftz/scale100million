import { motion } from "framer-motion";
import { Zap, BrainCircuit, BarChart, CheckCircle2, Rocket } from "lucide-react";

export default function AboutUs() {
    const pillars = [
        {
            icon: <Zap size={20} />,
            title: "Practical Execution",
            desc: "Every strategy is designed to be implemented immediately. No theory without action.",
            iconColor: "text-yellow-400",
            border: "border-yellow-500/20",
            glow: "bg-yellow-500/8",
            badge: "bg-yellow-500/10 border-yellow-500/20 text-yellow-400",
        },
        {
            icon: <BrainCircuit size={20} />,
            title: "System-Driven",
            desc: "We build robust frameworks that remove dependency on sheer willpower.",
            iconColor: "text-blue-400",
            border: "border-blue-500/20",
            glow: "bg-blue-500/8",
            badge: "bg-blue-500/10 border-blue-500/20 text-blue-400",
        },
        {
            icon: <BarChart size={20} />,
            title: "Sustainable Growth",
            desc: "We build engines that produce consistent, long-term revenue — not flash-trends.",
            iconColor: "text-emerald-400",
            border: "border-emerald-500/20",
            glow: "bg-emerald-500/8",
            badge: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
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

            {/* Ambient glows */}
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/12 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/8 rounded-full blur-[140px] pointer-events-none" />
            {/* Decorative line */}
            <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <div className="max-w-5xl mx-auto relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 md:mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
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
                            className="relative group"
                        >
                            {/* Gradient border technique */}
                            <div className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-br ${idx === 0 ? 'from-yellow-500/30 via-yellow-500/10 to-transparent' :
                                    idx === 1 ? 'from-blue-500/30 via-blue-500/10 to-transparent' :
                                        'from-emerald-500/30 via-emerald-500/10 to-transparent'
                                } group-hover:opacity-100 opacity-60 transition-opacity duration-300`} />
                            <div className="relative rounded-2xl bg-zinc-950 p-5 h-full">
                                <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-4 border ${item.border} ${item.glow} ${item.iconColor}`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-sm font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Who it's for + Promise */}
                <div className="grid lg:grid-cols-2 gap-6 items-start">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-primary/25 via-blue-500/10 to-transparent" />
                        <div className="relative rounded-2xl bg-zinc-950 p-5 md:p-6">
                            <h2 className="text-lg font-bold tracking-tight mb-5 text-white">Who Is This For?</h2>
                            <div className="space-y-3">
                                {audience.map((text, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="p-0.5 rounded-full bg-primary/20 text-primary mt-0.5 flex-shrink-0">
                                            <CheckCircle2 size={14} />
                                        </div>
                                        <p className="text-sm text-gray-400 leading-relaxed">{text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="relative"
                    >
                        {/* Glowing gradient border */}
                        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-purple-500/40 via-blue-500/20 to-primary/20" />
                        <div className="relative rounded-2xl bg-zinc-950 p-5 md:p-6 space-y-4">
                            {/* accent glow inside */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/8 rounded-full blur-2xl pointer-events-none" />
                            <Rocket className="text-primary w-7 h-7 relative z-10" />
                            <h3 className="text-lg font-bold text-white relative z-10">Our Promise</h3>
                            <p className="text-sm text-gray-400 leading-relaxed relative z-10">
                                We don't promise overnight millions. We promise <span className="text-white">clarity</span>. We promise <span className="text-white">strategy</span>. If you do the work, you will have a business that serves you — not the other way around.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
