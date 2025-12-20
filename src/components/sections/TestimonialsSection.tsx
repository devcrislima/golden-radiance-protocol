import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Clara",
      text: "Resultado incrível! Minha pele nunca esteve tão bonita e luminosa. O atendimento é impecável.",
      rating: 5
    },
    {
      name: "Ana Paula",
      text: "Finalmente encontrei um tratamento que realmente funciona. Linhas suavizadas e pele renovada!",
      rating: 5
    },
    {
      name: "Juliana Santos",
      text: "Equipe super profissional e atenciosa. O Peeling de Ouro deixou minha pele maravilhosa.",
      rating: 5
    },
    {
      name: "Fernanda Lima",
      text: "Ambiente acolhedor e resultado natural. Recomendo muito a Solar Derma!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4">
            Depoimentos
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6">
            O que nossas <span className="gold-gradient-text">clientes dizem</span>
          </h2>
          <div className="flex items-center justify-center gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-6 h-6 fill-primary text-primary" />
            ))}
            <span className="ml-2 text-muted-foreground">5.0 no Google</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <div className="flex gap-0.5">
                    {Array(testimonial.rating).fill(0).map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
