import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Top band for inner pages — clears the fixed navbar and shows a breadcrumb.
export default function PageHeader({ eyebrow, title, subtitle, image, crumbs = [] }) {
  return (
    <header className="relative overflow-hidden bg-espresso pt-28 pb-14 sm:pt-36 sm:pb-20">
      {image && (
        <>
          <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/95 to-espresso/70" />
        </>
      )}
      <div className="pointer-events-none absolute -right-16 -top-10 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Breadcrumb */}
        <nav className="mb-5 flex flex-wrap items-center gap-2 text-sm text-cream/60">
          <Link to="/" className="transition-colors hover:text-accent">
            Home
          </Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-2">
              <span className="text-cream/30">/</span>
              {c.to ? (
                <Link to={c.to} className="transition-colors hover:text-accent">
                  {c.label}
                </Link>
              ) : (
                <span className="text-accent">{c.label}</span>
              )}
            </span>
          ))}
        </nav>

        {eyebrow && <p className="eyebrow mb-3 text-sm font-semibold text-accent">{eyebrow}</p>}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-display text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>
        {subtitle && <p className="mt-4 max-w-2xl text-lg text-cream/80">{subtitle}</p>}
        <div className="brand-rule mt-6" />
      </div>
    </header>
  );
}
