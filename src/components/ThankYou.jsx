import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaTelegram, FaYoutube, FaInstagram } from 'react-icons/fa6';
import { CheckCircle2 } from "lucide-react";
import BonusCard from './BonusCard';

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
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ThankYou = () => {
    return (
        <div className="min-h-screen bg-black text-white font-satoshi overflow-hidden relative selection:bg-purple-500 selection:text-white">
            {/* Background Gradients */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 blur-[150px] rounded-full"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/10 blur-[150px] rounded-full"></div>
            </div>

            {/* Sticky WhatsApp Button */}
            <motion.a
                href="https://chat.whatsapp.com/F0fnpGxFskILGBiU2PZh05?mode=ems_copy_t"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 100 }}
                className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 px-6 py-4 bg-[#25D366] text-white rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] flex items-center space-x-3 transition-all duration-300 hover:scale-105 hover:bg-[#20bd5a] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] whitespace-nowrap border border-white/10 backdrop-blur-sm"
            >
                <FaWhatsapp className="h-6 w-6 flex-shrink-0" />
                <span className="font-bold tracking-wide">Join Our WhatsApp Community</span>
            </motion.a>

            <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16 relative z-10 flex flex-col items-center">

                {/* Header Section */}
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-12"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants} className="flex items-center justify-center mb-6">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-[0_2px_10px_rgba(168,85,247,0.5)]">
                            Thank You <br className="hidden md:block" /> Your Call is Booked!
                        </h1>
                    </motion.div>

                    <motion.p variants={itemVariants} className="text-gray-300 text-lg md:text-2xl leading-relaxed font-light">
                        Congratulations 🎉 — you’ve successfully applied for your exclusive 1:1 Business Strategy Call with <span className="font-bold text-white">Team Scale100Million.com</span>.
                    </motion.p>

                    <motion.div variants={itemVariants} className="mt-8 bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 mx-auto inline-block">
                        <p className="text-sm md:text-base font-medium text-gray-200">
                            Please check your email & WhatsApp for confirmation and reminders about your scheduled call.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Video Section */}
                <motion.div
                    className="w-full max-w-5xl mx-auto mb-20"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className="relative aspect-video rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(139,92,246,0.25)] border border-white/10 bg-black">
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

                {/* Bonuses Heading */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 drop-shadow-[0_2px_15px_rgba(234,179,8,0.4)]">
                            Get INSANE Bonuses
                        </span>
                    </h2>
                    <p className="text-xl md:text-2xl font-semibold text-gray-400">
                        After 1:1 Business Strategy Call <span className="text-white bg-white/10 px-3 py-1 rounded-lg ml-2 border border-white/10 whitespace-nowrap">(Previously Sold For ₹24,997)</span>
                    </p>
                </motion.div>

                {/* Bonus Cards Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto mb-24"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
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

                {/* Social Community Section */}
                <motion.div
                    className="w-full max-w-4xl mx-auto text-center mb-24"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-10 text-white">
                        Join Our Communities
                    </h2>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <a
                            href="https://t.me/+SSG0wArwUcQyYTc1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-8 py-4 bg-[#0088cc] hover:bg-[#0077b5] text-white rounded-xl font-bold text-lg shadow-[0_10px_30px_rgba(0,136,204,0.3)] transition-all transform hover:-translate-y-1"
                        >
                            <FaTelegram className="text-3xl" />
                            <span>Join Telegram Community</span>
                        </a>

                        <div className="flex gap-4">
                            <a
                                href="https://www.youtube.com/@scale100million-yt"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-5 bg-[#FF0000] hover:bg-[#cc0000] text-white rounded-xl shadow-[0_10px_30px_rgba(255,0,0,0.3)] transition-all transform hover:-translate-y-1"
                                title="Subscribe on YouTube"
                            >
                                <FaYoutube className="text-3xl" />
                            </a>
                            <a
                                href="https://www.instagram.com/scale100million/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-5 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white rounded-xl shadow-[0_10px_30px_rgba(220,39,67,0.3)] transition-all transform hover:-translate-y-1"
                                title="Follow on Instagram"
                            >
                                <FaInstagram className="text-3xl" />
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Testimonials Section */}
                <div className="w-full max-w-7xl mx-auto mb-24">
                    <motion.h2
                        className="text-3xl md:text-5xl font-bold mb-12 text-center text-white"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        What Our Clients Say
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[testimonial1, testimonial2, testimonial3, testimonial4, testimonial5, testimonial6].map((video, index) => (
                            <motion.div
                                key={index}
                                className="bg-[#111] rounded-2xl overflow-hidden shadow-2xl border border-gray-800 aspect-[9/16] group"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <video
                                    src={video}
                                    controls
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                    preload="metadata"
                                >
                                    Your browser does not support the video tag.
                                </video>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Payment Proof Section */}
                <div className="w-full max-w-7xl mx-auto mb-24">
                    <motion.h2
                        className="text-3xl md:text-5xl font-bold mb-12 text-center text-white"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        Real Results
                    </motion.h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {Object.values(paymentScreenshots).map((img, index) => {
                            const src = img.default || img;
                            return (
                                <motion.div
                                    key={index}
                                    className="rounded-xl overflow-hidden shadow-lg border border-gray-800 bg-[#111] hover:border-purple-500/50 transition-all duration-300"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    whileHover={{ scale: 1.05, zIndex: 10 }}
                                >
                                    <img
                                        src={src}
                                        alt={`Payment Proof ${index + 1}`}
                                        className="w-full h-auto object-contain"
                                        loading="lazy"
                                    />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Enhanced Next Step Section */}
                <motion.div
                    className="w-full max-w-3xl mx-auto p-8 md:p-12 rounded-3xl bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-purple-500/30 text-center shadow-[0_0_60px_rgba(168,85,247,0.15)] mb-20 relative overflow-hidden"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

                    <h3 className="text-3xl md:text-4xl font-bold mb-8">
                        🚀 Next Step: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Join Our VIP Community</span>
                    </h3>

                    <ul className="text-left space-y-4 max-w-lg mx-auto mb-10">
                        {[
                            "Free guidance to grow your business with AI.",
                            "Access to insights & tools we don’t share publicly.",
                            "A network of ambitious founders scaling to 7–8 figures."
                        ].map((item, i) => (
                            <li key={i} className="flex items-start text-gray-300 text-lg">
                                <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                <span>{item.replace("Free guidance", "**Free guidance**").replace("insights & tools", "**insights & tools**").replace("ambitious founders", "**ambitious founders**").split("**").map((part, index) => index % 2 === 1 ? <span key={index} className="text-white font-semibold">{part}</span> : part)}</span>
                            </li>
                        ))}
                    </ul>

                    <motion.a
                        href="https://chat.whatsapp.com/F0fnpGxFskILGBiU2PZh05?mode=ems_copy_t"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold rounded-full shadow-2xl text-white bg-[#25D366] hover:bg-[#1da851] transition-all"
                    >
                        <FaWhatsapp className="mr-3 h-7 w-7" />
                        Join Our WhatsApp Group
                    </motion.a>
                </motion.div>

            </div>
        </div>
    );
};

export default ThankYou;
