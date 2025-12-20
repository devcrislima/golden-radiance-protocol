import { Clock, Shield, RefreshCw, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import manImage from "@/assets/man-skincare.jpg";

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

  const scrollToOffer = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 lg:py-32 relative bg-gradient-to-b from-cream via-secondary/30 to-cream">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="max-w-xl">
              <span className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4">
                Toxina Botulínica
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-foreground">
                Sobre o <span className="gold-gradient-text">BOTOX</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                Efeito rápido, natural e seguro para suavizar as linhas de expressão
                e prevenir o envelhecimento precoce. Ideal para homens e mulheres.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 shadow-soft"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-medium mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Button variant="gold" size="lg" onClick={scrollToOffer} className="group">
                Comprar agora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Image - Male representation */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-elegant">
              <img
                src={manImage}
                alt="Homem com pele saudável após tratamento estético"
                className="w-full aspect-square object-cover"
              />
            </div>
            {/* Badge */}
            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-card border border-primary/30 rounded-2xl p-5 shadow-elegant">
              <p className="text-sm text-muted-foreground">Também para</p>
              <p className="font-serif text-xl text-primary font-medium">Homens</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BotoxSection;