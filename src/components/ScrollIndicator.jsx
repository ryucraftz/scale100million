import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollIndicator() {
    const [activeSection, setActiveSection] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    // Track from 'Partner' (below Hero) to 'Media'
    const sections = [
        { id: "partner", number: "01" },
        { id: "what-we-do", number: "02" },
        { id: "why-built", number: "03" },
        { id: "our-goal", number: "04" },
        { id: "media", number: "05" },
    ];

    useEffect(() => {
        const sectionElements = sections.map((section) =>
            document.getElementById(section.id)
        );

        const observer = new IntersectionObserver(
            (entries) => {
                const intersectingEntry = entries.find(entry => entry.isIntersecting);

                if (intersectingEntry) {
                    const index = sections.findIndex(
                        (section) => section.id === intersectingEntry.target.id
                    );
                    if (index !== -1) {
                        setActiveSection(index);
                        setIsVisible(true);
                    }
                } else {
                    // Logic to hide if out of range (e.g. Hero or Footer)
                    // We check if we are in the "active zone" roughly
                    const isAnyVisible = sectionElements.some(el => {
                        if (!el) return false;
                        const rect = el.getBoundingClientRect();
                        const triggerZone = window.innerHeight * 0.5;
                        // Allow some buffer
                        return rect.top < window.innerHeight && rect.bottom > 0;
                    });

                    if (!isAnyVisible) {
                        setIsVisible(false);
                    }
                }
            },
            {
                threshold: 0.1, // Increased sensitivity
                rootMargin: "-10% 0px -10% 0px",
            }
        );

        sectionElements.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [sections]);

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{
                opacity: isVisible ? 1 : 0,
                x: isVisible ? 0 : -20,
                pointerEvents: isVisible ? "auto" : "none"
            }}
            transition={{ duration: 0.4 }}
            // Fixed position, scaled small
            className="fixed left-6 top-32 z-[55] flex items-center gap-3 origin-left"
        >
            {/* Container for Shape + Line + Number */}
            <div className="flex items-center">

                {/* The Geometric Shape - Small & Sleek */}
                <motion.div
                    className="bg-black shadow-lg"
                    style={{
                        // Polygon matching the 'trapezoid/knife' look: flat top, angled right side, flat bottom
                        clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
                        width: "40px",
                        height: "8px", // Very sleek/thin height
                    }}
                />

                {/* The Connecting Line - Thin */}
                <motion.div
                    className="h-[1px] bg-black origin-left"
                    initial={{ width: 0 }}
                    animate={{ width: isVisible ? "40px" : 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    style={{ marginLeft: "-5px" }} // Connect
                />

                {/* The Number - Small */}
                <div className="ml-3 flex flex-col items-start overflow-hidden h-6 justify-center">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={activeSection}
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="text-lg font-bold text-black tracking-widest font-mono"
                        >
                            {sections[activeSection].number}
                        </motion.span>
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
}
