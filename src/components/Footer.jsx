import { BRAND } from "../site";

const COLS = [
  { title: "Services", items: ["Curtains", "Blinds & Shutters", "Carpets", "Upholstery", "Wallpapers", "Sheds & Tents"] },
  { title: "Company", items: ["About Us", "Our Work", "Consultation", "Contact"] },
];

export default function Footer() {
  return (
    <footer className="bg-bark text-cream/80">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src="/logo-mark.svg" alt="" className="h-11 w-9" />
            <span className="font-display text-xl font-bold text-white">
              SHABAB<span className="text-accent"> AL DEIRA</span>
            </span>
          </div>
          <p className="mt-5 max-w-sm leading-relaxed text-cream/60">
            {BRAND.tagline} Personalized, stylish interiors for residential and commercial spaces across Dubai.
          </p>
          <p className="mt-6 font-display text-lg font-semibold text-accent">{BRAND.phone}</p>
          <p className="mt-1 text-sm text-cream/60">{BRAND.address}</p>
        </div>

        {COLS.map((c) => (
          <div key={c.title}>
            <h4 className="font-display font-semibold uppercase tracking-widest text-white">{c.title}</h4>
            <ul className="mt-5 space-y-3">
              {c.items.map((it) => (
                <li key={it}>
                  <a href="#services" className="text-cream/60 transition-colors hover:text-accent">
                    {it}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-cream/50 sm:flex-row">
          <p>© {new Date().getFullYear()} {BRAND.legal}. All rights reserved.</p>
          <p>
            {BRAND.web} · Designing Spaces, Enhancing Lives.
          </p>
        </div>
      </div>
    </footer>
  );
}
