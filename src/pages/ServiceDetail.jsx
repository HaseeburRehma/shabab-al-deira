import { useState, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { Icon } from "../components/Icons";
import { SERVICES, getService, getProducts, BRAND } from "../site";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getService(slug);
  const products = getProducts(slug);
  const [box, setBox] = useState(null); // { name, images, index }

  // Close lightbox on Escape; lock scroll while open.
  useEffect(() => {
    if (!box) return;
    const onKey = (e) => {
      if (e.key === "Escape") setBox(null);
      if (e.key === "ArrowRight") setBox((b) => b && { ...b, index: (b.index + 1) % b.images.length });
      if (e.key === "ArrowLeft") setBox((b) => b && { ...b, index: (b.index - 1 + b.images.length) % b.images.length });
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [box]);

  if (!service) return <Navigate to="/services" replace />;

  const others = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title={service.title}
        subtitle={service.tagline}
        image={service.img}
        crumbs={[{ label: "Services", to: "/services" }, { label: service.title }]}
      />

      {/* Intro + what we offer */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/15 text-copper">
              <Icon name={service.icon} className="h-7 w-7" />
            </span>
            <h2 className="mt-6 font-display text-3xl font-extrabold text-espresso sm:text-4xl">
              {service.tagline}
            </h2>
            <div className="brand-rule mt-5" />
            {service.intro.map((p) => (
              <p key={p} className="mt-5 text-lg leading-relaxed text-brown/85">
                {p}
              </p>
            ))}

            <h3 className="mt-8 font-display text-lg font-bold text-espresso">What we offer</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {service.types.map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-accent/15 text-xs text-accent">
                    ✓
                  </span>
                  <span className="font-medium text-espresso">{t}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="rounded-full bg-accent px-8 py-4 text-center font-display font-semibold text-white shadow-[0_16px_40px_-14px_rgba(224,149,90,0.9)] transition-transform hover:-translate-y-1"
              >
                Get a Free Quote
              </Link>
              <a
                href={`https://wa.me/${BRAND.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-espresso/20 px-8 py-4 text-center font-display font-semibold text-espresso transition-colors hover:bg-espresso hover:text-white"
              >
                Ask on WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal className="order-1 lg:order-2" y={30}>
            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] shadow-card">
                <img
                  src={service.img}
                  alt={service.title}
                  className="h-[360px] w-full object-cover sm:h-[520px]"
                />
              </div>
              <div className="absolute -right-5 -top-5 -z-10 hidden h-28 w-28 rounded-3xl border-2 border-tan/50 sm:block" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Product range (sub-categories with real photos) */}
      {products.length > 0 && (
        <section className="bg-sand py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal className="max-w-2xl">
              <p className="eyebrow mb-3 text-sm font-semibold text-copper">Product Range</p>
              <h2 className="font-display text-3xl font-extrabold text-espresso sm:text-4xl">
                Our {service.title.toLowerCase()} range
              </h2>
              <div className="brand-rule mt-5" />
              <p className="mt-5 text-lg text-brown/80">
                {products.length} styles to choose from — each made to measure and professionally installed.
                Tap any range to view real photos.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
              {products.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 4) * 0.05} className="scroll-mt-28">
                  <motion.button
                    id={p.slug}
                    type="button"
                    onClick={() => setBox({ name: p.name, images: p.images, index: 0 })}
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="group block h-full w-full scroll-mt-28 overflow-hidden rounded-2xl bg-white text-left shadow-[0_20px_50px_-32px_rgba(74,54,38,0.6)] ring-1 ring-linen/50"
                  >
                    <div className="relative h-36 overflow-hidden sm:h-44">
                      <img
                        src={p.images[0]}
                        alt={p.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-espresso/0 transition-colors duration-300 group-hover:bg-espresso/25" />
                      {p.images.length > 1 && (
                        <span className="absolute right-2.5 top-2.5 rounded-full bg-espresso/80 px-2.5 py-1 text-[11px] font-semibold text-white">
                          {p.images.length} photos
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between p-4">
                      <h3 className="font-display text-sm font-bold text-espresso sm:text-[15px]">{p.name}</h3>
                      <span className="text-copper opacity-0 transition-opacity group-hover:opacity-100">→</span>
                    </div>
                  </motion.button>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Feature grid */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3 text-sm font-semibold text-copper">Why Choose Us</p>
            <h2 className="font-display text-3xl font-extrabold text-espresso sm:text-4xl">
              Built to a higher standard
            </h2>
            <div className="brand-rule mx-auto mt-5" />
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.features.map((f, i) => (
              <Reveal key={f.t} delay={(i % 4) * 0.08}>
                <div className="h-full rounded-3xl bg-white p-7 shadow-[0_20px_50px_-32px_rgba(74,54,38,0.6)] ring-1 ring-linen/50">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 font-display text-lg font-bold text-accent">
                    {i + 1}
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-espresso">{f.t}</h3>
                  <p className="mt-2 text-brown/80">{f.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase gallery — only when there is no product range (e.g. upholstery) */}
      {products.length === 0 && (
        <section className="bg-sand py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <h2 className="font-display text-3xl font-extrabold text-espresso sm:text-4xl">
                {service.title} in real spaces
              </h2>
              <div className="brand-rule mt-5" />
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {[service.img, ...service.gallery].map((src, i) => (
                <motion.figure
                  key={src + i}
                  initial={{ opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                  className="overflow-hidden rounded-3xl shadow-[0_20px_50px_-30px_rgba(74,54,38,0.6)]"
                >
                  <img src={src} alt={`${service.title} project`} className="h-64 w-full object-cover sm:h-80" />
                </motion.figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other services */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-3xl font-extrabold text-espresso sm:text-4xl">
              Explore other services
            </h2>
            <Link to="/services" className="font-display font-semibold text-accent hover:underline">
              View all →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {others.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group relative block overflow-hidden rounded-3xl shadow-[0_20px_50px_-30px_rgba(74,54,38,0.6)]"
              >
                <img
                  src={s.img}
                  alt={s.title}
                  className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="font-display text-lg font-bold text-white">{s.title}</h3>
                  <span className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                    View details <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {box && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setBox(null)}
            className="fixed inset-0 z-[70] flex flex-col items-center justify-center bg-ink/90 p-4 backdrop-blur-sm"
          >
            <div className="mb-3 flex w-full max-w-4xl items-center justify-between text-white">
              <p className="font-display font-semibold">
                {box.name}
                <span className="ml-2 text-sm text-white/60">
                  {box.index + 1} / {box.images.length}
                </span>
              </p>
              <button
                onClick={() => setBox(null)}
                aria-label="Close"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xl hover:bg-white/20"
              >
                ✕
              </button>
            </div>

            <motion.div
              key={box.index}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl overflow-hidden rounded-2xl"
            >
              <img src={box.images[box.index]} alt={box.name} className="max-h-[72vh] w-full object-contain" />
            </motion.div>

            {box.images.length > 1 && (
              <div className="mt-4 flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={() => setBox((b) => ({ ...b, index: (b.index - 1 + b.images.length) % b.images.length }))}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
                  aria-label="Previous"
                >
                  ←
                </button>
                <div className="flex gap-2">
                  {box.images.map((src, i) => (
                    <button
                      key={src}
                      onClick={() => setBox((b) => ({ ...b, index: i }))}
                      className={`h-12 w-12 overflow-hidden rounded-lg ring-2 transition ${
                        i === box.index ? "ring-accent" : "ring-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img src={src} alt="" className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setBox((b) => ({ ...b, index: (b.index + 1) % b.images.length }))}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
                  aria-label="Next"
                >
                  →
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
