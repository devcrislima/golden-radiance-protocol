import { AlertCircle, CheckCircle } from "lucide-react";

const CareSection = () => {
  const beforeCare = [
    "Evitar exposição solar intensa",
    "Não utilizar ácidos ou produtos irritantes 3 dias antes",
    "Comparecer com a pele limpa, sem maquiagem",
    "Informar uso de medicamentos no questionário de saúde"
  ];

  const afterCare = [
    "Manter o Peeling de Ouro pelo tempo orientado (até 8h)",
    "Lavar o rosto com sabonete suave após esse período",
    "Usar protetor solar diariamente",
    "Evitar exposição solar direta nas primeiras 48h",
    "Evitar massagens faciais e atividades físicas intensas",
    "Manter boa hidratação da pele"
  ];

  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4">
              Orientações Importantes
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium">
              Cuidados <span className="gold-gradient-text">Essenciais</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="p-8 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-medium">Antes</h3>
                  <p className="text-sm text-muted-foreground">do procedimento</p>
                </div>
              </div>

              <ul className="space-y-4">
                {beforeCare.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">{index + 1}</span>
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div className="p-8 rounded-2xl bg-card border border-primary/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-medium">Depois</h3>
                  <p className="text-sm text-muted-foreground">do tratamento</p>
                </div>
              </div>

              <ul className="space-y-4">
                {afterCare.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">{index + 1}</span>
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareSection;
