import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./components/Home";
import Navbar from "./components/Navbar";
import RevealOnScroll from "./components/RevealOnScroll";
import ScrollToTop from "./components/ScrollToTop";

import BackToTop from "./components/BackToTop";
import SmoothScroll from "./components/SmoothScroll";
import FilmGrain from "./components/FilmGrain";
import MouseSpotlight from "./components/MouseSpotlight";

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
const RefundPolicy = lazy(() => import("./components/RefundPolicy"));
const TermsAndConditions = lazy(() => import("./components/TermsAndConditions"));
const CancellationPolicy = lazy(() => import("./components/CancellationPolicy"));
const AboutUs = lazy(() => import("./components/AboutUs"));
const PartnerWithUs = lazy(() => import("./components/PartnerWithUs"));
const PartnerSection = lazy(() => import("./components/PartnerSection"));
const JoinTeamSection = lazy(() => import("./components/JoinTeamSection"));
const WhatWeDo = lazy(() => import("./components/WhatWeDo"));
const WhyBuilt = lazy(() => import("./components/WhyBuilt"));
const OurGoal = lazy(() => import("./components/OurGoal"));
const Media = lazy(() => import("./components/Media"));
const JoinOurTeam = lazy(() => import("./components/JoinOurTeam"));
const DesignYourGrowthEngine = lazy(() => import("./components/DesignYourGrowthEngine"));
const FounderClubMentorship = lazy(() => import("./components/FounderClubMentorship"));
const AIAutomationServices = lazy(() => import("./components/AIAutomationServices"));
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
    <SmoothScroll>
      <FilmGrain />
      <ScrollToTop />
      {!isThankYouPage && <Navbar />}
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <HomePage />
              <Suspense fallback={<div className="min-h-[20vh] flex items-center justify-center"><div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" /></div>}>
                <RevealOnScroll delay={0.1}><FounderClubMentorship /></RevealOnScroll>
                <RevealOnScroll delay={0.1}><AIAutomationServices /></RevealOnScroll>
                <RevealOnScroll delay={0.1}><PartnerSection /></RevealOnScroll>
                <RevealOnScroll delay={0.1}><WhatWeDo /></RevealOnScroll>
                <RevealOnScroll delay={0.1}><WhyBuilt /></RevealOnScroll>
                <RevealOnScroll delay={0.1}><OurGoal /></RevealOnScroll>
                <RevealOnScroll delay={0.1}><Media /></RevealOnScroll>
                <RevealOnScroll delay={0.1}><JoinTeamSection /></RevealOnScroll>
                <RevealOnScroll delay={0.1}><DesignYourGrowthEngine /></RevealOnScroll>
              </Suspense>
            </>
          }
        />

        {/* Other Pages */}
        <Route path="/contact" element={<Suspense fallback={<PageLoader />}><ContactUs /></Suspense>} />
        <Route path="/partner" element={<Suspense fallback={<PageLoader />}><PartnerWithUs /></Suspense>} />
        <Route path="/join-team" element={<Suspense fallback={<PageLoader />}><JoinOurTeam /></Suspense>} />
        <Route path="/privacy-policy" element={<Suspense fallback={<PageLoader />}><PrivacyPolicy /></Suspense>} />
        <Route path="/doneforyou" element={<Suspense fallback={<PageLoader />}><DoneForYou /></Suspense>} />
        <Route path="/shipping-policy" element={<Suspense fallback={<PageLoader />}><ShippingPolicy /></Suspense>} />
        <Route path="/refund-policy" element={<Suspense fallback={<PageLoader />}><RefundPolicy /></Suspense>} />
        <Route path="/terms-and-conditions" element={<Suspense fallback={<PageLoader />}><TermsAndConditions /></Suspense>} />
        <Route path="/cancellation-policy" element={<Suspense fallback={<PageLoader />}><CancellationPolicy /></Suspense>} />
        <Route path="/about-us" element={<Suspense fallback={<PageLoader />}><AboutUs /></Suspense>} />
        <Route path="/thank-you" element={<Suspense fallback={<PageLoader />}><ThankYou /></Suspense>} />
        <Route path="*" element={<Suspense fallback={<PageLoader />}><NotFound /></Suspense>} />
      </Routes>

      {!isThankYouPage && <Footer />}
      <BackToTop />
    </SmoothScroll>
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
