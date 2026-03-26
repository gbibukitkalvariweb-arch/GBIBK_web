import { Clock, MapPin, Navigation } from "lucide-react";

const items = [
  {
    icon: Clock,
    text: "Ibadah Raya: Minggu | 08:00 & 10:30 WIB",
  },
  {
    icon: MapPin,
    text: "GBI Bukit Kalvari, Depok",
  },
  {
    icon: Navigation,
    text: "Buka di Google Maps",
    href: "https://maps.google.com",
  },
];

const QuickInfoBar = () => {
  return (
    <section className="bg-surface border-y border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0">
        {items.map((item, i) => (
          <div key={i} className="flex items-center justify-center gap-3">
            <item.icon className="w-5 h-5 text-primary shrink-0" />
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-primary hover:underline"
              >
                {item.text}
              </a>
            ) : (
              <span className="text-sm font-medium text-foreground/80">{item.text}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuickInfoBar;
