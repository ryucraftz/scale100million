import { motion } from "framer-motion";
import serviceImg1 from "../assets/ImageService1.jpg";
import serviceImg2 from "../assets/FoundersImg.jpg";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Services() {
    const services = [
        {
            title: "Done-For-You Scaling System",
            description: "Everything you need to grow — done for you: Marketing, Sales, Funnels, Ads & Coaching Systems. One team. One system.",
            image: serviceImg1,
            link: "/doneforyou",
            cta: "Get Started"
        },
        {
            title: "Founder Club Mentorship",
            description: "A step-by-step 'Zero to Hero Success System' to grow your service business to 8 Figure income with weekly mentorship.",
            image: serviceImg2,
            link: "https://scale100million.com/founders-club/",
            cta: "Join the Club",
            external: true
        }
    ];

    return (
        <section id="services" className="py-16 md:py-24 bg-black relative">
            <div className="max-w-[1400px] mx-auto px-4 md:px-12">
                <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-primary font-bold tracking-wider uppercase text-xs md:text-sm mb-2 block">Our Programs</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                            Elite Programs for <br /> <span className="text-gray-500">Ambitious Coaches</span>
                        </h2>
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="group relative bg-[#0a0a0a] rounded-xl md:rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2"
                        >
                            <div className="aspect-[16/9] overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed mb-8 line-clamp-3">
                                    {service.description}
                                </p>

                                {service.external ? (
                                    <a
                                        href={service.link}
                                        className="inline-flex items-center gap-2 text-white font-bold tracking-wide group-hover:gap-4 transition-all duration-300"
                                    >
                                        {service.cta} <ArrowRight size={20} />
                                    </a>
                                ) : (
                                    <Link
                                        to={service.link}
                                        className="inline-flex items-center gap-2 text-white font-bold tracking-wide group-hover:gap-4 transition-all duration-300"
                                    >
                                        {service.cta} <ArrowRight size={20} />
                                    </Link>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
