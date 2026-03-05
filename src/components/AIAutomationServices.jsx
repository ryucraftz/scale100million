import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart3, Filter, Zap, ArrowRight, MessageCircle, ChevronDown } from 'lucide-react';

const AIAutomationServices = () => {
    const [expandedCard, setExpandedCard] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const toggleCard = (index) => {
        if (!isMobile) return;
        setExpandedCard(expandedCard === index ? null : index);
    };
    const services = [
        {
            icon: <BarChart3 className="w-8 h-8 text-blue-400" />,
            title: "Performance Marketing",
            subtitle: "Data-Driven Customer Acquisition",
            description: "Running ads is easy. Running ads that consistently produce qualified leads is a different game. We treat your advertising like a performance system, not just a campaign.",
            details: [
                "Advertising strategy and campaign architecture",
                "Creative direction and testing systems",
                "Audience research and targeting",
                "Conversion tracking and performance analytics",
                "Ongoing optimization and scaling"
            ],
            result: "A consistent flow of qualified leads and a customer acquisition system that improves over time.",
            cta: "Book a Performance Marketing Strategy Call",
            link: "https://nas.io/scale100million",
            color: "from-blue-600/20 to-blue-900/5",
            borderHover: "hover:border-blue-500/50"
        },
        {
            icon: <Filter className="w-8 h-8 text-purple-400" />,
            title: "Funnel Building",
            subtitle: "Turn Traffic Into Revenue",
            description: "Traffic alone doesn't grow a business. What matters is what happens after someone clicks. We build funnels to remove friction and make the next step obvious.",
            details: [
                "Landing pages and sales pages",
                "Lead capture systems",
                "Positioning, offer and messaging",
                "Funnel structure and user flow",
                "Conversion optimization",
                "CMS development"
            ],
            result: "A strong funnel ensures the traffic you generate actually turns into leads, customers, and revenue.",
            cta: "Book a Funnel Strategy Call",
            link: "https://nas.io/scale100million",
            color: "from-purple-600/20 to-purple-900/5",
            borderHover: "hover:border-purple-500/50"
        },
        {
            icon: <Zap className="w-8 h-8 text-green-400" />,
            title: "Customized AI Automations",
            subtitle: "Remove Operational Bottlenecks",
            description: "Many businesses lose valuable time on repetitive processes. We design customized AI automation systems that streamline operations and eliminate unnecessary manual work.",
            details: [
                "Marketing automation",
                "System and data integration",
                "Business process automation",
                "WhatsApp and Instagram DM automation",
                "Email and Short content automation",
                "Customized AI agents & ChatBots",
                "CRM automation"
            ],
            result: "Free up your team's time while making your business run more effectively.",
            cta: "Book an AI Automation Strategy Call",
            link: "https://nas.io/scale100million",
            color: "from-green-600/20 to-green-900/5",
            borderHover: "hover:border-green-500/50"
        }
    ];

    const stats = [
        { label: "Brands Funnels Built", value: "100+" },
        { label: "Average ROI", value: "5x" },
        { label: "Profit Margin Yearly", value: "60-65%" },
        { label: "Increase in Qualified Leads", value: "30%" },
        { label: "Lower Acquisition Cost", value: "40%" },
    ];

    return (
        <section id="expert-services" className="relative w-full py-12 md:py-32 bg-black overflow-hidden font-['Satoshi',sans-serif]">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px]" />

                {/* Subtle grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />
            </div>

            <div className="relative max-w-[1400px] mx-auto px-4 md:px-12 z-10">
                {/* Header Section */}
                <div className="text-center max-w-4xl mx-auto mb-12 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-800 bg-white/5 backdrop-blur-md mb-6 inline-block">
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                            <span className="text-xs md:text-sm font-medium text-gray-300 uppercase tracking-widest">
                                Proven Growth Systems
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight font-['Inter',sans-serif]">
                            Optimize Your Customer Acquisition For <span className="text-blue-500">More Profit</span>
                        </h2>

                        <p className="text-xl md:text-2xl text-gray-400 font-light mb-8 max-w-3xl mx-auto">
                            A dedicated team of specialists delivering remarkable results for businesses worldwide.
                        </p>

                        <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider">
                            <span className="flex items-center gap-1 md:gap-2"><div className="w-1.5 h-1.5 bg-gray-500 rounded-full" /> 5+ Years Experience</span>
                            <span className="flex items-center gap-1 md:gap-2"><div className="w-1.5 h-1.5 bg-gray-500 rounded-full" /> Trusted by 100+ businesses</span>
                            <span className="flex items-center gap-1 md:gap-2"><div className="w-1.5 h-1.5 bg-gray-500 rounded-full" /> Worked with top founders</span>
                        </div>
                    </motion.div>
                </div>

                {/* Services Introduction */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center mb-8 md:mb-16"
                >
                    <h3 className="text-xl md:text-3xl font-bold text-white mb-2 md:mb-4">Core Services</h3>
                    <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-lg">
                        We help businesses grow by improving three core parts of their system: <br />
                        <span className="text-blue-400 font-medium">Customer acquisition</span> • <span className="text-purple-400 font-medium">Conversion infrastructure</span> • <span className="text-green-400 font-medium">Operational automation</span>
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8 mb-16 md:mb-24">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className={`flex flex-col h-full bg-gradient-to-b ${service.color} border border-white/10 rounded-2xl md:rounded-3xl p-5 md:p-8 backdrop-blur-sm transition-all duration-500 ${service.borderHover} group hover:-translate-y-2 cursor-pointer md:cursor-default`}
                            onClick={() => toggleCard(index)}
                        >
                            <div className="flex items-start justify-between">
                                <div className="bg-white/5 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                <div className="md:hidden mt-2">
                                    <ChevronDown
                                        className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${expandedCard === index ? 'rotate-180' : ''}`}
                                    />
                                </div>
                            </div>

                            <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">{service.title}</h3>
                            <h4 className={`text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${(!isMobile || expandedCard === index) ? 'mb-4 md:mb-6 pb-4 md:pb-6 border-b border-white/10' : 'mb-0 pb-0 border-none'}`}>
                                {service.subtitle}
                            </h4>

                            <AnimatePresence initial={false}>
                                {(!isMobile || expandedCard === index) && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex flex-col flex-grow overflow-hidden"
                                    >
                                        <div className="pt-4 md:pt-0">

                                            {service.title === "Performance Marketing" && (
                                                <div className="flex items-center gap-4 mb-6 text-xs text-gray-500 font-semibold uppercase tracking-wider">
                                                    <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-blue-600"></span> Meta Partner</span>
                                                    <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-red-500"></span> Google Partner</span>
                                                </div>
                                            )}

                                            <p className="text-sm md:text-base text-gray-300 mb-6 md:mb-8 leading-relaxed font-light">
                                                {service.description}
                                            </p>

                                            <div className="mb-6 md:mb-8 flex-grow">
                                                <h5 className="text-xs md:text-sm font-bold text-white mb-3 md:mb-4 flex items-center gap-2">
                                                    What we handle <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-gray-500" />
                                                </h5>
                                                <ul className="space-y-2 md:space-y-3">
                                                    {service.details.map((detail, idx) => (
                                                        <li key={idx} className="flex items-start gap-2 md:gap-3 text-xs md:text-sm text-gray-400">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-white/30 mt-1.5 flex-shrink-0" />
                                                            <span>{detail}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="mt-auto pt-4 md:pt-6 border-t border-white/10">
                                                <p className="text-xs md:text-sm text-white/90 font-medium mb-4 md:mb-6 italic">
                                                    <span className="text-gray-500 not-italic block mb-1 text-[10px] md:text-xs uppercase tracking-wider">The Result</span>
                                                    {service.result}
                                                </p>

                                                <a
                                                    href={service.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="w-full py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2 group/btn"
                                                >
                                                    {service.cta}
                                                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                                </a>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Credibility Stats */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 md:mb-24 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-blue-900/20 border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-12 relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>

                    <div className="text-center mb-6 md:mb-10 relative z-10">
                        <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-1 md:mb-2 block">Our Track Record</span>
                        <h3 className="text-xl md:text-3xl font-bold text-white">Metrics That Matter</h3>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-y-6 md:gap-y-0 gap-x-2 md:gap-x-6 divide-x divide-white/10 relative z-10">
                        {stats.map((stat, index) => (
                            <div key={index} className={`text-center px-1 md:px-4 ${index % 2 !== 0 && index < 4 ? 'border-l border-white/10 lg:border-none' : ''} ${index === 4 ? 'col-span-2 lg:col-span-1 border-none lg:border-l lg:border-white/10' : ''}`}>
                                <div className="text-2xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 mb-1 md:mb-2 font-['Inter',sans-serif]">
                                    {stat.value}
                                </div>
                                <div className="text-[10px] md:text-sm text-gray-400 font-medium uppercase tracking-wider">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA Bottom Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center relative"
                >
                    <div className="absolute -inset-x-20 -inset-y-10 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 blur-3xl rounded-full opacity-50 pointer-events-none" />

                    <h2 className="text-2xl md:text-5xl font-bold text-white mb-4 md:mb-6 relative z-10">
                        Work With Us
                    </h2>
                    <p className="text-sm md:text-xl text-gray-400 mb-8 md:mb-10 max-w-2xl mx-auto font-light leading-relaxed relative z-10">
                        If you're serious about improving customer acquisition, scaling efficiently, and operational efficiency, we can help. We begin by understanding your business, identifying bottlenecks, and implementing the systems that will create the biggest impact.
                    </p>

                    <div className="relative z-10 inline-block group/btn">
                        <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur-md opacity-60 group-hover/btn:opacity-100 transition-opacity duration-500 animate-pulse" />
                        <a
                            href="https://wa.me/yourwhatsappnumber"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative px-6 md:px-10 py-4 md:py-5 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-bold text-xs md:text-base uppercase tracking-widest rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_50px_rgba(16,185,129,0.6)] hover:-translate-y-1 hover:scale-105 flex items-center justify-center gap-2 md:gap-3 overflow-hidden border border-green-400/30 w-full sm:w-auto"
                        >
                            <span className="relative z-10 flex items-center gap-2 md:gap-3">
                                <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                                Start on WhatsApp
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AIAutomationServices;
