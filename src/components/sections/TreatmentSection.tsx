import { Sparkles, Zap } from "lucide-react";
import goldTexture from "@/assets/gold-texture.jpg";

const TreatmentSection = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden glow-gold">
              <img
                src={goldTexture}
                alt="Peeling de Ouro - Tratamento premium"
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-card border border-primary/30 rounded-2xl p-6 shadow-[0_20px_60px_hsl(0_0%_0%_/_0.4)]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Protocolo</p>
                  <p className="font-serif text-xl text-primary">Exclusivo</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4">
              O Tratamento
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-balance">
              O que é o{" "}
              <span className="gold-gradient-text">Tratamento Combinado?</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Este protocolo exclusivo Solar Derma combina duas técnicas poderosas
              para um rejuvenescimento completo e natural:
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 p-6 rounded-xl bg-secondary/50 border border-border hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-medium mb-2">Toxina Botulínica</h3>
                  <p className="text-muted-foreground">
                    Suaviza linhas de expressão e previne marcas profundas com resultados naturais.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 rounded-xl bg-secondary/50 border border-border hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-medium mb-2">Peeling de Ouro</h3>
                  <p className="text-muted-foreground">
                    Renova, ilumina e uniformiza a pele com glow imediato e duradouro.
                  </p>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="mt-10 p-6 rounded-xl border border-primary/20 bg-primary/5">
              <p className="text-sm text-primary uppercase tracking-wider mb-3">O resultado é um rosto:</p>
              <div className="grid grid-cols-2 gap-3">
                {["Mais descansado", "Mais jovem", "Mais iluminado", "Sem aspecto artificial"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentSection;
