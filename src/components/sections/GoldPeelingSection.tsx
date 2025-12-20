import { Gem, Sun, Sparkles, Clock } from "lucide-react";

const GoldPeelingSection = () => {
  const benefits = [
    {
      icon: Gem,
      title: "Ação Retinol-Like",
      description: "Peeling facial avançado com tecnologia de ponta"
    },
    {
      icon: Sun,
      title: "Uniformização",
      description: "Associado ao ácido kójico para tom de pele uniforme"
    },
    {
      icon: Sparkles,
      title: "Glow Imediato",
      description: "Renovação celular e textura melhorada instantaneamente"
    },
    {
      icon: Clock,
      title: "Ação Prolongada",
      description: "Permanece até 8 horas na pele potencializando resultados"
    }
  ];

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Decorative gold gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4">
            Tecnologia Premium
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6">
            Sobre o <span className="gold-gradient-text">Peeling de Ouro</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Um tratamento encantador que transforma sua pele com luminosidade 
            e vitalidade incomparáveis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-card to-secondary/50 border border-primary/20 overflow-hidden group"
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 gold-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-medium mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{benefit.description}</p>
              </div>

              {/* Corner decoration */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoldPeelingSection;
