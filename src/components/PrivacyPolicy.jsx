import { motion } from "framer-motion";
import privacyIcon from "../assets/PrivacyPolicy.png"; 

export default function PrivacyPolicy() {
  return (
    <section
      id="privacy"
      className="w-full min-h-screen bg-black text-white py-20 px-6 md:px-20 flex justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl bg-[#1a1a1a] rounded-2xl shadow-lg p-10"
      >
        {/* Icon */}
        <div className="text-center mb-6">
          <img
            src={privacyIcon}
            alt="Privacy Policy Icon"
            className="w-32 h-32 mx-auto mix-blend-screen" 
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Privacy Policy
        </h1>

        {/* Content */}
        <div className="space-y-6 text-gray-300 leading-relaxed">
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
      </motion.div>
    </section>
  );
}
