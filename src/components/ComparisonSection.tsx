import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X, CheckCircle, TrendingUp, Eye, Target, Zap } from "lucide-react";

export default function ComparisonSection() {
  const [showAfter, setShowAfter] = useState(false);

  const beforeItems = [
    { icon: X, text: "Invisible to AI tools", color: "text-red-500" },
    { icon: X, text: "No AI visibility tracking", color: "text-red-500" },
    { icon: X, text: "Relying on outdated SEO", color: "text-red-500" },
    { icon: X, text: "Missing AI-generated recommendations", color: "text-red-500" }
  ];

  const afterItems = [
    { icon: CheckCircle, text: "Visible across all major LLMs", color: "text-green-500" },
    { icon: TrendingUp, text: "Real-time AI performance tracking", color: "text-green-500" },
    { icon: Target, text: "Optimized for AI discovery", color: "text-green-500" },
    { icon: Zap, text: "Featured in AI recommendations", color: "text-green-500" }
  ];

  return (
    <section id="demo" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            What Makes{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Geora Different
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            See the transformation that happens when brands optimize for AI visibility
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="relative bg-muted p-1 rounded-lg">
            <div className={`absolute top-1 left-1 h-10 bg-primary rounded-md transition-all duration-300 ease-out ${showAfter ? 'w-28 translate-x-28' : 'w-28'}`}></div>
            <Button
              variant="ghost"
              className={`relative z-10 h-10 px-6 transition-colors duration-300 ease-out ${!showAfter ? 'text-primary-foreground' : 'text-foreground'}`}
              onClick={() => setShowAfter(false)}
            >
              Before Geora
            </Button>
            <Button
              variant="ghost"
              className={`relative z-10 h-10 px-6 transition-colors duration-300 ease-out ${showAfter ? 'text-primary-foreground' : 'text-foreground'}`}
              onClick={() => setShowAfter(true)}
            >
              After Geora
            </Button>
          </div>
        </div>

        {/* Comparison Cards */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-gradient-subtle border-border/50 shadow-elegant">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Before/After Content */}
              <div className="space-y-6">
                <div className="flex items-center mb-6">
                  <div className={`w-3 h-3 rounded-full mr-3 ${showAfter ? 'bg-green-500' : 'bg-red-500'}`}></div>
                  <h3 className="text-2xl font-bold">
                    {showAfter ? 'After Geora' : 'Before Geora'}
                  </h3>
                </div>

                <div className="space-y-4">
                  {(showAfter ? afterItems : beforeItems).map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-center space-x-3 p-3 rounded-lg bg-background/50 border border-border/30 transition-all duration-300 ${showAfter ? 'animate-slide-in-right' : 'animate-fade-in'}`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <item.icon className={`h-5 w-5 ${item.color}`} />
                      <span className="text-foreground">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Representation */}
              <div className="flex items-center justify-center">
                  <div className="relative">
                    {/* AI Visibility Meter */}
                    <div className="w-48 h-48 rounded-full border-8 border-border/20 relative overflow-hidden bg-background/50">
                      <div
                        className={`absolute bottom-0 left-0 right-0 bg-gradient-primary transition-all duration-1000 ease-out ${showAfter ? 'h-5/6' : 'h-1/6'}`}
                      ></div>
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div className="text-center">
                          <div className={`text-3xl font-bold transition-all duration-1000 ${showAfter ? 'text-foreground' : 'text-muted-foreground'}`}>
                            {showAfter ? '87%' : '12%'}
                          </div>
                          <div className={`text-sm transition-all duration-1000 ${showAfter ? 'text-foreground/80' : 'text-muted-foreground'}`}>
                            AI Visibility
                          </div>
                        </div>
                      </div>
                    </div>
                    <Eye className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-8 w-8 transition-all duration-1000 z-20 ${showAfter ? 'text-foreground scale-110' : 'text-muted-foreground'}`} />
                  </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12 pt-8 border-t border-border/30">
              <Button variant="hero" size="lg" className="animate-glow-pulse">
                Start Your AI Optimization
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}