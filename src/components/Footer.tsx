const Footer = () => {
  return (
    <footer className="py-12 bg-foreground text-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          {/* Logo */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="relative w-8 h-6 rounded overflow-hidden">
              <div className="absolute inset-0 bg-background" />
              <div className="absolute top-1/2 left-0 right-0 h-1.5 -translate-y-1/2 bg-brand-red" />
              <div className="absolute left-1/2 top-0 bottom-0 w-1.5 -translate-x-1/2 bg-brand-red" />
            </div>
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
