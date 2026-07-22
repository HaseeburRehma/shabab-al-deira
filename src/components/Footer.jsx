import { Link } from "react-router-dom";
import { BRAND, SERVICES } from "../site";

const COMPANY = [
  { label: "About Us", to: "/#about" },
  { label: "Our Services", to: "/services" },
  { label: "Our Work", to: "/#gallery" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-bark text-cream/80">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:grid-cols-2 md:grid-cols-4">
        {/* Brand */}
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo-mark.svg" alt="Shabab Al Deira — Curtains & Blinds" className="h-12 w-10" />
            <span className="flex flex-col leading-none">
              <span className="font-display text-xl font-bold text-white">
                SHABAB<span className="text-accent"> AL DEIRA</span>
              </span>
              <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.32em] text-cream/60">
                Curtains &amp; Blinds
              </span>
            </span>
          </Link>
          <p className="mt-5 max-w-sm leading-relaxed text-cream/60">
            {BRAND.tagline} Personalized, stylish interiors for residential and commercial spaces across Dubai.
          </p>
          <a
            href={`tel:${BRAND.phoneRaw}`}
            className="mt-6 inline-block font-display text-lg font-semibold text-accent hover:underline"
          >
            {BRAND.phone}
          </a>
          <p className="mt-1 text-sm text-cream/60">{BRAND.address}</p>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display font-semibold uppercase tracking-widest text-white">Services</h4>
          <ul className="mt-5 space-y-3">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`} className="text-cream/60 transition-colors hover:text-accent">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-display font-semibold uppercase tracking-widest text-white">Company</h4>
          <ul className="mt-5 space-y-3">
            {COMPANY.map((c) => (
              <li key={c.label}>
                <Link to={c.to} className="text-cream/60 transition-colors hover:text-accent">
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-center text-sm text-cream/50 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} {BRAND.legal}. All rights reserved.
          </p>
          <p>{BRAND.web} · Designing Spaces, Enhancing Lives.</p>
        </div>
      </div>
    </footer>
  );
}
