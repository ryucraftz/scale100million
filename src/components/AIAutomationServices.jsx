import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Filter, Zap, ArrowRight, MessageCircle, ChevronDown, TrendingUp, Users, Bot } from 'lucide-react';

// Hook to measure element height
function useMeasure() {
    const ref = useRef(null);
    const [height, setHeight] = useState(0);
    useEffect(() => {
        if (!ref.current) return;
        const observer = new ResizeObserver(([entry]) => {
            setHeight(entry.contentRect.height);
        });
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);
    return [ref, height];
}

// Smooth accordion using measured height + spring (no height:"auto" jank)
function AccordionContent({ isOpen, children }) {
    const [measureRef, measuredHeight] = useMeasure();
    return (
        <motion.div
            animate={{
                height: isOpen ? measuredHeight : 0,
                opacity: isOpen ? 1 : 0,
            }}
            transition={{
                height: { type: 'spring', stiffness: 260, damping: 28 },
                opacity: { duration: 0.22, ease: 'easeInOut' },
            }}
            style={{ overflow: 'hidden', willChange: 'height, opacity' }}
            className="relative z-10"
        >
            <div ref={measureRef}>
                {children}
            </div>
        </motion.div>
    );
}

const AIAutomationServices = () => {
    const [expandedCard, setExpandedCard] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
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
            icon: <BarChart3 className="w-7 h-7" />,
            accentColor: '#3b82f6',
            title: "Performance Marketing",
            subtitle: "Drive Revenue with Paid Traffic",
            description: "Building profitable acquisition systems using data-driven strategies across Meta, Google, and LinkedIn.",
            details: [
                "$10M+ Total Ad Spend Managed",
                "4x Average ROAS",
                "25% Reduction in Cost Per Lead",
                "50M+ Total Reach Across Campaigns"
            ],
            result: "A consistent flow of qualified leads and a customer acquisition system that improves over time.",
            cta: "Book a Performance Marketing Strategy Call",
            link: "https://scale100million.zohobookings.in/#/300029000000522008",
            gradientFrom: 'from-blue-500/20',
            gradientTo: 'to-blue-900/5',
            glowColor: 'rgba(59,130,246,0.15)',
            badgeText: "Meta & Google Partner",
            badgeColor: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
            iconBg: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
            borderHover: 'hover:border-blue-500/50',
            ctaStyle: 'from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 shadow-blue-500/20 hover:shadow-blue-500/40',
        },
        {
            icon: <Filter className="w-7 h-7" />,
            accentColor: '#a855f7',
            title: "Funnel Building",
            subtitle: "Turn Traffic Into Revenue",
            description: "Designing high-conversion funnels that guide visitors through a clear journey from first interest to final decision, focusing on removing friction.",
            details: [
                "100+ Funnels Built",
                "5x Average ROI",
                "30% Increase in Qualified Leads",
                "40% Lower Acquisition Costs"
            ],
            result: "A strong funnel ensures the traffic you generate actually turns into leads, customers, and revenue.",
            cta: "Book a Funnel Strategy Call",
            link: "https://scale100million.zohobookings.in/#/300029000000522022",
            gradientFrom: 'from-purple-500/20',
            gradientTo: 'to-purple-900/5',
            glowColor: 'rgba(168,85,247,0.15)',
            badgeText: "Conversion Specialists",
            badgeColor: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
            iconBg: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
            borderHover: 'hover:border-purple-500/50',
            ctaStyle: 'from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 shadow-purple-500/20 hover:shadow-purple-500/40',
        },
        {
            icon: <Zap className="w-7 h-7" />,
            accentColor: '#10b981',
            title: "Customized AI Automations",
            subtitle: "Remove Operational Bottlenecks",
            description: "Streamlining operations by automating repetitive processes and integrating with existing tools and workflows.",
            details: [
                "Marketing & Email Automation",
                "Operational Automation (CRM, internal workflows)",
                "Social Media Automation (WhatsApp/IG DM)",
                "Content Automation (Short-form clipping)",
                "AI Agents & Chatbots",
                "60% Reduction in Manual Work",
                "Automations Implemented Across 100+ Businesses"
            ],
            result: "Free up your team's time while making your business run more effectively.",
            cta: "Book an AI Automation Strategy Call",
            link: "https://scale100million.zohobookings.in/#/300029000000522036",
            gradientFrom: 'from-emerald-500/20',
            gradientTo: 'to-emerald-900/5',
            glowColor: 'rgba(16,185,129,0.15)',
            badgeText: "AI-Powered Operations",
            badgeColor: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
            iconBg: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
            borderHover: 'hover:border-emerald-500/50',
            ctaStyle: 'from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 shadow-emerald-500/20 hover:shadow-emerald-500/40',
        }
    ];

    const stats = [
        { label: "Total Ad Spend Managed", value: "$10M+", icon: <TrendingUp className="w-5 h-5 text-blue-400" /> },
        { label: "Average ROAS", value: "4x", icon: <BarChart3 className="w-5 h-5 text-purple-400" /> },
        { label: "Funnels Built", value: "100+", icon: <Filter className="w-5 h-5 text-pink-400" /> },
        { label: "Reduction in Manual Work", value: "60%", icon: <Bot className="w-5 h-5 text-emerald-400" /> },
        { label: "Total Reach Across Campaigns", value: "50M+", icon: <Users className="w-5 h-5 text-yellow-400" /> },
    ];

    return (
        <section id="expert-services" className="relative w-full py-12 md:py-32 bg-black overflow-hidden font-['Satoshi',sans-serif]">

            {/* Background Blobs — pure CSS animate-pulse, no JS thread overhead */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-15%] right-[-8%] w-[700px] h-[700px] bg-blue-700/20 rounded-full blur-[130px] animate-pulse" style={{ animationDuration: '8s' }} />
                <div className="absolute bottom-[5%] left-[-12%] w-[600px] h-[600px] bg-purple-700/20 rounded-full blur-[130px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
                {/* Third blob only on desktop — hidden on mobile to save GPU */}
                <div className="hidden md:block absolute top-[40%] left-[30%] w-[500px] h-[500px] bg-emerald-700/10 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }} />
                {/* Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px]" />
                <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent" />
            </div>

            <div className="relative max-w-[1400px] mx-auto px-4 md:px-12 z-10">

                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-12 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: typeof window !== 'undefined' && window.innerWidth < 768 ? 15 : 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: typeof window !== 'undefined' && window.innerWidth < 768 ? 0.4 : 0.6 }}
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 mb-6">
                            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse inline-block" />
                            <span className="text-xs md:text-sm font-semibold text-blue-300 uppercase tracking-widest">
                                Proven Growth Systems
                            </span>
                        </div>

                        <h2 className="text-2xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight font-['Inter',sans-serif]">
                            Build Systems That Turn{' '}
                            <span className="relative inline-block">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-[length:200%_auto] animate-gradient-x">
                                    Marketing Into Profit
                                </span>
                                <motion.span
                                    className="absolute -bottom-1 left-0 h-[3px] bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '100%' }}
                                    viewport={{ once: true }}
                                    transition={{ duration: typeof window !== 'undefined' && window.innerWidth < 768 ? 0.4 : 0.8, delay: typeof window !== 'undefined' && window.innerWidth < 768 ? 0.2 : 0.4 }}
                                />
                            </span>
                        </h2>

                        <p className="text-lg md:text-xl text-gray-400 font-light mb-8 max-w-3xl mx-auto leading-relaxed">
                            A dedicated team of specialists delivering remarkable results worldwide.
                        </p>

                        <div className="flex flex-wrap justify-center gap-3 md:gap-5 mt-2 md:mt-4 text-[10px] md:text-xs font-bold uppercase tracking-widest z-10 relative">
                            {[
                                { text: "5+ Years Experience", color: "from-blue-500/10 to-transparent", border: "border-blue-500/20 hover:border-blue-500/50", dot: "bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]", glow: "group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]" },
                                { text: "Trusted by 100+ Businesses", color: "from-purple-500/10 to-transparent", border: "border-purple-500/20 hover:border-purple-500/50", dot: "bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.8)]", glow: "group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]" },
                                { text: "Top Founders & Coaches", color: "from-emerald-500/10 to-transparent", border: "border-emerald-500/20 hover:border-emerald-500/50", dot: "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]", glow: "group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: typeof window !== 'undefined' && window.innerWidth < 768 ? 10 : 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: typeof window !== 'undefined' && window.innerWidth < 768 ? 0.2 + i * 0.1 : 0.5 + i * 0.15, duration: typeof window !== 'undefined' && window.innerWidth < 768 ? 0.3 : 0.5 }}
                                    className={`relative group flex items-center gap-2 md:gap-3 px-4 md:px-5 py-2 md:py-2.5 bg-gradient-to-r ${item.color} border ${item.border} rounded-full backdrop-blur-md transition-all duration-300 cursor-default ${item.glow}`}
                                >
                                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                                    <div className={`w-1.5 h-1.5 md:w-2 md:h-2 ${item.dot} rounded-full duration-300`} />
                                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                                        {item.text}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Core Services Label */}
                <motion.div
                    initial={{ opacity: 0, y: typeof window !== 'undefined' && window.innerWidth < 768 ? 10 : 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: typeof window !== 'undefined' && window.innerWidth < 768 ? 0.3 : 0.5, delay: 0.2 }}
                    className="text-center mb-8 md:mb-14"
                >
                    <h3 className="text-xl md:text-3xl font-bold text-white mb-2 md:mb-3">Core Services</h3>
                    <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
                        We help businesses grow by improving three core areas: <br />
                        <span className="text-blue-400 font-medium">Customer acquisition</span>{' '}•{' '}
                        <span className="text-purple-400 font-medium">Operational automation</span>{' '}•{' '}
                        <span className="text-emerald-400 font-medium">Business scaling systems</span>
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mb-16 md:mb-24">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: typeof window !== 'undefined' && window.innerWidth < 768 ? 15 : 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: typeof window !== 'undefined' && window.innerWidth < 768 ? 0.3 : 0.5, delay: index * 0.12 }}
                            onClick={() => toggleCard(index)}
                            className={`relative flex flex-col h-full bg-gradient-to-b ${service.gradientFrom} ${service.gradientTo} border border-white/10 rounded-2xl md:rounded-3xl p-5 md:p-8 transition-all duration-500 ${service.borderHover} group cursor-pointer md:cursor-default overflow-hidden`}
                            whileHover={!isMobile ? { y: -8, transition: { duration: 0.3 } } : {}}
                            style={{ willChange: 'transform' }}
                        >
                            {/* Card glow on hover — pure CSS, no JS state */}
                            <div
                                className="absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                style={{ background: `radial-gradient(circle at 50% 0%, ${service.glowColor} 0%, transparent 70%)` }}
                            />

                            {/* Shine sweep */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden rounded-2xl md:rounded-3xl">
                                <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:left-[200%] transition-all duration-1000 ease-in-out" />
                            </div>

                            {/* Header row */}
                            <div className="flex items-start justify-between mb-4 md:mb-6 relative z-10">
                                <div className={`${service.iconBg} w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center border`}>
                                    {service.icon}
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className={`text-[10px] hidden sm:block md:text-xs font-semibold px-2.5 py-1 rounded-full border ${service.badgeColor}`}>
                                        {service.badgeText}
                                    </span>
                                    {isMobile && (
                                        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${expandedCard === index ? 'rotate-180' : ''}`} />
                                    )}
                                </div>
                            </div>

                            {/* Title & Subtitle */}
                            <h3 className="text-xl md:text-2xl font-black text-white mb-1 relative z-10">{service.title}</h3>
                            <h4 className={`text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider relative z-10 ${(!isMobile || expandedCard === index) ? 'mb-4 md:mb-5 pb-4 md:pb-5 border-b border-white/10' : 'mb-0 pb-0 border-none'}`}>
                                {service.subtitle}
                            </h4>

                            {/* Expandable Content — smooth spring accordion */}
                            <AccordionContent isOpen={!isMobile || expandedCard === index}>
                                <div className="pt-4 md:pt-0 pb-1">
                                    {/* PM certifications */}
                                    {service.title === "Performance Marketing" && (
                                        <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-5 text-[10px] md:text-[10px] text-gray-400 font-bold uppercase tracking-widest md:tracking-widest bg-white/5 w-fit px-4 md:px-4 py-2 md:py-2 rounded-full border border-white/10 shadow-lg">
                                            <span className="flex items-center gap-2 md:gap-2">
                                                <img src="/meta.svg" alt="Meta Logo" className="w-5 h-5 md:w-5 md:h-5 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200">Meta Partner</span>
                                            </span>
                                            <span className="w-px h-3 md:h-3 bg-white/20" />
                                            <span className="flex items-center gap-2 md:gap-2">
                                                <img src="/google.svg" alt="Google Logo" className="w-4 h-4 md:w-4 md:h-4 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-200">Google Partner</span>
                                            </span>
                                        </div>
                                    )}

                                    <p className="text-sm md:text-base text-gray-300 mb-5 md:mb-7 leading-relaxed font-light">
                                        {service.description}
                                    </p>

                                    <div className="mb-5 md:mb-7">
                                        <h5 className="text-xs md:text-sm font-bold text-white mb-3 flex items-center gap-2">
                                            What we handle <ArrowRight className="w-3 h-3 text-gray-500" />
                                        </h5>
                                        <ul className="space-y-2">
                                            {service.details.map((detail, idx) => (
                                                <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-gray-400">
                                                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: service.accentColor + '80' }} />
                                                    <span>{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="pt-4 md:pt-5 border-t border-white/10">
                                        <p className="text-xs md:text-sm text-white/80 font-medium mb-4 italic">
                                            <span className="text-gray-500 not-italic block mb-1 text-[10px] md:text-xs uppercase tracking-widest">The Result</span>
                                            {service.result}
                                        </p>
                                        <a
                                            href={service.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className={`w-full py-2 md:py-3.5 bg-gradient-to-r ${service.ctaStyle} text-white font-bold text-xs md:text-sm rounded-xl transition-all duration-300 flex items-center justify-center gap-1.5 md:gap-2 group/btn shadow-lg`}
                                        >
                                            <span>{service.cta}</span>
                                            <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover/btn:translate-x-1 transition-transform" />
                                        </a>
                                    </div>
                                </div>
                            </AccordionContent>
                        </motion.div>
                    ))}
                </div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: typeof window !== 'undefined' && window.innerWidth < 768 ? 15 : 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: typeof window !== 'undefined' && window.innerWidth < 768 ? 0.4 : 0.6 }}
                    className="relative mb-16 md:mb-24 overflow-hidden rounded-2xl md:rounded-3xl"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-emerald-600/20 rounded-2xl md:rounded-3xl blur-sm" />
                    {/* backdrop-blur only on desktop — expensive on mobile GPU */}
                    <div className="relative bg-black/60 md:backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-12">
                        <div className="text-center mb-6 md:mb-10">
                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-gray-500 block mb-2">Our Track Record</span>
                            <h3 className="text-xl md:text-3xl font-black text-white">Metrics That Matter</h3>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 md:gap-4">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: typeof window !== 'undefined' && window.innerWidth < 768 ? 0.2 : 0.4, delay: index * 0.08 }}
                                    className={`text-center ${index === 4 ? 'col-span-2 lg:col-span-1' : ''}`}
                                >
                                    <div className="flex justify-center mb-2">{stat.icon}</div>
                                    <div className="text-2xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 mb-1 font-['Inter',sans-serif]">
                                        {stat.value}
                                    </div>
                                    <div className="text-[10px] md:text-xs text-gray-500 font-medium uppercase tracking-wider">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: typeof window !== 'undefined' && window.innerWidth < 768 ? 15 : 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: typeof window !== 'undefined' && window.innerWidth < 768 ? 0.4 : 0.7 }}
                    className="max-w-4xl mx-auto text-center relative"
                >
                    <div className="absolute -inset-x-20 -inset-y-10 bg-gradient-to-r from-blue-500/10 via-purple-500/5 to-blue-500/10 blur-3xl rounded-full opacity-60 pointer-events-none" />

                    <h2 className="text-2xl md:text-5xl font-black text-white mb-4 md:mb-6 relative z-10">
                        Work With Us
                    </h2>
                    <p className="text-sm md:text-lg text-gray-400 mb-8 md:mb-10 max-w-2xl mx-auto font-light leading-relaxed relative z-10">
                        If you're serious about improving customer acquisition, scaling efficiently, and operational efficiency, we can help. We begin by understanding your business, identifying bottlenecks, and implementing the systems that will create the biggest impact.
                    </p>

                    <div className="relative z-10 inline-block group/btn">
                        <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur-md opacity-60 group-hover/btn:opacity-100 transition-opacity duration-500 animate-pulse" />
                        <a
                            href="https://wa.me/919370452416"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative px-6 md:px-10 py-4 md:py-5 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-bold text-xs md:text-base uppercase tracking-widest rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_50px_rgba(16,185,129,0.6)] hover:-translate-y-1 hover:scale-105 flex items-center justify-center gap-2 md:gap-3 overflow-hidden border border-green-400/30 w-full sm:w-auto"
                        >
                            <span className="relative z-10 flex items-center gap-2 md:gap-3">
                                <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                                Chat on WhatsApp
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
