import { motion } from "framer-motion";
import { Truck, CheckCircle2, XCircle, Mail } from "lucide-react";

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
        className="max-w-4xl w-full"
      >
        {/* Header Section */}
        <div className="text-center mb-10 space-y-4">
          <div className="inline-block p-4 rounded-full bg-primary/10 mb-4 text-primary">
            <Truck size={40} />
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white">
            Shipping <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Policy</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Scale100Million is a digital service–based education and implementation company. We do not ship any physical products.
          </p>
        </div>

        <div className="bg-surface/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-800 p-6 md:p-10 space-y-12 relative overflow-hidden">

          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-[100px] -translate-y-1/4 translate-x-1/4 pointer-events-none" />

          {/* 1. Mode of Delivery */}
          <div className="space-y-4 relative z-10">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-bold">1</span>
              Mode of Delivery
            </h2>
            <div className="bg-zinc-900/30 border border-gray-800 rounded-xl p-6 text-gray-300 leading-relaxed">
              <p className="mb-4 text-white font-medium">All products, programs, and services offered by Scale100Million are delivered digitally through one or more of the following methods:</p>
              <ul className="space-y-3">
                {[
                  "Online dashboards or learning platforms",
                  "Email communication",
                  "Live online sessions or recorded content"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 2. Delivery Confirmation */}
          <div className="space-y-4 relative z-10">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-bold">2</span>
              Delivery Confirmation
            </h2>
            <div className="bg-zinc-900/30 border border-gray-800 rounded-xl p-6 text-gray-300 leading-relaxed space-y-4">
              <p className="text-white font-medium">Delivery is considered complete once:</p>
              <div className="flex items-start gap-3 bg-black/20 p-4 rounded-lg border border-white/5">
                <CheckCircle2 className="text-green-400 shrink-0 mt-1" size={18} />
                <p>Login credentials, access links, or program instructions are shared via email or made available through an online dashboard</p>
              </div>
              <p className="text-sm text-gray-400 italic">It is the user’s responsibility to ensure that correct contact details are provided at the time of purchase.</p>
            </div>
          </div>

          {/* 3. No Physical Shipping */}
          <div className="space-y-4 relative z-10">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-bold">3</span>
              No Physical Shipping
            </h2>
            <div className="bg-zinc-900/30 border border-gray-800 rounded-xl p-6 text-gray-300 leading-relaxed">
              <p className="mb-4 text-white font-medium">As all services are delivered digitally:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-red-900/10 border border-red-900/30 text-gray-300">
                  <XCircle className="text-red-400" size={20} />
                  <span>There are no shipping charges</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-red-900/10 border border-red-900/30 text-gray-300">
                  <XCircle className="text-red-400" size={20} />
                  <span>There is no physical shipment, courier service, or tracking number</span>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Support */}
          <div className="space-y-4 relative z-10">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-bold">4</span>
              Support
            </h2>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-gray-300 leading-relaxed flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary">
                <Mail size={24} />
              </div>
              <div>
                <p className="font-medium text-white mb-1">For any issues related to access or delivery, users may contact us at:</p>
                <a href="mailto:scale100million@gmail.com" className="text-primary hover:underline font-bold">scale100million@gmail.com</a>
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
