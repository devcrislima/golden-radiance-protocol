import { Button } from "@/components/ui/button";
import { FileCheck, ClipboardList, ArrowRight, Check } from "lucide-react";

const PostPurchaseSection = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-background to-primary/5" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4">
              Próximos Passos
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-4">
              Após sua <span className="gold-gradient-text">Compra</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Veja o que acontece depois de garantir seu tratamento
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Health Questionnaire */}
            <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors group">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <ClipboardList className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="font-serif text-2xl font-medium mb-4">
                Questionário de Saúde
              </h3>
              <p className="text-muted-foreground mb-6">
                Responda algumas perguntas sobre sua saúde para garantirmos 
                um procedimento seguro e personalizado para você.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Responda online ou presencialmente</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Leva apenas 2 minutos</span>
                </div>
              </div>

              <Button variant="goldOutline" className="w-full group">
                Responder Questionário
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Consent Form */}
            <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors group">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <FileCheck className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="font-serif text-2xl font-medium mb-4">
                Termo de Consentimento
              </h3>
              <p className="text-muted-foreground mb-6">
                Leia e assine o termo de consentimento para o procedimento. 
                Pode ser assinado digitalmente ou presencialmente na clínica.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Assinatura digital disponível</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Ou assine na clínica</span>
                </div>
              </div>

              <Button variant="goldOutline" className="w-full group">
                Assinar Termo Digital
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Note */}
          <p className="text-center mt-8 text-muted-foreground text-sm">
            Você também pode completar esses passos presencialmente na clínica, 
            antes do seu atendimento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PostPurchaseSection;
