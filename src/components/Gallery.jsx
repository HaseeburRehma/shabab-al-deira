import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { GALLERY } from "../site";

// Masonry-style spans for visual rhythm (8 tiles).
const SPANS = [
  "sm:col-span-2 sm:row-span-2",
  "",
  "",
  "",
  "",
  "sm:col-span-2",
  "",
  "",
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-4 text-sm font-semibold text-copper">Our Work</p>
          <h2 className="font-display text-4xl font-extrabold text-espresso sm:text-5xl">
            Recent transformations
          </h2>
          <div className="brand-rule mx-auto mt-6" />
        </Reveal>

        <div className="mt-14 grid auto-rows-[200px] grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
          {GALLERY.map((item, i) => (
            <motion.figure
              key={item.src}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl shadow-[0_20px_50px_-30px_rgba(74,54,38,0.6)] ${SPANS[i]}`}
            >
              <img
                src={item.src}
                alt={item.label}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <figcaption className="absolute inset-x-4 bottom-4 translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="font-display text-base font-semibold text-white">{item.label}</span>
                <span className="mt-0.5 block text-sm font-medium text-accent">View project →</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
