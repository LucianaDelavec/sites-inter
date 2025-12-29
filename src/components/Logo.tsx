const Logo = () => {
  return (
    <div className="flex flex-col items-center py-6">
      <div className="flex items-center gap-2">
        {/* England flag inspired element */}
        <div className="relative w-10 h-8 rounded overflow-hidden shadow-sm">
          <div className="absolute inset-0 bg-primary-foreground" />
          <div className="absolute top-1/2 left-0 right-0 h-2 -translate-y-1/2 bg-brand-red" />
          <div className="absolute left-1/2 top-0 bottom-0 w-2 -translate-x-1/2 bg-brand-red" />
        </div>
        <h1 className="text-3xl font-display font-bold tracking-tight text-foreground">
          SITES <span className="text-brand-red">INTER</span>
        </h1>
      </div>
      <p className="text-muted-foreground text-sm mt-1">
        Seu site do seu jeito, mais rápido do que você imagina.
      </p>
    </div>
  );
};

export default Logo;
