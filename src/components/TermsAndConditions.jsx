import { motion } from "framer-motion";
import { FileText, MapPin, CheckCircle2, AlertTriangle, ShieldCheck, Mail, Gavel, Scale } from "lucide-react";

export default function TermsAndConditions() {
    const sections = [
        {
            id: 1,
            title: "Nature of Services",
            content: (
                <div className="space-y-4 text-gray-400">
                    <p>
                        Scale100Million is a <span className="text-white font-medium">service-based education and implementation company</span> providing business education, consulting, training programs, mentorship, strategic frameworks, and done-for-you services.
                    </p>
                    <p>
                        Certain programs may include performance-based or income-linked guarantees, provided the participant strictly follows the exact steps, processes, timelines, and implementation requirements communicated by the Company. Any guarantee applies only where explicitly stated in writing on the official sales page, onboarding material, or program documentation.
                    </p>
                </div>
            )
        },
        {
            id: 2,
            title: "Program Access & Usage",
            content: (
                <div className="space-y-4 text-gray-400">
                    <p>Access is granted <span className="text-white font-medium">only to the registered user</span>.</p>
                    <ul className="space-y-2">
                        {[
                            "Sharing, selling, sublicensing, or transferring access is strictly prohibited",
                            "Screen recording, redistribution, reproduction, or resale of content is not permitted"
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3 bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                                <AlertTriangle className="text-red-400 shrink-0 mt-0.5" size={16} />
                                <span className="text-red-200 text-sm">{item}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="text-sm font-semibold text-red-400 mt-2">
                        Violation of these terms may result in immediate termination of access without refund and may lead to legal action.
                    </p>
                </div>
            )
        },
        {
            id: 3,
            title: "Payments",
            content: (
                <ul className="space-y-3 text-gray-400">
                    <li className="flex items-center gap-3">
                        <CheckCircle2 className="text-green-400 shrink-0" size={18} />
                        All payments are processed through secure third-party payment gateways.
                    </li>
                    <li className="flex items-center gap-3">
                        <CheckCircle2 className="text-green-400 shrink-0" size={18} />
                        Prices, offers, and program structures may be modified at the Company’s discretion.
                    </li>
                    <li className="flex items-center gap-3">
                        <CheckCircle2 className="text-green-400 shrink-0" size={18} />
                        Applicable taxes, including GST, are charged as per Indian law.
                    </li>
                </ul>
            )
        },
        {
            id: 4,
            title: "Guarantee Conditions & Limitations",
            content: (
                <div className="space-y-6 text-gray-400">
                    <p>Where a guarantee is offered, it is subject to <span className="text-white font-bold">strict and complete compliance</span>, including but not limited to:</p>
                    <div className="grid md:grid-cols-2 gap-4">
                        {["Full attendance of required sessions", "Completion of all assigned tasks", "Adherence to timelines & systems", "Honest, verifiable execution"].map((item, idx) => (
                            <div key={idx} className="bg-white/5 border border-white/10 p-3 rounded-lg text-sm text-gray-300 flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                {item}
                            </div>
                        ))}
                    </div>
                    <div className="bg-red-900/10 border border-red-900/20 p-4 rounded-xl space-y-2">
                        <h4 className="text-red-400 font-bold text-sm uppercase tracking-wide">Conditions for Voiding Guarantee:</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-400 pl-2">
                            <li>Any step is skipped, delayed, altered, or partially implemented</li>
                            <li>False, incomplete, or misleading information is provided</li>
                            <li>Execution is inconsistent or cannot be verified</li>
                        </ul>
                        <p className="text-xs text-red-300/80 italic pt-2">The burden of proof rests solely with the participant.</p>
                    </div>
                </div>
            )
        },
        {
            id: 5,
            title: "Refunds & Chargebacks",
            content: (
                <div className="space-y-4 text-gray-400">
                    <p>Refunds, if applicable, are governed strictly by the Refund Policy published on our website.</p>
                    <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20">
                        <p className="font-bold text-orange-400 mb-2 text-sm uppercase">Unauthorized Chargebacks Consequences:</p>
                        <ul className="grid gap-2 text-sm text-gray-300">
                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-orange-500 rounded-full" /> Immediate termination of access</li>
                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-orange-500 rounded-full" /> Permanent suspension from all programs</li>
                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-orange-500 rounded-full" /> Recovery of fees & penalties</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 6,
            title: "Intellectual Property",
            content: (
                <div className="space-y-4 text-gray-400">
                    <p>
                        All content (videos, documents, frameworks, recordings, trademarks, logos, methodologies) are the <span className="text-white font-bold">exclusive intellectual property</span> of Scale100Million.
                    </p>
                    <p className="bg-purple-500/10 border border-purple-500/20 p-4 rounded-xl text-purple-200 text-sm">
                        Any unauthorized use, reproduction, distribution, recording, or commercial exploitation is strictly prohibited and may result in legal action.
                    </p>
                </div>
            )
        },
        {
            id: 7,
            title: "Disclaimer",
            content: (
                <div className="text-gray-400 space-y-3">
                    <p>All content is provided for educational and implementation guidance purposes only.</p>
                    <p>While certain programs may include conditional guarantees, outcomes may vary due to market conditions, execution quality, external dependencies, and individual circumstances.</p>
                    <p className="italic text-gray-500 text-sm">Participants are solely responsible for decisions and actions taken based on the content provided.</p>
                </div>
            )
        },
        {
            id: 8,
            title: "Limitation of Liability",
            content: (
                <div className="text-gray-400 space-y-3">
                    <p>Scale100Million shall not be liable for:</p>
                    <ul className="list-disc list-inside pl-4 space-y-1 text-gray-500 text-sm">
                        <li>Indirect, incidental, or consequential damages</li>
                        <li>Loss of revenue, profit, or business opportunities</li>
                        <li>Technical disruptions or failures caused by third-party platforms</li>
                    </ul>
                    <p className="font-medium text-white text-sm border-t border-white/5 pt-3 mt-2">
                        The Company’s total liability, if any, shall not exceed the amount paid by the participant for the specific service.
                    </p>
                </div>
            )
        },
        {
            id: 9,
            title: "Termination",
            content: (
                <div className="text-gray-400 space-y-3">
                    <p>The Company reserves the right to suspend or terminate access without prior notice if:</p>
                    <ul className="list-disc list-inside pl-4 space-y-1 text-gray-500 text-sm">
                        <li>These Terms are violated</li>
                        <li>There is misuse, abuse, or fraudulent behavior</li>
                        <li>Guarantee conditions are misrepresented or manipulated</li>
                    </ul>
                    <p className="text-red-400 font-medium text-sm">Termination does not entitle the participant to a refund.</p>
                </div>
            )
        },
        {
            id: 10,
            title: "Force Majeure",
            content: (
                <p className="text-gray-400">
                    The Company shall not be liable for any failure or delay in performance due to events beyond reasonable control, including natural disasters, government actions, technical failures, or third-party service disruptions.
                </p>
            )
        },
        {
            id: 11,
            title: "Governing Law & Jurisdiction",
            content: (
                <div className="flex items-start gap-4 p-4 bg-zinc-900/50 rounded-xl border border-white/5">
                    <Gavel className="text-primary mt-1" size={24} />
                    <p className="text-gray-400">
                        These Terms shall be governed by and construed in accordance with the laws of <span className="text-white font-medium">India</span>, and courts at <span className="text-white font-medium">Pune, Maharashtra</span> shall have exclusive jurisdiction over any disputes arising out of or in connection with these Terms.
                    </p>
                </div>
            )
        }
    ];

    return (
        <section id="terms-and-conditions" className="w-full min-h-screen bg-black text-white py-24 md:py-36 px-6 relative overflow-hidden">

            {/* Background Ambience */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2" />
            </div>

            <div className="max-w-5xl mx-auto relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 space-y-6"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                        <FileText size={14} /> Legal Documentation
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
                        Terms & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Conditions</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Please read these terms carefully before using our services. By using our website, programs, or content, you agree to these legal obligations.
                    </p>
                </motion.div>

                {/* Introduction */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mb-12 p-6 rounded-2xl bg-zinc-900/40 border border-white/10 text-center"
                >
                    <p className="text-gray-300">
                        Welcome to <span className="text-white font-medium">Scale100Million.com</span>. If you do not agree, please do not use our services.
                    </p>
                </motion.div>

                {/* Sections Grid */}
                <div className="grid gap-8">
                    {sections.map((section, idx) => (
                        <motion.div
                            key={section.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.05 }}
                            className="group relative"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur" />
                            <div className="relative p-6 md:p-8 rounded-2xl bg-black border border-white/10 hover:border-white/20 transition-colors duration-300">
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary font-bold text-lg border border-primary/20 group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                                        {section.id}
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                                        {section.title}
                                    </h2>
                                </div>
                                <div className="leading-relaxed pl-2 md:pl-14">
                                    {section.content}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Business Info Footer */}
                <div className="mt-16 p-8 rounded-3xl bg-zinc-900/60 border border-white/10 text-center space-y-3 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
                    <h3 className="text-white font-bold text-lg relative z-10">Business & Billing Information</h3>
                    <p className="text-gray-400 relative z-10">
                        Scale100Million.com is owned and operated by <span className="text-white font-medium">Abhay Mukund Lagad</span>.
                    </p>
                    <p className="text-gray-400 relative z-10">
                        All payments made on this website will appear on billing statements under the name <span className="text-white font-medium">“ABHAY MUKUND LAGAD”</span>.
                    </p>
                </div>

            </div>
        </section>
    );
}
