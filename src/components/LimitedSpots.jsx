import { motion } from "framer-motion";

export default function LimitedSpots() {
    return (
        <div className="relative flex items-center justify-center py-20 px-6 bg-black">
            {/* Card with OUTSIDE faded glow */}
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative z-10 max-w-3xl text-center bg-black border border-gray-700 rounded-2xl p-10 shadow-lg group overflow-visible"
            >
                {/* Faded white glow like screenshot */}
                <div className="absolute -inset-6 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition duration-700">
                    <div className="w-full h-full rounded-3xl bg-[radial-gradient(circle,rgba(255,255,255,0.15),transparent_70%)]"></div>
                </div>

                {/* Urgency headline */}
                <motion.h2
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-3xl md:text-4xl font-extrabold text-white relative z-10"
                >
                    ⚠️ Only 3 Coaches Per Month
                </motion.h2>

                {/* Description */}
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="mt-6 text-lg text-gray-300 leading-relaxed relative z-10"
                >
                    To keep our quality high, we work with only{" "}
                    <span className="font-semibold text-blue-400">3 coaches/month</span>.
                    If you’re reading this, there may be just{" "}
                    <span className="font-semibold text-blue-400">1–2 spots left.</span>
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="mt-10 relative z-10"
                >
                    <p className="text-xl text-gray-300 mb-6">
                        Ready to finally scale without doing it all yourself? <br />
                        <span className="text-white font-bold">
                            Let’s build your full acquisition machine in 15 days.
                        </span>
                    </p>
                    <button
                        className="relative px-8 py-4 text-lg font-semibold text-white rounded-xl shadow-md 
             bg-blue-600 hover:bg-blue-700 hover:scale-105 transition duration-300 overflow-hidden"
                    >
                        🚀 Apply Now
                        <span className="animate-cross-line"></span>
                    </button>

                </motion.div>
            </motion.div>
        </div>
    );
}
