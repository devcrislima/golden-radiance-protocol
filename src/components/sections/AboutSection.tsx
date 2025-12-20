import { Award, Heart, Shield, Users } from "lucide-react";
import clinicImage from "@/assets/clinic-interior.jpg";

const AboutSection = () => {
  const features = [
    { icon: Award, text: "Estética Avançada" },
    { icon: Shield, text: "Protocolos Seguros" },
    { icon: Heart, text: "Atendimento Humanizado" },
    { icon: Users, text: "Equipe Especializada" }
  ];

  return (
    <section className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4">
              Nossa Clínica
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6">
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
              seu bem-estar e satisfação.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature) => (
                <div
                  key={feature.text}
                  className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border"
                >
                  <feature.icon className="w-5 h-5 text-primary" />
                  <span className="font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden glow-gold">
              <img
                src={clinicImage}
                alt="Interior da clínica Solar Derma"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-primary/30 rounded-xl p-5 shadow-[0_20px_60px_hsl(0_0%_0%_/_0.4)]">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-primary/20 border-2 border-card flex items-center justify-center"
                    >
                      <span className="text-xs font-medium text-primary">★</span>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="font-medium">+500 clientes</p>
                  <p className="text-sm text-muted-foreground">satisfeitas</p>
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
