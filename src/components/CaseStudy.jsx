import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import { CASE_STUDY } from "../site";

export default function CaseStudy() {
  const cs = CASE_STUDY;
  const [hero, ...rest] = cs.images;

  return (
    <section id="work" className="relative overflow-hidden bg-espresso py-16 text-white sm:py-24">
      <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-copper/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal className="max-w-3xl">
          <p className="eyebrow mb-3 flex items-center gap-3 text-sm font-semibold text-accent">
            <span className="h-px w-8 bg-accent" /> {cs.eyebrow}
          </p>
          <h2 className="font-display text-3xl font-extrabold sm:text-5xl">{cs.client}</h2>
          <span className="mt-4 inline-block rounded-full bg-accent/20 px-4 py-1.5 text-sm font-semibold text-accent">
            {cs.category}
          </span>
        </Reveal>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">
          {/* Hero image */}
          <Reveal y={30}>
            <div className="overflow-hidden rounded-[2rem] shadow-card">
              <motion.img
                src={hero}
                alt={`${cs.client} — commercial carpet installation`}
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: "easeOut" }}
                className="h-[340px] w-full object-cover sm:h-[460px]"
              />
            </div>
          </Reveal>

          {/* Copy */}
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-cream/85">{cs.summary}</p>

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {cs.highlights.map((h) => (
                <li key={h} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-accent/20 text-xs text-accent">
                    ✓
                  </span>
                  <span className="font-medium text-cream">{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to={`/services/${cs.service}`}
                className="rounded-full bg-accent px-8 py-4 text-center font-display font-semibold text-white shadow-[0_16px_40px_-14px_rgba(224,149,90,0.9)] transition-transform hover:-translate-y-1"
              >
                Explore Carpets & Rugs
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-white/30 px-8 py-4 text-center font-display font-semibold text-white transition-colors hover:bg-white/10"
              >
                Start a Project
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Supporting shots */}
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {rest.map((src, i) => (
            <motion.figure
              key={src}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="overflow-hidden rounded-2xl shadow-[0_20px_50px_-30px_rgba(0,0,0,0.6)]"
            >
              <img src={src} alt={cs.client} className="h-40 w-full object-cover sm:h-48" />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
