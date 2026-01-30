import { motion } from "framer-motion";
import { Ban, AlertTriangle, FileText, CheckCircle2 } from "lucide-react";

export default function CancellationPolicy() {
    return (
        <section
            id="cancellation-policy"
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
                        <Ban size={40} />
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white">
                        Cancellation <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Policy</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        This policy explains how cancellations work for our programs and services.
                    </p>
                </div>

                <div className="bg-surface/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-800 p-6 md:p-10 space-y-12 relative overflow-hidden">

                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-[100px] -translate-y-1/4 translate-x-1/4 pointer-events-none" />

                    {/* 1. Program Cancellation */}
                    <div className="space-y-4 relative z-10">
                        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-bold">1</span>
                            Program Cancellation
                        </h2>
                        <div className="bg-zinc-900/30 border border-gray-800 rounded-xl p-6 text-gray-300 leading-relaxed">
                            <p>
                                Users may request cancellation by emailing our support team at <a href="mailto:scale100million@gmail.com" className="text-primary hover:underline">scale100million@gmail.com</a> within the eligible cancellation window, if applicable.
                            </p>
                        </div>
                    </div>

                    {/* 2. Effect of Cancellation */}
                    <div className="space-y-4 relative z-10">
                        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-bold">2</span>
                            Effect of Cancellation
                        </h2>
                        <div className="grid md:grid-cols-1 gap-4">
                            <div className="p-5 rounded-xl bg-zinc-900/30 border border-gray-800 shadow-sm flex items-start gap-3">
                                <div className="mt-1 text-primary"><CheckCircle2 size={18} /></div>
                                <p className="text-gray-300">Cancellation stops future access or participation in the program or service.</p>
                            </div>
                            <div className="p-5 rounded-xl bg-zinc-900/30 border border-gray-800 shadow-sm flex items-start gap-3">
                                <div className="mt-1 text-primary"><CheckCircle2 size={18} /></div>
                                <p className="text-gray-300">Cancellation does not automatically entitle the user to a refund.</p>
                            </div>
                            <div className="p-5 rounded-xl bg-zinc-900/30 border border-gray-800 shadow-sm flex items-start gap-3">
                                <div className="mt-1 text-primary"><CheckCircle2 size={18} /></div>
                                <p className="text-gray-300">Refund eligibility, if any, is governed strictly by our Refund Policy.</p>
                            </div>
                        </div>
                    </div>

                    {/* 3. Subscription Services */}
                    <div className="space-y-4 relative z-10">
                        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-bold">3</span>
                            Subscription Services (If Applicable)
                        </h2>
                        <div className="bg-zinc-900/30 border border-gray-800 rounded-xl p-6 text-gray-300 leading-relaxed space-y-2">
                            <p className="font-medium text-white mb-2">For subscription-based services:</p>
                            <ul className="space-y-2 list-disc list-inside text-gray-400 ml-2">
                                <li>Cancellation must be completed before the next billing cycle.</li>
                                <li>Access continues until the end of the current billing period.</li>
                                <li>No partial or prorated refunds are issued.</li>
                            </ul>
                        </div>
                    </div>

                    {/* 4. Misuse & Policy Violations */}
                    <div className="space-y-4 relative z-10">
                        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-bold">4</span>
                            Misuse & Policy Violations
                        </h2>
                        <div className="bg-red-900/10 border border-red-900/30 rounded-xl p-6 text-gray-300 leading-relaxed space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="mt-1 text-red-500"><AlertTriangle size={20} /></div>
                                <div>
                                    <p className="mb-2">We reserve the right to cancel access without prior notice in case of:</p>
                                    <ul className="list-disc list-inside space-y-1 text-gray-400 ml-1">
                                        <li>Violation of our Terms & Conditions</li>
                                        <li>Content misuse or unauthorized sharing</li>
                                        <li>Abusive, fraudulent, or unlawful behavior</li>
                                    </ul>
                                    <p className="mt-3 text-sm text-red-400 font-medium">Such cancellation does not entitle the user to any refund.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </motion.div>
        </section>
    );
}
