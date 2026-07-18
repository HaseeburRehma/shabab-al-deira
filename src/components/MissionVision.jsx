import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import { MISSION, MISSION_IMG } from "../site";

export default function MissionVision() {
  return (
    <section id="mission" className="bg-cream py-16 sm:py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2 lg:gap-14">
        {/* Left — stacked About / Mission / Vision */}
        <div className="order-2 lg:order-1">
          {MISSION.map((block, i) => (
            <Reveal key={block.title} delay={i * 0.1}>
              <div className={i > 0 ? "mt-8 sm:mt-12" : ""}>
                <h3 className="font-display text-2xl font-extrabold text-espresso sm:text-4xl">
                  {block.title}
                </h3>
                <div className="mt-4 h-[2px] w-full bg-gradient-to-r from-copper/60 via-linen to-transparent" />
                <p className="mt-5 max-w-lg text-lg leading-relaxed text-brown/85">{block.text}</p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.3}>
            <Link
              to="/services"
              className="mt-12 inline-flex items-center gap-2 rounded-full border border-espresso/20 px-8 py-4 font-display font-semibold text-espresso transition-colors hover:bg-espresso hover:text-white"
            >
              Explore All Services <span>→</span>
            </Link>
          </Reveal>
        </div>

        {/* Right — image */}
        <Reveal className="order-1 lg:order-2" y={30}>
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-card">
              <motion.img
                src={MISSION_IMG}
                alt="Elegant Shabab Al Deira interior finishing"
                initial={{ scale: 1.12 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: "easeOut" }}
                className="h-[400px] w-full object-cover sm:h-[560px]"
              />
            </div>
            {/* Decorative accents */}
            <div className="absolute -right-5 -top-5 -z-10 h-28 w-28 rounded-3xl border-2 border-tan/50" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="absolute -bottom-6 -left-6 rounded-2xl bg-accent px-7 py-5 text-white shadow-card"
            >
              <p className="font-display text-2xl font-extrabold leading-none">Deira, Dubai</p>
              <p className="mt-1 text-sm text-white/85">Serving the whole UAE</p>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
