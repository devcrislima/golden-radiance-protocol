import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToOffer = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="font-serif text-2xl font-medium">
            <span className="gold-gradient-text">Solar</span>{" "}
            <span className="text-foreground">Derma</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("oferta")}
              className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider"
            >
              Tratamento
            </button>
            <button
              onClick={() => scrollToSection("oferta")}
              className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider"
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection("oferta")}
              className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider"
            >
              Sobre
            </button>
            <Button variant="gold" size="sm" onClick={scrollToOffer}>
              Agendar
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-background border-b border-border">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("oferta")}
              className="text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Tratamento
            </button>
            <button
              onClick={() => scrollToSection("oferta")}
              className="text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection("oferta")}
              className="text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Sobre
            </button>
            <Button variant="gold" onClick={scrollToOffer} className="w-full mt-2">
              Agendar Agora
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
