const MarqueeBanner = () => {
  const text = "GBI BUKIT KALVARI";
  const repeated = Array(10).fill(text);

  return (
    <div className="bg-secondary py-4 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {repeated.map((t, i) => (
          <span key={i} className="mx-6 text-secondary-foreground font-heading font-extrabold text-lg uppercase tracking-widest flex items-center gap-6">
            {t}
            <span className="w-2 h-2 rounded-full bg-secondary-foreground/40" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeBanner;
