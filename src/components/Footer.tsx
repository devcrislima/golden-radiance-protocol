import { Button } from "@/components/ui/button";
import { ArrowRight, Instagram, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const scrollToOffer = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Final CTA */}
      <div className="bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
            Pronta para <span className="gold-gradient-text">transformar</span> sua pele?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Agende agora e descubra o poder do rejuvenescimento natural 
            com BOTOX + Peeling de Ouro.
          </p>
          <Button variant="premium" size="xl" onClick={scrollToOffer} className="group">
            Garantir Meu Tratamento
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Footer content */}
      <div className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Logo */}
            <div>
              <h3 className="font-serif text-2xl font-medium mb-2">
                <span className="gold-gradient-text">Solar</span> Derma
              </h3>
              <p className="text-sm text-muted-foreground">
                Estética Avançada
              </p>
            </div>

            {/* Contact */}
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">Sua cidade, Estado</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm">(00) 00000-0000</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex justify-end">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Solar Derma. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
