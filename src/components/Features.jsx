import { motion } from "framer-motion";
import { 
  Shield, 
  Users, 
  Headphones, 
  BarChart3, 
  TrendingUp, 
  Globe 
} from "lucide-react";
import Benefits from "./Benefits";

export default function Features() {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-green-400" />,
      title: "Secure & Reliable",
      desc:"Experience lightning-fast performance with top-notch protection for your data.",
    },
    {
      icon: <Users className="w-6 h-6 text-green-400" />,
      title: "User-Friendly Design",
      desc: "A simple and intuitive interface that makes navigation seamless.",
    },
    {
      icon: <Headphones className="w-6 h-6 text-green-400" />,
      title: "24/7 Expert Support",
      desc: "Our support team is always available to assist you anytime, anywhere.",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-green-400" />,
      title: "AI-Powered Analytics",
      desc: "Track performance, gain insights, and make smarter decisions with data-driven reports.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-green-400" />,
      title: "High-Conversion Marketing",
      desc: "Boost sales with optimized campaigns designed to maximize ROI and customer engagement.",
    },
    {
      icon: <Globe className="w-6 h-6 text-green-400" />,
      title: "Worldwide Reach",
      desc: "Expand your business across borders with targeted marketing campaigns worldwide.",
    },
  ];

  return (
    <>
      <motion.section
      id="features"
        className="w-full bg-black py-20 px-6 md:px-16 text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* Section Header */}
        <div  className="max-w-6xl mx-auto text-center mb-16">
          <p className="text-green-400 uppercase tracking-wide font-medium">
            Features
          </p>
          <h2 className="mt-6 text-3xl md:text-4xl font-bold mb-4">
            Powerful solutions to grow and secure your business
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            From security and analytics to global marketing and support — 
            get enterprise-level solutions without the enterprise costs.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-start bg-gradient-to-r from-gray-900 via-black to-gray-900 
                p-6 rounded-2xl shadow-lg border border-transparent 
                hover:border-white hover:shadow-[0_0_50px_rgba(255,255,255,0.25)] 
                hover:ring-8 hover:ring-white hover:ring-opacity-10 
                transition-all duration-300 ease-in-out"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, transition: { duration: 0 } }}   
              whileTap={{ scale: 0.97 }}     
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
      
      {/* Benefits Section Below */}
      <Benefits />
    </>
  );
}
