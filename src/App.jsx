import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Features from "./components/Features";
import Footer from "./components/Footer";
import HomePage from "./components/Home";
import RevealOnScroll from "./components/RevealOnScroll";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import WhySection from "./components/WhySection";
import StatsSection from "./components/StatsSection";
import ContactUs from "./components/ContactUs";
import ServicesHeader from "./components/ServicesHeader";
import ScrollToTop from "./components/ScrollToTop";
import PrivacyPolicy from "./components/PrivacyPolicy";
import DoneForYou from "./components/DoneForYou";
import GrowthSection from "./components/GrowthSection";
import ShippingPolicy from "./components/ShippingPolicy";
import TermsAndConditions from "./components/TermsAndConditions";
import PartnerWithUs from "./components/PartnerWithUs";
import WhatWeDo from "./components/WhatWeDo";
import WhyBuilt from "./components/WhyBuilt";
import OurGoal from "./components/OurGoal";
import Media from "./components/Media";
import JoinOurTeam from "./components/JoinOurTeam";
import DesignYourGrowthEngine from "./components/DesignYourGrowthEngine";
import ThankYou from "./components/ThankYou";

function AppContent() {
  const location = useLocation();
  const isThankYouPage = location.pathname === '/thank-you';

  return (
    <>
      <ScrollToTop />
      {!isThankYouPage && <Navbar />}
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <HomePage />
              <RevealOnScroll delay={0.1}><PartnerWithUs /></RevealOnScroll>
              <RevealOnScroll delay={0.1}><WhatWeDo /></RevealOnScroll>
              <RevealOnScroll delay={0.1}><WhyBuilt /></RevealOnScroll>
              <RevealOnScroll delay={0.1}><OurGoal /></RevealOnScroll>
              <RevealOnScroll delay={0.1}><Media /></RevealOnScroll>
              <RevealOnScroll delay={0.1}><JoinOurTeam /></RevealOnScroll>
              <RevealOnScroll delay={0.1}><DesignYourGrowthEngine /></RevealOnScroll>
              <RevealOnScroll delay={0.1}><ContactUs /></RevealOnScroll>
            </>
          }
        />

        {/* Contact Page */}
        <Route path="/contact" element={<ContactUs />} />

        {/* Privacy Policy Page */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        {/* Done For You Page */}
        <Route path="/doneforyou" element={<DoneForYou />} />

        {/* Shipping Policy Page */}
        <Route path="/shipping-policy" element={<ShippingPolicy />} />

        {/* Terms and Conditions Page */}
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />

        {/* Thank You Page */}
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>

      {!isThankYouPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
