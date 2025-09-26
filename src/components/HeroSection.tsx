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
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, hsl(var(--geora-purple)) 0%, transparent 50%), 
                           radial-gradient(circle at 80% 20%, hsl(var(--geora-blue)) 0%, transparent 50%), 
                           radial-gradient(circle at 40% 40%, hsl(var(--primary)) 0%, transparent 50%)`,
          backgroundSize: '100% 100%'
        }}></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
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

          {/* Main CTA Section */}
          <div className="mb-12">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 mb-4"
              onClick={() => window.open('https://calendly.com/hello-georaai/30min', '_blank')}
            >
              Get Your Free AI Visibility Report
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Book a call with us to discuss the results of your free AI visibility report.
            </p>
            
            <div className="flex items-center justify-center text-sm text-muted-foreground">
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