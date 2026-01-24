import React from "react";
import { motion } from "framer-motion";
import { Youtube, Linkedin, Instagram, Send, Play } from "lucide-react";

export default function Media() {
    const socialLinks = [
        {
            name: "YouTube",
            url: "https://www.youtube.com/@scale100million-yt",
            icon: <Youtube className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />,
            text: "Deep dives & Frameworks"
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/company/scale100million/",
            icon: <Linkedin className="w-8 h-8 text-[#0077b5] group-hover:scale-110 transition-transform" />,
            text: "Behind the scenes"
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/scale100million/",
            icon: <Instagram className="w-8 h-8 text-[#E1306C] group-hover:scale-110 transition-transform" />,
            text: "Daily Updates"
        },
        {
            name: "Telegram Community",
            url: "https://t.me/+t5a5E6TJ7JowNjg1",
            icon: <Send className="w-8 h-8 text-[#229ED9] group-hover:scale-110 transition-transform" />,
            text: "Community Updates"
        }
    ];

    return (
        <section id="media" className="py-24 px-6 md:px-12 bg-black text-white relative border-t border-white/5">
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
                            Media
                        </h2>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                            We share our thinking, frameworks, and behind-the-scenes work publicly. <br /><br />
                            If you want to see how we think and work, this is the best place to start.
                        </p>

                        <a
                            href="https://www.youtube.com/@scale100million-yt"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 rounded-full transition-all duration-300 group"
                        >
                            <span className="font-semibold text-white">Explore Our Content</span>
                            <Play className="w-4 h-4 text-white fill-white group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>

                    {/* Links Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center justify-center p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 group hover:-translate-y-1"
                            >
                                <div className="mb-4 p-3 bg-black rounded-full border border-white/10">
                                    {link.icon}
                                </div>
                                <span className="text-lg font-bold text-white mb-1">{link.name}</span>
                                <span className="text-sm text-gray-500 font-medium">{link.text}</span>
                            </a>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
