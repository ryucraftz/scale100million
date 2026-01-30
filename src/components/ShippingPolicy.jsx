import LegalLayout from "./LegalLayout";
import { Truck } from "lucide-react";

export default function ShippingPolicy() {
  const sections = [
    {
      title: "Mode of Delivery",
      content: (
        <div className="space-y-4">
          <p>All products, programs, and services offered by Scale100Million are delivered digitally through one or more of the following methods:</p>
          <ul className="list-disc list-inside space-y-1 pl-2 marker:text-gray-500">
            <li>Online dashboards or learning platforms.</li>
            <li>Email communication.</li>
            <li>Live online sessions or recorded content.</li>
          </ul>
        </div>
      )
    },
    {
      title: "Delivery Confirmation",
      content: (
        <div className="space-y-4">
          <p>Delivery is considered complete once:</p>
          <ul className="list-disc list-inside space-y-1 pl-2 marker:text-gray-500">
            <li>Login credentials, access links, or program instructions are shared via email or made available through an online dashboard.</li>
          </ul>
          <p className="text-sm italic text-gray-400">
            It is the user’s responsibility to ensure that correct contact details (especially email address) are provided at the time of purchase.
          </p>
        </div>
      )
    },
    {
      title: "No Physical Shipping",
      content: (
        <div className="space-y-4">
          <p>As all services are digital:</p>
          <ul className="list-disc list-inside space-y-1 pl-2 marker:text-gray-500">
            <li>There are <span className="text-white font-medium">no shipping charges</span>.</li>
            <li>There is <span className="text-white font-medium">no physical shipment, courier service, or tracking number</span>.</li>
          </ul>
        </div>
      )
    },
    {
      title: "Support",
      content: (
        <div>
          <p>For any issues related to access or delivery, users may contact us at:</p>
          <a href="mailto:scale100million@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors font-medium block mt-2">
            scale100million@gmail.com
          </a>
        </div>
      )
    }
  ];

  return (
    <LegalLayout title="Shipping Policy" icon={Truck}>
      <div className="mb-12 text-center md:text-left">
        <p className="text-gray-400 text-lg leading-relaxed">
          Scale100Million is a digital service–based education and implementation company. We do not ship any physical products.
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
    </LegalLayout>
  );
}
