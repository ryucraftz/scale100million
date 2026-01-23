import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function Price() {
  return (
    <section className="w-full bg-black text-white py-20 px-6 mt-32 relative z-10">
      {/* Divider (black now) */}
      <div className="absolute top-0 left-0 w-full h-2 bg-black"></div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-4xl font-bold text-center mb-6"
      >
        Payment? <span className="text-yellow-300">Only When You Get Paid.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-base md:text-lg text-center max-w-2xl mb-10 opacity-90 mx-auto"
      >
        We believe in <span className="font-semibold">performance-based partnerships</span>, 
        not retainers. No risk, no hidden fees — you win, we win.
      </motion.p>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full mx-auto">
        
        {/* Setup Fee Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white text-gray-900 rounded-2xl shadow-xl p-6 flex flex-col"
        >
          <h3 className="text-xl font-bold mb-3">One-Time Setup</h3>
          <p className="text-3xl font-extrabold text-[#7938B2] mb-5">$4,000</p>
          <ul className="space-y-2 mb-5">
            <li className="flex items-center gap-2">
              <CheckCircle className="text-[#7938B2]" /> $2K upfront
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-[#7938B2]" /> $2K after launch
            </li>
          </ul>
          <p className="mt-auto text-xs text-gray-600 italic">
            Get started without heavy upfront cost 🚀
          </p>
        </motion.div>

        {/* Performance Fee Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-br from-[#9D50BB] to-[#6E48AA] text-white rounded-2xl shadow-xl p-6 flex flex-col"
        >
          <h3 className="text-xl font-bold mb-3">Then, Only When You Win</h3>
          <p className="text-3xl font-extrabold mb-5">70% / 30%</p>
          <ul className="space-y-2 mb-5">
            <li className="flex items-center gap-2">
              <CheckCircle className="text-yellow-300" /> You keep <b>70%</b> of every sale
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-yellow-300" /> We earn <b>30%</b> performance fee
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-yellow-300" /> If you don’t close? We don’t get paid.
            </li>
          </ul>
          <p className="mt-auto text-xs italic text-yellow-200">
            No retainers. No risk. 100% aligned with your success 
          </p>
        </motion.div>
      </div>
    </section>
  );
}
