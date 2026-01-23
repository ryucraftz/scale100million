import { CheckCircle } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Price from "./Price";
import Comparison from "./Comparison";
import Why15Days from "./Why15Days";
import WhyCoachesSection from "./WhyChooseUs";
import LimitedSpots from "./LimitedSpots";

export default function DoneForYouCards() {
  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const cards = [
    {
      title: "1. Strategy + Offer Crafting (Days 1–3)",
      desc: "We help you create a powerful message and irresistible offer.",
      points: [
        "Refine your $2K – $5K high-ticket program",
        "Create magnetic hooks, price anchoring & emotional positioning",
        "Build in guarantees, scarcity & objection-killers",
      ],
    },
    {
      title: "2. Funnel + System Setup (Days 4–10)",
      desc: "High-converting funnel, backend systems & automation.",
      points: [
        "High-converting sales funnel (Landing page, VSL, thank you page)",
        "Copywriting & VSL script (we also help with recording + editing)",
        "Backend integrations: CRM, payment, email/SMS automation",
      ],
    },
    {
      title: "3. Paid Ads Launch (Days 11–15)",
      desc: "We launch and manage ads to fill your calendar with calls.",
      points: [
        "We write & launch your Meta (Facebook/Instagram) ads",
        "Daily campaign management with a live dashboard",
        "High-quality sales calls get booked directly into your calendar",
      ],
    },
    {
      title: "4. Sales Support to Close Like a Pro",
      desc: "Scripts, objection handling & live coaching support.",
      points: [
        "Plug-and-play sales script",
        "Objection handling & live call breakdowns",
        "Close $2K–$5K offers in under 45 mins",
      ],
    },
  ];

  const AnimatedCard = ({ card }) => {
    const controls = useAnimation();
    const isMobile =
      typeof window !== "undefined" && window.innerWidth < 768;

    const [ref, inView] = useInView({
      threshold: isMobile ? 0.15 : 0.2,
      rootMargin: isMobile ? "0px 0px -10% 0px" : "0px 0px -20% 0px",
      triggerOnce: false,
    });

    useEffect(() => {
      if (inView) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    }, [inView, controls]);

    return (
      <motion.div
        ref={ref}
        className="relative bg-[#7938B2] border border-purple-400/40 rounded-lg p-3 shadow-md text-sm"
        variants={cardVariants}
        initial="hidden"
        animate={controls}
      >
        <h3 className="text-base font-semibold text-white">{card.title}</h3>
        <p className="mt-1 text-xs text-purple-100 leading-relaxed">
          {card.desc}
        </p>
        <ul className="mt-2 space-y-1">
          {card.points.map((point, j) => (
            <li
              key={j}
              className="flex items-start gap-1 text-xs text-purple-100"
            >
              <CheckCircle className="text-white w-3.5 h-3.5 flex-shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    );
  };

  return ( 
    <>
    <section className="w-full bg-black text-white py-18 px-4 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* LEFT SIDE (Static Heading) */}
        <div className="self-center text-center md:text-left md:sticky md:top-16">
          <h2 className="text-xl md:text-3xl font-bold leading-snug">
            <span className="text-green-400 drop-shadow-lg">Payment?</span>{" "}
            <span className="text-white">Only When You Get Paid.</span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-gray-400 max-w-xs leading-relaxed mx-auto md:mx-0">
            You focus on closing clients — we handle everything else.
          </p>
        </div>

        {/* RIGHT SIDE (Animated Cards) */}
        <div className="flex flex-col space-y-14">
          {cards.map((card, i) => (
            <AnimatedCard key={i} card={card} />
          ))}
        </div>
      </div>
    </section>

    <Price/>
    <Comparison />
    <Why15Days />
    <WhyCoachesSection />
    <LimitedSpots />
    </>

  );
}
