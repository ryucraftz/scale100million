import "../index.css";

export default function GrowthSection() {
  return (
    <section className="bg-black py-16 px-6 md:px-16 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Not an agency
        </h2>
        <p className="text-lg md:text-xl text-white mb-8">
          Scale100Million is not a marketing agency. We build systems for
          growth inside of your business as an inside collaborative partner, not
          an outside agency.
        </p>
        <p className="text-lg md:text-xl text-white mb-8">
          If you’d like to understand how we could grow bigger and better
          together – book a strategy call with a team.
        </p>

        {/* Button with Shine Animation */}
        <div className="flex justify-center">
          <a
            href="/book-strategy-call"
            className="relative px-6 py-3 bg-red-600 text-white font-semibold 
             text-sm sm:text-base md:text-lg rounded-full shadow-lg overflow-hidden
             w-max transition transform hover:scale-105 duration-300 ease-out"
          >
            Book a Strategy Call
            <span className="animate-cross-line"></span>
          </a>

        </div>
      </div>
    </section>
  );
}
