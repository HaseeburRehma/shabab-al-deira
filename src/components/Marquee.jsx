const WORDS = [
  "Curtains",
  "Blinds & Shutters",
  "Carpets",
  "Upholstery",
  "Wallpapers",
  "Sheds & Tents",
];

export default function Marquee() {
  const row = [...WORDS, ...WORDS];
  return (
    <div className="overflow-hidden border-y border-linen bg-sand py-5">
      <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-display text-lg font-semibold uppercase tracking-widest text-brown/70">
              {w}
            </span>
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
