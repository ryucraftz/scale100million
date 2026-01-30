import LegalLayout from "./LegalLayout";
import { RefreshCw } from "lucide-react";

export default function RefundPolicy() {
    const sections = [
        {
            title: "Digital Services & Programs",
            content: (
                <div className="space-y-4">
                    <p>
                        Scale100Million provides digital education, consulting, and implementation services. Due to the nature of our business—providing immediate access to proprietary information, intellectual property, downloadable content, and systems—all sales are generally <span className="text-white font-bold">final and non-refundable</span>.
                    </p>
                </div>
            )
        },
        {
            title: "Limited Refund Window (If Offered)",
            content: (
                <div className="space-y-4">
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
                <div className="space-y-4">
                    <p>Refunds will NOT be granted for:</p>
                    <ul className="list-disc list-inside space-y-1 pl-2 marker:text-gray-500">
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
                <p>
                    If a refund is approved by the Company in accordance with these terms, it will be processed within <span className="text-white font-medium">5-7 business days</span> via the original payment method.
                </p>
            )
        },
        {
            title: "Chargebacks",
            content: (
                <div className="space-y-4">
                    <p>
                        Any unauthorized chargeback initiated by the user will be treated as <span className="text-white font-bold">fraud and theft of services</span>.
                    </p>
                    <p>Consequences include:</p>
                    <ul className="list-disc list-inside space-y-1 pl-2 marker:text-gray-500">
                        <li>Immediate and permanent ban from all Scale100Million services.</li>
                        <li>Reporting to relevant credit bureaus and fraud prevention databases.</li>
                        <li>Legal action to recover fees, penalties, and administrative costs.</li>
                    </ul>
                </div>
            )
        }
    ];

    return (
        <LegalLayout title="Refund Policy" icon={RefreshCw}>
            <div className="mb-12 text-center md:text-left">
                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                    At Scale100Million, we deliver high-value digital products and services. Please review our refund policy carefully.
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
