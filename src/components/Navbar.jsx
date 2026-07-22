import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES, getProducts } from "../site";
import { Icon } from "./Icons";

// Services with their sub-category (sub-service) ranges for the mega-menu.
const SERVICE_GROUPS = SERVICES.map((s) => ({
  slug: s.slug,
  title: s.title,
  icon: s.icon,
  subs: getProducts(s.slug),
}));

const LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/#about" },
  { label: "Services", to: "/services", mega: true },
  { label: "Gallery", to: "/#gallery" },
  { label: "Contact", to: "/contact" },
];

const Chevron = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className={className}>
    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setSubOpen(false);
  }, [pathname]);

  const solid = scrolled || !isHome || open;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-cream/90 backdrop-blur-md shadow-[0_10px_30px_-18px_rgba(74,54,38,0.5)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo-mark.svg" alt="" className="h-10 w-8" />
          <span
            className={`font-display text-lg font-bold leading-none tracking-wide transition-colors ${
              solid ? "text-espresso" : "text-white"
            }`}
          >
            SHABAB<span className="text-accent"> AL DEIRA</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-9 md:flex">
          {LINKS.map((l) =>
            l.mega ? (
              <li key={l.to} className="group relative">
                <Link
                  to={l.to}
                  className={`flex items-center gap-1 font-display text-sm font-medium tracking-wide transition-colors ${
                    solid ? "text-brown hover:text-accent" : "text-white/90 hover:text-white"
                  }`}
                >
                  {l.label}
                  <Chevron className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />
                </Link>

                {/* Mega-menu */}
                <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 translate-y-2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="w-[min(48rem,92vw)] rounded-2xl bg-cream p-6 shadow-soft ring-1 ring-linen">
                    <div className="grid grid-cols-2 gap-x-6 gap-y-5 lg:grid-cols-3">
                      {SERVICE_GROUPS.map((s) => (
                        <div key={s.slug}>
                          <Link
                            to={`/services/${s.slug}`}
                            className="flex items-center gap-2 font-display text-sm font-bold text-espresso transition-colors hover:text-accent"
                          >
                            <span className="flex h-7 w-7 flex-none items-center justify-center rounded-lg bg-accent/15 text-copper">
                              <Icon name={s.icon} className="h-4 w-4" />
                            </span>
                            {s.title}
                          </Link>
                          {s.subs.length > 0 && (
                            <ul className="mt-2.5 space-y-1.5 border-l border-linen pl-3">
                              {s.subs.map((p) => (
                                <li key={p.slug}>
                                  <Link
                                    to={`/services/${s.slug}#${p.slug}`}
                                    className="block text-[13px] text-brown/75 transition-colors hover:text-accent"
                                  >
                                    {p.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 border-t border-linen pt-4">
                      <Link
                        to="/services"
                        className="font-display text-sm font-semibold text-accent hover:underline"
                      >
                        View all services →
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            ) : (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={`group relative font-display text-sm font-medium tracking-wide transition-colors ${
                    solid ? "text-brown hover:text-accent" : "text-white/90 hover:text-white"
                  }`}
                >
                  {l.label}
                  <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ),
          )}
          <Link
            to="/contact"
            className="rounded-full bg-accent px-5 py-2.5 font-display text-sm font-semibold text-white shadow-[0_10px_25px_-10px_rgba(224,149,90,0.9)] transition-transform hover:-translate-y-0.5"
          >
            Get a Quote
          </Link>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          className={`flex h-11 w-11 items-center justify-center rounded-full md:hidden ${
            solid ? "text-espresso" : "text-white"
          }`}
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-current transition-all ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-current transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-current transition-all ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mx-4 mt-3 max-h-[78vh] overflow-y-auto rounded-2xl bg-cream shadow-soft md:hidden"
          >
            <ul>
              {LINKS.map((l) =>
                l.mega ? (
                  <li key={l.to} className="border-b border-linen/60">
                    <div className="flex items-center justify-between">
                      <Link
                        to={l.to}
                        onClick={() => setOpen(false)}
                        className="flex-1 px-6 py-4 font-display font-medium text-espresso"
                      >
                        {l.label}
                      </Link>
                      <button
                        onClick={() => setSubOpen((v) => !v)}
                        aria-label="Toggle services"
                        className="px-5 py-4 text-espresso"
                      >
                        <Chevron className={`h-4 w-4 transition-transform ${subOpen ? "rotate-180" : ""}`} />
                      </button>
                    </div>
                    <AnimatePresence>
                      {subOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden bg-sand/50"
                        >
                          {SERVICE_GROUPS.map((s) => (
                            <div key={s.slug} className="border-t border-linen/50">
                              <Link
                                to={`/services/${s.slug}`}
                                onClick={() => setOpen(false)}
                                className="flex items-center gap-2 px-6 py-3 font-display text-sm font-semibold text-espresso"
                              >
                                <Icon name={s.icon} className="h-4 w-4 text-copper" />
                                {s.title}
                              </Link>
                              {s.subs.length > 0 && (
                                <ul className="pb-2">
                                  {s.subs.map((p) => (
                                    <li key={p.slug}>
                                      <Link
                                        to={`/services/${s.slug}#${p.slug}`}
                                        onClick={() => setOpen(false)}
                                        className="block py-1.5 pl-14 pr-6 text-[13px] text-brown/75 hover:text-accent"
                                      >
                                        {p.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                ) : (
                  <li key={l.to} className="border-b border-linen/60">
                    <Link
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className="block px-6 py-4 font-display font-medium text-espresso hover:bg-sand"
                    >
                      {l.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
            <div className="p-4">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-accent px-5 py-3 text-center font-display font-semibold text-white"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
