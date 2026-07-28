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
          <div className="mt-6 space-y-2">
            <a
              href={`tel:${BRAND.phoneRaw}`}
              className="block font-display text-lg font-semibold text-accent hover:underline"
            >
              {BRAND.phone}
            </a>
            <a
              href={`https://wa.me/${BRAND.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-display text-sm font-semibold text-[#25D366] hover:underline"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M17.5 14.4c-.3-.15-1.77-.87-2-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.95 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.9-.8-1.5-1.77-1.67-2.07-.17-.3-.02-.46.13-.6.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.53.07-.8.38-.28.3-1.05 1.02-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.08 4.5.71.3 1.26.48 1.7.62.71.22 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z M12 2a10 10 0 0 0-8.6 15.05L2 22l5.1-1.34A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.02.8.8-2.95-.2-.3A8.2 8.2 0 1 1 12 20.2Z" />
              </svg>
              WhatsApp: {BRAND.whatsappDisplay}
            </a>
          </div>
          <p className="mt-3 text-sm text-cream/60">{BRAND.address}</p>
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
