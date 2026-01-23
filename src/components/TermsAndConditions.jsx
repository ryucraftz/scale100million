import { motion } from "framer-motion";

export default function TermsAndConditions() {
    return (
        <section
            id="terms-and-conditions"
            className="w-full min-h-screen bg-black text-white py-20 px-6 md:px-20 flex justify-center"
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl bg-[#1a1a1a] rounded-2xl shadow-lg p-10"
            >
                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                    Terms and Conditions
                </h1>

                {/* Content */}
                <div className="space-y-6 text-gray-300 leading-relaxed">
                    <p>
                        Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern our relationship with you in relation to this website.
                    </p>
                    <p>
                        The services offered on this website are provided by <strong>Abhay Mukund Lagad</strong>.
                    </p>
                    <p>
                        All payments, invoices, and billing-related communications will be issued under the name <strong>Abhay Mukund Lagad</strong>.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-6 mb-4">General Terms</h2>
                    <p>
                        The content of the pages of this website is for your general information and use only. It is subject to change without notice.
                    </p>
                    <p>
                        Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.
                    </p>

                    <div className="mt-8 p-4 bg-gray-800 rounded-lg">
                        <h2 className="text-xl font-semibold text-white mb-2">Billing Information</h2>
                        <p className="text-gray-300">
                            <span className="font-semibold text-white">Billing Name:</span> Abhay Mukund Lagad
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
