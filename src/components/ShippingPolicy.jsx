import { motion } from "framer-motion";
import { Truck } from "lucide-react";

export default function ShippingPolicy() {
  return (
    <section
      id="shipping-policy"
      className="w-full min-h-screen bg-gradient-to-b from-white to-gray-50 py-32 px-6 md:px-20 flex justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl w-full"
      >
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block p-4 rounded-full bg-blue-50 mb-4 text-primary">
            <Truck size={48} />
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900">
            Shipping & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Delivery</span>
          </h1>
        </div>

        <div className="bg-surface/80 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-gray-800 p-8 md:p-14 space-y-10 relative overflow-hidden">

          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-green-50/50 to-emerald-50/20 rounded-full blur-[100px] -translate-y-1/4 translate-x-1/4 pointer-events-none" />

          <div className="relative z-10 space-y-8 text-gray-600 leading-relaxed text-lg md:text-xl font-light">

            <div className="flex flex-col items-center justify-center p-10 bg-gray-50 rounded-3xl border border-dashed border-gray-200 text-center space-y-4 hover:bg-gray-50/80 transition-colors">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm text-green-600 mb-2">
                <Truck size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">100% Digital Delivery</h3>
              <p className="max-w-md mx-auto text-gray-500">
                We are a digital-first company. No physical shipping is required for any of our services.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <h4 className="font-bold text-gray-900 mb-2">Instant Access</h4>
                <p className="text-sm">Services are delivered digitally via email or online dashboard immediately upon purchase.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <h4 className="font-bold text-gray-900 mb-2">No Hidden Fees</h4>
                <p className="text-sm">There are absolutely zero shipping, handling, or delivery charges applicable.</p>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-100">
              <p className="text-sm text-gray-400 text-center">
                Billing Entity: <span className="text-gray-900 font-medium">Abhay Mukund Lagad</span>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
