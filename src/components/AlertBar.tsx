import { Clock } from "lucide-react";

const AlertBar = () => {
  return (
    <div className="bg-brand-red py-3 px-4">
      <div className="container flex flex-col sm:flex-row items-center justify-center gap-2 text-center text-primary-foreground">
        <span className="font-bold uppercase tracking-wide text-sm">
          OFERTA EXCLUSIVA DE INÍCIO DE ANO
        </span>
        <span className="hidden sm:inline text-primary-foreground/60">|</span>
        <span className="flex items-center gap-1.5 text-sm">
          <Clock className="w-4 h-4" />
          Restam poucas vagas disponíveis hoje
        </span>
        <span className="hidden md:inline text-primary-foreground/60">|</span>
        <span className="hidden md:inline text-sm">
          Sua empresa em 2026 começa com um site profissional.
        </span>
      </div>
    </div>
  );
};

export default AlertBar;
