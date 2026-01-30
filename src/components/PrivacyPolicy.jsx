import LegalLayout from "./LegalLayout";
import { Shield, Lock } from "lucide-react";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "Information We Collect",
      content: (
        <div className="space-y-4">
          <p>We may collect the following information:</p>
          <ul className="list-disc list-inside space-y-1 pl-2 marker:text-gray-500">
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
        <div className="space-y-4">
          <p>Your information is used to:</p>
          <ul className="list-disc list-inside space-y-1 pl-2 marker:text-gray-500">
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
        <p>
          We use reasonable administrative, technical, and organizational security measures to protect your personal information. However, no online system is completely secure, and we cannot guarantee absolute security.
        </p>
      )
    },
    {
      title: "Third-Party Services",
      content: (
        <p>
          We may use third-party tools and service providers for payment processing, email communication, analytics, and learning platforms. These providers have their own privacy policies and security practices.
        </p>
      )
    },
    {
      title: "Cookies & Tracking Technologies",
      content: (
        <p>
          We may use cookies or similar tracking technologies to improve website functionality, analyze usage, and enhance user experience. You may control or disable cookies through your browser settings.
        </p>
      )
    },
    {
      title: "Data Sharing",
      content: (
        <p>
          We do not sell or rent your personal information to third parties. Information may be shared only with service providers as required to deliver our services or comply with legal obligations.
        </p>
      )
    },
    {
      title: "Data Retention",
      content: (
        <p>
          We retain personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.
        </p>
      )
    },
    {
      title: "Consent",
      content: (
        <p>
          By accessing or using our website and services, you consent to the collection, use, and processing of your information in accordance with this Privacy Policy.
        </p>
      )
    }
  ];

  return (
    <LegalLayout title="Privacy Policy" icon={Shield}>
      <div className="mb-12 text-center md:text-left">
        <p className="text-gray-400 text-lg leading-relaxed">
          Scale100Million.com respects your privacy and is committed to protecting your personal information.
        </p>
      </div>

      <div className="space-y-10">
        {sections.map((section, idx) => (
          <div key={idx} className="border-b border-white/5 pb-8 last:border-0 last:pb-0">
            <h2 className="text-xl font-semibold text-white mb-4">
              {idx + 1}. {section.title}
            </h2>
            <div className="text-base text-gray-300 leading-relaxed">
              {section.content}
            </div>
          </div>
        ))}
      </div>
    </LegalLayout>
  );
}
