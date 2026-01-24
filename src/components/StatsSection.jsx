import { motion } from "framer-motion";

const stats = [
    { label: "Revenue Generated", value: "$3.8M+" },
    { label: "Active Clients", value: "250+" },
    { label: "Success Rate", value: "94%" },
    { label: "Experience", value: "5+ Years" },
];

export default function StatsSection() {
    return (
        <section className="py-12 md:py-20 bg-black border-y border-white/10">
            <div className="max-w-[1400px] mx-auto px-4 md:px-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <h3 className="text-3xl md:text-5xl font-black text-white mb-2">
                                {stat.value}
                            </h3>
                            <p className="text-gray-500 font-medium tracking-wide uppercase text-xs md:text-sm">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
