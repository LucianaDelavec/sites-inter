import { Clock, AlertCircle, CheckCircle, ArrowRight, Zap } from "lucide-react";
import { Button } from "./ui/button";

const includes = [
  "Site institucional personalizado",
  "Entrega em até 3 dias úteis",
  "Suporte técnico por 30 dias",
  "Renovação futura com valor fixo de R$99",
  "Pagamento facilitado em até 12x no cartão",
];

const UrgencySection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-red/10 text-brand-red mb-6">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-semibold">VAGAS LIMITADAS</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Vagas limitadas para garantir qualidade e entrega rápida
            </h3>
          </div>

          <div className="p-6 rounded-2xl bg-brand-red/5 border border-brand-red/20 mb-8">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
              <div>
                <p className="text-foreground">
                  Para manter alto padrão de qualidade e cumprir o prazo de
                  entrega, a Sites INTER aceita apenas{" "}
                  <strong>3 novos projetos por dia</strong>.
                </p>
                <p className="mt-3 text-brand-red font-semibold flex items-center gap-2">
                  <Clock className="w-4 h-4" />A promoção de R$2.459 por R$859
                  pode sair do ar a qualquer momento.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3 mb-10">
            {includes.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50"
              >
                <CheckCircle className="w-5 h-5 text-brand-red flex-shrink-0" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="cta" size="xl" className="group" asChild>
              <a href="https://go.hotmart.com/U103583403L?dp=1" target="_blank" rel="noopener noreferrer">
                Quero garantir meu site agora por R$859
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;
