import { Clock, Shield, RefreshCw, CheckCircle2 } from "lucide-react";

const BotoxSection = () => {
  const features = [
    {
      icon: CheckCircle2,
      title: "Ação Precisa",
      description: "Atua relaxando os músculos responsáveis pelas linhas de expressão"
    },
    {
      icon: Clock,
      title: "Resultados Rápidos",
      description: "Resultados iniciais perceptíveis em poucos dias"
    },
    {
      icon: RefreshCw,
      title: "Retorno Incluso",
      description: "Avaliação e ajustes em 15 dias, se necessário"
    },
    {
      icon: Shield,
      title: "Segurança Total",
      description: "Procedimento rápido realizado por profissional habilitado"
    }
  ];

  return (
    <section className="py-20 lg:py-32 relative bg-secondary/30">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4">
            Toxina Botulínica
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6">
            Sobre o <span className="gold-gradient-text">BOTOX</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Efeito rápido, natural e seguro para suavizar as linhas de expressão
            e prevenir o envelhecimento precoce.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_20px_60px_hsl(0_0%_0%_/_0.3)]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-medium mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BotoxSection;
