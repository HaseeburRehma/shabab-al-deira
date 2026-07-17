import { motion } from "framer-motion";
import Reveal from "./Reveal";

const POINTS = [
  "Free at-home measurement & consultation",
  "Premium imported fabrics & materials",
  "In-house tailoring and professional fitting",
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        {/* Image collage */}
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-[2rem] shadow-card">
            <img
              src="https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1100&q=80"
              alt="Curated living room interior"
              className="h-[520px] w-full object-cover"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute -bottom-8 -right-4 w-48 rounded-2xl bg-espresso p-6 text-center text-white shadow-card sm:-right-8"
          >
            <p className="font-display text-4xl font-extrabold text-accent">15+</p>
            <p className="mt-1 text-sm text-cream/80">years transforming Dubai homes</p>
          </motion.div>
          <div className="absolute -left-6 -top-6 -z-0 h-32 w-32 rounded-3xl border-2 border-tan/50" />
        </Reveal>

        {/* Copy */}
        <div>
          <Reveal>
            <p className="eyebrow mb-4 text-sm font-semibold text-copper">Who We Are</p>
            <h2 className="font-display text-4xl font-extrabold leading-tight text-espresso sm:text-5xl">
              Designing spaces,
              <br />
              <span className="text-accent">enhancing lives.</span>
            </h2>
            <div className="brand-rule mt-6" />
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-7 text-lg leading-relaxed text-brown/90">
              We craft personalized, stylish interiors that combine functionality and elegance for
              residential and commercial spaces — transforming your vision into inspiring environments that
              enhance daily life.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="mt-8 space-y-4">
              {POINTS.map((p) => (
                <li key={p} className="flex items-center gap-4">
                  <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-accent/15 text-accent">
                    ✓
                  </span>
                  <span className="font-medium text-espresso">{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.3}>
            <a
              href="#contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-espresso px-8 py-4 font-display font-semibold text-white transition-transform hover:-translate-y-1"
            >
              Start Your Project <span>→</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
