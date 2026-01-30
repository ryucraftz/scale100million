import LegalLayout from "./LegalLayout";
import { FileText } from "lucide-react";

export default function TermsAndConditions() {
    const sections = [
        {
            title: "Nature of Services",
            content: (
                <div className="space-y-4">
                    <p>
                        Scale100Million is a <span className="text-white font-medium">service-based education and implementation company</span>. We provide business education, consulting, training programs, mentorship, strategic frameworks, and done-for-you services.
                    </p>
                    <p>
                        Certain programs may include performance-based or income-linked guarantees. These apply <span className="text-white font-bold">only</span> if the participant strictly follows the exact steps, processes, timelines, and implementation requirements communicated by the Company. Any guarantee applies only where explicitly stated in writing on the official sales page or agreement.
                    </p>
                </div>
            )
        },
        {
            title: "Program Access & Usage",
            content: (
                <div className="space-y-4">
                    <p>Access is granted <span className="text-white font-medium">only to the single registered user</span>.</p>
                    <ul className="list-disc list-inside space-y-2 pl-2 marker:text-gray-500">
                        <li>Sharing, selling, sublicensing, or transferring access to any third party is strictly prohibited.</li>
                        <li>Screen recording, redistribution, reproduction, or resale of any content is not permitted.</li>
                    </ul>
                    <p className="text-red-400 font-medium bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                        Violation of these terms will result in immediate termination of access without refund and may lead to legal action for damages.
                    </p>
                </div>
            )
        },
        {
            title: "Payments",
            content: (
                <ul className="list-disc list-inside space-y-2 marker:text-gray-500">
                    <li>All payments are processed through secure third-party payment gateways.</li>
                    <li>Prices, offers, and program structures may be modified at the Company’s discretion at any time.</li>
                    <li>Applicable taxes, including GST, are charged as per Indian government regulations.</li>
                </ul>
            )
        },
        {
            title: "Guarantee Conditions & Limitations",
            content: (
                <div className="space-y-4">
                    <p>Where a guarantee is offered, it is subject to <span className="text-white font-bold">strict and complete compliance</span> by the user. Requirements include:</p>
                    <ul className="list-disc list-inside space-y-1 pl-2 marker:text-gray-500">
                        <li>Full attendance of all required sessions.</li>
                        <li>Completion of all assigned tasks and worksheets.</li>
                        <li>Adherence to timelines & systems provided.</li>
                        <li>Honest, verifiable execution of strategies.</li>
                    </ul>
                    <p className="border-l-2 border-red-500/50 pl-4 py-1 mt-2 text-gray-400 italic">
                        <strong>Voiding the Guarantee:</strong> If any step is skipped, delayed, altered, or if false/misleading information is provided, the guarantee is void. The burden of proof of execution rests solely with the participant.
                    </p>
                </div>
            )
        },
        {
            title: "Refunds & Chargebacks",
            content: (
                <div className="space-y-4">
                    <p>Refunds, if applicable, are governed strictly by the Refund Policy published on our website.</p>
                    <p><span className="text-white font-bold">Unauthorized Chargebacks:</span> Any unauthorized chargeback initiated by a user will be treated as fraud/theft of services. This will result in:</p>
                    <ul className="list-disc list-inside space-y-1 pl-2 marker:text-gray-500">
                        <li>Immediate termination of access.</li>
                        <li>Permanent ban from all future programs.</li>
                        <li>Legal action to recover fees and penalties.</li>
                    </ul>
                </div>
            )
        },
        {
            title: "Intellectual Property",
            content: (
                <div className="space-y-4">
                    <p>
                        All content provided—including videos, documents, frameworks, recordings, trademarks, logos, and methodologies—is the <span className="text-white font-bold">exclusive intellectual property</span> of Scale100Million.
                    </p>
                    <p>
                        Any unauthorized use, reproduction, distribution, public performance, or commercial exploitation is strictly prohibited.
                    </p>
                </div>
            )
        },
        {
            title: "Disclaimer",
            content: (
                <div className="space-y-4">
                    <p>All content is provided for educational and implementation guidance purposes only.</p>
                    <p>
                        While we provide proven systems, individual outcomes may vary due to market conditions, execution quality, external dependencies, and personal effort. The Company does not guarantee any specific earnings or results unless explicitly stated in a specific program agreement.
                    </p>
                </div>
            )
        },
        {
            title: "Limitation of Liability",
            content: (
                <div className="space-y-4">
                    <p>Scale100Million shall not be liable for:</p>
                    <ul className="list-disc list-inside space-y-1 pl-2 marker:text-gray-500">
                        <li>Indirect, incidental, special, or consequential damages.</li>
                        <li>Loss of revenue, profit, data, or business opportunities.</li>
                        <li>Technical disruptions or failures caused by third-party platforms.</li>
                    </ul>
                    <p className="font-medium text-white">
                        The Company’s total liability shall not exceed the amount actually paid by the participant for the specific service.
                    </p>
                </div>
            )
        },
        {
            title: "Termination",
            content: (
                <div className="space-y-4">
                    <p>The Company reserves the right to suspend or terminate access without prior notice if:</p>
                    <ul className="list-disc list-inside space-y-1 pl-2 marker:text-gray-500">
                        <li>These Terms are violated.</li>
                        <li>There is misuse, abuse, or fraudulent behavior.</li>
                        <li>Guarantee conditions are misrepresented.</li>
                    </ul>
                    <p>Termination under these conditions does not entitle the participant to a refund.</p>
                </div>
            )
        },
        {
            title: "Force Majeure",
            content: (
                <p>
                    The Company shall not be liable for any failure or delay in performance due to events beyond reasonable control, including but not limited to natural disasters, government actions, internet/technical failures, or third-party service disruptions.
                </p>
            )
        },
        {
            title: "Governing Law & Jurisdiction",
            content: (
                <p>
                    These Terms shall be governed by and construed in accordance with the laws of <span className="text-white font-medium">India</span>. The courts at <span className="text-white font-medium">Pune, Maharashtra</span> shall have exclusive jurisdiction over any disputes arising out of or in connection with these Terms.
                </p>
            )
        }
    ];

    return (
        <LegalLayout title="Terms & Conditions" icon={FileText}>
            <div className="mb-12 text-center md:text-left">
                <p className="text-gray-400 text-lg leading-relaxed">
                    Please read these terms carefully before using our services. By using our website, programs, or content, you agree to these legal obligations.
                </p>
            </div>

            <div className="space-y-10">
                {sections.map((section, idx) => (
                    <div key={idx} className="border-b border-white/5 pb-8 last:border-0 last:pb-0">
                        <h2 className="text-xl font-semibold text-white mb-4">
                            {idx + 1}. {section.title}
                        </h2>
                        <div className="text-base text-gray-300 leading-relaxed">
                            {section.content}
                        </div>
                    </div>
                ))}
            </div>

            {/* Business Info Footer */}
            <div className="mt-12 pt-8 border-t border-white/10 text-gray-500 text-sm space-y-2">
                <h3 className="text-white font-semibold text-base mb-2">Business & Billing Information</h3>
                <p>Scale100Million.com is owned and operated by <span className="text-white">Abhay Mukund Lagad</span>.</p>
                <p>All payments made on this website will appear on billing statements under the name <span className="text-white">“ABHAY MUKUND LAGAD”</span>.</p>
            </div>
        </LegalLayout>
    );
}
