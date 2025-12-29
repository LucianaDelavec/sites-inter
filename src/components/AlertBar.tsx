import { Clock, Sparkles } from "lucide-react";

const AlertBar = () => {
  return (
    <div className="bg-brand-red py-3 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-8 text-primary-foreground">
            <span className="flex items-center gap-2 font-bold uppercase tracking-wide text-sm">
              <Sparkles className="w-4 h-4" />
              OFERTA EXCLUSIVA DE INÍCIO DE ANO
            </span>
            <span className="text-primary-foreground/60">•</span>
            <span className="flex items-center gap-1.5 text-sm">
              <Clock className="w-4 h-4" />
              Restam poucas vagas disponíveis hoje
            </span>
            <span className="text-primary-foreground/60">•</span>
            <span className="text-sm font-medium">
              Sua empresa em 2026 começa com um site profissional
            </span>
            <span className="text-primary-foreground/60">•</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlertBar;
