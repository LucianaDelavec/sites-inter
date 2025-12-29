import { Star, Quote } from "lucide-react";
import testimonialVideo from "@/assets/testimonial-video.mp4";
import testimonialSite from "@/assets/testimonial-site.png";

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Resultados que geram confiança
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Video testimonial */}
            <div className="space-y-4">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                <video
                  src={testimonialVideo}
                  controls
                  className="w-full h-full object-cover"
                  poster=""
                />
              </div>
              <div className="p-4 rounded-xl bg-card border border-border">
                <Quote className="w-6 h-6 text-brand-red/30 mb-2" />
                <p className="text-foreground text-sm italic mb-3">
                  "Depois do site, minha marca ganhou outro patamar. Mais profissionalismo, mais autoridade e uma presença digital que realmente representa meu trabalho."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-red/10 flex items-center justify-center">
                    <span className="font-bold text-brand-red text-sm">V</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Victor d'Andrada</p>
                    <p className="text-xs text-muted-foreground">Personal Trainer</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-brand-gold text-brand-gold" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Image testimonial */}
            <div className="space-y-4">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={testimonialSite}
                  alt="Site entregue para Mariana Lira"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 rounded-xl bg-card border border-border">
                <Quote className="w-6 h-6 text-brand-red/30 mb-2" />
                <p className="text-foreground text-sm italic mb-3">
                  "Hoje nossa empresa está fazendo 5 anos, e pra comemorar essa data especial já temos nosso site profissional liberado, todo elaborado pela equipe do Sites INTER."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-red/10 flex items-center justify-center">
                    <span className="font-bold text-brand-red text-sm">M</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Mariana Lira</p>
                    <p className="text-xs text-muted-foreground">Engenheira Agrônoma</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-brand-gold text-brand-gold" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional testimonials */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
              <Quote className="w-8 h-8 text-brand-red/30 mb-4" />
              <p className="text-foreground italic mb-4">
                "Meu novo site elevou totalmente a imagem da minha marca.
                Rápido, bonito e exatamente como eu queria."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center">
                  <span className="font-bold text-brand-red">A</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Ana</p>
                  <p className="text-sm text-muted-foreground">Nutricionista</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-brand-gold text-brand-gold"
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
              <Quote className="w-8 h-8 text-brand-red/30 mb-4" />
              <p className="text-foreground italic mb-4">
                "Profissionalismo do início ao fim. O site ficou incrível e
                recebi em menos de 3 dias. Superou minhas expectativas!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center">
                  <span className="font-bold text-brand-red">M</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Marcos</p>
                  <p className="text-sm text-muted-foreground">Advogado</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-brand-gold text-brand-gold"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
