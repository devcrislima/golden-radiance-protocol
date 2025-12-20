import { Check } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    "Linhas de expressão suavizadas",
    "Aparência descansada e rejuvenescida",
    "Pele mais luminosa e uniforme",
    "Textura mais lisa e viçosa",
    "Prevenção do envelhecimento precoce",
    "Resultado natural, sem exageros"
  ];

  return (
    <section className="py-20 lg:py-32 relative bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4">
              Resultados Reais
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6">
              Benefícios do{" "}
              <span className="gold-gradient-text">Protocolo Completo</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Descubra o que a combinação perfeita pode fazer por você
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={benefit}
                className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Check className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <span className="font-medium text-lg">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Highlight box */}
          <div className="mt-12 p-8 rounded-2xl border border-primary/30 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 text-center">
            <p className="font-serif text-2xl md:text-3xl text-foreground">
              Rejuvenesça com <span className="text-primary">elegância</span> e{" "}
              <span className="text-primary">naturalidade</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
