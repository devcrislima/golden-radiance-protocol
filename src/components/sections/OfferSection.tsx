import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Clock, Gift, Sparkles, Calendar } from "lucide-react";

const OfferSection = () => {
  const handlePurchase = () => {
    // This would integrate with a payment system
    window.open("https://wa.me/5500000000000?text=Olá! Tenho interesse no tratamento BOTOX + Peeling de Ouro", "_blank");
  };

  return (
    <section id="oferta" className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-b from-cream via-background to-cream">
      {/* Subtle decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary bg-primary/10 text-primary font-medium uppercase tracking-wider text-sm mb-6">
              <Sparkles className="w-4 h-4" />
              Oferta Especial
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-4 text-foreground">
              Garanta seu <span className="gold-gradient-text">Glow Dourado</span>
            </h2>
            <p className="text-lg text-muted-foreground flex items-center justify-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              Condição válida até <span className="font-semibold text-primary">31 de dezembro</span>
            </p>
          </div>

          {/* Main Offer Card */}
          <div className="relative p-1 rounded-3xl bg-gradient-to-br from-primary via-gold to-primary shadow-gold">
            <div className="bg-card rounded-[22px] p-8 lg:p-12">
              {/* Limited badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <div className="px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold shadow-lg">
                  🔥 Super Oferta por Tempo Limitado
                </div>
              </div>

              {/* What's included */}
              <div className="grid md:grid-cols-2 gap-8 mb-10 mt-4">
                <div className="space-y-4">
                  <h3 className="font-serif text-xl font-medium text-foreground mb-4">Incluso no tratamento:</h3>
                  
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">BOTOX (1 área)</h4>
                      <p className="text-sm text-muted-foreground">Aplicação profissional</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Retorno em 15 dias</h4>
                      <p className="text-sm text-muted-foreground">Avaliação inclusa</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Peeling de Ouro Completo</h4>
                      <p className="text-sm text-muted-foreground">Tratamento premium</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  {/* Bonus section */}
                  <div className="p-5 rounded-xl bg-primary/5 border border-primary/20 mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Gift className="w-5 h-5 text-primary" />
                      <span className="font-medium text-primary uppercase tracking-wider text-sm">Bônus Inclusos</span>
                    </div>
                    <div className="space-y-3">
                      {[
                        "Peeling de Diamante (preparo da pele)",
                        "Higienização profissional completa",
                        "Máscara calmante de finalização",
                        "Orientações personalizadas"
                      ].map((item) => (
                        <div key={item} className="flex items-center gap-3">
                          <Check className="w-4 h-4 text-primary shrink-0" />
                          <span className="text-foreground text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    {[
                      "Profissionais habilitados",
                      "Ambiente seguro e acolhedor",
                      "Atendimento personalizado"
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-primary" />
                        <span className="text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

              {/* CTA */}
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="text-center lg:text-left">
                  <p className="text-sm text-muted-foreground mb-1">Investimento especial</p>
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-4xl md:text-5xl font-medium text-foreground">R$</span>
                    <span className="font-serif text-5xl md:text-6xl font-medium gold-gradient-text">890</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    ou 3x de R$ 296,67 no cartão
                  </p>
                </div>

                <div className="flex flex-col gap-3 w-full lg:w-auto">
                  <Button
                    variant="premium"
                    size="xxl"
                    onClick={handlePurchase}
                    className="w-full lg:w-auto gold-shimmer pulse-gold"
                  >
                    Agendar meu Glow Dourado
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="goldOutline"
                    size="lg"
                    onClick={handlePurchase}
                    className="w-full lg:w-auto"
                  >
                    Quero garantir meu horário
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Urgency */}
          <p className="text-center mt-8 text-muted-foreground">
            <span className="text-primary font-medium">⏳ Vagas limitadas</span> — Promoção válida até 31/12 ou enquanto durarem as vagas
          </p>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;