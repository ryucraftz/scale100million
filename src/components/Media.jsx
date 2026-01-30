import React from "react";
import { motion } from "framer-motion";
import { Youtube, Linkedin, Instagram, Send, Play } from "lucide-react";
import SectionLabel from "./SectionLabel";

export default function Media() {
    const socialLinks = [
        {
            name: "YOUTUBE",
            url: "https://www.youtube.com/@scale100million-yt",
            icon: <Youtube />,
            color: "text-[#FF0000]",
            borderColor: "group-hover:border-[#FF0000]/50",
            bgColor: "group-hover:bg-[#FF0000]/10",
            text: "DEEP DIVES & FRAMEWORKS"
        },
        {
            name: "LINKEDIN",
            url: "https://www.linkedin.com/company/scale100million/",
            icon: <Linkedin />,
            color: "text-[#0077b5]",
            borderColor: "group-hover:border-[#0077b5]/50",
            bgColor: "group-hover:bg-[#0077b5]/10",
            text: "DECISIONS. EXECUTION. LESSONS."
        },
        {
            name: "INSTAGRAM",
            url: "https://www.instagram.com/scale100million/",
            icon: <Instagram />,
            color: "text-[#E1306C]",
            borderColor: "group-hover:border-[#E1306C]/50",
            bgColor: "group-hover:bg-[#E1306C]/10",
            text: "DAILY UPDATES"
        },
        {
            name: "TELEGRAM COMMUNITY",
            url: "https://t.me/+t5a5E6TJ7JowNjg1",
            icon: <Send />,
            color: "text-[#229ED9]",
            borderColor: "group-hover:border-[#229ED9]/50",
            bgColor: "group-hover:bg-[#229ED9]/10",
            text: "COMMUNITY UPDATES"
        }
    ];

    return (
        <section id="media" className="py-24 px-6 md:px-12 bg-background text-text-primary relative border-t border-gray-800">
            <SectionLabel number="02" />
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                            MEDIA
                        </h2>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                            We share our thinking, frameworks, and behind-the-scenes work publicly. <br /><br />
                            If you want to see how we think and work, this is the best place to start.
                        </p>

                        <a
                            href="https://www.youtube.com/@scale100million-yt"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-6 py-3 bg-gray-100 border border-gray-200 hover:bg-gray-200 hover:border-gray-400 rounded-full transition-all duration-300 group"
                        >
                            <span className="font-semibold text-gray-900">EXPLORE OUR CONTENT</span>
                            <Play className="w-4 h-4 text-gray-900 fill-gray-900 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>

                    {/* Links Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-4"
                    >
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center gap-4 p-5 bg-surface border border-gray-800 rounded-2xl transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden ${link.borderColor} hover:bg-gray-800/80`}
                            >
                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                                <div className={`shrink-0 p-3 bg-white/5 rounded-xl border border-white/10 transition-colors duration-300 ${link.bgColor} ${link.borderColor}`}>
                                    {React.cloneElement(link.icon, { className: `w-6 h-6 md:w-8 md:h-8 ${link.color}` })}
                                </div>
                                <div className="flex flex-col">
                                    <span className={`text-sm md:text-base font-bold text-white mb-0.5 transition-colors group-hover:text-white`}>{link.name}</span>
                                    <span className="text-xs text-gray-400 font-medium">{link.text}</span>
                                </div>
                            </a>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section >
    );
}
