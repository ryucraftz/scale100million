import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, Youtube, Send, FileText, ArrowRight, MessageSquare, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

export default function ContactUs() {
    const socialLinks = [
        { icon: <Instagram size={20} />, href: "https://www.instagram.com/scale100million/", label: "Instagram", color: "text-[#E1306C]", borderColor: "group-hover:border-[#E1306C]/40", bgColor: "group-hover:bg-[#E1306C]/10" },
        { icon: <Youtube size={20} />, href: "https://www.youtube.com/@scale100million-yt", label: "YouTube", color: "text-[#FF0000]", borderColor: "group-hover:border-[#FF0000]/40", bgColor: "group-hover:bg-[#FF0000]/10" },
        { icon: <Send size={20} />, href: "https://t.me/+SSG0wArwUcQyYTc1", label: "Telegram", color: "text-[#229ED9]", borderColor: "group-hover:border-[#229ED9]/40", bgColor: "group-hover:bg-[#229ED9]/10" },
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
        } catch (error) {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="w-full min-h-screen bg-black text-white pt-24 md:pt-28 pb-16 px-5 md:px-8 relative overflow-hidden">

            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/8 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">

                {/* Page header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-10 md:mb-14"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                        <MessageSquare size={12} /> Get in Touch
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-3">
                        Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Talk Scale.</span>
                    </h1>
                    <p className="text-sm md:text-base text-gray-500 max-w-lg">
                        Have questions? Ready to implement a system that works? We're here.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">

                    {/* Left: Contact info */}
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
                                content: "NIRMAN AJINKYATARA, VADGAON BUDRUK 411041, MH"
                            },
                            {
                                icon: <Phone size={18} />,
                                title: "Phone",
                                content: <div className="flex flex-col gap-0.5">
                                    <a href="tel:+919325847844" className="hover:text-primary transition-colors">+91 9325847844</a>
                                    <a href="tel:+918806400205" className="hover:text-primary transition-colors">+91 8806400205</a>
                                </div>
                            },
                            {
                                icon: <Mail size={18} />,
                                title: "Email",
                                content: <a href="mailto:scale100million@gmail.com" className="hover:text-primary transition-colors">scale100million@gmail.com</a>
                            }
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="flex items-start gap-4 p-4 rounded-xl bg-white/3 border border-white/8 hover:border-white/15 hover:bg-white/5 transition-all duration-300 group"
                            >
                                <div className="p-2 bg-white/5 rounded-lg text-primary border border-white/5 flex-shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-0.5">{item.title}</h3>
                                    <div className="text-sm text-gray-300">{item.content}</div>
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
                                        className={`group relative w-12 h-12 flex items-center justify-center rounded-xl bg-white/3 border border-white/10 hover:-translate-y-1 transition-all duration-300 ${social.borderColor}`}
                                    >
                                        <span className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity ${social.bgColor}`} />
                                        <div className={`relative z-10 ${social.color}`}>{social.icon}</div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Billing card */}
                        <div className="flex items-start gap-3 p-4 rounded-xl border border-dashed border-white/10 bg-white/2">
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
                        className="bg-zinc-900/60 border border-white/8 rounded-2xl p-5 md:p-8 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-48 h-48 bg-primary/8 rounded-full blur-3xl pointer-events-none" />

                        <h3 className="text-lg font-bold text-white mb-5 relative z-10">Send a Message</h3>

                        <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                            {[
                                { label: "Name", name: "name", type: "text", placeholder: "Your Name" },
                                { label: "Email", name: "email", type: "email", placeholder: "you@example.com" },
                            ].map((field) => (
                                <div key={field.name} className="space-y-1.5">
                                    <label className="text-[10px] font-bold text-gray-600 uppercase tracking-wider ml-0.5">{field.label}</label>
                                    <input
                                        type={field.type}
                                        name={field.name}
                                        required
                                        value={formState[field.name]}
                                        onChange={handleChange}
                                        placeholder={field.placeholder}
                                        className="w-full bg-black/40 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-700 focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/30 transition-all"
                                    />
                                </div>
                            ))}
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold text-gray-600 uppercase tracking-wider ml-0.5">Message</label>
                                <textarea
                                    rows={4}
                                    name="message"
                                    required
                                    value={formState.message}
                                    onChange={handleChange}
                                    placeholder="How can we help you?"
                                    className="w-full bg-black/40 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-700 focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full group bg-gradient-to-r from-primary to-blue-600 text-white font-bold text-sm py-3 rounded-xl transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
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
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
