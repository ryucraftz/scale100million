import { motion } from "framer-motion";

export default function ContactUs() {
    return (
        <section id="contact" className="py-20 px-6 bg-background flex justify-center items-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-full max-w-md bg-gray-900 rounded-3xl p-6 md:p-10 text-center shadow-2xl mx-4 md:mx-0"
            >
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-black text-white leading-tight uppercase tracking-tight">
                        Indian Capitalist <br />
                        Coming Soon!
                    </h2>

                    <p className="text-gray-400 text-sm md:text-base font-medium">
                        For those who question the obvious and seek the unseen.
                    </p>

                    <form className="space-y-4 pt-4">
                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full md:w-1/2 bg-gray-800 border border-gray-700 rounded-full px-6 py-4 text-white placeholder-gray-400 font-medium focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full md:w-1/2 bg-gray-800 border border-gray-700 rounded-full px-6 py-4 text-white placeholder-gray-400 font-medium focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>
                        <input
                            type="tel"
                            placeholder="Phone"
                            className="w-full bg-gray-800 border border-gray-700 rounded-full px-6 py-4 text-white placeholder-gray-400 font-medium focus:outline-none focus:ring-2 focus:ring-primary"
                        />

                        <button
                            type="submit"
                            className="w-full bg-primary hover:bg-blue-600 text-white font-bold text-lg py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-primary/50"
                        >
                            Join the Waitlist
                        </button>
                    </form>
                </div>
            </motion.div>
        </section>
    );
}
