import { motion } from "framer-motion";
import { FileText } from "lucide-react";

export default function TermsAndConditions() {
    return (
        <section
            id="terms-and-conditions"
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
                    <div className="inline-block p-4 rounded-full bg-blue-50 mb-4 text-primary">
                        <FileText size={48} />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900">
                        Terms & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Conditions</span>
                    </h1>
                    <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto">
                        Please read these terms carefully before using our services.
                    </p>
                </div>

                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 space-y-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                    <div className="relative z-10 space-y-6 text-gray-600 leading-relaxed text-lg">
                        <p>
                            Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern our relationship with you in relation to this website.
                        </p>
                        <p>
                            The services offered on this website are provided by <strong>Abhay Mukund Lagad</strong>.
                        </p>
                        <p>
                            All payments, invoices, and billing-related communications will be issued under the name <strong>Abhay Mukund Lagad</strong>.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">General Terms</h2>
                        <ul className="list-disc pl-5 space-y-3">
                            <li>The content of the pages of this website is for your general information and use only. It is subject to change without notice.</li>
                            <li>Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.</li>
                        </ul>

                        <div className="mt-10 p-6 bg-surface rounded-2xl border border-gray-100">
                            <h2 className="text-xl font-bold text-gray-900 mb-3">Billing Information</h2>
                            <p className="text-gray-600">
                                <span className="font-semibold text-gray-900">Billing Name:</span> Abhay Mukund Lagad
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
