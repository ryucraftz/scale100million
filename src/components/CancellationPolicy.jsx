import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function CancellationPolicy() {
    const sections = [
        {
            title: "Program Cancellation",
            content: (
                <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p>
                        To cancel a program or service, you must contact our support team directly. Users may request cancellation by emailing our support team at <a href="mailto:scale100million@gmail.com" className="text-primary hover:underline">scale100million@gmail.com</a> within the eligible cancellation window, if applicable.
                    </p>
                </div>
            )
        },
        {
            title: "Effect of Cancellation",
            content: (
                <div className="space-y-4 text-gray-300 leading-relaxed">
                    <ul className="list-disc list-inside space-y-1 pl-2">
                        <li>Cancellation stops future access or participation in the program or service immediately.</li>
                        <li>Cancellation does <span className="text-white font-medium">not</span> automatically entitle the user to a refund.</li>
                        <li>Refund eligibility, if any, is governed strictly by our Refund Policy.</li>
                    </ul>
                </div>
            )
        },
        {
            title: "Subscription Services (If Applicable)",
            content: (
                <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p>For recurring billing or subscription-based services:</p>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                        <li>Cancellation must be completed <span className="text-white font-medium">before the next billing cycle</span> to avoid charges for that period.</li>
                        <li>Access continues until the end of the current billing period.</li>
                        <li>No partial or prorated refunds are issued for unused time.</li>
                    </ul>
                </div>
            )
        },
        {
            title: "Misuse & Policy Violations",
            content: (
                <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p>We reserve the right to cancel access without prior notice in case of:</p>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                        <li>Violation of our Terms & Conditions.</li>
                        <li>Content misuse or unauthorized sharing.</li>
                        <li>Abusive, fraudulent, or unlawful behavior.</li>
                    </ul>
                    <p className="text-sm italic text-red-400">
                        Such cancellation does not entitle the user to any refund.
                    </p>
                </div>
            )
        }
    ];

    return (
        <section className="w-full min-h-screen bg-black text-white py-20 px-6 md:px-20">
            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <div className="mb-16 border-b border-white/10 pb-8">
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Cancellation Policy</h1>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        This policy explains how cancellations work for our programs and services.
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
