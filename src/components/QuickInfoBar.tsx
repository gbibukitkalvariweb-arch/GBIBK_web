import { Clock, MapPin, Navigation } from "lucide-react";

const items = [
  {
    icon: Clock,
    text: "Ibadah Raya: Minggu | 07:00 & 09:00 WIB",
  },
  {
    icon: MapPin,
    text: "Jl. Mandala Utara No. 26, Tomang, Jakarta Barat",
  },
  {
    icon: Navigation,
    text: "Buka di Google Maps",
    href: "https://www.google.com/maps/dir//Jl.+Mandala+Utara+No.26,+RT.2%2FRW.2,+Tomang,+Kec.+Grogol+petamburan,+Kota+Jakarta+Barat,+Daerah+Khusus+Ibukota+Jakarta+11440/@-6.1739668,106.7942805,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x2e69f660e578f491:0x2c32baed47f21853!2m2!1d106.7964692!2d-6.1739721!3e0",
  },
];

const QuickInfoBar = () => {
  return (
    <section className="bg-card border-y border-border">
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
