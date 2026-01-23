import { CheckCircle, XCircle } from "lucide-react";

export default function WhyandWhyNot() {
  return (
    <section className="bg-black py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Who This Is Perfect For */}
        <div className="bg-[#111] p-8 rounded-xl shadow-lg border border-gray-800">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
           Perfect Fit If You’re…
          </h2>
          <p className="text-gray-300 mb-6">
            We work exclusively with online fat loss coaches who:
          </p>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start gap-2">
              <CheckCircle className="text-green-500 w-6 h-6 flex-shrink-0" />
              <span>Are already making $5K+/month.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-green-500 w-6 h-6 flex-shrink-0" />
              <span>Sell structured programs (like 12-week fat loss offers).</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-green-500 w-6 h-6 flex-shrink-0" />
              <span>
                Want to scale fast, without the stress of building funnels,
                running ads, or hiring a tech team.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-green-500 w-6 h-6 flex-shrink-0" />
              <span>Are ready to take more sales calls and close more deals.</span>
            </li>
          </ul>
        </div>

        {/* This is not for */}
        <div className="bg-[#111] p-8 rounded-xl shadow-lg border border-gray-800">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Not the Right Fit If…
          </h2>
          <p className="text-gray-300 mb-6">
            We work exclusively with online fat loss coaches who:
          </p>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start gap-2">
              <XCircle className="text-red-500 w-6 h-6 flex-shrink-0" />
              <span>Beginners or general fitness trainers.</span>
            </li>
            <li className="flex items-start gap-2">
              <XCircle className="text-red-500 w-6 h-6 flex-shrink-0" />
              <span>Coaches not ready to sell high-ticket.</span>
            </li>
            <li className="flex items-start gap-2">
              <XCircle className="text-red-500 w-6 h-6 flex-shrink-0" />
              <span>Anyone just “testing”.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 flex justify-center">
        <button className="px-8 py-3 bg-white text-black font-semibold rounded-full shadow-lg 
                           hover:scale-105 transition-transform duration-300">
          Your Full Client Acquisition System, Done in 15 Days
        </button>
      </div>
    </section>
  );
}
