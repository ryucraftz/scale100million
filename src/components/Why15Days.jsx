import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function Why15Days() {
  const points = [
    "An irresistible offer",
    "A full client-getting machine",
    "Booked calls with ideal clients",
  ];

  return (
    <section className="bg-gradient-to-b from-[#7938B2] via-[#5e2991] to-[#3d1d64] text-white py-10 px-4 rounded-xl shadow-xl max-w-2xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-3xl font-bold text-center mb-4"
      >
        🚀 Why <span className="text-yellow-300">15 Days?</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-base md:text-lg text-center mb-6 leading-relaxed text-gray-200"
      >
        Most agencies take{" "}
        <span className="font-semibold text-yellow-300">8–12 weeks</span> just
        to launch.  
        <br />
        We move fast because every week without a system ={" "}
        <span className="font-bold text-pink-300">lost sales.</span>
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ staggerChildren: 0.3 }}
        className="space-y-3 mb-8"
      >
        {points.map((point, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex items-center gap-2 bg-white/10 p-3 rounded-lg shadow-md hover:bg-white/20 transition cursor-pointer"
          >
            <CheckCircle className="text-green-400 w-5 h-5 flex-shrink-0" />
            <p className="text-sm md:text-base font-medium">{point}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center bg-yellow-300 text-[#3d1d64] px-4 py-3 rounded-lg font-bold text-lg shadow-md"
      >
        Speed = Momentum = Revenue 💰
      </motion.div>
    </section>
  );
}
