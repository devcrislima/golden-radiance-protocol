import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-woman.jpg";

const HeroSection = () => {
  const scrollToOffer = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPricing = () => {
    document.getElementById("valores")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-cream to-background">
      {/* Subtle decorative elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary/3 rounded-full blur-2xl" />
      
      {/* Subtle gold line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Oferta Especial até 31/12
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6 animate-fade-in-up text-balance text-foreground">
              Pele renovada, expressão{" "}
              <span className="gold-gradient-text">natural</span> e
              <br />
              <span className="text-primary">glow imediato.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Tratamento combinado de BOTOX + Peeling de Ouro para homens e mulheres 
              que buscam rejuvenescimento seguro e resultados reais.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <Button 
                variant="premium" 
                size="xl" 
                onClick={scrollToOffer}
                className="group gold-shimmer"
              >
                Comprar agora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="goldOutline" 
                size="xl" 
                onClick={scrollToPricing}
              >
                Ver valores
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 mt-12 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm">Profissionais Habilitados</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm">Resultados Naturais</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm">Retorno Incluso</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-elegant">
              <img
                src={heroImage}
                alt="Mulher com pele radiante e saudável após tratamento estético"
                className="w-full aspect-[4/3] object-cover"
              />
              {/* Subtle gold border overlay */}
              <div className="absolute inset-0 rounded-3xl border-2 border-primary/20" />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-card border border-primary/30 rounded-2xl p-4 md:p-5 shadow-elegant">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-muted-foreground">Para</p>
                  <p className="font-serif text-base md:text-lg text-primary font-medium">Homens e Mulheres</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: "1s" }}>
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Saiba mais</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;