import LegalLayout from "./LegalLayout";
import { Ban } from "lucide-react";

export default function CancellationPolicy() {
    const sections = [
        {
            title: "Program Cancellation",
            content: (
                <div className="space-y-4">
                    <p>
                        To cancel a program or service, you must contact our support team directly. Users may request cancellation by emailing our support team at <a href="mailto:scale100million@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">scale100million@gmail.com</a> within the eligible cancellation window, if applicable.
                    </p>
                </div>
            )
        },
        {
            title: "Effect of Cancellation",
            content: (
                <div className="space-y-4">
                    <ul className="list-disc list-inside space-y-1 pl-2 marker:text-gray-500">
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
                <div className="space-y-4">
                    <p>For recurring billing or subscription-based services:</p>
                    <ul className="list-disc list-inside space-y-1 pl-2 marker:text-gray-500">
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
                <div className="space-y-4">
                    <p>We reserve the right to cancel access without prior notice in case of:</p>
                    <ul className="list-disc list-inside space-y-1 pl-2 marker:text-gray-500">
                        <li>Violation of our Terms & Conditions.</li>
                        <li>Content misuse or unauthorized sharing.</li>
                        <li>Abusive, fraudulent, or unlawful behavior.</li>
                    </ul>
                    <p className="text-sm italic text-red-400 border-l-2 border-red-500/50 pl-3 py-1">
                        Such cancellation does not entitle the user to any refund.
                    </p>
                </div>
            )
        }
    ];

    return (
        <LegalLayout title="Cancellation Policy" icon={Ban}>
            <div className="mb-12 text-center md:text-left">
                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                    This policy explains how cancellations work for our programs and services.
                </p>
            </div>

            <div className="space-y-10">
                {sections.map((section, idx) => (
                    <div key={idx} className="border-b border-white/5 pb-8 last:border-0 last:pb-0">
                        <h2 className="text-lg md:text-xl font-semibold text-white mb-4">
                            {idx + 1}. {section.title}
                        </h2>
                        <div className="text-sm md:text-base text-gray-300 leading-relaxed">
                            {section.content}
                        </div>
                    </div>
                ))}
            </div>
        </LegalLayout>
    );
}
