import { motion } from "framer-motion";

export default function RefundPolicy() {
    const sections = [
        {
            title: "Digital Services & Programs",
            content: (
                <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p>
                        Scale100Million provides digital education, consulting, and implementation services. Due to the nature of our business—providing immediate access to proprietary information, intellectual property, downloadable content, and systems—all sales are generally <span className="text-white font-bold">final and non-refundable</span>.
                    </p>
                </div>
            )
        },
        {
            title: "Limited Refund Window (If Offered)",
            content: (
                <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p>
                        Some specific programs <em>may</em> include a conditional refund policy (e.g., an "Action-Based Refund"). If such a policy applies, it will be <span className="text-white font-bold">explicitly stated</span> on the specific sales page or agreement for that program.
                    </p>
                    <p className="italic text-gray-400">
                        In the absence of any such written policy for a specific purchase, the standard "No Refund" policy applies.
                    </p>
                </div>
            )
        },
        {
            title: "Non-Refundable Situations",
            content: (
                <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p>Refunds will NOT be granted for:</p>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                        <li>Change of mind after purchase.</li>
                        <li>Failure to attend calls or consume content.</li>
                        <li>Incompatibility with personal schedule.</li>
                        <li>Financial hardship after purchase.</li>
                        <li>Partial usage of the program.</li>
                    </ul>
                </div>
            )
        },
        {
            title: "Processing Time",
            content: (
                <p className="text-gray-300 leading-relaxed">
                    If a refund is approved by the Company in accordance with these terms, it will be processed within <span className="text-white font-medium">5-7 business days</span> via the original payment method.
                </p>
            )
        },
        {
            title: "Chargebacks",
            content: (
                <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p>
                        Any unauthorized chargeback initiated by the user will be treated as <span className="text-white font-bold">fraud and theft of services</span>.
                    </p>
                    <p>Consequences include:</p>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                        <li>Immediate and permanent ban from all Scale100Million services.</li>
                        <li>Reporting to relevant credit bureaus and fraud prevention databases.</li>
                        <li>Legal action to recover fees, penalties, and administrative costs.</li>
                    </ul>
                </div>
            )
        }
    ];

    return (
        <section className="w-full min-h-screen bg-black text-white py-20 px-6 md:px-20">
            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <div className="mb-16 border-b border-white/10 pb-8">
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Refund Policy</h1>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        We prioritize clarity and fairness. Please review our refund terms carefully before making a purchase.
                    </p>
                </div>

                {/* Content Sections */}
                <div className="space-y-12">
                    {sections.map((section, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                        >
                            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
                                {idx + 1}. {section.title}
                            </h2>
                            <div className="text-base md:text-lg">
                                {section.content}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
