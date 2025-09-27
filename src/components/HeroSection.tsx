import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

export default function HeroSection() {
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
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-br from-geora-dark via-background to-geora-darker">
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-geora-purple/20 via-transparent to-geora-blue/20 animate-pulse"></div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--geora-purple)) 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, hsl(var(--geora-blue)) 0%, transparent 50%)`,
            backgroundSize: '100% 100%',
            animation: 'float 6s ease-in-out infinite'
          }}></div>
        </div>
        
        {/* Tech grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M30 30h-2v-2h2v2zm0-10h-2v-2h2v2zm0 20h-2v-2h2v2zm10-10h-2v-2h2v2zm-20 0h-2v-2h2v2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-background/40"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Main Headline */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 animate-fade-in-up">
          Don't Let Your{" "}
          <span className="bg-gradient-primary bg-clip-text text-transparent animate-glow-pulse">
            Competitors Dominate
          </span>{" "}
          AI Searches
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-12 leading-relaxed max-w-4xl mx-auto animate-fade-in-up animate-delay-200">
          Claim your Free AI Visibility Report today and unlock the strategy to outperform in AI search results.
        </p>

        {/* Primary CTA */}
        <div className="mb-16 animate-scale-in animate-delay-500">
          <Button 
            size="lg" 
            className="text-xl md:text-2xl px-12 py-8 rounded-2xl shadow-glow hover:shadow-purple transition-all duration-300 transform hover:scale-105 animate-glow-pulse bg-gradient-primary hover:bg-gradient-secondary border-0"
            onClick={() => window.open('https://calendly.com/hello-georaai/30min', '_blank')}
          >
            Get Your Free AI Visibility Report
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
          
          <div className="flex items-center justify-center text-lg text-muted-foreground mt-6 animate-fade-in animate-delay-700">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
            Join Forward-Thinking Brands Optimizing for AI
          </div>
        </div>
      </div>

      {/* Stats Grid - Bottom Section */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in-up animate-delay-700">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-card/30 backdrop-blur-lg border border-border/30 hover:bg-card/50 transition-all duration-300 animate-pop-up"
              style={{ animationDelay: `${800 + index * 100}ms` }}
            >
              <div className="text-4xl lg:text-5xl font-bold mb-3">
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  className="bg-gradient-primary bg-clip-text text-transparent"
                />
              </div>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}