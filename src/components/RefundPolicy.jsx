import { motion } from "framer-motion";
import { RefreshCcw, AlertTriangle, Clock, Ban, DollarSign, FileText, CheckCircle2 } from "lucide-react";

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
                className="max-w-4xl w-full"
            >
                {/* Header Section */}
                <div className="text-center mb-10 space-y-4">
                    <div className="inline-block p-4 rounded-full bg-primary/10 mb-4 text-primary">
                        <RefreshCcw size={40} />
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white">
                        Refund <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Policy</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Please read this policy carefully before making any purchase.
                    </p>
                </div>

                <div className="bg-surface/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-800 p-6 md:p-10 space-y-12 relative overflow-hidden">

                    {/* Background accent */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-primary/10 to-transparent rounded-full blur-[120px] pointer-events-none -mr-32 -mt-32" />

                    {/* 1. Digital Services & Programs */}
                    <div className="space-y-4 relative z-10">
                        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-bold">1</span>
                            Digital Services & Programs
                        </h2>
                        <div className="bg-zinc-900/30 border border-gray-800 rounded-xl p-6 text-gray-300 leading-relaxed space-y-4">
                            <p className="font-medium text-white mb-2">Due to the nature of digital education and done-for-you services:</p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <Ban className="text-red-400 shrink-0 mt-1" size={18} />
                                    <span>Refunds are generally not provided once access to any content, program, or service is granted</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <FileText className="text-primary shrink-0 mt-1" size={18} />
                                    <span>Any exception to this rule, if offered, will be explicitly mentioned in writing on the official sales page</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <AlertTriangle className="text-yellow-400 shrink-0 mt-1" size={18} />
                                    <span>No refund shall be assumed unless clearly stated.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* 2. Limited Refund Window */}
                    <div className="space-y-4 relative z-10">
                        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-bold">2</span>
                            Limited Refund Window (If Offered)
                        </h2>
                        <div className="bg-zinc-900/30 border border-gray-800 rounded-xl p-6 text-gray-300 leading-relaxed space-y-4">
                            <p className="text-gray-400 italic mb-2">If a refund window is explicitly offered for a specific program:</p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="p-4 rounded-lg bg-black/20 border border-white/5 flex items-start gap-3">
                                    <Clock className="text-primary shrink-0 mt-1" size={20} />
                                    <p>Requests must be made within 2 days of purchase</p>
                                </div>
                                <div className="p-4 rounded-lg bg-black/20 border border-white/5 flex items-start gap-3">
                                    <Ban className="text-red-400 shrink-0 mt-1" size={20} />
                                    <p>No refunds will be issued once content is accessed or services are delivered, whichever occurs first</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3. Non-Refundable Situations */}
                    <div className="space-y-4 relative z-10">
                        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-bold">3</span>
                            Non-Refundable Situations
                        </h2>
                        <div className="bg-zinc-900/30 border border-gray-800 rounded-xl p-6 text-gray-300 leading-relaxed">
                            <p className="mb-4">Refunds will not be provided for, including but not limited to:</p>
                            <ul className="grid md:grid-cols-2 gap-3">
                                {["Partial usage of content or services", "Change of mind after purchase", "Missed sessions, calls, or meetings", "Dissatisfaction with results or unmet expectations"].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-gray-400">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* 4. Processing Time */}
                    <div className="space-y-4 relative z-10">
                        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-bold">4</span>
                            Processing Time
                        </h2>
                        <div className="bg-zinc-900/30 border border-gray-800 rounded-xl p-6 flex items-start gap-4">
                            <div className="mt-1 text-primary"><Clock size={24} /></div>
                            <p className="text-gray-300 leading-relaxed">
                                Approved refunds, where applicable, will be processed within <span className="text-white font-medium">7–10 business days</span> via the original or Company-preferred payment method.
                            </p>
                        </div>
                    </div>

                    {/* 5. Chargebacks */}
                    <div className="space-y-4 relative z-10">
                        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-bold">5</span>
                            Chargebacks
                        </h2>
                        <div className="bg-red-900/10 border border-red-900/30 rounded-xl p-6 text-gray-300 leading-relaxed">
                            <div className="flex items-start gap-3 mb-4">
                                <AlertTriangle className="text-red-500 shrink-0 mt-1" size={24} />
                                <p className="font-medium text-white">Unauthorized chargebacks or payment disputes may result in:</p>
                            </div>
                            <ul className="space-y-2 list-disc list-inside text-gray-400 ml-2">
                                <li>Immediate termination of access</li>
                                <li>Permanent account suspension</li>
                                <li>Legal recovery of applicable fees, penalties, and damages</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </motion.div>
        </section>
    );
}
