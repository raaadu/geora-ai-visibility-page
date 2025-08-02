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
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            What Makes{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Geora Different
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See the transformation that happens when brands optimize for AI visibility
          </p>
        </div>

        {/* Simple Toggle */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-muted rounded-xl p-2 gap-2">
            <Button
              variant={!showAfter ? "default" : "ghost"}
              className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
                !showAfter 
                  ? 'bg-primary text-primary-foreground shadow-md' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              onClick={() => setShowAfter(false)}
            >
              Before Geora
            </Button>
            <Button
              variant={showAfter ? "default" : "ghost"}
              className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
                showAfter 
                  ? 'bg-primary text-primary-foreground shadow-md' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              onClick={() => setShowAfter(true)}
            >
              After Geora
            </Button>
          </div>
        </div>

        {/* Simple Comparison Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Before Card */}
            <Card className={`p-8 transition-all duration-500 ${
              !showAfter 
                ? 'bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800/50 scale-105' 
                : 'bg-muted/30 border-border/30 opacity-60'
            }`}>
              <div className="flex items-center mb-6">
                <div className="w-4 h-4 rounded-full bg-red-500 mr-3"></div>
                <h3 className="text-2xl font-bold text-red-600 dark:text-red-400">Before Geora</h3>
              </div>
              <div className="space-y-4">
                {beforeItems.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 rounded-lg bg-background/50">
                    <item.icon className={`h-5 w-5 ${item.color}`} />
                    <span className="text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <div className="text-4xl font-bold text-red-500 mb-2">12%</div>
                <div className="text-muted-foreground">AI Visibility Score</div>
              </div>
            </Card>

            {/* After Card */}
            <Card className={`p-8 transition-all duration-500 ${
              showAfter 
                ? 'bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800/50 scale-105' 
                : 'bg-muted/30 border-border/30 opacity-60'
            }`}>
              <div className="flex items-center mb-6">
                <div className="w-4 h-4 rounded-full bg-green-500 mr-3"></div>
                <h3 className="text-2xl font-bold text-green-600 dark:text-green-400">After Geora</h3>
              </div>
              <div className="space-y-4">
                {afterItems.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 rounded-lg bg-background/50">
                    <item.icon className={`h-5 w-5 ${item.color}`} />
                    <span className="text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <div className="text-4xl font-bold text-green-500 mb-2">87%</div>
                <div className="text-muted-foreground">AI Visibility Score</div>
              </div>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button variant="hero" size="lg">
              Start Your AI Optimization
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}