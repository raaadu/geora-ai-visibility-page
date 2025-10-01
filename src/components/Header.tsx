import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import georaIcon from "@/assets/geora-logo-icon.png";
import georaLogo from "@/assets/geora-logo-white.png";

interface HeaderProps {
  isDark?: boolean;
  toggleTheme?: () => void;
}

export default function Header({ isDark, toggleTheme }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Demo", href: "#demo" },
    { label: "Pricing", href: "#pricing" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-geora-dark/95 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer group hover:opacity-90 transition-opacity duration-200">
            <img 
              src={georaIcon}
              alt="Geora Icon" 
              className="h-6 w-6 object-contain"
            />
            <img 
              src={georaLogo}
              alt="Geora Logo" 
              className="h-8 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 relative group font-medium"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="default"
              onClick={() => window.open('https://calendly.com/hello-georaai/30min', '_blank')}
            >
              Schedule Demo
            </Button>
            <Button 
              variant="default" 
              size="default"
              onClick={() => window.open('https://calendly.com/hello-georaai/30min', '_blank')}
            >
              Get Your Free AI Visibility Report
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-muted-foreground hover:text-foreground"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/50 bg-geora-dark/95 backdrop-blur-lg">
            <nav className="flex flex-col space-y-4 py-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 px-4 py-2 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col space-y-2 px-4 pt-4 border-t border-border/50">
                <Button 
                  variant="outline" 
                  size="default" 
                  className="w-full"
                  onClick={() => {
                    window.open('https://calendly.com/hello-georaai/30min', '_blank');
                    setIsMenuOpen(false);
                  }}
                >
                  Schedule Demo
                </Button>
                <Button 
                  variant="default" 
                  size="default" 
                  className="w-full"
                  onClick={() => {
                    window.open('https://calendly.com/hello-georaai/30min', '_blank');
                    setIsMenuOpen(false);
                  }}
                >
                  Get Your Free AI Visibility Report
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}