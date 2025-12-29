import { Shield, Check } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-secondary/50 to-secondary border border-border">
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <div className="w-20 h-20 rounded-full bg-brand-red/10 flex items-center justify-center flex-shrink-0">
                <Shield className="w-10 h-10 text-brand-red" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                  Compromisso com qualidade, agilidade e clareza
                </h3>
                <p className="text-muted-foreground">
                  Cada projeto da Sites INTER é tratado com atenção total,
                  garantindo um site funcional, personalizado e entregue no
                  prazo combinado.
                </p>
                <p className="mt-4 flex items-center gap-2 text-foreground justify-center md:justify-start">
                  <Check className="w-5 h-5 text-brand-red" />
                  Atendimento direto, sem burocracia e sem promessas irreais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
