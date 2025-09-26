import { ThemeProvider, useTheme } from "@/hooks/use-theme";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ComparisonSection from "@/components/ComparisonSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";

import FAQSection from "@/components/FAQSection";
import TrustSection from "@/components/TrustSection";
import Footer from "@/components/Footer";

function GeoraLanding() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <PricingSection />
        <HeroSection />
        <ComparisonSection />
        <FeaturesSection />
        <TrustSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}

const Index = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="geora-theme">
      <GeoraLanding />
    </ThemeProvider>
  );
};

export default Index;
