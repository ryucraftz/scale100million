import { motion } from "framer-motion";
import serviceImg1 from "../assets/ImageService1.jpg";
import serviceImg2 from "../assets/FoundersImg.jpg";
import { Link } from "react-router-dom";

export default function Services() {
    return (
        <>
            {/* Section 1 - Text Left, Image Right */}
            <motion.section
                id="services"
                className="w-full bg-black pt-6 pb-16 px-6 md:px-16"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
            >
                <div className="max-w-6xl mx-auto bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white rounded-2xl p-12 flex flex-col md:flex-row items-center gap-10 shadow-lg">

                    {/* Left Text */}
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Done-for-you services For Fat Loss Coaches to scale beyond 8 Figure/year
                        </h2>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            Everything you need to grow — done for you: Marketing, Sales, Funnels, Ads & Coaching Systems.
                            One team. One system. One roof.
                        </p>
                        <Link
                            to="/doneforyou"
                            className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-full shadow-md hover:bg-gray-200 transition"
                        >
                            Get Started →
                        </Link>
                    </div>

                    {/* Right Image */}
                    <div className="flex-1 flex justify-center">
                        <img
                            src={serviceImg1}
                            alt="Service"
                            className="w-full max-w-md h-auto object-cover rounded-xl"
                        />
                    </div>
                </div>
            </motion.section>

            {/* Section 2 - Image Left, Text Right */}
            <motion.section
                className="w-full bg-black py-16 px-6 md:px-16"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
            >
                <div className="max-w-6xl mx-auto bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white rounded-2xl p-12 flex flex-col md:flex-row-reverse items-center gap-10 shadow-lg">

                    {/* Right Text */}
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Mentorship program To start online service business
                        </h2>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            "Founder Club Mentorship is a step-by-step “Zero to Hero Success System” to grow your service business to 8 Figure income. Inside the program, you’ll get practical video training, weekly mentorship calls, and a supportive community to help you scale."
                        </p>
                        <a
                            href="https://scale100million.com/founders-club/"
                            className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-full shadow-md hover:bg-gray-200 transition"
                        >
                            Learn More →
                        </a>
                    </div>

                    {/* Left Image */}
                    <div className="flex-1 flex justify-center">
                        <img
                            src={serviceImg2}
                            alt="Service"
                            className="w-80 max-w-md h-auto object-cover rounded-xl"
                        />
                    </div>
                </div>
            </motion.section>
        </>
    );
}
