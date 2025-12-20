import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Gift, Clock, Sparkles } from "lucide-react";

const PricingSection = () => {
  const scrollToOffer = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="valores" className="py-20 lg:py-32 relative bg-gradient-to-b from-background via-cream to-background">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4">
            Investimento
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-foreground">
            Valores do <span className="gold-gradient-text">Tratamento</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Condições especiais por tempo limitado. Garanta já o seu horário.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main pricing card */}
          <div className="relative">
            {/* Limited time badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary text-primary-foreground font-medium text-sm shadow-gold">
                <Clock className="w-4 h-4" />
                Oferta válida até 31/12
              </div>
            </div>

            <div className="relative p-1 rounded-3xl bg-gradient-to-br from-primary/50 via-gold to-primary/50">
              <div className="bg-card rounded-[22px] p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                  {/* Left - What's included */}
                  <div>
                    <h3 className="font-serif text-2xl font-medium mb-6 text-foreground">
                      Protocolo Completo
                    </h3>
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">BOTOX (1 área)</p>
                          <p className="text-sm text-muted-foreground">Aplicação profissional</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">Retorno em 15 dias</p>
                          <p className="text-sm text-muted-foreground">Avaliação e ajustes inclusos</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">Peeling de Ouro Completo</p>
                          <p className="text-sm text-muted-foreground">Tratamento premium incluso</p>
                        </div>
                      </div>
                    </div>

                    {/* Bonus */}
                    <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                      <div className="flex items-center gap-3 mb-2">
                        <Gift className="w-5 h-5 text-primary" />
                        <span className="font-medium text-primary uppercase text-sm tracking-wider">Bônus Inclusos</span>
                      </div>
                      <ul className="space-y-2 text-sm text-foreground">
                        <li className="flex items-center gap-2">
                          <Sparkles className="w-3 h-3 text-primary" />
                          Peeling de Diamante (preparo da pele)
                        </li>
                        <li className="flex items-center gap-2">
                          <Sparkles className="w-3 h-3 text-primary" />
                          Higienização profissional
                        </li>
                        <li className="flex items-center gap-2">
                          <Sparkles className="w-3 h-3 text-primary" />
                          Máscara calmante finalização
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Right - Price */}
                  <div className="text-center lg:text-right">
                    <div className="mb-6">
                      <p className="text-sm text-muted-foreground mb-1">De <span className="line-through">R$ 1.200,00</span></p>
                      <p className="text-sm text-primary font-medium mb-3">Por apenas</p>
                      <p className="font-serif text-5xl md:text-6xl font-medium text-foreground">
                        R$ <span className="gold-gradient-text">890</span>
                      </p>
                      <p className="text-muted-foreground mt-2">ou 3x de R$ 296,67</p>
                    </div>

                    <div className="space-y-3">
                      <Button
                        variant="premium"
                        size="xxl"
                        onClick={scrollToOffer}
                        className="w-full gold-shimmer pulse-gold"
                      >
                        Comprar agora
                        <ArrowRight className="w-5 h-5" />
                      </Button>
                      
                      <p className="text-xs text-muted-foreground">
                        Pagamento seguro • Cartão ou PIX
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust elements */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              <span>Profissionais habilitados</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              <span>Ambiente seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              <span>Satisfação garantida</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;