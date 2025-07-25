import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

export default function SocialProofSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "VP Marketing",
      company: "TechFlow",
      avatar: "SC",
      rating: 5,
      quote: "Since using Geora, our brand mentions in AI responses increased by 67%. We're now the go-to recommendation for project management tools.",
      result: "+67% AI mentions"
    },
    {
      name: "Marcus Rodriguez",
      role: "Founder",
      company: "Growth Labs",
      avatar: "MR",
      rating: 5,
      quote: "Geora helped us identify and optimize the exact content that AI models were using to train. Game-changing insights.",
      result: "+45% visibility score"
    },
    {
      name: "Jennifer Park",
      role: "Head of SEO",
      company: "Datawise Inc",
      avatar: "JP",
      rating: 5,
      quote: "The real-time content suggestions are incredible. It's like having an AI optimization expert built into our CMS.",
      result: "+89% ChatGPT presence"
    }
  ];

  const logos = [
    "TechFlow", "Growth Labs", "Datawise Inc", "CloudSync", "AI Ventures", "StartupX"
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Company Logos */}
        <div className="text-center mb-16">
          <p className="text-muted-foreground mb-8">Trusted by 500+ brands worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="text-lg font-semibold text-muted-foreground hover:text-foreground transition-colors duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {logo}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            What Our{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Customers Say
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Real results from real businesses optimizing for AI visibility
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-all duration-500 hover:shadow-elegant animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <Quote className="h-8 w-8 text-primary/30 mb-4" />

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-3 mb-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={`/placeholder-${testimonial.avatar.toLowerCase()}.jpg`} />
                  <AvatarFallback className="bg-gradient-primary text-white">
                    {testimonial.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>

              {/* Result Badge */}
              <Badge variant="secondary" className="bg-green-500/10 text-green-500 border-green-500/20">
                {testimonial.result}
              </Badge>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          {[
            { value: "500+", label: "Active Brands" },
            { value: "67%", label: "Avg. Visibility Increase" },
            { value: "24h", label: "Setup Time" },
            { value: "99.9%", label: "Uptime" }
          ].map((stat, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}