import { motion } from "framer-motion";
import { ShieldCheck, Lock, Eye, Database, Share2, Clock, Globe, FileCheck } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <section
      id="privacy-policy"
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
            <ShieldCheck size={40} />
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white">
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Policy</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Scale100Million.com respects your privacy and is committed to protecting your personal information.
          </p>
        </div>

        <div className="bg-surface/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-800 p-6 md:p-10 space-y-12 relative overflow-hidden">

          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-[100px] -translate-y-1/4 translate-x-1/4 pointer-events-none" />

          {/* 1. Information We Collect */}
          <div className="space-y-4 relative z-10">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-bold">1</span>
              Information We Collect
            </h2>
            <div className="bg-zinc-900/30 border border-gray-800 rounded-xl p-6 text-gray-300 leading-relaxed">
              <p className="mb-4 text-white font-medium">We may collect the following information:</p>
              <ul className="grid md:grid-cols-2 gap-3">
                {[
                  "Name, email address, and phone number",
                  "Payment and billing details",
                  "Usage data, interaction history, and technical information"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 2. Use of Information */}
          <div className="space-y-4 relative z-10">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-bold">2</span>
              Use of Information
            </h2>
            <div className="bg-zinc-900/30 border border-gray-800 rounded-xl p-6 text-gray-300 leading-relaxed">
              <p className="mb-4 text-white font-medium">Your information is used to:</p>
              <ul className="space-y-3">
                {[
                  "Deliver services and provide customer support",
                  "Process transactions and payments",
                  "Communicate updates, program information, and offers",
                  "Comply with legal and regulatory obligations"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 3. Data Protection */}
          <div className="space-y-4 relative z-10">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-bold">3</span>
              Data Protection
            </h2>
            <div className="bg-blue-900/10 border border-blue-900/30 rounded-xl p-6 text-gray-300 leading-relaxed flex items-start gap-4">
              <div className="mt-1 text-blue-400"><Lock size={24} /></div>
              <p>
                We use reasonable administrative, technical, and organizational security measures to protect your personal information. However, no online system is completely secure, and we cannot guarantee absolute security.
              </p>
            </div>
          </div>

          {/* 4. Third-Party Services */}
          <div className="space-y-4 relative z-10">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-bold">4</span>
              Third-Party Services
            </h2>
            <div className="bg-zinc-900/30 border border-gray-800 rounded-xl p-6 text-gray-300 leading-relaxed">
              <p className="mb-4 text-white font-medium">We may use third-party tools and service providers for:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {["Payment processing", "Email communication", "Analytics and tracking", "Learning platforms"].map((item, idx) => (
                  <div key={idx} className="bg-black/40 p-3 rounded-lg text-center text-sm border border-white/5 text-gray-400">
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 italic">These providers have their own privacy policies and security practices.</p>
            </div>
          </div>

          {/* 5. Cookies & Tracking Technologies */}
          <div className="space-y-4 relative z-10">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-bold">5</span>
              Cookies & Tracking Technologies
            </h2>
            <div className="bg-zinc-900/30 border border-gray-800 rounded-xl p-6 text-gray-300 leading-relaxed flex items-start gap-4">
              <div className="mt-1 text-primary"><Eye size={24} /></div>
              <p>
                We may use cookies or similar tracking technologies to improve website functionality, analyze usage, and enhance user experience. You may control or disable cookies through your browser settings.
              </p>
            </div>
          </div>

          {/* 6. Data Sharing */}
          <div className="space-y-4 relative z-10">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-bold">6</span>
              Data Sharing
            </h2>
            <div className="bg-zinc-900/30 border border-gray-800 rounded-xl p-6 text-gray-300 leading-relaxed flex items-start gap-4">
              <div className="mt-1 text-purple-400"><Share2 size={24} /></div>
              <div className="space-y-2">
                <p>We do not sell or rent your personal information to third parties.</p>
                <p className="text-gray-400">Information may be shared only with service providers as required to deliver our services or comply with legal obligations.</p>
              </div>
            </div>
          </div>

          {/* 7. Data Retention */}
          <div className="space-y-4 relative z-10">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-bold">7</span>
              Data Retention
            </h2>
            <div className="bg-zinc-900/30 border border-gray-800 rounded-xl p-6 text-gray-300 leading-relaxed flex items-start gap-4">
              <div className="mt-1 text-green-400"><Database size={24} /></div>
              <p>
                We retain personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.
              </p>
            </div>
          </div>

          {/* 8. Consent */}
          <div className="space-y-4 relative z-10">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-bold">8</span>
              Consent
            </h2>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-gray-300 leading-relaxed flex items-start gap-4">
              <div className="mt-1 text-primary"><FileCheck size={24} /></div>
              <p>
                By accessing or using our website and services, you consent to the collection, use, and processing of your information in accordance with this Privacy Policy.
              </p>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
