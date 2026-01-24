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
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          <div className="relative z-10 space-y-6 text-gray-600 leading-relaxed text-lg">
            <p>
              By visiting this Website you agree to be bound by the terms and
              conditions of this Privacy Policy. If you do not agree please do not
              use or access our Website.
            </p>

            <p>
              By mere use of the Website, you expressly consent to our use and
              disclosure of your personal information in accordance with this
              Privacy Policy. This Privacy Policy is incorporated into and subject
              to the Terms of Use.
            </p>

            <p>
              When you use our Website, we collect and store your personal
              information which is provided by you from time to time. Our primary
              goal in doing so is to provide you a safe, efficient, smooth and
              customized experience. This allows us to provide services and
              features that most likely meet your needs, and to customize our
              Website to make your experience safer and easier. More importantly,
              while doing so we collect personal information from you that we
              consider necessary for achieving this purpose.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
