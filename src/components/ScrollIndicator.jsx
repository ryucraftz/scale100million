import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollIndicator() {
    const [activeSection, setActiveSection] = useState(0);

    const sections = [
        { id: "mentorship", number: "01" },
        { id: "partner", number: "02" },
        { id: "what-we-do", number: "03" },
        { id: "why-built", number: "04" },
        { id: "our-goal", number: "05" },
        { id: "media", number: "06" },
        { id: "join-team", number: "07" },
        { id: "growth-engine", number: "08" },
        { id: "contact", number: "09" },
    ];

    useEffect(() => {
        const sectionElements = sections.map((section) =>
            document.getElementById(section.id)
        );

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = sections.findIndex(
                            (section) => section.id === entry.target.id
                        );
                        if (index !== -1) {
                            setActiveSection(index);
                        }
                    }
                });
            },
            {
                threshold: 0.2, // Trigger when 20% of section is visible
                rootMargin: "-20% 0px -50% 0px", // Trigger slightly before center
            }
        );

        sectionElements.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="fixed left-0 top-1/2 -translate-y-1/2 z-[55] hidden lg:flex items-center gap-4 pl-0"
        >
            {/* Geometric Shape Container */}
            <div className="relative flex items-center">
                {/* The Black Geometric Block */}
                <motion.div
                    className="h-12 bg-black flex items-center pl-6 pr-8 shadow-2xl relative"
                    style={{
                        clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)", // Angled cut on right side
                        width: "140px"
                    }}
                >
                    <span className="text-white/50 text-xs font-bold tracking-[0.2em] uppercase">
                        Project
                    </span>
                </motion.div>

                {/* The Connecting Line */}
                <motion.div
                    className="h-[2px] bg-black origin-left"
                    initial={{ width: 0 }}
                    animate={{ width: "60px" }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    style={{ marginLeft: "-15px", zIndex: -1 }} // Tuck slightly behind
                />

                {/* The Number */}
                <div className="ml-4 flex flex-col items-start overflow-hidden h-12 justify-center">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={activeSection}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="text-4xl font-black text-black tracking-tighter"
                        >
                            {sections[activeSection].number}
                        </motion.span>
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
}
