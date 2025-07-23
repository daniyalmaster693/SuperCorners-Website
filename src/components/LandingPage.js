import FaqSection from "./landingPageComponents/FaqSection";
import Footer from "./landingPageComponents/Footer";
import FeatureDisplay from "./landingPageComponents/FeatureDisplay";
import HeroSection from "./landingPageComponents/HeroSection";

function LandingPage() {
  return (
    <>
      <HeroSection />
      <FeatureDisplay />
      <FaqSection />
      <Footer />
    </>
  );
}

export default LandingPage;
