import { Award, Heart, Shield, Users } from "lucide-react";
import clinicImage from "@/assets/clinic-interior.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  const features = [
    { icon: Award, text: "Estética Avançada" },
    { icon: Shield, text: "Protocolos Seguros" },
    { icon: Heart, text: "Atendimento Humanizado" },
    { icon: Users, text: "Equipe Especializada" }
  ];

  const scrollToOffer = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 lg:py-32 relative bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4">
              Nossa Clínica
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-foreground">
              Sobre a <span className="gold-gradient-text">Solar Derma</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Somos uma clínica especializada em estética avançada, comprometida 
              em oferecer os melhores tratamentos com segurança, tecnologia e 
              cuidado personalizado.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Nosso ambiente foi projetado para proporcionar uma experiência 
              acolhedora e profissional, onde cada detalhe é pensado para o 
              seu bem-estar e satisfação. Atendemos homens e mulheres.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div
                  key={feature.text}
                  className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border shadow-soft"
                >
                  <feature.icon className="w-5 h-5 text-primary" />
                  <span className="font-medium text-foreground">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button variant="goldOutline" size="lg" onClick={scrollToOffer} className="group">
              Agendar meu Glow Dourado
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-elegant">
              <img
                src={clinicImage}
                alt="Interior da clínica Solar Derma"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-card border border-primary/30 rounded-xl p-5 shadow-elegant">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-primary/10 border-2 border-card flex items-center justify-center"
                    >
                      <span className="text-xs font-medium text-primary">★</span>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="font-medium text-foreground">+500 clientes</p>
                  <p className="text-sm text-muted-foreground">satisfeitos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;