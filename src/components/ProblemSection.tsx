import { XCircle, AlertTriangle } from "lucide-react";

const problems = [
  "Clientes desconfiam de marcas que dependem apenas de Instagram ou WhatsApp",
  "Sites genéricos ou mal feitos afastam negócios",
  "Concorrentes com presença digital profissional saem na frente",
  "Falta de credibilidade online compromete vendas e parcerias",
];

const ProblemSection = () => {
  return (
    <section className="py-16 md:py-20 bg-primary text-primary-foreground">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <AlertTriangle className="w-8 h-8 text-brand-red" />
            <h3 className="text-3xl md:text-4xl font-display font-bold text-center">
              Sua empresa está perdendo oportunidades por não ter um site
              profissional?
            </h3>
          </div>

          <ul className="space-y-4 mt-10">
            {problems.map((problem, index) => (
              <li
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <XCircle className="w-6 h-6 text-brand-red flex-shrink-0 mt-0.5" />
                <span className="text-lg text-primary-foreground/90">
                  {problem}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-10 text-center text-xl font-medium text-primary-foreground/80 italic">
            "Hoje, não ter um site profissional é o mesmo que não existir para
            muitos clientes."
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
