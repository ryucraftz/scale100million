import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const Counter = ({ end, suffix, decimals = 0 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            let startTime;
            const duration = 2000;
            const step = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / duration, 1);
                // Ease out quart
                const ease = 1 - Math.pow(1 - progress, 4);
                setCount(ease * end);
                if (progress < 1) {
                    requestAnimationFrame(step);
                }
            };
            requestAnimationFrame(step);
        }
    }, [isInView, end]);

    return <span ref={ref}>{count.toFixed(decimals)}{suffix}</span>;
};

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
                            <h3 className="text-4xl md:text-5xl font-bold flex justify-center">
                                <Counter end={4.6} suffix="M+" decimals={1} />
                            </h3>
                            <p className="text-gray-500 font-medium">Youtube</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-4xl md:text-5xl font-bold flex justify-center">
                                <Counter end={47} suffix="k+" decimals={0} />
                            </h3>
                            <p className="text-gray-500 font-medium">Learners</p>
                        </div>
                        <div className="col-span-2 space-y-2">
                            <h3 className="text-4xl md:text-5xl font-bold flex justify-center">
                                <Counter end={1.1} suffix="M+" decimals={1} />
                            </h3>
                            <p className="text-gray-500 font-medium">Instagram</p>
                        </div>
                    </div>

                    <a
                        href="/join-team"
                        className="inline-flex items-center gap-2 bg-primary hover:bg-blue-600 text-white font-bold py-4 px-10 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300 hover:scale-105"
                    >
                        Join Our Team <ArrowRight size={20} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
