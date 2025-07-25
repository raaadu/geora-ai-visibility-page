import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Clock, Users, Zap, TrendingUp, Award } from "lucide-react";

export default function TrustSection() {
  const trustItems = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 compliant with end-to-end encryption"
    },
    {
      icon: Clock,
      title: "99.9% Uptime",
      description: "Reliable monitoring with real-time alerts"
    },
    {
      icon: Users,
      title: "Growing Community",
      description: "Join forward-thinking brands optimizing for AI"
    },
    {
      icon: Zap,
      title: "Instant Setup",
      description: "Get started in under 5 minutes"
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Average 34% increase in AI visibility"
    },
    {
      icon: Award,
      title: "Industry First",
      description: "Pioneer in AI optimization technology"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Trusted by{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Forward-Thinking
            </span>{" "}
            Brands
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Be part of the first wave of brands optimizing for the AI-first future
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {trustItems.map((item, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-all duration-300 animate-pop-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-primary/10 flex items-center justify-center mr-3 group-hover:bg-gradient-primary/20 transition-colors duration-300">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold">{item.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="bg-gradient-subtle rounded-2xl p-8 text-center border border-border/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="animate-pop-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-bold mb-2">
                <span className="bg-gradient-primary bg-clip-text text-transparent">500+</span>
              </div>
              <p className="text-muted-foreground">Brands getting started</p>
            </div>
            <div className="animate-pop-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-3xl font-bold mb-2">
                <span className="bg-gradient-primary bg-clip-text text-transparent">10K+</span>
              </div>
              <p className="text-muted-foreground">AI prompts analyzed</p>
            </div>
            <div className="animate-pop-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl font-bold mb-2">
                <span className="bg-gradient-primary bg-clip-text text-transparent">Early</span>
              </div>
              <p className="text-muted-foreground">Mover advantage</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}