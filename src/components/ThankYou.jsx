import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { CheckCircle2 } from "lucide-react";
import BonusCard from './BonusCard';

const bonusesData = [
    {
        id: 1,
        title: "AI Automation Mastery Lectures",
        tag: "Bonus #1",
        description: "Get 10+ private recorded lectures where I walk you step-by-step through setting up AI automation for client acquisition, lead follow-ups, and business growth.\n No tech overwhelm. No random YouTube rabbit holes. Just a clear roadmap to mastering the exact AI tools we use daily to enroll 50+ high-ticket clients per month.",
        value: "₹12,000 Value",
        cardType: "card1",
    },
    {
        id: 2,
        title: "1-Page Business Model Canvas",
        tag: "Bonus #2",
        description: "Design your entire service business in one simple page. Map your offer, clients, pricing, and funnels clearly—so you always know exactly what to do next to scale fast.",
        value: "₹7,000 Value",
        cardType: "card2",
    },
    {
        id: 3,
        title: "Done-for-You AI Funnel Templates",
        tag: "Bonus #3",
        description: "Skip the trial-and-error. Plug in your business and start attracting leads instantly with ready-to-use AI-powered funnel templates that generate high-ticket prospects on autopilot.",
        value: "₹6,000 Value",
        cardType: "card3",
    },
    {
        id: 4,
        title: "Lead Magnet & Outreach Swipe Files",
        tag: "Bonus #4",
        description: "Access proven scripts, emails, and messages to attract premium leads without cold-calling or guesswork. Just copy, paste, and watch your pipeline fill.",
        value: "₹5,000 Value",
        cardType: "card4",
    },
    {
        id: 5,
        title: "AI-Powered Growth Tracker & Dashboard",
        tag: "Bonus #5",
        description: "Track clients, leads, and revenue with one dashboard. See what’s working, automate follow-ups, and scale confidently with data-driven insights.",
        value: "₹6,000 Value",
        cardType: "card5",
    },
    {
        id: 6,
        title: "Private Community Access & Live Q&A Sessions",
        tag: "Bonus #6",
        description: "Join a community of ambitious service owners getting results with AI. Weekly Q&A sessions ensure you never get stuck and can implement strategies fast.",
        value: "₹6,299 Value",
        cardType: "card6",
    },
    {
        id: 7,
        title: "High-Ticket Sales Mastery Script",
        tag: "Bonus #7",
        description: "Get the exact step-by-step sales script top 1% online business owners use to consistently close high-ticket clients and scale beyond 7 figures.\n No guessing, no trial-and-error—just plug in your offer and follow the proven system that turns calls into predictable revenue.",
        value: "₹7,000 Value",
        cardType: "card7",
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
