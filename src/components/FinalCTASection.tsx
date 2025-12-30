import { ArrowRight, Rocket } from "lucide-react";
import { Button } from "./ui/button";

const FinalCTASection = () => {
  return (
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <Rocket className="w-12 h-12 text-brand-red mx-auto mb-6" />
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Seu negócio precisa de um site à altura. Esse é o momento.
          </h3>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10">
            Tenha uma presença digital profissional, feita sob medida e entregue
            em tempo recorde, sem pagar caro por isso.
          </p>
          <Button
            variant="cta"
            size="xl"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 group"
            asChild
          >
            <a href="https://go.hotmart.com/U103583403L?dp=1" target="_blank" rel="noopener noreferrer">
              Quero meu site profissional por R$859
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
