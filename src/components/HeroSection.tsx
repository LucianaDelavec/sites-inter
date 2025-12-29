import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-foreground animate-fade-up">
            O site que sua empresa precisa, pronto em até{" "}
            <span className="text-brand-red">3 dias úteis</span>, sem custo
            absurdo.
          </h2>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground animate-fade-up animation-delay-100">
            Entrega rápida, design exclusivo e presença digital profissional por
            apenas{" "}
            <span className="font-bold text-foreground">R$859</span>, ou em até{" "}
            <span className="font-bold text-foreground">12x no cartão</span>.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animation-delay-200">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="w-5 h-5 text-brand-red" />
              <span>Válido para até 3 projetos por dia</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="line-through text-muted-foreground">
                R$2.459
              </span>
              <span className="font-bold text-2xl text-brand-red">R$859</span>
            </div>
          </div>

          <div className="mt-10 animate-fade-up animation-delay-300">
            <Button variant="cta" size="xl" className="group">
              Quero meu site personalizado por R$859
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
