import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";

const bonuses = [
    {
        title: "Bonus #1: High-Ticket Lead Gen Framework",
        description: "Learn how to consistently attract $2,000+ clients without running expensive ads or complex funnels. We’ll show you the exact system we use to book 15+ high-quality meetings every single week.",
        icon: "🚀"
    },
    {
        title: "Bonus #2: AI Toolkit Mastery Course",
        description: "No tech overwhelm. No random YouTube rabbit holes. Just a clear roadmap to mastering the exact AI tools we use daily to enroll 50+ high-ticket clients per month.",
        icon: "🤖"
    },
    {
        title: "Bonus #3: Done-for-You AI Funnel Templates",
        description: "Skip the trial-and-error. Plug in your business and start attracting leads instantly with ready-to-use AI-powered funnel templates that generate high-ticket prospects on autopilot.",
        icon: "📊"
    },
    {
        title: "Bonus #4: Lead Magnet & Outreach Swipe Files",
        description: "Access proven scripts, emails, and messages to attract premium leads without cold-calling or guesswork. Just copy, paste, and watch your pipeline fill.",
        icon: "📝"
    }
];

export default function ThankYou() {
    return (
        <section className="w-full min-h-screen bg-black text-white py-20 px-6 md:px-20 font-sans relative overflow-hidden">
            <div className="max-w-6xl mx-auto text-center relative z-10">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-6 py-2">
                        Thank You – Your Call is Booked!
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Congratulations 🎉 — you’ve successfully applied for your exclusive 1:1 Business Strategy Call with Team Scale100Million.com.
                    </p>
                    <p className="mt-4 text-purple-400 font-medium">
                        Please check your email & WhatsApp for confirmation and reminders about your scheduled call.
                    </p>
                </motion.div>

                {/* Video Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full max-w-4xl mx-auto aspect-video bg-gray-900 rounded-2xl border border-gray-700 shadow-[0_0_30px_rgba(168,85,247,0.3)] flex items-center justify-center mb-16 relative overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-cyan-900/20 opacity-50 group-hover:opacity-100 transition duration-500"></div>
                    <p className="text-gray-400 text-lg font-light relative z-10">
                        [ Watch this short video before your call ]
                        <br />
                        <span className="text-sm opacity-70">(Video Placeholder)</span>
                    </p>
                </motion.div>

                {/* Bonuses Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-2 uppercase tracking-wide drop-shadow-[0_2px_10px_rgba(250,204,21,0.4)]">
                        Get INSANE Bonuses
                    </h2>
                    <p className="text-xl text-yellow-100/80">
                        After 1:1 Business Strategy Call (Previously Sold For ₹24,997)
                    </p>
                </motion.div>

                {/* Bonuses Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 text-left">
                    {bonuses.map((bonus, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                            className="bg-[#111] border border-gray-800 p-8 rounded-xl hover:border-purple-500/50 hover:bg-[#1a1a1a] transition duration-300 group"
                        >
                            <div className="text-4xl mb-4 bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-purple-900/30 transition-colors">
                                {bonus.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                                {bonus.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                {bonus.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>

            {/* Floating WhatsApp CTA */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.5, type: "spring", stiffness: 100 }}
                className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-sm px-4"
            >
                <a
                    href="https://chat.whatsapp.com/F0fnpGxFskILGBiU2PZh05"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-all transform hover:scale-105"
                >
                    <FaWhatsapp className="text-2xl" />
                    Join Our WhatsApp Community
                </a>
            </motion.div>

            {/* Background Effect */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-900/10 blur-[120px] rounded-full"></div>
            </div>
        </section>
    );
}
