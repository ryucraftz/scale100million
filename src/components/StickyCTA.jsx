import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function StickyCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling 500px (past hero usually)
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="fixed bottom-6 left-4 right-4 z-50 md:hidden"
                >
                    <a
                        href="https://nas.io/scale100million"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between w-full p-1.5 pl-5 bg-black/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl"
                    >
                        <span className="text-white font-bold text-sm">
                            Scale to 8 Figures
                        </span>
                        <span className="flex items-center gap-2 bg-primary text-white text-sm font-bold px-4 py-2.5 rounded-full">
                            Join Now <ArrowRight size={16} />
                        </span>
                    </a>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
