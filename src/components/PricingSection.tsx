import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Star, ArrowRight } from "lucide-react";

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 lg:py-24 bg-gradient-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-white/5"></div>
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-geora-purple/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Main CTA at top of pricing */}
        <div className="text-center mb-16">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 mb-4"
            onClick={() => window.open('https://calendly.com/hello-georaai/30min', '_blank')}
          >
            Get Your Free AI Visibility Report
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Book a call with us to discuss the results of your free AI visibility report.
          </p>
        </div>
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Special Offer
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Custom plans tailored to your brand's AI visibility needs
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="relative p-8 lg:p-12 bg-card/50 backdrop-blur-sm border border-primary/50 shadow-purple text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-primary flex items-center justify-center">
              <Star className="h-8 w-8 text-white" />
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Limited Time: Free AI Visibility Audit
            </h3>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Get a personalized assessment of your brand's AI visibility and a custom optimization strategy. 
              No commitment required.
            </p>

            <div className="space-y-4 mb-8 text-left max-w-md mx-auto">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Complete AI visibility assessment across major LLMs</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Competitive analysis and positioning insights</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Custom optimization roadmap and strategy</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>1-on-1 consultation with AI visibility expert</span>
              </div>
            </div>

            <Button 
              size="lg" 
              className="w-full sm:w-auto px-8"
              onClick={() => window.open('https://calendly.com/hello-georaai/30min', '_blank')}
            >
              Book a Free Call
            </Button>
            
            <p className="text-sm text-muted-foreground mt-4">
              Limited spots available • No credit card required
            </p>
          </Card>
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-16 space-y-4">
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Free consultation
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Expert guidance
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