import { CheckCircle, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const benefits = [
  "Design exclusivo, criado para a identidade da sua marca",
  "Site 100% responsivo (celular, tablet e computador)",
  "Otimização básica para Google (SEO)",
  "Página de contato com formulário funcional",
  "Integração com redes sociais",
  "1 ano de hospedagem e domínio grátis",
  "Entrega garantida em até 3 dias úteis",
  "Direito a até 3 alterações no período de 30 dias após a entrega oficial",
  "Suporte técnico durante esse mesmo período",
];

const SolutionSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-red/10 text-brand-red mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">A SOLUÇÃO</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Com a Sites INTER, você recebe um site institucional completo,
              moderno e feito sob medida.
            </h3>
            <p className="mt-4 text-lg text-muted-foreground">
              Nada de templates prontos ou soluções genéricas. Cada site é
              criado de forma personalizada, respeitando a identidade e os
              objetivos do seu negócio.
            </p>
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-semibold text-foreground mb-6 text-center">
              O que está incluso:
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors animate-fade-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CheckCircle className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-primary to-primary/90 text-primary-foreground text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-primary-foreground/70">
              Oferta especial
            </span>
            <div className="mt-4 flex items-center justify-center gap-4">
              <span className="text-2xl line-through text-primary-foreground/50">
                R$2.459
              </span>
              <span className="text-5xl font-display font-bold">R$859</span>
              <span className="text-lg text-primary-foreground/80">à vista</span>
            </div>
            <p className="mt-2 text-primary-foreground/80">
              ou em até 12x no cartão
            </p>
            <p className="mt-4 text-sm text-primary-foreground/60">
              Renovação anual: R$99 a partir do segundo ano.
            </p>
            <Button
              variant="cta"
              size="xl"
              className="mt-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90 group"
            >
              Quero solicitar meu site agora
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
