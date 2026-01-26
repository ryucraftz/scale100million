import { motion } from "framer-motion";
import { Truck } from "lucide-react";

export default function ShippingPolicy() {
  return (
    <section
      id="shipping-policy"
      className="w-full min-h-screen bg-background text-text-primary py-12 md:py-24 px-6 md:px-20 flex justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl w-full"
      >
        {/* Header Section */}
        <div className="text-center mb-10 space-y-4">
          <div className="inline-block p-4 rounded-full bg-primary/10 mb-4 text-primary">
            <Truck size={40} />
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white">
            Shipping & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Delivery</span>
          </h1>
        </div>

        <div className="bg-surface/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-800 p-6 md:p-10 space-y-8 relative overflow-hidden">

          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-[100px] -translate-y-1/4 translate-x-1/4 pointer-events-none" />

          <div className="relative z-10 space-y-6 text-gray-300 leading-relaxed text-base md:text-lg font-light">

            <div className="flex flex-col items-center justify-center p-8 bg-zinc-900/50 rounded-2xl border border-dashed border-gray-800 text-center space-y-4 hover:bg-zinc-900 transition-colors">
              <div className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center shadow-lg text-primary mb-2">
                <Truck size={28} />
              </div>
              <h3 className="text-xl font-bold text-white">100% Digital Delivery</h3>
              <p className="max-w-md mx-auto text-gray-400 text-sm md:text-base">
                We are a digital-first company. No physical shipping is required for any of our services.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-zinc-900/30 border border-gray-800 shadow-sm">
                <h4 className="font-bold text-white mb-1">Instant Access</h4>
                <p className="text-sm text-gray-400">Services are delivered digitally via email or online dashboard immediately upon purchase.</p>
              </div>
              <div className="p-5 rounded-xl bg-zinc-900/30 border border-gray-800 shadow-sm">
                <h4 className="font-bold text-white mb-1">No Hidden Fees</h4>
                <p className="text-sm text-gray-400">There are absolutely zero shipping, handling, or delivery charges applicable.</p>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-800">
              <p className="text-sm text-gray-500 text-center">
                Billing Entity: <span className="text-white font-medium">Abhay Mukund Lagad</span>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
