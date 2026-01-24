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

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          <div className="relative z-10 space-y-6 text-gray-600 leading-relaxed text-lg">
            <p>
              We are a service-based company and do not sell or ship any physical products.
            </p>
            <p>
              All services are delivered digitally or through online communication channels.
            </p>
            <p>
              No physical shipping, handling, or delivery fees are applicable.
            </p>

            <div className="mt-10 p-6 bg-surface rounded-2xl border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Billing Information</h2>
              <p className="text-gray-600">
                <span className="font-semibold text-gray-900">Billing Name:</span> Abhay Mukund Lagad
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
