import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { Icon } from "../components/Icons";
import { SERVICES } from "../site";

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="What We Do"
        title="Our Services"
        subtitle="From the first measurement to the final fitting — one trusted team for curtains, blinds, carpets, upholstery, wallpapers and outdoor shade."
        image={SERVICES[0].img}
        crumbs={[{ label: "Services" }]}
      />

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.1}>
                <motion.article
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-[0_20px_50px_-30px_rgba(74,54,38,0.6)] ring-1 ring-linen/50"
                >
                  <Link to={`/services/${s.slug}`} className="relative block h-52 overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/10 to-transparent" />
                    <span className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cream/95 text-copper shadow-lg">
                      <Icon name={s.icon} className="h-6 w-6" />
                    </span>
                  </Link>
                  <div className="flex flex-1 flex-col p-7">
                    <h2 className="font-display text-xl font-bold text-espresso">{s.title}</h2>
                    <p className="mt-3 flex-1 text-brown/80">{s.desc}</p>
                    <Link
                      to={`/services/${s.slug}`}
                      className="mt-5 inline-flex items-center gap-2 font-display text-sm font-semibold text-accent transition-transform hover:gap-3"
                    >
                      View details <span>→</span>
                    </Link>
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
