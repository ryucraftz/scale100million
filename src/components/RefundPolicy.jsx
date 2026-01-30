import { motion } from "framer-motion";
import { RefreshCcw, AlertTriangle, Clock, Ban, DollarSign, FileText, CheckCircle2 } from "lucide-react";

export default function RefundPolicy() {
    const sections = [
        {
            id: 1,
            title: "Digital Services & Programs",
            icon: <FileText size={24} />,
            content: (
                <div className="space-y-4 text-gray-400">
                    <p>
                        Scale100Million provides <span className="text-white font-medium">digital education, consulting, and implementation services</span>. Due to the immediate access to proprietary information, intellectual property, and downloadable content:
                    </p>
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3">
                        <Ban className="text-red-400 shrink-0" />
                        <span className="text-red-200 font-medium">All sales are generally final and non-refundable.</span>
                    </div>
                </div>
            )
        },
        {
            id: 2,
            title: "Limited Refund Window (If Offered)",
            icon: <Clock size={24} />,
            content: (
                <div className="space-y-4 text-gray-400">
                    <p>
                        Some specific programs <em>may</em> include a conditional refund policy (e.g., "Action-Based Refund"). This will be <span className="text-white font-medium">explicitly stated</span> on the sales page or agreement for that specific program.
                    </p>
                    <p className="text-sm border-l-2 border-primary pl-4 italic">
                        If no such policy is mentioned, the standard "No Refund" policy applies.
                    </p>
                </div>
            )
        },
        {
            id: 3,
            title: "Non-Refundable Situations",
            icon: <Ban size={24} />,
            content: (
                <div className="space-y-3 text-gray-400">
                    <p className="font-medium text-white">Refunds will NOT be granted for:</p>
                    <ul className="grid gap-2">
                        {[
                            "Change of mind after purchase",
                            "Failure to attend calls or consume content",
                            "Incompatibility with personal schedule",
                            "Financial hardship after purchase"
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm bg-white/5 p-2 rounded-lg">
                                <div className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            )
        },
        {
            id: 4,
            title: "Processing Time",
            icon: <DollarSign size={24} />,
            content: (
                <p className="text-gray-400">
                    If a refund is approved by the Company, it will be processed within <span className="text-white font-bold">5-7 business days</span> via the original payment method.
                </p>
            )
        },
        {
            id: 5,
            title: "Chargebacks",
            icon: <AlertTriangle size={24} />,
            content: (
                <div className="space-y-3 text-gray-400">
                    <p>
                        Unauthorized chargebacks are treated as <span className="text-white font-bold">fraud/theft</span> of services.
                    </p>
                    <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-xl space-y-2">
                        <p className="font-bold text-orange-400 text-sm uppercase">Consequences:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                            <li>Immediate and permanent ban from all Scale100Million services</li>
                            <li>Reporting to relevant credit bureaus and fraud prevention databases</li>
                            <li>Legal action to recover fees and damages</li>
                        </ul>
                    </div>
                </div>
            )
        }
    ];

    return (
        <section id="refund-policy" className="w-full min-h-screen bg-black text-white py-24 md:py-36 px-6 relative overflow-hidden">

            {/* Background Ambience */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]" />
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
                        <RefreshCcw size={14} /> Policy
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
                        Refund <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Policy</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        We prioritize clarity and fairness. Please review our refund terms carefully before making a purchase.
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
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group relative"
                        >
                            {/* Hover Gradient Border Effect */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur" />

                            <div className="relative p-6 md:p-8 rounded-2xl bg-black border border-white/10 hover:border-white/20 transition-colors duration-300 grid md:grid-cols-[60px_1fr] gap-6">

                                {/* Icon Box */}
                                <div className="hidden md:flex items-center justify-center w-14 h-14 rounded-xl bg-white/5 border border-white/5 text-primary group-hover:scale-110 transition-transform duration-300">
                                    {section.icon}
                                </div>

                                {/* Content */}
                                <div>
                                    <h2 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300 flex items-center gap-3">
                                        <span className="md:hidden text-primary">{section.icon}</span>
                                        {section.title}
                                    </h2>
                                    <div className="leading-relaxed">
                                        {section.content}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
