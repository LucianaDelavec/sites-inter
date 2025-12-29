import { Star, Quote, Play } from "lucide-react";

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
            {/* Video placeholder */}
            <div className="aspect-video rounded-2xl bg-primary/5 border-2 border-dashed border-primary/20 flex items-center justify-center group cursor-pointer hover:border-brand-red/50 transition-colors">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-brand-red/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-brand-red/20 transition-colors">
                  <Play className="w-8 h-8 text-brand-red ml-1" />
                </div>
                <p className="text-muted-foreground text-sm">
                  Vídeo de depoimento
                </p>
              </div>
            </div>

            {/* Image placeholder */}
            <div className="aspect-video rounded-2xl bg-primary/5 border-2 border-dashed border-primary/20 flex items-center justify-center">
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-lg bg-secondary flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-8 h-8 text-muted-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="text-muted-foreground text-sm">
                  Print de site entregue
                </p>
              </div>
            </div>
          </div>

          {/* Testimonials */}
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

          <p className="text-center text-muted-foreground mt-8 text-sm">
            Aqui você pode exibir: prints reais dos sites entregues, depoimentos
            com nome, segmento e resultado, logos ou nomes de clientes (com
            permissão).
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
