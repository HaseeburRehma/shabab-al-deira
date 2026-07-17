import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { Icon } from "./Icons";
import { SERVICES } from "../site";

export default function Services() {
  return (
    <section id="services" className="relative bg-sand py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-4 text-sm font-semibold text-copper">Our Services</p>
          <h2 className="font-display text-4xl font-extrabold text-espresso sm:text-5xl">
            Everything for a beautiful interior
          </h2>
          <div className="brand-rule mx-auto mt-6" />
          <p className="mt-6 text-lg text-brown/80">
            From the first measurement to the final fitting — one trusted team for your whole space.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.1}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="group relative h-full overflow-hidden rounded-3xl bg-cream shadow-[0_20px_50px_-30px_rgba(74,54,38,0.6)]"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/10 to-transparent" />
                  <span className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cream/95 text-copper shadow-lg">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="font-display text-xl font-bold text-espresso">{s.title}</h3>
                  <p className="mt-3 text-brown/80">{s.desc}</p>
                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-2 font-display text-sm font-semibold text-accent opacity-0 transition-all duration-300 group-hover:opacity-100"
                  >
                    Enquire now <span>→</span>
                  </a>
                </div>
                <span className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-accent to-copper transition-all duration-500 group-hover:w-full" />
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
