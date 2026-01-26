import { motion } from "framer-motion";
import { FileText, MapPin } from "lucide-react";

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
                className="max-w-3xl w-full"
            >
                {/* Header Section */}
                <div className="text-center mb-10 space-y-4">
                    <div className="inline-block p-3 rounded-full bg-primary/10 mb-4 text-primary">
                        <FileText size={40} />
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white">
                        Terms & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Conditions</span>
                    </h1>
                    <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
                        Please read these terms carefully before using our services.
                    </p>
                </div>

                <div className="bg-surface/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-800 p-6 md:p-10 space-y-8 relative overflow-hidden">

                    {/* Background accent */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-primary/10 to-transparent rounded-full blur-[120px] pointer-events-none -mr-32 -mt-32" />

                    <div className="relative z-10 space-y-6 text-gray-300 leading-relaxed text-base md:text-lg font-light">
                        <p>
                            Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern our relationship with you.
                        </p>

                        <div className="flex flex-col md:flex-row gap-6 p-6 bg-zinc-900/50 rounded-2xl border border-gray-800">
                            <div className="flex-1">
                                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Service Provider</h3>
                                <p className="text-white font-semibold text-lg">Abhay Mukund Lagad</p>
                                <div className="mt-3 flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        NIRMAN AJINKYATARA, VADGAON BUDRUK 411041, Vadgaon Budruk, MH, 411041
                                    </p>
                                </div>
                            </div>
                            <div className="hidden md:block w-px bg-gray-700" />
                            <div className="flex-1">
                                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Billing Entity</h3>
                                <p className="text-white font-semibold text-lg">Abhay Mukund Lagad</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                                <span className="w-8 h-1 bg-primary rounded-full" />
                                General Terms
                            </h2>
                            <ul className="space-y-4 pl-4">
                                <li className="flex gap-4 items-start">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                                    <span>The content of this website is for your general information and use only. It is subject to change without notice.</span>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                                    <span>Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
