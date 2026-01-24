import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Features from "./components/Features";
import Footer from "./components/Footer";
import HomePage from "./components/Home";
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
              <StatsSection />
              <WhySection />
              <ServicesHeader />
              <Services />
              <Features />
              <GrowthSection />
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
