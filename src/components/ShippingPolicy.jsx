import { motion } from "framer-motion";
import { Truck, CheckCircle2, XCircle, Mail, Globe, Monitor, Send } from "lucide-react";

export default function ShippingPolicy() {
  const sections = [
    {
      id: 1,
      title: "Mode of Delivery",
      icon: <Globe size={24} />,
      content: (
        <div className="text-gray-400 space-y-4">
          <p className="font-medium text-white">All products & services are delivered digitally via:</p>
          <div className="grid gap-3">
            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5">
              <Monitor className="text-primary" size={20} />
              <span>Online dashboards & learning platforms</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5">
              <Send className="text-primary" size={20} />
              <span>Email communication</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5">
              <Globe className="text-primary" size={20} />
              <span>Live online sessions or recorded content</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Delivery Confirmation",
      icon: <CheckCircle2 size={24} />,
      content: (
        <div className="text-gray-400 space-y-4">
          <p className="font-medium text-white">Delivery is considered complete once:</p>
          <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-xl flex gap-3 text-green-200">
            <CheckCircle2 className="shrink-0 mt-1" />
            <p className="text-sm">Login credentials, access links, or program instructions are sent to the registered email.</p>
          </div>
          <p className="text-xs text-gray-500 italic">User is responsible for providing correct contact details.</p>
        </div>
      )
    },
    {
      id: 3,
      title: "No Physical Shipping",
      icon: <XCircle size={24} />,
      content: (
        <div className="text-gray-400 space-y-4">
          <p>As all services are digital:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-200">
              <Truck className="shrink-0" size={20} />
              <span className="text-sm font-medium">No shipping charges</span>
            </div>
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-200">
              <XCircle className="shrink-0" size={20} />
              <span className="text-sm font-medium">No tracking numbers</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Support",
      icon: <Mail size={24} />,
      content: (
        <div className="bg-primary/5 border border-primary/20 p-6 rounded-2xl flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <div className="p-4 bg-primary/10 rounded-full text-primary">
            <Mail size={32} />
          </div>
          <div>
            <p className="text-gray-400 mb-2">Issues with access or delivery?</p>
            <a href="mailto:scale100million@gmail.com" className="text-2xl font-bold text-white hover:text-primary transition-colors">
              scale100million@gmail.com
            </a>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="shipping-policy" className="w-full min-h-screen bg-black text-white py-24 md:py-36 px-6 relative overflow-hidden">

      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Method Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            <Truck size={14} /> Delivery Methods
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            Shipping <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Policy</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            We are a 100% digital company. Here is how you receive your programs and services.
          </p>
        </motion.div>

        {/* Sections Grid */}
        <div className="grid gap-6">
          {sections.map((section, idx) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur" />
              <div className="relative p-8 rounded-2xl bg-zinc-900/40 border border-white/10 hover:border-white/20 transition-colors duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-white/5 rounded-xl text-primary border border-white/5 group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                    {section.title}
                  </h2>
                </div>
                <div className="leading-relaxed">
                  {section.content}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
