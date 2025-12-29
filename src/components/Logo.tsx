import ukFlag from "@/assets/uk-flag.jpg";

const Logo = () => {
  return (
    <div className="flex flex-col items-center py-6">
      <div className="flex items-center gap-3">
        {/* UK Flag */}
        <img 
          src={ukFlag} 
          alt="UK Flag" 
          className="w-10 h-7 rounded object-cover shadow-sm"
        />
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
