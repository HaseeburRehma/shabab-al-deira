import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { BRAND } from "../site";

const LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/#about" },
  { label: "Services", to: "/services" },
  { label: "Gallery", to: "/#gallery" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  // Solid navbar when scrolled, on any inner page, or when the mobile menu is open.
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
          {LINKS.map((l) => (
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
          ))}
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
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mx-4 mt-3 overflow-hidden rounded-2xl bg-cream shadow-soft md:hidden"
          >
            {LINKS.map((l) => (
              <li key={l.to} className="border-b border-linen/60 last:border-0">
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-4 font-display font-medium text-espresso hover:bg-sand"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="p-4">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-accent px-5 py-3 text-center font-display font-semibold text-white"
              >
                Get a Quote
              </Link>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
