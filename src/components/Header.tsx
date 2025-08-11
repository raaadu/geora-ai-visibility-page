import { useState } from "react";
import { Menu, X, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  isDark?: boolean;
  toggleTheme?: () => void;
}

export default function Header({ isDark, toggleTheme }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const restartAnimations = () => {
    // Force page reload to restart all animations
    window.location.reload();
  };

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Demo", href: "#demo" },
    { label: "Pricing", href: "#pricing" },
    { label: "Resources", href: "#resources" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-900/95 via-purple-800/95 to-purple-900/95 backdrop-blur-lg border-b border-purple-500/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={restartAnimations}
          >
            <img 
              src="/lovable-uploads/f66def2f-c175-45e1-a2fd-26742e104c89.png" 
              alt="Geora Icon" 
              className="h-10 w-10 opacity-90 hover:opacity-100 transition-opacity duration-200"
            />
            <img 
              src="/lovable-uploads/af0d949e-d8dc-4aa2-a602-f10b816398bb.png" 
              alt="Geora Logo" 
              className="h-8 w-auto opacity-90 hover:opacity-100 transition-opacity duration-200"
            />
            <RotateCcw className="h-4 w-4 opacity-0 group-hover:opacity-50 transition-opacity duration-200 text-white/60" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white/80 hover:text-white transition-colors duration-200 relative group font-medium"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="demo" size="default">
              Schedule Demo
            </Button>
            <Button variant="hero" size="default">
              Join Waitlist
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:bg-white/10"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-purple-500/20 bg-purple-900/95 backdrop-blur-lg">
            <nav className="flex flex-col space-y-4 py-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white/80 hover:text-white transition-colors duration-200 px-4 py-2 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col space-y-2 px-4 pt-4 border-t border-purple-500/20">
                <Button variant="demo" size="default" className="w-full">
                  Schedule Demo
                </Button>
                <Button variant="hero" size="default" className="w-full">
                  Join Waitlist
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}