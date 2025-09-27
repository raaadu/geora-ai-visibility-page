import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle, Mail } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";
import georaLogoIcon from "@/assets/geora-logo-icon.png";

export default function HeroSection() {
  const [email, setEmail] = useState("");

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log("Email submitted:", email);
  };

  const stats = [
    {
      value: 62,
      suffix: "%",
      description: "of Gen Z use AI tools like ChatGPT before Google when researching brands"
    },
    {
      value: 80,
      suffix: "%",
      description: "of LLM outputs are trained on Reddit, Quora, YouTube transcripts, and Twitter"
    },
    {
      value: 34,
      suffix: "%",
      description: "average increase in AI-generated brand mentions for optimized brands"
    },
    {
      value: 44,
      suffix: "%",
      description: "improvement in chatbot visibility with AI-enhanced metadata"
    }
  ];

  return (
    <section className="min-h-screen flex items-center bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, hsl(var(--geora-purple)) 0%, transparent 50%), 
                           radial-gradient(circle at 80% 20%, hsl(var(--geora-blue)) 0%, transparent 50%), 
                           radial-gradient(circle at 40% 40%, hsl(var(--primary)) 0%, transparent 50%)`,
          backgroundSize: '100% 100%'
        }}></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='m20 18v-2h-2v2h-2v2h2v2h2v-2h2v-2h-2zm0-14V2h-2v2h-2v2h2v2h2V6h2V4h-2zM4 18v-2H2v2H0v2h2v2h2v-2h2v-2H4zM4 4V2H2v2H0v2h2v2h2V6h2V4H4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Logo Section */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <img 
                src={georaLogoIcon} 
                alt="Geora AI Logo" 
                className="w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="text-center lg:text-left">
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Don't Let Your{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Competitors Dominate
              </span>{" "}
              AI Searches
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Claim your free AI Visibility Report and discover how to outperform in AI search results.
            </p>

            {/* Main CTA */}
            <div className="mb-12">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 mb-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                onClick={() => window.open('https://calendly.com/hello-georaai/30min', '_blank')}
              >
                Get Your Free AI Visibility Report
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <div className="flex items-center justify-center lg:justify-start text-sm text-muted-foreground mt-4">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Join Forward-Thinking Brands Optimizing for AI
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid - moved to bottom */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50"
            >
              <div className="text-3xl lg:text-4xl font-bold mb-2">
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  className="bg-gradient-primary bg-clip-text text-transparent"
                />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}