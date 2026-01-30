import { motion } from "framer-motion";
import { Users, Target, Zap, BarChart, Rocket, BrainCircuit, CheckCircle2, ArrowRight } from "lucide-react";

export default function AboutUs() {
    return (
        <section
            id="about-us"
            className="w-full min-h-screen bg-black text-white py-20 md:py-32 px-6 md:px-20 relative overflow-hidden"
        >
            {/* Background Ambient Glows */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-24 space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-6">
                        <Users size={16} />
                        <span>About Our Mission</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
                        Scale <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-purple-500 animate-gradient-x">100 Million</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
                        We exist to bridge the gap between <span className="text-white font-medium">ambition</span> and <span className="text-white font-medium">execution</span>. No fluff. No shortcuts. Just scalable systems for serious founders.
                    </p>
                </motion.div>

                {/* Core Pillars / Focus Areas */}
                <div className="grid md:grid-cols-3 gap-8 mb-32">
                    {[
                        {
                            icon: <Zap size={32} />,
                            title: "Practical Execution",
                            desc: "We despise theory without action. Every strategy we provide is designed to be implemented immediately.",
                            color: "from-yellow-400/20 to-orange-500/20",
                            iconColor: "text-yellow-400"
                        },
                        {
                            icon: <BrainCircuit size={32} />,
                            title: "System-Driven",
                            desc: "Chaos is the enemy of scale. We build robust frameworks that remove dependency on sheer willpower.",
                            color: "from-blue-400/20 to-cyan-500/20",
                            iconColor: "text-blue-400"
                        },
                        {
                            icon: <BarChart size={32} />,
                            title: "Sustainable Growth",
                            desc: "We don't chase flash-in-the-pan trends. We build engines that produce consistent, long-term revenue.",
                            color: "from-green-400/20 to-emerald-500/20",
                            iconColor: "text-green-400"
                        }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group relative p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-white/10 transition-all duration-300 hover:bg-zinc-900/60 overflow-hidden"
                        >
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center mb-6 ${item.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                                {item.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Split Section: Who & Promise */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Who is this for */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl font-bold tracking-tight">Who Is This For?</h2>
                        <div className="space-y-6">
                            {[
                                "Entrepreneurs ready to move from 'hustle' to 'scale'.",
                                "Service providers seeking to productize their offerings.",
                                "Founders who value clarity over confirmation bias.",
                                "Leaders looking for proven operational frameworks."
                            ].map((text, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="p-1 rounded-full bg-primary/20 text-primary mt-1">
                                        <CheckCircle2 size={18} />
                                    </div>
                                    <p className="text-lg text-gray-300">{text}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: The Promise (Card) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600 rounded-3xl blur-2xl opacity-20 transform rotate-3" />
                        <div className="relative bg-zinc-900 border border-white/10 rounded-3xl p-10 space-y-8">
                            <Rocket className="text-primary w-12 h-12 mb-4" />
                            <h3 className="text-3xl font-bold text-white">Our Promise</h3>
                            <p className="text-xl text-gray-400 leading-relaxed">
                                We don’t promise overnight millions. We promise <span className="text-white font-medium">clarity</span>. We promise <span className="text-white font-medium">strategy</span>. And we promise that if you do the work, you will have a business that serves you, not the other way around.
                            </p>

                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
