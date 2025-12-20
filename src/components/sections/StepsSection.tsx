import { Clock } from "lucide-react";

const StepsSection = () => {
  const steps = [
    { number: "01", title: "Avaliação Facial", description: "Avaliação personalizada das suas necessidades" },
    { number: "02", title: "Registro Fotográfico", description: "Quando indicado, para acompanhamento" },
    { number: "03", title: "Higienização", description: "Preparo cuidadoso da pele" },
    { number: "04", title: "Toxina Botulínica", description: "Aplicação precisa nas áreas tratadas" },
    { number: "05", title: "Peeling de Diamante", description: "Preparo da pele para o peeling" },
    { number: "06", title: "Peeling de Ouro", description: "Aplicação do tratamento premium" },
    { number: "07", title: "Finalização", description: "Calmante e orientações personalizadas" },
  ];

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4">
              Sua Experiência
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6">
              Passo a Passo do{" "}
              <span className="gold-gradient-text">Atendimento</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Uma jornada cuidadosa do início ao fim
            </p>
          </div>

          {/* Steps */}
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary to-primary/50 hidden md:block" />

            <div className="space-y-6">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`relative flex flex-col md:flex-row gap-4 md:gap-8 items-start ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className={`p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors ${
                      index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                    } max-w-md`}>
                      <span className="text-primary font-serif text-3xl font-medium">{step.number}</span>
                      <h3 className="font-serif text-xl font-medium mt-2 mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="hidden md:flex w-12 h-12 rounded-full bg-primary/20 border-2 border-primary items-center justify-center shrink-0 z-10">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>

          {/* Time info */}
          <div className="mt-16 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex items-center gap-3 px-6 py-4 rounded-xl bg-secondary border border-border">
              <Clock className="w-6 h-6 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Tempo em clínica</p>
                <p className="font-medium">30 a 40 minutos</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-6 py-4 rounded-xl bg-secondary border border-border">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary text-xs font-bold">8h</span>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Peeling de Ouro</p>
                <p className="font-medium">Permanece até 8 horas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
