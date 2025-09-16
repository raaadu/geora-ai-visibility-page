import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle, Mail } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

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
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-subtle relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-white/10"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-geora-purple/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-geora-blue/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Don't Let Your{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Competitors Dominate
            </span>{" "}
            AI Recommendations
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            While others focus on yesterday's SEO, you can be first to market with AI-optimized visibility. 
            Join forward-thinking brands already optimizing for AI.
          </p>

          {/* Book a Call Section */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Book a Call</h2>
            
            {/* Calendly Inline Widget */}
            <div className="w-full max-w-4xl mx-auto">
              <iframe 
                src="https://calendly.com/hello-georaai/30min?embed_domain=localhost&embed_type=Inline"
                width="100%" 
                height="700"
                frameBorder="0"
                scrolling="no"
                className="rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm"
                title="Schedule a call with Geora AI"
              ></iframe>
            </div>
            
            <div className="flex items-center justify-center mt-6 text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Join Forward-Thinking Brands Optimizing for AI
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
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
      </div>
    </section>
  );
}