import { motion } from "framer-motion";
import { Truck, CheckCircle2, XCircle, Mail, Globe, Monitor, Send } from "lucide-react";

export default function ShippingPolicy() {
  const sections = [
    {
      title: "Mode of Delivery",
      content: (
        <div className="text-gray-300 space-y-4 leading-relaxed">
          <p>All products, programs, and services offered by Scale100Million are delivered digitally through one or more of the following methods:</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Online dashboards or learning platforms.</li>
            <li>Email communication.</li>
            <li>Live online sessions or recorded content.</li>
          </ul>
        </div>
      )
    },
    {
      title: "Delivery Confirmation",
      content: (
        <div className="text-gray-300 space-y-4 leading-relaxed">
          <p>Delivery is considered complete once:</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Login credentials, access links, or program instructions are shared via email or made available through an online dashboard.</li>
          </ul>
          <p className="text-sm italic">
            It is the user’s responsibility to ensure that correct contact details (especially email address) are provided at the time of purchase.
          </p>
        </div>
      )
    },
    {
      title: "No Physical Shipping",
      content: (
        <div className="text-gray-300 space-y-4 leading-relaxed">
          <p>As all services are digital:</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>There are <span className="text-white font-medium">no shipping charges</span>.</li>
            <li>There is <span className="text-white font-medium">no physical shipment, courier service, or tracking number</span>.</li>
          </ul>
        </div>
      )
    },
    {
      title: "Support",
      content: (
        <div className="text-gray-300 leading-relaxed">
          <p>For any issues related to access or delivery, users may contact us at:</p>
          <a href="mailto:scale100million@gmail.com" className="text-primary hover:underline font-medium block mt-2">
            scale100million@gmail.com
          </a>
        </div>
      )
    }
  ];

  return (
    <section className="w-full min-h-screen bg-black text-white py-20 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16 border-b border-white/10 pb-8">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Shipping Policy</h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Scale100Million is a digital service–based education and implementation company. We do not ship any physical products.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
                {idx + 1}. {section.title}
              </h2>
              <div className="text-base md:text-lg">
                {section.content}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
