import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, Youtube, Send, FileText, ArrowRight, MessageSquare, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

// REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

export default function ContactUs() {
    const socialLinks = [
        { icon: <Instagram size={24} />, href: "https://www.instagram.com/scale100million/", label: "Instagram", color: "text-[#E1306C]", borderColor: "group-hover:border-[#E1306C]/50", bgColor: "group-hover:bg-[#E1306C]/10" },
        { icon: <Youtube size={24} />, href: "https://www.youtube.com/@scale100million-yt", label: "YouTube", color: "text-[#FF0000]", borderColor: "group-hover:border-[#FF0000]/50", bgColor: "group-hover:bg-[#FF0000]/10" },
        { icon: <Send size={24} />, href: "https://t.me/+SSG0wArwUcQyYTc1", label: "Telegram", color: "text-[#229ED9]", borderColor: "group-hover:border-[#229ED9]/50", bgColor: "group-hover:bg-[#229ED9]/10" },
    ];

    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState("idle"); // idle, success, error

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            // Note: This will fail until you replace the placeholder keys above
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    from_name: formState.name,
                    from_email: formState.email,
                    message: formState.message,
                    to_name: "Scale100Million Team"
                },
                EMAILJS_PUBLIC_KEY
            );

            setSubmitStatus("success");
            setFormState({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("FAILED...", error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="w-full min-h-screen bg-black text-white py-16 md:py-36 px-6 relative overflow-hidden flex justify-center items-center">

            {/* Background Ambience */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] translate-x-1/4 -translate-y-1/4" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] -translate-x-1/4 translate-y-1/4" />
            </div>

            <div className="max-w-7xl w-full relative z-10 grid lg:grid-cols-2 gap-10 md:gap-16 items-start">

                {/* Left Side: Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8 md:space-y-12"
                >
                    <div className="space-y-4 md:space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold uppercase tracking-widest">
                            <MessageSquare size={14} /> Get in Touch
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-tight">
                            Let’s <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Talk Scale.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed">
                            Have questions about our programs? Ready to implement a system that actually works? We’re here.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {/* Contact Cards */}
                        {[
                            {
                                icon: <MapPin size={24} />,
                                title: "Headquarters",
                                content: <p>NIRMAN AJINKYATARA, VADGAON BUDRUK 411041,<br />Vadgaon Budruk, MH, 411041</p>,
                                delay: 0.1
                            },
                            {
                                icon: <Phone size={24} />,
                                title: "Phone",
                                content: <div className="flex flex-col gap-1"><a href="tel:+919325847844" className="hover:text-primary transition-colors">+91 9325847844</a><a href="tel:+918806400205" className="hover:text-primary transition-colors">+91 8806400205</a></div>,
                                delay: 0.2
                            },
                            {
                                icon: <Mail size={24} />,
                                title: "Email",
                                content: <a href="mailto:scale100million@gmail.com" className="hover:text-primary transition-colors">scale100million@gmail.com</a>,
                                delay: 0.3
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: item.delay, duration: 0.5 }}
                                className="flex items-start gap-4 md:gap-6 p-5 md:p-6 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-white/20 hover:bg-zinc-900/60 transition-all duration-300 group"
                            >
                                <div className="p-3 md:p-4 bg-white/5 rounded-xl text-primary border border-white/5 group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all duration-300">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                    <div className="text-gray-400 group-hover:text-gray-300 transition-colors">
                                        {item.content}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Socials */}
                    <div className="pt-4">
                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Connect With Us</h4>
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`group relative w-16 h-16 md:w-24 md:h-24 flex items-center justify-center rounded-2xl bg-zinc-900/50 border border-white/10 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 ${social.borderColor}`}
                                >
                                    <span className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${social.bgColor}`} />
                                    <div className={`relative z-10 transition-colors ${social.color} group-hover:text-white`}>
                                        {social.icon}
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Form + Billing */}
                <div className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-zinc-900/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />

                        <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Send a Message</h3>

                        <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wide ml-1">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formState.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all font-medium"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wide ml-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formState.email}
                                    onChange={handleChange}
                                    placeholder="you@example.com"
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all font-medium"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wide ml-1">Message</label>
                                <textarea
                                    rows={4}
                                    name="message"
                                    required
                                    value={formState.message}
                                    onChange={handleChange}
                                    placeholder="How can we help you?"
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 md:px-5 py-3 md:py-4 text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none font-medium"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full group bg-gradient-to-r from-primary to-blue-600 text-white font-bold text-lg py-4 rounded-xl transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="animate-spin" size={20} /> Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                                    </>
                                )}
                            </button>

                            {submitStatus === "success" && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-xl text-sm font-medium text-center"
                                >
                                    Message sent successfully! We'll get back to you shortly.
                                </motion.div>
                            )}
                            {submitStatus === "error" && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-sm font-medium text-center"
                                >
                                    Failed to send message. Please checking your API keys or try again later.
                                </motion.div>
                            )}
                        </form>
                    </motion.div>

                    {/* Billing Info Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="bg-black/40 border border-dashed border-white/10 rounded-2xl p-6 flex items-start gap-4"
                    >
                        <div className="p-3 bg-white/5 rounded-xl text-gray-400">
                            <FileText size={20} />
                        </div>
                        <div className="space-y-1">
                            <h4 className="text-white font-medium text-sm">Business & Billing Information</h4>
                            <p className="text-xs text-gray-500 leading-relaxed">
                                Scale100Million.com is owned by <span className="text-gray-300">Abhay Mukund Lagad</span>.<br />
                                Payments will appear as <span className="text-gray-300">“ABHAY MUKUND LAGAD”</span>.
                            </p>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
