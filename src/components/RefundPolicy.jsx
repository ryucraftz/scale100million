import { motion } from "framer-motion";
import { RefreshCcw } from "lucide-react";

export default function RefundPolicy() {
    return (
        <section
            id="refund-policy"
            className="w-full min-h-screen bg-background text-text-primary py-12 md:py-24 px-6 md:px-20 flex justify-center"
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-3xl w-full"
            >
                {/* Header Section */}
                <div className="text-center mb-10 space-y-4">
                    <div className="inline-block p-3 rounded-full bg-primary/10 mb-4 text-primary">
                        <RefreshCcw size={40} />
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white">
                        Refund <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Policy</span>
                    </h1>
                    <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
                        Please review our refund policy carefully.
                    </p>
                </div>

                <div className="bg-surface/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-800 p-6 md:p-10 space-y-8 relative overflow-hidden">

                    {/* Background accent */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-primary/10 to-transparent rounded-full blur-[120px] pointer-events-none -mr-32 -mt-32" />

                    <div className="relative z-10 space-y-6 text-gray-300 leading-relaxed text-base md:text-lg font-light">
                        <p>
                            At Scale100Million.com, we offer only service-based solutions. Due to the nature of our work:
                        </p>

                        <div className="space-y-4 pl-4 border-l-2 border-primary/30">
                            <p className="text-white font-medium">
                                No refunds are provided under any circumstances once payment has been made.
                            </p>
                            <p>
                                Clients are requested to carefully review service details before making payments.
                            </p>
                        </div>

                        <p>
                            In case of duplicate transactions or incorrect deductions caused by a technical error, please contact us. If found valid, adjustments will be handled with the payment gateway/bank.
                        </p>

                        <div className="bg-zinc-900/50 p-6 rounded-2xl border border-gray-800 mt-8">
                            <p className="text-sm text-gray-400 italic">
                                By using our services, you acknowledge and agree to this No Refund Policy.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
