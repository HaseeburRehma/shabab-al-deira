import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { Icon } from "../components/Icons";
import { SERVICES, getService, BRAND } from "../site";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getService(slug);

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

      {/* Feature grid */}
      <section className="bg-sand py-16 sm:py-24">
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

      {/* Showcase gallery */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold text-espresso sm:text-4xl">
              {service.title} in real spaces
            </h2>
            <div className="brand-rule mt-5" />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {[service.img, ...service.gallery].slice(0, 2).map((src, i) => (
              <motion.figure
                key={src + i}
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="overflow-hidden rounded-3xl shadow-[0_20px_50px_-30px_rgba(74,54,38,0.6)]"
              >
                <img src={src} alt={service.title} className="h-64 w-full object-cover sm:h-80" />
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="bg-sand py-16 sm:py-24">
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
    </>
  );
}
