import { motion } from "framer-motion";
import { FileText, MapPin, Clock, AlertTriangle, CreditCard, Award, ShieldCheck, HelpCircle } from "lucide-react";

export default function TermsAndConditions() {
    return (
        <section
            id="terms-and-conditions"
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
                        <FileText size={40} />
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white">
                        Terms & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Conditions</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Welcome to Scale100Million.com (“Company”, “we”, “our”, “us”). By accessing or using our website, programs, services, or content, you agree to be bound by these <span className="text-white font-medium">Terms & Conditions</span>.
                    </p>
                </div>

                <div className="bg-surface/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-800 p-6 md:p-10 space-y-12 relative overflow-hidden">

                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-[100px] -translate-y-1/4 translate-x-1/4 pointer-events-none" />

                    {/* 1. Nature of Services */}
                    <div className="space-y-4 relative z-10">
                        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-bold">1</span>
                            Nature of Services
                        </h2>
                        <div className="bg-zinc-900/30 border border-gray-800 rounded-xl p-6 text-gray-300 leading-relaxed space-y-4">
                            <p className="font-medium text-white">Scale100Million is a service-based education and implementation company providing business education, consulting, training programs, mentorship, strategic frameworks, and done-for-you services.</p>
                            <ul className="space-y-2 list-disc list-inside text-gray-400 ml-2">
                                <li>Certain programs may include performance-based or income-linked guarantees, provided the participant strictly follows the exact steps, processes, timelines, and implementation requirements communicated by the Company.</li>
                                <li>Any guarantee applies only where explicitly stated in writing on the official sales page, onboarding material, or program documentation.</li>
                            </ul>
                        </div>
                    </div>

                    {/* 2. Program Access & Usage */}
                    <div className="space-y-4 relative z-10">
                        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-bold">2</span>
                            Program Access & Usage
                        </h2>
                        <div className="bg-zinc-900/30 border border-gray-800 rounded-xl p-6 text-gray-300 leading-relaxed space-y-4">
                            <p className="text-white font-medium mb-2">Access is granted only to the registered user.</p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="p-3 bg-red-900/10 border border-red-900/30 rounded-lg text-sm text-gray-400">
                                    Sharing, selling, sublicensing, or transferring access is strictly prohibited
                                </div>
                                <div className="p-3 bg-red-900/10 border border-red-900/30 rounded-lg text-sm text-gray-400">
                                    Screen recording, redistribution, reproduction, or resale of content is not permitted
                                </div>
                            </div>
                            <p className="text-sm text-red-400 italic font-medium">Violation of these terms may result in immediate termination of access without refund and may lead to legal action.</p>
                        </div>
                    </div>

                    {/* 3. Payments */}
                    <div className="space-y-4 relative z-10">
                        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-bold">3</span>
                            Payments
                        </h2>
                        <div className="bg-zinc-900/30 border border-gray-800 rounded-xl p-6 text-gray-300 leading-relaxed flex items-start gap-4">
                            <div className="mt-1 text-green-400"><CreditCard size={24} /></div>
                            <ul className="space-y-2">
                                <li>All payments are processed through secure third-party payment gateways.</li>
                                <li>Prices, offers, and program structures may be modified at the Company’s discretion.</li>
                                <li>Applicable taxes, including GST, are charged as per Indian law.</li>
                            </ul>
                        </div>
                    </div>

                    {/* 4. Guarantee Conditions & Limitations */}
                    <div className="space-y-4 relative z-10">
                        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-bold">4</span>
                            Guarantee Conditions & Limitations
                        </h2>
                        <div className="bg-zinc-900/30 border border-gray-800 rounded-xl p-6 text-gray-300 leading-relaxed space-y-6">
                            <div>
                                <h3 className="font-bold text-white mb-2 flex items-center gap-2"><Award className="text-yellow-400" size={18} /> Subject to strict compliance:</h3>
                                <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-400">
                                    {["Full attendance of required sessions", "Completion of all assigned tasks", "Adherence to timelines & systems", "Honest & verifiable execution"].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="pt-4 border-t border-white/5">
                                <h3 className="font-bold text-white mb-2 flex items-center gap-2"><AlertTriangle className="text-red-400" size={18} /> The guarantee shall be null and void if:</h3>
                                <ul className="space-y-1 text-sm text-gray-400 list-disc list-inside ml-2">
                                    <li>Any step is skipped, delayed, altered, or partially implemented</li>
                                    <li>False, incomplete, or misleading information is provided</li>
                                    <li>Execution is inconsistent or cannot be verified</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* 5. Refunds & Chargebacks */}
                    <div className="space-y-4 relative z-10">
                        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-bold">5</span>
                            Refunds & Chargebacks
                        </h2>
                        <div className="bg-zinc-900/30 border border-gray-800 rounded-xl p-6 text-gray-300 leading-relaxed">
                            <p className="mb-4">Refunds, if applicable, are governed strictly by the Refund Policy published on our website.</p>
                            <div className="bg-red-900/10 border border-red-900/30 p-4 rounded-lg">
                                <p className="font-medium text-white mb-2">Unauthorized chargebacks or disputes may result in:</p>
                                <ul className="space-y-1 text-sm text-gray-400 list-disc list-inside ml-2">
                                    <li>Immediate termination of access</li>
                                    <li>Permanent suspension from all current and future programs</li>
                                    <li>Recovery of applicable fees, penalties, and administrative costs</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* 6. Intellectual Property */}
                    <div className="space-y-4 relative z-10">
                        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-bold">6</span>
                            Intellectual Property
                        </h2>
                        <div className="bg-zinc-900/30 border border-gray-800 rounded-xl p-6 text-gray-300 leading-relaxed flex items-start gap-4">
                            <div className="mt-1 text-purple-400"><ShieldCheck size={24} /></div>
                            <div className="space-y-2">
                                <p>All content (videos, frameworks, materials, etc.) are the <span className="text-white font-medium">exclusive intellectual property</span> of Scale100Million.</p>
                                <p className="text-sm text-gray-400">Any unauthorized use, reproduction, distribution, recording, or commercial exploitation is strictly prohibited and may result in legal action.</p>
                            </div>
                        </div>
                    </div>

                    {/* 7. Other Legal Provisions */}
                    <div className="space-y-4 relative z-10">
                        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-bold">7</span>
                            Other Legal Provisions
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                { title: "Disclaimer", content: "All content is for educational guidance only. Outcomes assume action and vary by individual." },
                                { title: "Limitation of Liability", content: "We are not liable for indirect damages or technical failures. Total liability is limited to the amount paid." },
                                { title: "Termination", content: "We reserve the right to terminate access for violations without refund." },
                                { title: "Force Majeure", content: "We are not liable for delays due to events beyond our control." },
                            ].map((item, idx) => (
                                <div key={idx} className="bg-zinc-900/30 border border-gray-800 p-4 rounded-xl">
                                    <h4 className="font-bold text-white mb-1">{item.title}</h4>
                                    <p className="text-sm text-gray-400">{item.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 11. Governing Law & Jurisdiction */}
                    <div className="space-y-4 relative z-10">
                        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-bold">11</span>
                            Governing Law & Jurisdiction
                        </h2>
                        <div className="bg-zinc-900/30 border border-gray-800 rounded-xl p-6 text-gray-300 leading-relaxed flex items-center gap-4">
                            <div className="bg-primary/10 p-3 rounded-full text-primary">
                                <MapPin size={24} />
                            </div>
                            <p>
                                These Terms shall be governed by the laws of <span className="text-white font-medium">India</span>, and courts at <span className="text-white font-medium">Pune, Maharashtra</span> shall have exclusive jurisdiction over any disputes.
                            </p>
                        </div>
                    </div>

                    {/* Business & Billing Info */}
                    <div className="mt-12 bg-zinc-900/50 border border-gray-800 rounded-2xl p-6 text-center space-y-2">
                        <h3 className="text-white font-bold">Business & Billing Information</h3>
                        <p className="text-sm text-gray-400">Scale100Million.com is owned and operated by <span className="text-white font-medium">Abhay Mukund Lagad</span>.</p>
                        <p className="text-sm text-gray-400">All payments made on this website will appear on billing statements under the name <span className="text-white font-medium">“ABHAY MUKUND LAGAD”</span>.</p>
                    </div>

                </div>
            </motion.div>
        </section>
    );
}
