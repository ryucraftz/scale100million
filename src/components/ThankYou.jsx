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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ThankYou = () => {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-satoshi overflow-hidden relative selection:bg-blue-100 selection:text-blue-900 pb-48 md:pb-40">
            {/* Light Theme Background Gradients */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
                <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] bg-blue-100 blur-[100px] rounded-full opacity-60"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-100 blur-[120px] rounded-full opacity-60"></div>
            </div>

            {/* Custom Sticky Telegram Button - Optimized for Mobile */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 100 }}
                className="fixed bottom-4 md:bottom-6 w-full z-50 flex justify-center px-4 pointer-events-none"
            >
                <a
                    href="https://t.me/+SSG0wArwUcQyYTc1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pointer-events-auto relative group bg-gradient-to-r from-blue-600 to-blue-500 text-white w-full max-w-[90%] sm:max-w-sm md:w-auto px-4 py-2.5 md:px-6 md:py-3.5 rounded-full shadow-xl shadow-blue-200 flex items-center justify-center gap-2 md:gap-3 overflow-hidden border border-white/20 hover:scale-[1.02] active:scale-95 transition-all duration-300"
                >
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                    <FaTelegram className="text-xl md:text-2xl drop-shadow-sm" />
                    <div className="flex flex-col items-start leading-none">
                        <span className="hidden sm:block text-[10px] font-bold text-blue-100 uppercase tracking-widest mb-0.5">Exclusive Access</span>
                        <span className="text-base md:text-lg font-bold">Join VIP Telegram</span>
                    </div>
                    <div className="absolute top-0 right-0 p-2">
                        <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_#4ade80]"></div>
                    </div>
                </a>
            </motion.div>

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12 relative z-10 flex flex-col items-center">

                {/* Header Section */}
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-10 md:mb-12"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants} className="flex items-center justify-center mb-4 md:mb-6">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 leading-tight">
                            Thank You <br /> Your Call is Booked!
                        </h1>
                    </motion.div>

                    <motion.p variants={itemVariants} className="text-slate-600 text-base sm:text-lg md:text-xl leading-relaxed font-medium mb-6 md:mb-8 max-w-2xl mx-auto">
                        Congratulations 🎉 — you’ve successfully applied for your exclusive 1:1 Business Strategy Call with <span className="font-bold text-blue-700">Team Scale100Million.com</span>.
                    </motion.p>

                    <motion.div variants={itemVariants} className="bg-white/80 backdrop-blur-sm px-5 py-3 rounded-lg border border-blue-100 shadow-sm mx-auto inline-block">
                        <p className="text-sm font-semibold text-slate-700">
                            📧 Please check your email & WhatsApp for confirmation.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Video Section */}
                <motion.div
                    className="w-full max-w-4xl mx-auto mb-12 md:mb-16"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="relative aspect-video rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 border-4 border-white bg-slate-900">
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

                {/* Testimonials Section (Marquee Autoplay) */}
                <div className="w-full mb-16 md:mb-20">
                    <motion.h2
                        className="text-2xl md:text-4xl font-bold mb-8 md:mb-10 text-center text-slate-900"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        What Our Clients Say
                    </motion.h2>

                    <div className="relative w-screen left-1/2 -translate-x-1/2">
                        <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-slate-50 to-transparent z-20 pointer-events-none"></div>
                        <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-slate-50 to-transparent z-20 pointer-events-none"></div>

                        <Marquee speed={40}>
                            {[testimonial5, testimonial1, testimonial2, testimonial3, testimonial4].map((video, index) => (
                                <div
                                    key={index}
                                    className={`flex-shrink-0 w-60 sm:w-72 md:w-80 aspect-[9/16] bg-black rounded-xl overflow-hidden shadow-xl border-4 border-white relative group ${index === 0 ? 'ml-12 md:ml-0' : ''}`}
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
                                    <div className="absolute bottom-3 right-3 bg-black/60 text-white text-[10px] px-2 py-1 rounded-full backdrop-blur-md font-medium">
                                        🔈 Muted
                                    </div>
                                </div>
                            ))}
                        </Marquee>
                    </div>
                    <p className="text-center text-slate-400 text-xs md:text-sm mt-4 font-medium">Swipe to see more success stories →</p>
                </div>

                {/* Payment Proof Section (Marquee) */}
                <div className="w-full mb-16 md:mb-20">
                    <motion.div
                        className="text-center mb-6 md:mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-2">Real Results</h2>
                        <p className="text-slate-500 text-sm md:text-base">See the wins our community is getting daily</p>
                    </motion.div>

                    <div className="relative w-screen left-1/2 -translate-x-1/2">
                        <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-slate-50 to-transparent z-20 pointer-events-none"></div>
                        <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-slate-50 to-transparent z-20 pointer-events-none"></div>

                        <Marquee speed={50}>
                            {paymentImages.map((src, index) => (
                                <div key={index} className="w-40 sm:w-56 md:w-72 aspect-[3/4] flex-shrink-0 bg-white border border-slate-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                                    <img
                                        src={src}
                                        alt={`Result ${index}`}
                                        className="w-full h-full object-contain"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </Marquee>
                    </div>
                </div>

                {/* Bonuses Heading */}
                <motion.div
                    className="text-center mb-10 md:mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-block px-4 py-1.5 rounded-full bg-yellow-50 border border-yellow-200 mb-3">
                        <span className="text-yellow-700 font-bold text-xs uppercase tracking-wider">Limited Time Offer</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-3">
                        Get INSANE Bonuses
                    </h2>
                    <p className="text-lg md:text-xl font-medium text-slate-500">
                        Included with your call <span className="text-slate-400 text-sm ml-1 line-through decoration-red-400">₹24,997</span> <span className="text-green-600 font-bold ml-1">FREE</span>
                    </p>
                </motion.div>

                {/* Bonus Cards Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-6xl mx-auto mb-16 md:mb-24"
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



                {/* Next Step Section (Compact Light Card) */}
                <motion.div
                    className="w-full max-w-2xl mx-auto p-6 md:p-10 rounded-3xl bg-white border border-slate-100 text-center shadow-2xl shadow-blue-50 mb-12 relative overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-400 to-purple-500"></div>

                    <h3 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900">
                        🚀 Next Step: <span className="text-blue-600">Join Our VIP Community</span>
                    </h3>

                    <ul className="text-left space-y-3 max-w-sm mx-auto mb-8">
                        {[
                            "Free guidance to grow your business with AI.",
                            "Access to insights & tools we don’t share publicly.",
                            "A network of ambitious founders scaling to 7–8 figures."
                        ].map((item, i) => (
                            <li key={i} className="flex items-start text-slate-600 text-sm md:text-base">
                                <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                <span>{item.replace("Free guidance", "**Free guidance**").replace("insights & tools", "**insights & tools**").replace("ambitious founders", "**ambitious founders**").split("**").map((part, index) => index % 2 === 1 ? <span key={index} className="text-slate-900 font-bold">{part}</span> : part)}</span>
                            </li>
                        ))}
                    </ul>

                    <motion.a
                        href="https://t.me/+SSG0wArwUcQyYTc1"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full shadow-lg shadow-blue-200 text-white bg-blue-600 hover:bg-blue-700 transition-all w-full sm:w-auto"
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
