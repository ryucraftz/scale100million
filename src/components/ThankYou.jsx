import React from 'react';
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

// Payment Screenshots - using glob as there are many
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

const ThankYou = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center p-4 md:p-8 font-satoshi overflow-hidden">
            {/* Sticky WhatsApp Button with full text */}
            <a
                href="https://chat.whatsapp.com/F0fnpGxFskILGBiU2PZh05?mode=ems_copy_t"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 px-6 py-6 bg-green-600 text-white rounded-full shadow-lg flex items-center space-x-2 transition-transform duration-300 hover:scale-105 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-green-500 whitespace-nowrap"
            >
                <FaWhatsapp className="h-6 w-6 flex-shrink-0" />
                <span className="font-bold">Join Our WhatsApp Community</span>
            </a>

            <div className="w-full max-w-2xl text-center">
                {/* Main Heading */}
                <div className="flex items-center justify-center mb-4">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-blue-600 whitespace-nowrap leading-tight drop-shadow-md">
                        Thank You – Your Call is Booked!
                    </h1>
                </div>

                {/* Subheading */}
                <p className="text-gray-500 text-lg md:text-xl leading-relaxed mb-8 mt-6 font-medium">
                    Congratulations 🎉 — you’ve successfully applied for your exclusive 1:1 Business Strategy Call with <span className="font-bold text-purple-700">Team Scale100Million.com</span>.
                </p>

                {/* "Please check your email" Box */}
                <div className="bg-gray-50 p-4 rounded-md mb-8 border-l-4 border-gray-200">
                    <p className="text-sm font-semibold text-gray-700 mb-1">
                        Please check your email & WhatsApp for confirmation and reminders about your scheduled call.
                    </p>
                </div>
            </div>

            <div className="w-full flex flex-col items-center space-y-8">
                {/* Video Section - Full Width Mobile, Medium Desktop */}
                <div className="w-full flex justify-center">
                    <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[60%] overflow-hidden 
              sm:rounded-xl sm:shadow-lg sm:mx-auto">
                        {/* Mobile: taller ratio, Desktop: 16:9 */}
                        <div className="relative pb-[70%] sm:pb-[56.25%]">
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src="https://player.vimeo.com/video/1122445994"
                                title="Welcome Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>

                {/* Section with "Get INSANE Bonuses" Heading and Price Tag */}
                <div className="max-w-6xl mx-auto px-6 pt-4 text-center">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-600 drop-shadow-lg">
                            Get INSANE Bonuses
                        </span>
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-700 mb-2">
                        After 1:1 Business Strategy Call
                    </p>
                    <p className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 px-4 py-2 bg-white text-gray-500 rounded-full inline-block whitespace-nowrap">
                        ( Previously Sold For ₹24,997 )
                    </p>
                </div>

                {/* Bonus Cards Section */}
                <div className="w-full max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
                    {bonusesData.map((bonus, index) => (
                        <div
                            key={bonus.id}
                            className={`flex justify-center w-full ${index === bonusesData.length - 1 && bonusesData.length % 2 !== 0
                                ? 'sm:col-span-2'
                                : ''
                                }`}
                        >
                            <BonusCard bonus={bonus} />
                        </div>
                    ))}
                </div>

                {/* Social Community Section */}
                <div className="w-full max-w-4xl mx-auto mt-20 text-center px-4">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-gray-900">
                        Join Our Communities
                    </h2>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <a
                            href="https://t.me/+SSG0wArwUcQyYTc1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-bold text-lg shadow-lg transition-transform hover:scale-105"
                        >
                            <FaTelegram className="text-2xl" />
                            Join Telegram Community
                        </a>

                        <div className="flex gap-4">
                            <a
                                href="https://www.youtube.com/@scale100million-yt"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg transition-transform hover:scale-105"
                                title="Subscribe on YouTube"
                            >
                                <FaYoutube className="text-2xl" />
                            </a>
                            <a
                                href="https://www.instagram.com/scale100million/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 bg-pink-600 hover:bg-pink-700 text-white rounded-full shadow-lg transition-transform hover:scale-105"
                                title="Follow on Instagram"
                            >
                                <FaInstagram className="text-2xl" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Testimonials Section (Videos) */}
                <div className="w-full max-w-6xl mx-auto mt-20 px-4">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-12 text-center text-gray-900">
                        What Our Clients Say
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[testimonial1, testimonial2, testimonial3, testimonial4, testimonial5, testimonial6].map((video, index) => (
                            <div key={index} className="bg-black rounded-xl overflow-hidden shadow-lg aspect-[9/16]">
                                <video
                                    src={video}
                                    controls
                                    className="w-full h-full object-cover"
                                    preload="metadata"
                                >
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Payment Proof Section */}
                <div className="w-full max-w-6xl mx-auto mt-20 px-4">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-12 text-center text-gray-900">
                        Real Results
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {Object.values(paymentScreenshots).map((img, index) => {
                            const src = img.default || img;
                            return (
                                <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                                    <img
                                        src={src}
                                        alt={`Payment Proof ${index + 1}`}
                                        className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
                                        loading="lazy"
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Enhanced "Next Step" Section */}
                <div className="mt-16 mb-16 text-center max-w-2xl mx-auto p-6 bg-gray-50 rounded-xl shadow-lg border border-gray-200">
                    <h3 className="text-2xl sm:text-3xl font-bold leading-tight mb-6">
                        <span className="text-gray-900">
                            🚀 Next Step: <span className="text-blue-600">Join Our VIP Community</span>
                        </span>
                    </h3>

                    <ul className="text-base sm:text-lg text-gray-700 space-y-4 text-left mx-auto max-w-md mb-8">
                        <li className="flex items-start">
                            <CheckCircle2 className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                            <span>
                                <span className="font-semibold text-gray-800">Free guidance</span> to grow your business with AI.
                            </span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle2 className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                            <span>
                                Access to <span className="font-semibold text-gray-800">insights & tools</span> we don’t share publicly.
                            </span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle2 className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                            <span>
                                A network of <span className="font-semibold text-gray-800">ambitious founders</span> scaling to 7–8 figures.
                            </span>
                        </li>
                    </ul>

                    <p className="text-lg sm:text-xl font-bold text-gray-700 mt-8 mb-6">
                        Join the community now to unlock these benefits instantly.
                    </p>

                    <a
                        href="https://chat.whatsapp.com/F0fnpGxFskILGBiU2PZh05?mode=ems_copy_t"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 mb-10 lg:mt-0 inline-flex items-center justify-center px-4 md:px-10 py-5 text-lg md:text-xl font-bold rounded-full shadow-xl text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 animate-pop-in whitespace-nowrap"
                    >
                        <FaWhatsapp className="mr-3 h-7 w-7" />
                        Join Our WhatsApp Group
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ThankYou;
