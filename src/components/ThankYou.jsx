import React from 'react';
import { motion } from 'framer-motion';
import { FaTelegram, FaPaperPlane } from 'react-icons/fa6';
import { CheckCircle2 } from "lucide-react";
import BonusCard from './BonusCard';
import Marquee from './Marquee';

import bonus1 from '../assets/Bonuses1.png';
import bonus2 from '../assets/Bonuses2.png';
import bonus3 from '../assets/Bonuses3.png';
import bonus4 from '../assets/Bonuses4.png';
import bonus5 from '../assets/Bonuses5.png';
import bonus6 from '../assets/Bonuses6.png';
import bonus7 from '../assets/Bonuses7.png';

// Testimonials (Videos)
import testimonial1 from '../assets/testimonials/Aniket.mp4';
import testimonial2 from '../assets/testimonials/Ankit1.mp4';
import testimonial3 from '../assets/testimonials/Pranav.mp4';
import testimonial4 from '../assets/testimonials/Rushikesh.mp4';
import testimonial5 from '../assets/testimonials/Video-2.mp4';
import testimonial6 from '../assets/testimonials/sula.mp4';

// Payment Screenshots
const paymentScreenshots = import.meta.glob('../assets/payment screenshots/Result page Data/*.{png,jpg,jpeg,svg}', { eager: true });
const paymentImages = Object.values(paymentScreenshots).map(img => img.default || img);

const bonusesData = [
    {
        id: 1,
        title: "AI Automation Mastery Lectures",
        tag: "Bonus #1",
        description: "Get 10+ private recorded lectures where I walk you step-by-step through setting up AI automation for client acquisition, lead follow-ups, and business growth.\n No tech overwhelm. No random YouTube rabbit holes. Just a clear roadmap to mastering the exact AI tools we use daily to enroll 50+ high-ticket clients per month.",
        value: "₹12,000 Value",
        cardType: "card1",
        image: bonus1,
    },
    {
        id: 2,
        title: "1-Page Business Model Canvas",
        tag: "Bonus #2",
        description: "Design your entire service business in one simple page. Map your offer, clients, pricing, and funnels clearly—so you always know exactly what to do next to scale fast.",
        value: "₹7,000 Value",
        cardType: "card2",
        image: bonus2,
    },
    {
        id: 3,
        title: "Done-for-You AI Funnel Templates",
        tag: "Bonus #3",
        description: "Skip the trial-and-error. Plug in your business and start attracting leads instantly with ready-to-use AI-powered funnel templates that generate high-ticket prospects on autopilot.",
        value: "₹6,000 Value",
        cardType: "card3",
        image: bonus3,
    },
    {
        id: 4,
        title: "Lead Magnet & Outreach Swipe Files",
        tag: "Bonus #4",
        description: "Access proven scripts, emails, and messages to attract premium leads without cold-calling or guesswork. Just copy, paste, and watch your pipeline fill.",
        value: "₹5,000 Value",
        cardType: "card4",
        image: bonus4,
    },
    {
        id: 5,
        title: "AI-Powered Growth Tracker & Dashboard",
        tag: "Bonus #5",
        description: "Track clients, leads, and revenue with one dashboard. See what’s working, automate follow-ups, and scale confidently with data-driven insights.",
        value: "₹6,000 Value",
        cardType: "card5",
        image: bonus5,
    },
    {
        id: 6,
        title: "Private Community Access & Live Q&A Sessions",
        tag: "Bonus #6",
        description: "Join a community of ambitious service owners getting results with AI. Weekly Q&A sessions ensure you never get stuck and can implement strategies fast.",
        value: "₹6,299 Value",
        cardType: "card6",
        image: bonus6,
    },
    {
        id: 7,
        title: "High-Ticket Sales Mastery Script",
        tag: "Bonus #7",
        description: "Get the exact step-by-step sales script top 1% online business owners use to consistently close high-ticket clients and scale beyond 7 figures.\n No guessing, no trial-and-error—just plug in your offer and follow the proven system that turns calls into predictable revenue.",
        value: "₹7,000 Value",
        cardType: "card7",
        image: bonus7,
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ThankYou = () => {
    return (
        <div className="min-h-screen bg-black text-white font-satoshi overflow-hidden relative selection:bg-purple-500 selection:text-white pb-20">
            {/* Background Gradients (Reduced intensity) */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/15 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full"></div>
            </div>

            {/* Custom Sticky Telegram Button */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 100 }}
                className="fixed bottom-4 w-full z-50 flex justify-center px-4"
            >
                <a
                    href="https://t.me/+SSG0wArwUcQyYTc1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group bg-[#0088cc] text-white px-6 py-3 rounded-full shadow-[0_0_20px_rgba(0,136,204,0.5)] flex items-center gap-3 overflow-hidden border border-white/20 backdrop-blur-md hover:scale-105 transition-transform duration-300"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-all duration-700 ease-in-out"></div>
                    <FaTelegram className="text-2xl drop-shadow-md" />
                    <div className="flex flex-col items-start leading-tight">
                        <span className="text-[10px] font-semibold text-blue-100 uppercase tracking-widest">Limited Access</span>
                        <span className="text-base font-bold">Join VIP Telegram</span>
                    </div>
                    <div className="ml-2 w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_#4ade80]"></div>
                </a>
            </motion.div>

            <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-8 relative z-10 flex flex-col items-center">

                {/* Header Section (Compact) */}
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-8"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants} className="flex items-center justify-center mb-4">
                        <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-[0_2px_10px_rgba(168,85,247,0.5)]">
                            Thank You <br className="hidden md:block" /> Your Call is Booked!
                        </h1>
                    </motion.div>

                    <motion.p variants={itemVariants} className="text-gray-300 text-base md:text-xl leading-relaxed font-light mb-6">
                        Congratulations 🎉 — you’ve successfully applied for your exclusive 1:1 Business Strategy Call with <span className="font-bold text-white">Team Scale100Million.com</span>.
                    </motion.p>

                    <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10 mx-auto inline-block">
                        <p className="text-sm font-medium text-gray-200">
                            Please check your email & WhatsApp for confirmation.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Video Section (Compact) */}
                <motion.div
                    className="w-full max-w-4xl mx-auto mb-12"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(139,92,246,0.2)] border border-white/10 bg-black">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src="https://player.vimeo.com/video/1122445994"
                            title="Welcome Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </motion.div>

                {/* Payment Proof Section (Marquee) - Reduced spacing */}
                <div className="w-full mb-16">
                    <motion.div
                        className="text-center mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl md:text-4xl font-bold text-white mb-1">Real Results</h2>
                        <p className="text-gray-400 text-sm">See the wins our community is getting daily</p>
                    </motion.div>

                    <div className="relative w-screen left-1/2 -translate-x-1/2">
                        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none"></div>
                        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none"></div>

                        <Marquee speed={50}>
                            {paymentImages.map((src, index) => (
                                <div key={index} className="w-48 md:w-64 h-auto flex-shrink-0 bg-[#111] border border-gray-800 rounded-lg overflow-hidden shadow-md p-1.5 hover:border-purple-500/50 transition-colors">
                                    <img
                                        src={src}
                                        alt={`Result ${index}`}
                                        className="w-full h-full object-contain rounded-md"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </Marquee>
                    </div>
                </div>

                {/* Bonuses Heading (Compact) */}
                <motion.div
                    className="text-center mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-2">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 drop-shadow-[0_2px_15px_rgba(234,179,8,0.4)]">
                            Get INSANE Bonuses
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl font-semibold text-gray-400">
                        After 1:1 Business Strategy Call <span className="text-white bg-white/10 px-2 py-0.5 rounded ml-2 border border-white/10 whitespace-nowrap text-sm">(Value: ₹24,997)</span>
                    </p>
                </motion.div>

                {/* Bonus Cards Grid (Compact Spacing) */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-6xl mx-auto mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                >
                    {bonusesData.map((bonus, index) => (
                        <motion.div
                            key={bonus.id}
                            variants={itemVariants}
                            className={index === bonusesData.length - 1 && bonusesData.length % 2 !== 0 ? 'md:col-span-2 md:w-1/2 md:mx-auto' : ''}
                        >
                            <BonusCard bonus={bonus} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Testimonials Section (Marquee Autoplay) */}
                <div className="w-full mb-12">
                    <motion.h2
                        className="text-2xl md:text-4xl font-bold mb-8 text-center text-white"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        What Our Clients Say
                    </motion.h2>

                    <div className="relative w-screen left-1/2 -translate-x-1/2">
                        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none"></div>
                        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none"></div>

                        <Marquee speed={40}>
                            {[testimonial1, testimonial2, testimonial3, testimonial4, testimonial5, testimonial6].map((video, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 w-64 md:w-72 aspect-[9/16] bg-[#111] rounded-xl overflow-hidden shadow-xl border border-gray-800 relative group"
                                >
                                    <video
                                        src={video}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                                    >
                                        Your browser does not support the video tag.
                                    </video>
                                    {/* Unmute Indication */}
                                    <div className="absolute bottom-3 right-3 bg-black/60 text-white text-[10px] px-1.5 py-0.5 rounded backdrop-blur">
                                        Muted
                                    </div>
                                </div>
                            ))}
                        </Marquee>
                    </div>
                    <p className="text-center text-gray-600 text-xs mt-3">Watch actual client results</p>
                </div>

                {/* Enhanced Next Step Section (Compact) */}
                <motion.div
                    className="w-full max-w-2xl mx-auto p-6 md:p-8 rounded-2xl bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-purple-500/30 text-center shadow-[0_0_40px_rgba(168,85,247,0.1)] mb-10 relative overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

                    <h3 className="text-2xl md:text-3xl font-bold mb-6">
                        🚀 Next Step: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Join Our VIP Community</span>
                    </h3>

                    <ul className="text-left space-y-3 max-w-sm mx-auto mb-8">
                        {[
                            "Free guidance to grow your business with AI.",
                            "Access to insights & tools we don’t share publicly.",
                            "A network of ambitious founders scaling to 7–8 figures."
                        ].map((item, i) => (
                            <li key={i} className="flex items-start text-gray-300 text-base">
                                <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span>{item.replace("Free guidance", "**Free guidance**").replace("insights & tools", "**insights & tools**").replace("ambitious founders", "**ambitious founders**").split("**").map((part, index) => index % 2 === 1 ? <span key={index} className="text-white font-semibold">{part}</span> : part)}</span>
                            </li>
                        ))}
                    </ul>

                    <motion.a
                        href="https://t.me/+SSG0wArwUcQyYTc1"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full shadow-xl text-white bg-[#0088cc] hover:bg-[#0077b5] transition-all"
                    >
                        <FaPaperPlane className="mr-2 h-5 w-5" />
                        Join Telegram Community
                    </motion.a>
                </motion.div>

            </div>
        </div>
    );
};

export default ThankYou;
