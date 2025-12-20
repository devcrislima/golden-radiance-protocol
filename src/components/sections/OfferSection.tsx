import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Clock, CreditCard, Sparkles, Syringe } from "lucide-react";

const OfferSection = () => {
  const handlePurchase = () => {
    // This would integrate with a payment system
    window.open("https://wa.me/5500000000000?text=Olá! Tenho interesse no tratamento BOTOX + Peeling de Ouro", "_blank");
  };

  return (
    <section id="oferta" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary bg-primary/10 text-primary font-medium uppercase tracking-wider text-sm mb-6">
              <Sparkles className="w-4 h-4" />
              Oferta Especial
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-4">
              Sua Transformação <span className="gold-gradient-text">Começa Aqui</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Condição exclusiva por tempo limitado
            </p>
          </div>

          {/* Offer Card */}
          <div className="relative p-1 rounded-3xl bg-gradient-to-br from-primary via-gold to-primary">
            <div className="bg-card rounded-[22px] p-8 lg:p-12">
              {/* What's included */}
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                      <Syringe className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">BOTOX (1 área)</h3>
                      <p className="text-sm text-muted-foreground">Aplicação profissional</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Retorno em 15 dias</h3>
                      <p className="text-sm text-muted-foreground">Avaliação e ajustes inclusos</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Peeling de Ouro Completo</h3>
                      <p className="text-sm text-muted-foreground">Tratamento premium incluso</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <div className="space-y-3">
                    {[
                      "Profissionais habilitados",
                      "Ambiente seguro e acolhedor",
                      "Produtos de alta qualidade",
                      "Atendimento personalizado",
                      "Orientações completas"
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
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-10" />

              {/* Price and CTA */}
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="text-center lg:text-left">
                  <div className="flex items-center gap-3 justify-center lg:justify-start mb-2">
                    <CreditCard className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Pagamento facilitado</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Vagas limitadas • Consulte condições
                  </p>
                </div>

                <Button
                  variant="premium"
                  size="xxl"
                  onClick={handlePurchase}
                  className="w-full lg:w-auto gold-shimmer pulse-gold"
                >
                  Comprar e Agendar
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Urgency */}
          <p className="text-center mt-8 text-muted-foreground">
            <span className="text-primary font-medium">⏳ Vagas limitadas</span> — Garanta já o seu horário
          </p>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
