const MarqueeBanner = () => {
  const items = [
    { text: "GBI BUKIT KALVARI", isDot: false },
    { text: "Ibadah Minggu 08.00 WIB", isDot: false },
  ];

  const repeated = Array(8).fill(items).flat();

  return (
    <div className="bg-secondary py-4 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {repeated.map((item, i) => (
          <span key={i} className="mx-6 text-secondary-foreground font-heading font-extrabold text-lg uppercase tracking-widest flex items-center gap-6">
            {item.text}
            <span className="w-2 h-2 rounded-full bg-secondary-foreground/40" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeBanner;
