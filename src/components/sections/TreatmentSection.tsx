import { Sparkles, Zap } from "lucide-react";
import goldTexture from "@/assets/gold-texture.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const TreatmentSection = () => {
  const scrollToOffer = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-background">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-elegant">
              <img
                src={goldTexture}
                alt="Peeling de Ouro - Tratamento premium"
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-card border border-primary/30 rounded-2xl p-5 shadow-elegant">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Protocolo</p>
                  <p className="font-serif text-xl text-primary font-medium">Exclusivo</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4">
              O Tratamento
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-balance text-foreground">
              O que é o{" "}
              <span className="gold-gradient-text">Tratamento Combinado?</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Este protocolo exclusivo Solar Derma combina duas técnicas comprovadas
              para um rejuvenescimento completo e natural, ideal para homens e mulheres:
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors shadow-soft">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-medium mb-2 text-foreground">Toxina Botulínica</h3>
                  <p className="text-muted-foreground">
                    Suaviza linhas de expressão e previne marcas profundas com resultados naturais.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors shadow-soft">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-medium mb-2 text-foreground">Peeling de Ouro</h3>
                  <p className="text-muted-foreground">
                    Renova, ilumina e uniformiza a pele com glow imediato e duradouro.
                  </p>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="mt-10 p-6 rounded-xl border border-primary/20 bg-primary/5">
              <p className="text-sm text-primary uppercase tracking-wider mb-3 font-medium">O resultado é um rosto:</p>
              <div className="grid grid-cols-2 gap-3">
                {["Mais descansado", "Mais jovem", "Mais iluminado", "Sem aspecto artificial"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Button variant="gold" size="lg" onClick={scrollToOffer} className="group">
                Quero garantir meu horário
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentSection;