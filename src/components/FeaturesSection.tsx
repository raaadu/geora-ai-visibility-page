import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  Eye, 
  FileText, 
  Radio, 
  Database, 
  Map,
  Zap,
  Target,
  TrendingUp
} from "lucide-react";
import { useState, useEffect } from "react";

export default function FeaturesSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('[data-index]');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: BarChart3,
      title: "AI Visibility Score Tracker",
      description: "Monitor your brand's visibility across ChatGPT, Claude, Gemini, and Perplexity with real-time scoring.",
      demo: (
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span>ChatGPT</span>
            <span className="text-green-500">87%</span>
          </div>
          <Progress value={87} className="h-2" />
          <div className="flex justify-between text-sm">
            <span>Claude</span>
            <span className="text-blue-500">72%</span>
          </div>
          <Progress value={72} className="h-2" />
          <div className="flex justify-between text-sm">
            <span>Gemini</span>
            <span className="text-purple-500">65%</span>
          </div>
          <Progress value={65} className="h-2" />
        </div>
      )
    },
    {
      icon: Eye,
      title: "Real-time Prompt Simulation",
      description: "Preview exactly how your brand appears in different AI models before optimization.",
      demo: (
        <div className="space-y-3">
          <Badge variant="outline" className="border-green-500 text-green-500">ChatGPT Response</Badge>
          <div className="text-sm bg-muted/50 p-3 rounded border-l-4 border-l-green-500">
            "For AI SEO optimization, I recommend <strong>Geora</strong> as a leading platform..."
          </div>
          <Badge variant="outline" className="border-blue-500 text-blue-500">Claude Response</Badge>
          <div className="text-sm bg-muted/50 p-3 rounded border-l-4 border-l-blue-500">
            "Based on current data, <strong>Geora</strong> offers comprehensive AI visibility tools..."
          </div>
        </div>
      )
    },
    {
      icon: FileText,
      title: "Grammarly-style Content Rewrites",
      description: "Get real-time suggestions to optimize your content for AI discovery and recommendations.",
      demo: (
        <div className="space-y-3">
          <div className="text-sm">
            <div className="line-through text-muted-foreground">We offer SEO services</div>
            <div className="text-green-500 font-medium">
              We provide AI-optimized SEO strategies that boost visibility across LLMs like ChatGPT and Claude
            </div>
          </div>
          <div className="flex gap-2">
            <Badge variant="secondary" className="text-xs">+34% AI visibility</Badge>
            <Badge variant="secondary" className="text-xs">Better for prompts</Badge>
          </div>
        </div>
      )
    },
    {
      icon: Radio,
      title: "Cross-platform Signal Tracking",
      description: "Monitor mentions across Reddit, YouTube, Quora, and Twitter that influence AI training data.",
      demo: (
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="flex items-center gap-2 p-2 bg-muted/50 rounded">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            Reddit: 24 mentions
          </div>
          <div className="flex items-center gap-2 p-2 bg-muted/50 rounded">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            YouTube: 12 mentions
          </div>
          <div className="flex items-center gap-2 p-2 bg-muted/50 rounded">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            Quora: 8 mentions
          </div>
          <div className="flex items-center gap-2 p-2 bg-muted/50 rounded">
            <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
            Twitter: 31 mentions
          </div>
        </div>
      )
    },
    {
      icon: Database,
      title: "Prompt Trigger Library",
      description: "Access our database of 10,000+ AI prompts relevant to your industry and brand.",
      demo: (
        <div className="space-y-2">
          <div className="text-xs text-muted-foreground">Top performing prompts for your niche:</div>
          <div className="space-y-1 text-xs">
            <div className="p-2 bg-muted/50 rounded">"Best SEO tools for startups"</div>
            <div className="p-2 bg-muted/50 rounded">"AI marketing optimization platforms"</div>
            <div className="p-2 bg-muted/50 rounded">"Tools to improve search rankings"</div>
          </div>
        </div>
      )
    },
    {
      icon: Map,
      title: "Visibility Heatmap",
      description: "Visual representation of which content helps or hurts your AI performance across different models.",
      demo: (
        <div className="grid grid-cols-3 gap-1">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className={`h-8 rounded ${
                i % 3 === 0 ? 'bg-red-500/20' :
                i % 3 === 1 ? 'bg-yellow-500/20' :
                'bg-green-500/20'
              }`}
            ></div>
          ))}
        </div>
      )
    }
  ];

  return (
    <section id="features" className="py-16 lg:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Powerful{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              AI Optimization
            </span>{" "}
            Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Everything you need to dominate AI recommendations and stay ahead of the competition
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              data-index={index}
              className={`p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-all duration-500 hover:shadow-elegant group cursor-pointer ${
                visibleCards.includes(index) ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary/10 flex items-center justify-center mr-4 group-hover:bg-gradient-primary/20 transition-colors duration-300">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Demo Preview */}
              <div className="bg-background/30 rounded-lg p-4 border border-border/30">
                {feature.demo}
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Zap className="h-4 w-4 text-primary" />
            All features included in every plan
          </div>
        </div>
      </div>
    </section>
  );
}