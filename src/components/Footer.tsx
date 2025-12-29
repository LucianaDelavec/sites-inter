import ukFlag from "@/assets/uk-flag.jpg";

const Footer = () => {
  return (
    <footer className="py-12 bg-foreground text-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          {/* Logo */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <img 
              src={ukFlag} 
              alt="UK Flag" 
              className="w-8 h-5 rounded object-cover"
            />
            <span className="text-xl font-display font-bold">
              SITES <span className="text-brand-red">INTER</span>
            </span>
          </div>

          <p className="text-background/60 text-sm mb-6">
            www.sitesinter.com
          </p>

          <p className="text-background/50 text-xs max-w-md mx-auto">
            Essa identidade transmite padrão internacional, organização,
            solidez e confiança, reforçando a decisão de compra.
          </p>

          <div className="mt-8 pt-8 border-t border-background/10">
            <p className="text-background/40 text-xs">
              © {new Date().getFullYear()} Sites INTER. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
