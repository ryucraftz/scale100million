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
                    const isAnyVisible = sectionElements.some(el => {
                        if (!el) return false;
                        const rect = el.getBoundingClientRect();
                        const triggerZone = window.innerHeight * 0.5;
                        return rect.top < triggerZone && rect.bottom > triggerZone;
                    });

                    if (!isAnyVisible) {
                        setIsVisible(false);
                    }
                }
            },
            {
                threshold: 0.2,
                rootMargin: "-20% 0px -20% 0px",
            }
        );

        sectionElements.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [sections]);

    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{
                opacity: isVisible ? 1 : 0,
                x: isVisible ? 0 : -50,
                pointerEvents: isVisible ? "auto" : "none"
            }}
            transition={{ duration: 0.5 }}
            // Fixed position, scaled for mobile
            className="fixed left-6 top-1/2 -translate-y-1/2 z-[55] flex items-center gap-0 scale-75 md:scale-100 origin-left"
        >
            {/* Geometric Shape Container - The "Button" */}
            <div className="relative flex items-center">
                {/* The Black Geometric Block with specific corner cut */}
                <motion.div
                    className="bg-black flex items-center justify-center shadow-2xl relative"
                    style={{
                        // Exact clip-path from reference
                        clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)",
                        width: "70px",
                        height: "70px",
                        aspectRatio: "1/1"
                    }}
                >
                    {/* Optional: Icon or Text inside if needed, but reference shows mostly solid or minimal */}
                    <div className="w-2 h-2 bg-white rounded-full opacity-0" />
                </motion.div>

                {/* The Connecting Line */}
                <motion.div
                    className="h-[2px] bg-black origin-left"
                    initial={{ width: 0 }}
                    animate={{ width: isVisible ? "60px" : 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    // Negative margin to connect to the shape
                    style={{ marginLeft: "0px" }}
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
