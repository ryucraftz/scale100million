import { motion } from "framer-motion";
import { Ban, AlertTriangle, FileText, CheckCircle2, RotateCcw, XCircle } from "lucide-react";

export default function CancellationPolicy() {
    const sections = [
        {
            id: 1,
            title: "Program Cancellation",
            icon: <Ban size={24} />,
            content: (
                <div className="space-y-4 text-gray-400">
                    <p>
                        To cancel a program or service, you must contact our support team directly.
                    </p>
                    <a href="mailto:scale100million@gmail.com" className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-lg text-primary hover:bg-primary/20 transition-colors font-medium border border-primary/20">
                        <Mail size={16} /> scale100million@gmail.com
                    </a>
                    <p className="text-sm italic">Requests must be made within the eligible cancellation window, if applicable to your specific program.</p>
                </div>
            )
        },
        {
            id: 2,
            title: "Effect of Cancellation",
            icon: <XCircle size={24} />,
            content: (
                <div className="grid gap-3">
                    {[
                        "Stops future access or participation immediately.",
                        "Does not automatically entitle you to a refund.",
                        "Refund eligibility is governed separately by our Refund Policy."
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 bg-red-500/5 rounded-lg border border-red-500/10 text-gray-300">
                            <XCircle className="text-red-400 shrink-0 mt-0.5" size={16} />
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
            )
        },
        {
            id: 3,
            title: "Subscription Services",
            icon: <RotateCcw size={24} />,
            content: (
                <div className="space-y-4 text-gray-400">
                    <p className="border-l-2 border-primary pl-4 text-white font-medium">For recurring billing or subscription services:</p>
                    <ul className="space-y-2 list-disc list-inside ml-2">
                        <li>Cancellation must be completed <span className="text-white">before the next billing cycle</span> to avoid charges.</li>
                        <li>Access continues until the end of the current billing period.</li>
                        <li>No partial or prorated refunds are issued for unused time.</li>
                    </ul>
                </div>
            )
        },
        {
            id: 4,
            title: "Misuse & Policy Violations",
            icon: <AlertTriangle size={24} />,
            content: (
                <div className="bg-orange-500/10 border border-orange-500/20 p-5 rounded-xl space-y-3">
                    <h4 className="text-orange-400 font-bold uppercase text-sm tracking-wide flex items-center gap-2">
                        <AlertTriangle size={16} /> Immediate Cancellation Without Notice
                    </h4>
                    <p className="text-gray-300 text-sm">We reserve the right to terminate access instantly if:</p>
                    <ul className="text-sm text-gray-400 space-y-1 list-disc list-inside pl-2">
                        <li>Terms & Conditions are violated</li>
                        <li>Content is misused or shared without authorization</li>
                        <li>Abusive, fraudulent, or unlawful behavior occurs</li>
                    </ul>
                    <p className="text-xs text-orange-300/60 italic pt-2 border-t border-orange-500/10 mt-2">
                        Violations result in forfeiture of any potential refund.
                    </p>
                </div>
            )
        }
    ];

    return (
        <section id="cancellation-policy" className="w-full min-h-screen bg-black text-white py-24 md:py-36 px-6 relative overflow-hidden">

            {/* Background Ambience */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[150px]" />
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
                        <Ban size={14} /> Account & Service Actions
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
                        Cancellation <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Policy</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Understanding how to stop, pause, or cancel your services with us.
                    </p>
                </motion.div>

                {/* Sections Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {sections.map((section, idx) => (
                        <motion.div
                            key={section.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group relative h-full"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-orange-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur" />

                            <div className="relative h-full p-8 rounded-2xl bg-zinc-900/40 border border-white/10 hover:border-white/20 transition-colors duration-300 flex flex-col">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-white/5 rounded-xl text-primary border border-white/5 group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                                        {section.icon}
                                    </div>
                                    <h2 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                                        {section.title}
                                    </h2>
                                </div>
                                <div className="leading-relaxed flex-grow">
                                    {section.content}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
