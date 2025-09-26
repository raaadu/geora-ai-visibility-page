import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Twitter, 
  Linkedin, 
  Github, 
  Mail, 
  ArrowRight,
  ExternalLink
} from "lucide-react";

export default function Footer() {
  const footerSections = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "Demo", href: "#demo" },
        { label: "API", href: "/api" },
        { label: "Integrations", href: "/integrations" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "/docs" },
        { label: "Blog", href: "/blog" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "AI SEO Guide", href: "/guide" },
        { label: "Webinars", href: "/webinars" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
        { label: "Press", href: "/press" },
        { label: "Partners", href: "/partners" }
      ]
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "/help" },
        { label: "Community", href: "/community" },
        { label: "Status", href: "/status" },
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" }
      ]
    }
  ];

  return (
    <footer className="bg-background border-t border-border">
      {/* Call to Action Section */}
      <div className="bg-gradient-subtle relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-72 h-72 bg-geora-purple/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-geora-blue/30 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 lg:px-8 py-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Dominate{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                AI Recommendations?
              </span>
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join forward-thinking brands already optimizing for AI. Get your free visibility audit and discover your AI opportunity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <Button 
                size="lg" 
                className="h-12 px-8"
                onClick={() => window.open('https://calendly.com/hello-georaai/30min', '_blank')}
              >
                Get Your Free AI Visibility Report
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">5 min</div>
                <p className="text-sm text-muted-foreground">Quick audit call</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">Free</div>
                <p className="text-sm text-muted-foreground">No commitment</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">Instant</div>
                <p className="text-sm text-muted-foreground">Results you can use</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Geora
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              The first AI SEO optimization platform helping brands dominate recommendations across ChatGPT, Claude, and beyond.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: Twitter, href: "https://twitter.com/geora", label: "Twitter" },
                { icon: Linkedin, href: "https://linkedin.com/company/geora", label: "LinkedIn" },
                { icon: Github, href: "https://github.com/geora", label: "GitHub" }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-muted/50 hover:bg-primary/10 flex items-center justify-center transition-colors duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center group"
                    >
                      {link.label}
                      {link.href.startsWith('http') && (
                        <ExternalLink className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-12" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2024 Geora. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="/privacy" className="hover:text-primary transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-primary transition-colors duration-200">
              Terms of Service
            </a>
            <a href="/cookies" className="hover:text-primary transition-colors duration-200">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}