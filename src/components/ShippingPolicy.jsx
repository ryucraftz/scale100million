import { motion } from "framer-motion";

export default function ShippingPolicy() {
  return (
    <section
      id="shipping-policy"
      className="w-full min-h-screen bg-black text-white py-20 px-6 md:px-20 flex justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl bg-[#1a1a1a] rounded-2xl shadow-lg p-10"
      >
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Shipping & Delivery Policy
        </h1>

        {/* Content */}
        <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
          <p>
            We are a service-based company and do not sell or ship any physical products.
          </p>
          <p>
            All services are delivered digitally or through online communication.
          </p>
          <p>
            No physical shipping is involved.
          </p>
          
          <div className="mt-8 p-4 bg-gray-800 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-2">Billing Information</h2>
             <p className="text-gray-300">
              <span className="font-semibold text-white">Billing Name:</span> Abhay Mukund Lagad
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
