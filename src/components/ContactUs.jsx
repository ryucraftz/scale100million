import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";

export default function ContactUs() {
    return (
        <section id="contact" className="py-24 px-6 md:px-12 bg-background text-text-primary relative overflow-hidden flex justify-center items-center">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="w-full max-w-2xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 space-y-4"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                        Get in Touch
                    </h2>
                    <p className="text-lg text-gray-400">
                        Ready to scale your business? Let's start the conversation.
                    </p>
                    <div className="mt-8 grid gap-4 text-left">
                        <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors group">
                            <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold mb-1">Visit Us</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    NIRMAN AJINKYATARA, VADGAON BUDRUK 411041, Vadgaon Budruk, MH, 411041
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-4">
                            <a href="tel:+919325847844" className="flex-1 flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors group cursor-pointer">
                                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold mb-1">Call Us</h4>
                                    <p className="text-gray-400 text-sm">+91 9325847844</p>
                                </div>
                            </a>

                            <a href="tel:+918806400205" className="flex-1 flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors group cursor-pointer">
                                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold mb-1">Call Us</h4>
                                    <p className="text-gray-400 text-sm">+91 8806400205</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl"
                >
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400 ml-1">Name</label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full bg-black/50 border border-gray-700 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400 ml-1">Email</label>
                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full bg-black/50 border border-gray-700 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400 ml-1">Message</label>
                            <textarea
                                rows={4}
                                placeholder="Tell us about your business..."
                                className="w-full bg-black/50 border border-gray-700 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary hover:bg-blue-600 text-white font-bold text-lg py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-primary/25 hover:-translate-y-1"
                        >
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
