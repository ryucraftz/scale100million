import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./components/Home";
import Navbar from "./components/Navbar";
import RevealOnScroll from "./components/RevealOnScroll";
import ScrollToTop from "./components/ScrollToTop";
import StickyCTA from "./components/StickyCTA";
import BackToTop from "./components/BackToTop";

// Lazy Load Components
const Features = lazy(() => import("./components/Features"));
const Footer = lazy(() => import("./components/Footer"));
const Services = lazy(() => import("./components/Services"));
const WhySection = lazy(() => import("./components/WhySection"));
const StatsSection = lazy(() => import("./components/StatsSection"));
const ContactUs = lazy(() => import("./components/ContactUs"));
const ServicesHeader = lazy(() => import("./components/ServicesHeader"));
const PrivacyPolicy = lazy(() => import("./components/PrivacyPolicy"));
const DoneForYou = lazy(() => import("./components/DoneForYou"));
const GrowthSection = lazy(() => import("./components/GrowthSection"));
const ShippingPolicy = lazy(() => import("./components/ShippingPolicy"));
const TermsAndConditions = lazy(() => import("./components/TermsAndConditions"));
const PartnerWithUs = lazy(() => import("./components/PartnerWithUs"));
const WhatWeDo = lazy(() => import("./components/WhatWeDo"));
const WhyBuilt = lazy(() => import("./components/WhyBuilt"));
const OurGoal = lazy(() => import("./components/OurGoal"));
const Media = lazy(() => import("./components/Media"));
const JoinOurTeam = lazy(() => import("./components/JoinOurTeam"));
const DesignYourGrowthEngine = lazy(() => import("./components/DesignYourGrowthEngine"));
const ThankYou = lazy(() => import("./components/ThankYou"));
const NotFound = lazy(() => import("./components/NotFound"));

// Visual Loader
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

function AppContent() {
  const location = useLocation();
  const isThankYouPage = location.pathname === '/thank-you';

  return (
    <Suspense fallback={<PageLoader />}>
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

          {/* 404 Page (Must be last) */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        {!isThankYouPage && <Footer />}
        {!isThankYouPage && <StickyCTA />}
        <BackToTop />
      </>
    </Suspense>
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
