import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollIndicator() {
    const [activeSection, setActiveSection] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    // Only track these 3 specific sections as requested
    const sections = [
        { id: "mentorship", number: "01" },
        { id: "partner", number: "02" },
        { id: "what-we-do", number: "03" },
    ];

    useEffect(() => {
        const sectionElements = sections.map((section) =>
            document.getElementById(section.id)
        );

        const observer = new IntersectionObserver(
            (entries) => {
                // Check if any tracked section is currently engaging
                // We use find because typically only one is 'intersecting' enough at a time with logic
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
                    // If NONE of our tracked sections are intersecting, we might be elsewhere (like Contact or Footer)
                    // We check if ANY tracked element is roughly on screen. 
                    // IntersectionObserver entries are only for *changed* intersections. 
                    // So we need a robust check.
                    // If 'intersectingEntry' is undefined, it means all *updates* in this batch are 'not intersecting'.
                    // However, one might STAY intersecting from before. 
                    // But usually IO fires for all changes. 

                    // A safer fallback to handle "scrolling away":
                    // If we receive an entry saying "isIntersecting: false", we check if any others are active.
                    // If activeSection is currently one of them, and it became non-intersecting, and no new one became intersecting...

                    // Let's rely on checking purely if any of the target elements are currently visible
                    const isAnyVisible = sectionElements.some(el => {
                        if (!el) return false;
                        const rect = el.getBoundingClientRect();
                        // Check if it overlaps with the "middle" of the viewport roughly
                        const triggerZone = window.innerHeight * 0.5;
                        return rect.top < triggerZone && rect.bottom > triggerZone;
                    });

                    if (!isAnyVisible) {
                        setIsVisible(false);
                    }
                }
            },
            {
                threshold: 0.2, // Trigger when 20% of section is visible
                rootMargin: "-20% 0px -20% 0px",
            }
        );

        sectionElements.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [sections]); // Added sections dependency though constant

    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{
                opacity: isVisible ? 1 : 0,
                x: isVisible ? 0 : -50,
                pointerEvents: isVisible ? "auto" : "none"
            }}
            transition={{ duration: 0.5 }}
            // Removed 'hidden' and added mobile scaling
            className="fixed left-0 top-1/2 -translate-y-1/2 z-[55] flex items-center gap-4 pl-0 scale-75 md:scale-100 origin-left"
        >
            {/* Geometric Shape Container */}
            <div className="relative flex items-center">
                {/* The Black Geometric Block */}
                <motion.div
                    className="h-12 bg-black flex items-center pl-6 pr-8 shadow-2xl relative"
                    style={{
                        clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)", // Angled cut on right side
                        width: "140px" // Fixed width
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
                    animate={{ width: isVisible ? "60px" : 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
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
