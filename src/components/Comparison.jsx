import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const services = [
  { name: "Strategy & Offer Creation", price: "$1,000–$2,000", included: true },
  { name: "Funnel Design + Copy + Tech", price: "$3,000–$6,000", included: true },
  { name: "VSL Script + Recording Help", price: "$800–$1,500", included: true },
  { name: "Meta Ad Copy & Creatives", price: "$1,000+", included: true },
  { name: "Sales Script + Objection Handling", price: "$1,000–$2,000", included: true },
  { name: "CRM, Email/SMS Automations", price: "$1,500+", included: true },
  { name: "Ads Launch + Optimization", price: "$1,000–$2,000", included: true },
  { name: "Ongoing Support + Live Dashboards", price: "$500–$1,000", included: true },
];

export default function Comparison() {
  return (
    <section className="w-full bg-black text-white py-12 px-4 flex flex-col items-center">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="text-2xl md:text-4xl font-extrabold text-center mb-8"
      >
        We’re <span className="text-green-400">Not Like Traditional Agencies</span>
      </motion.h2>

      {/* Comparison Table */}
      <div className="w-full max-w-3xl bg-white/5 backdrop-blur-md rounded-xl shadow-xl overflow-hidden border border-white/10 text-sm md:text-base">
        <div className="grid grid-cols-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-base md:text-lg">
          <div className="p-3">Service</div>
          <div className="p-3 text-center">Avg. Market Price</div>
          <div className="p-3 text-center">With Us</div>
        </div>

        {services.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            className="grid grid-cols-3 items-center border-t border-white/10 hover:bg-white/10 transition"
          >
            <div className="p-3 font-medium">{item.name}</div>
            <div className="p-3 text-center text-gray-300">{item.price}</div>
            <div className="p-3 flex justify-center">
              {item.included && <CheckCircle className="text-green-400 w-5 h-5" />}
            </div>
          </motion.div>
        ))}

        {/* Total Row */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: services.length * 0.12 }}
          className="grid grid-cols-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-base md:text-lg"
        >
          <div className="p-3">TOTAL</div>
          <div className="p-3 text-center">$10K–$19K Upfront</div>
          <div className="p-3 text-center">$4K Upfront</div>
        </motion.div>
      </div>

      {/* Bottom Text */}
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-8 text-center text-sm md:text-lg text-gray-300 max-w-2xl"
      >
        <span className="block mb-2">
          💸 Working with Traditional Agencies: <b>$10K–$19K upfront</b> + <b>$2K/month ongoing</b>
        </span>
        <span className="block text-green-400 font-bold">
          🚀 With Us: $4K setup + We Only Earn More When You Do
        </span>
      </motion.p>
    </section>
  );
}
