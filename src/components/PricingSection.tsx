import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Zap, Crown } from "lucide-react";

export default function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for small businesses getting started with AI optimization",
      features: [
        "AI Visibility Score tracking",
        "Basic prompt simulation",
        "5 competitor comparisons",
        "Monthly visibility reports",
        "Email support",
        "Up to 3 websites"
      ],
      cta: "Start Free Trial",
      variant: "demo" as const,
      icon: Zap
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      description: "Most popular choice for growing companies",
      badge: "MOST POPULAR",
      features: [
        "Everything in Starter",
        "Real-time AI simulation",
        "Grammarly-style content rewrites",
        "Cross-platform signal tracking",
        "Prompt Trigger Library access",
        "Weekly optimization reports",
        "Priority support",
        "Up to 10 websites",
        "Custom bio optimization"
      ],
      cta: "Start Free Trial",
      variant: "hero" as const,
      popular: true,
      icon: Star
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Advanced features for large organizations",
      features: [
        "Everything in Professional",
        "Custom AI model training",
        "Dedicated account manager",
        "White-label reporting",
        "API access",
        "Custom integrations",
        "Advanced analytics",
        "Unlimited websites",
        "Phone support",
        "SLA guarantee"
      ],
      cta: "Contact Sales",
      variant: "demo" as const,
      icon: Crown
    }
  ];

  return (
    <section id="pricing" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Choose Your{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              AI Advantage
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Get started with AI optimization today. All plans include 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`relative p-8 bg-card/50 backdrop-blur-sm border transition-all duration-500 hover:shadow-elegant group ${
                plan.popular 
                  ? 'border-primary/50 shadow-purple scale-105 lg:scale-110' 
                  : 'border-border/50 hover:border-primary/20'
              } animate-scale-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-primary text-white px-4 py-1 font-semibold">
                    {plan.badge}
                  </Badge>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                  plan.popular ? 'bg-gradient-primary' : 'bg-gradient-primary/10'
                }`}>
                  <plan.icon className={`h-8 w-8 ${plan.popular ? 'text-white' : 'text-primary'}`} />
                </div>
                
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-4xl lg:text-5xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-start gap-3 text-sm"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button
                variant={plan.variant}
                size="lg"
                className={`w-full group-hover:scale-105 transition-transform duration-300 ${
                  plan.popular ? 'animate-glow-pulse' : ''
                }`}
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-16 space-y-4">
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              14-day free trial
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Cancel anytime
            </div>
          </div>
          <p className="text-muted-foreground">
            Trusted by 500+ brands including Fortune 500 companies
          </p>
        </div>
      </div>
    </section>
  );
}