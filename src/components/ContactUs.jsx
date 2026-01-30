import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, Youtube, Send, FileText } from "lucide-react";

export default function ContactUs() {
    const socialLinks = [
        { icon: <Instagram size={20} />, href: "https://www.instagram.com/scale100million/", label: "Instagram", color: "text-[#E1306C]" },
        { icon: <Youtube size={20} />, href: "https://www.youtube.com/@scale100million-yt", label: "YouTube", color: "text-[#FF0000]" },
        { icon: <Send size={20} />, href: "https://t.me/+SSG0wArwUcQyYTc1", label: "Telegram", color: "text-[#229ED9]" },
    ];

    return (
        <section id="contact" className="py-24 px-6 md:px-12 bg-background text-text-primary relative overflow-hidden flex justify-center items-center">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="w-full max-w-4xl relative z-10 grid md:grid-cols-2 gap-12">

                {/* Contact Info Side */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
                            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Us</span>
                        </h2>
                        <p className="text-lg text-gray-400">
                            We’re here to help.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {/* Address */}
                        <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors group">
                            <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform mt-1">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-1">Business Address</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    NIRMAN AJINKYATARA, VADGAON BUDRUK 411041, Vadgaon Budruk, MH, 411041
                                </p>
                            </div>
                        </div>

                        {/* Phone Numbers */}
                        <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors group">
                            <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform mt-1">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-1">Business Phone</h4>
                                <div className="flex flex-col gap-1 text-gray-400 text-sm">
                                    <a href="tel:+919325847844" className="hover:text-primary transition-colors">+91 9325847844</a>
                                    <a href="tel:+918806400205" className="hover:text-primary transition-colors">+91 8806400205</a>
                                </div>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors group">
                            <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform mt-1">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-1">Support Email</h4>
                                <a href="mailto:scale100million@gmail.com" className="text-gray-400 text-sm hover:text-primary transition-colors">
                                    scale100million@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* Socials */}
                        <div className="flex gap-4 pt-2">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:scale-110 ${social.color}`}
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="p-4 rounded-xl bg-blue-900/10 border border-blue-900/30 text-sm text-gray-400">
                        For enrollment, support, or general queries, please reach out using the contact form or email above.
                    </div>

                </motion.div>

                {/* Form Side + Billing Info */}
                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl"
                    >
                        <form className="space-y-5">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400 ml-1">Name</label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400 ml-1">Email</label>
                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400 ml-1">Message</label>
                                <textarea
                                    rows={4}
                                    placeholder="How can we help you?"
                                    className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary hover:bg-blue-600 text-white font-bold text-lg py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-primary/25 hover:-translate-y-1"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-zinc-900/30 border border-gray-800 rounded-2xl p-6 space-y-3"
                    >
                        <div className="flex items-center gap-3 text-white font-bold">
                            <FileText size={20} className="text-gray-400" />
                            <h3>Business & Billing Information</h3>
                        </div>
                        <div className="space-y-2 text-sm text-gray-400 leading-relaxed">
                            <p>Scale100Million is a brand owned and operated by <span className="text-white font-medium">Abhay Mukund Lagad</span>.</p>
                            <p>All payments made on this website will appear on billing statements under the name <span className="text-white font-medium">“ABHAY MUKUND LAGAD”</span>.</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
