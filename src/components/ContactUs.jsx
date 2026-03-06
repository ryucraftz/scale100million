import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, Youtube, Send, FileText, ArrowRight, MessageSquare, Loader2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

export default function ContactUs() {
    const socialLinks = [
        { icon: <Instagram size={20} />, href: "https://www.instagram.com/scale100million/", label: "Instagram", accent: "#E1306C" },
        { icon: <Youtube size={20} />, href: "https://www.youtube.com/@scale100million-yt", label: "YouTube", accent: "#FF0000" },
        { icon: <Send size={20} />, href: "https://t.me/+SSG0wArwUcQyYTc1", label: "Telegram", accent: "#229ED9" },
    ];

    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState("idle");

    const handleChange = (e) => setFormState({ ...formState, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");
        try {
            await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
                from_name: formState.name,
                from_email: formState.email,
                message: formState.message,
                to_name: "Scale100Million Team"
            }, EMAILJS_PUBLIC_KEY);
            setSubmitStatus("success");
            setFormState({ name: "", email: "", message: "" });
        } catch {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="w-full min-h-screen bg-black text-white pt-24 md:pt-28 pb-16 px-5 md:px-8 relative overflow-hidden">

            {/* Ambient glows */}
            <div className="absolute top-[-5%] right-[-5%] w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">

                {/* Page header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-10 md:mb-14"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
                        <MessageSquare size={12} /> Get in Touch
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-3">
                        Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Talk Scale.</span>
                    </h1>
                    <p className="text-sm md:text-base text-gray-500 max-w-lg">
                        Have questions? Ready to implement a system that works? We're here.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">

                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="space-y-3"
                    >
                        {[
                            {
                                icon: <MapPin size={18} />,
                                title: "Headquarters",
                                content: "NIRMAN AJINKYATARA, VADGAON BUDRUK 411041, MH",
                                glow: "rgba(59,130,246,0.08)"
                            },
                            {
                                icon: <Phone size={18} />,
                                title: "Phone",
                                content: <div className="flex flex-col gap-0.5">
                                    <a href="tel:+919325847844" className="hover:text-blue-400 transition-colors">+91 9325847844</a>
                                    <a href="tel:+918806400205" className="hover:text-blue-400 transition-colors">+91 8806400205</a>
                                </div>,
                                glow: "rgba(139,92,246,0.08)"
                            },
                            {
                                icon: <FaWhatsapp size={18} />,
                                title: "WhatsApp",
                                content: <a href="https://wa.me/919370452416" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">+91 9370452416</a>,
                                glow: "rgba(37,211,102,0.08)"
                            },
                            {
                                icon: <Mail size={18} />,
                                title: "Email",
                                content: <a href="mailto:scale100million@gmail.com" className="hover:text-blue-400 transition-colors">scale100million@gmail.com</a>,
                                glow: "rgba(16,185,129,0.08)"
                            }
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="relative flex items-start gap-4 p-4 rounded-xl overflow-hidden group cursor-default"
                                style={{ background: 'rgba(255,255,255,0.02)' }}
                            >
                                {/* gradient border via shadow */}
                                <div className="absolute inset-0 rounded-xl" style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(139,92,246,0.1), rgba(255,255,255,0.03))', padding: '1px' }}>
                                    <div className="w-full h-full rounded-xl bg-zinc-950" />
                                </div>
                                {/* Content */}
                                <div className="relative z-10 flex items-start gap-4 w-full">
                                    <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 border border-blue-500/20 flex-shrink-0">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-[10px] font-bold text-gray-600 uppercase tracking-wider mb-0.5">{item.title}</h3>
                                        <div className="text-sm text-gray-300">{item.content}</div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Socials */}
                        <div className="pt-2">
                            <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-3">Connect</p>
                            <div className="flex gap-3">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-300 hover:-translate-y-1"
                                        style={{ background: `${social.accent}10`, border: `1px solid ${social.accent}25` }}
                                    >
                                        <div style={{ color: social.accent }}>{social.icon}</div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Billing */}
                        <div className="flex items-start gap-3 p-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px dashed rgba(255,255,255,0.08)' }}>
                            <div className="p-2 bg-white/5 rounded-lg text-gray-500 flex-shrink-0">
                                <FileText size={16} />
                            </div>
                            <div>
                                <h4 className="text-xs font-semibold text-white mb-0.5">Business & Billing</h4>
                                <p className="text-xs text-gray-600 leading-relaxed">
                                    Owned by <span className="text-gray-400">Abhay Mukund Lagad</span>. Payments appear as <span className="text-gray-400">"ABHAY MUKUND LAGAD"</span>.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="relative"
                    >
                        {/* Gradient border card */}
                        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-blue-500/40 via-purple-500/20 to-blue-500/10 blur-[0.5px]" />
                        <div className="relative bg-zinc-950 rounded-2xl p-5 md:p-8 overflow-hidden">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/8 rounded-full blur-3xl pointer-events-none" />

                            <h3 className="text-lg font-bold text-white mb-5 relative z-10">Send a Message</h3>

                            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                                {[
                                    { label: "Name", name: "name", type: "text", placeholder: "Your Name" },
                                    { label: "Email", name: "email", type: "email", placeholder: "you@example.com" },
                                ].map((field) => (
                                    <div key={field.name} className="space-y-1.5">
                                        <label className="text-[10px] font-bold text-gray-600 uppercase tracking-wider">{field.label}</label>
                                        <input
                                            type={field.type}
                                            name={field.name}
                                            required
                                            value={formState[field.name]}
                                            onChange={handleChange}
                                            placeholder={field.placeholder}
                                            className="w-full bg-black/60 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-700 focus:outline-none focus:border-blue-500/40 focus:ring-1 focus:ring-blue-500/20 transition-all"
                                        />
                                    </div>
                                ))}
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-bold text-gray-600 uppercase tracking-wider">Message</label>
                                    <textarea
                                        rows={4}
                                        name="message"
                                        required
                                        value={formState.message}
                                        onChange={handleChange}
                                        placeholder="How can we help you?"
                                        className="w-full bg-black/60 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-700 focus:outline-none focus:border-blue-500/40 focus:ring-1 focus:ring-blue-500/20 transition-all resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold text-sm py-3 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-70"
                                >
                                    {isSubmitting ? (
                                        <><Loader2 className="animate-spin" size={16} /> Sending...</>
                                    ) : (
                                        <>Send Message <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} /></>
                                    )}
                                </button>

                                {submitStatus === "success" && (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-3 bg-green-500/10 border border-green-500/20 text-green-400 rounded-xl text-xs text-center">
                                        Message sent! We'll get back to you shortly.
                                    </motion.div>
                                )}
                                {submitStatus === "error" && (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-xs text-center">
                                        Failed to send. Please try again later.
                                    </motion.div>
                                )}
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
