import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "Information We Collect",
      content: (
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>We may collect the following information:</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Name, email address, and phone number.</li>
            <li>Payment and billing details (processed securely).</li>
            <li>Usage data, interaction history, and technical information (e.g., IP address).</li>
          </ul>
        </div>
      )
    },
    {
      title: "Use of Information",
      content: (
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>Your information is used to:</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Deliver services and provide customer support.</li>
            <li>Process transactions and payments.</li>
            <li>Communicate updates, program information, and offers.</li>
            <li>Comply with legal and regulatory obligations.</li>
          </ul>
        </div>
      )
    },
    {
      title: "Data Protection",
      content: (
        <p className="text-gray-300 leading-relaxed">
          We use reasonable administrative, technical, and organizational security measures to protect your personal information. However, no online system is completely secure, and we cannot guarantee absolute security.
        </p>
      )
    },
    {
      title: "Third-Party Services",
      content: (
        <p className="text-gray-300 leading-relaxed">
          We may use third-party tools and service providers for payment processing, email communication, analytics, and learning platforms. These providers have their own privacy policies and security practices.
        </p>
      )
    },
    {
      title: "Cookies & Tracking Technologies",
      content: (
        <p className="text-gray-300 leading-relaxed">
          We may use cookies or similar tracking technologies to improve website functionality, analyze usage, and enhance user experience. You may control or disable cookies through your browser settings.
        </p>
      )
    },
    {
      title: "Data Sharing",
      content: (
        <p className="text-gray-300 leading-relaxed">
          We do not sell or rent your personal information to third parties. Information may be shared only with service providers as required to deliver our services or comply with legal obligations.
        </p>
      )
    },
    {
      title: "Data Retention",
      content: (
        <p className="text-gray-300 leading-relaxed">
          We retain personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.
        </p>
      )
    },
    {
      title: "Consent",
      content: (
        <p className="text-gray-300 leading-relaxed">
          By accessing or using our website and services, you consent to the collection, use, and processing of your information in accordance with this Privacy Policy.
        </p>
      )
    }
  ];

  return (
    <section className="w-full min-h-screen bg-black text-white py-20 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-16 border-b border-white/10 pb-8">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Privacy Policy</h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Scale100Million.com respects your privacy and is committed to protecting your personal information.
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
