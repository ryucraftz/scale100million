import { motion } from "framer-motion";
import privacyIcon from "../assets/PrivacyPolicy.png";

export default function PrivacyPolicy() {
  return (
    <section
      id="privacy"
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
          <div className="inline-block p-4 rounded-full bg-blue-50 mb-4">
            <img
              src={privacyIcon}
              alt="Privacy Policy Icon"
              className="w-20 h-20 object-contain"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900">
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Policy</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto">
            We are committed to protecting your personal information and your right to privacy.
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-white/20 p-8 md:p-14 space-y-10 relative overflow-hidden">

          {/* Subtle geometric accent */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-50/50 to-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

          <div className="relative z-10 space-y-8 text-gray-600 leading-relaxed text-lg md:text-xl font-light">
            <p>
              By visiting this Website, you agree to be bound by the terms and
              conditions of this <span className="text-gray-900 font-medium">Privacy Policy</span>. If you do not agree, please do not
              use or access our Website.
            </p>

            <div className="w-full h-px bg-gray-100" />

            <p>
              By mere use of the Website, you expressly consent to our use and
              disclosure of your personal information in accordance with this
              Privacy Policy. This Privacy Policy is incorporated into and subject
              to the Terms of Use.
            </p>

            <p>
              When you use our Website, we collect and store your personal
              information provided by you to insure a safe, efficient, and customized experience.
              This allows us to provide services and features that most likely meet your needs.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
