import { motion } from "framer-motion";

export default function WhyCoachesSection() {
    const items = [
        {
            title: "Done-for-you System",
            desc: "We build everything so you don’t have to.",
            img: "https://img.icons8.com/ios-filled/100/ffffff/workflow.png",
        },
        {
            title: "Qualified Sales Calls",
            desc: "You get booked calls on autopilot with ideal clients.",
            img: "https://img.icons8.com/ios-filled/100/ffffff/phone.png",
        },
        {
            title: "Focus on Closing",
            desc: "You just show up, close, and scale with ease.",
            img: "https://img.icons8.com/ios-filled/100/ffffff/money-bag.png",
        },
        {
            title: "Zero Stress",
            desc: "No tech headaches, no ad learning curve, no worries.",
            img: "https://img.icons8.com/ios-filled/100/ffffff/happy.png",
        },
        {
            title: "Fair Pricing",
            desc: "Just $4K setup → then we win only when you win.",
            img: "https://img.icons8.com/ios-filled/100/ffffff/handshake.png",
        },
        {
            title: "Proven Results",
            desc: "Clients consistently see rapid growth within weeks.",
            img: "https://img.icons8.com/ios-filled/100/ffffff/rocket.png",
        },
    ];

    return (
        <section className="relative w-full bg-black py-20">
            <div className="max-w-6xl mx-auto px-6 text-center">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl font-extrabold text-white mb-12"
                >
                    Why <span className="text-green-400">Coaches</span> Choose Us !
                </motion.h2>

                {/* Cards Grid */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.7, delay: i * 0.2 }}
                            whileHover={{ scale: 1.05, rotate: [0, 1, -1, 0] }}
                            className="relative rounded-2xl bg-white/10 backdrop-blur-md p-6 border border-white/20 shadow-lg cursor-pointer group"
                        >
                            {/* Image/Icon */}
                            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500/60 to-pink-500/60">
                                <img src={item.img} alt={item.title} className="w-10 h-10" />
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-300 text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
