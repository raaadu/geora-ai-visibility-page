import { ThemeProvider, useTheme } from "@/hooks/use-theme";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ComparisonSection from "@/components/ComparisonSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import SocialProofSection from "@/components/SocialProofSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

function GeoraLanding() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header isDark={theme === "dark"} toggleTheme={toggleTheme} />
      <main>
        <HeroSection />
        <ComparisonSection />
        <FeaturesSection />
        <SocialProofSection />
        <PricingSection />
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
