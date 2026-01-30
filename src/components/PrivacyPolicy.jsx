import { motion } from "framer-motion";
import { ShieldCheck, Lock, Eye, Database, Share2, FileCheck, Server, UserCheck } from "lucide-react";

export default function PrivacyPolicy() {
  const sections = [
    {
      id: 1,
      title: "Information We Collect",
      icon: <Database size={24} />,
      content: (
        <div className="space-y-4 text-gray-400">
          <p>We may collect the following personal and technical information:</p>
          <div className="flex flex-wrap gap-2">
            {["Name", "Email Address", "Phone Number", "Payment Details", "Usage Data", "IP Address"].map((tag, i) => (
              <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-300">
                {tag}
              </span>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Use of Information",
      icon: <UserCheck size={24} />,
      content: (
        <ul className="space-y-2 text-gray-400">
          {[
            "To deliver services and provide customer support",
            "To process secure transactions and payments",
            "To communicate important updates and program information",
            "To comply with legal and regulatory obligations"
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      )
    },
    {
      id: 3,
      title: "Data Protection",
      icon: <Lock size={24} />,
      content: (
        <div className="bg-blue-900/10 border border-blue-900/30 p-4 rounded-xl text-gray-300 text-sm">
          <p>
            We employ <span className="text-white font-bold">industry-standard encryption</span> and security protocols to protect your data. However, no online transmission is 100% secure, and we cannot guarantee absolute security.
          </p>
        </div>
      )
    },
    {
      id: 4,
      title: "Third-Party Services",
      icon: <Server size={24} />,
      content: (
        <div className="space-y-3 text-gray-400">
          <p>We use trusted third-party providers for specific functions:</p>
          <div className="grid grid-cols-2 gap-3">
            {["Payment Gateways", "Email Services", "Analytics Tools", "Hosting Platforms"].map((item, idx) => (
              <div key={idx} className="p-2 border border-white/5 bg-black/20 rounded text-center text-xs text-gray-400">
                {item}
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "Cookies & Tracking",
      icon: <Eye size={24} />,
      content: (
        <p className="text-gray-400">
          We use cookies to enhance user experience, analyze traffic, and personalize content. You can manage your preferences through your browser settings at any time.
        </p>
      )
    },
    {
      id: 6,
      title: "Data Sharing",
      icon: <Share2 size={24} />,
      content: (
        <div className="space-y-2 text-gray-400">
          <p className="flex items-center gap-2 text-green-400 font-medium">
            <ShieldCheck size={16} /> We do NOT sell your data.
          </p>
          <p>
            Information is shared strictly with service providers necessary to deliver our services or when required by law.
          </p>
        </div>
      )
    },
    {
      id: 7,
      title: "Data Retention",
      icon: <Database size={24} />,
      content: (
        <p className="text-gray-400">
          We retain personal information only for as long as necessary to fulfill the purposes outlined in this policy or to comply with legal requirements.
        </p>
      )
    },
    {
      id: 8,
      title: "Consent",
      icon: <FileCheck size={24} />,
      content: (
        <div className="p-4 bg-primary/5 border border-primary/10 rounded-xl space-y-2">
          <p className="text-gray-300 text-sm font-medium">
            By using our website, you consent to the terms of this Privacy Policy.
          </p>
        </div>
      )
    }
  ];

  return (
    <section id="privacy-policy" className="w-full min-h-screen bg-black text-white py-24 md:py-36 px-6 relative overflow-hidden">

      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            <ShieldCheck size={14} /> Data Protection
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Policy</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Your trust is our priority. We are committed to transparency in how we collect, use, and protect your data.
          </p>
        </motion.div>

        {/* Grid Layout for Privacy Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {sections.map((section, idx) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative h-full"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur" />

              <div className="relative h-full p-8 rounded-2xl bg-zinc-900/40 border border-white/10 hover:border-white/20 hover:bg-zinc-900/60 transition-colors duration-300 flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-white/5 rounded-xl text-primary group-hover:scale-110 transition-transform duration-300 border border-white/5 group-hover:bg-primary group-hover:text-black">
                    {section.icon}
                  </div>
                  <h2 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                    {section.title}
                  </h2>
                </div>
                <div className="text-sm leading-relaxed flex-grow">
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
