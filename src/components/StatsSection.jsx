import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function StatsSection() {
    return (
        <section className="py-20 bg-black text-white relative border-y border-white/10">
            <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <p className="text-gray-400 text-lg md:text-xl font-medium mb-2">From 2 College Boys</p>
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-16">
                        To a 50+ Member Team
                    </h2>

                    <div className="grid grid-cols-2 gap-y-12 gap-x-8 max-w-2xl mx-auto mb-16">
                        <div className="space-y-2">
                            <h3 className="text-4xl md:text-5xl font-bold">4.6M+</h3>
                            <p className="text-gray-500 font-medium">Youtube</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-4xl md:text-5xl font-bold">47k+</h3>
                            <p className="text-gray-500 font-medium">Learners</p>
                        </div>
                        <div className="col-span-2 space-y-2">
                            <h3 className="text-4xl md:text-5xl font-bold">1.1M+</h3>
                            <p className="text-gray-500 font-medium">Instagram</p>
                        </div>
                    </div>

                    <a
                        href="/join-team"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-400 hover:from-red-600 hover:to-red-500 text-white font-bold py-4 px-10 rounded-full shadow-[0_0_20px_rgba(239,68,68,0.4)] transition-all duration-300"
                    >
                        Join Our Team
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
