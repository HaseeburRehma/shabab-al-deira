import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { HERO_IMG } from "../site";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {/* Parallax background */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img src={HERO_IMG} alt="Elegant interior with layered curtains" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/80 via-bark/60 to-espresso/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/70 to-transparent" />
      </motion.div>

      {/* Floating accent glow */}
      <div className="animate-floaty pointer-events-none absolute right-[8%] top-[22%] h-64 w-64 rounded-full bg-accent/20 blur-3xl" />

      {/* Content */}
      <motion.div
        style={{ opacity: fade }}
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6"
      >
        <motion.p variants={item} className="eyebrow mb-5 flex items-center gap-3 text-sm font-medium text-accent">
          <span className="h-px w-10 bg-accent" />
          Interior &amp; Outdoor Furnishings
        </motion.p>

        <motion.h2 variants={item} className="font-script text-3xl italic text-tan sm:text-5xl">
          Modern Designs
        </motion.h2>

        <motion.h1
          variants={item}
          className="mt-2 font-display text-[2.6rem] font-extrabold leading-[1.02] text-white sm:text-6xl sm:leading-[0.95] lg:text-8xl"
        >
          Give Your Place
        </motion.h1>

        <motion.h1
          variants={item}
          className="text-outline font-display text-[2.6rem] font-extrabold leading-[1.02] sm:text-6xl sm:leading-[0.95] lg:text-8xl"
        >
          A New Look
        </motion.h1>

        <motion.div variants={item} className="brand-rule mt-6 !w-24 sm:mt-8" />

        <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-cream/85">
          We create personalized, stylish interiors that combine functionality and elegance for residential and
          commercial spaces across Dubai.
        </motion.p>

        <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
          <Link
            to="/services"
            className="group w-full rounded-full bg-accent px-8 py-4 text-center font-display font-semibold text-white shadow-[0_16px_40px_-14px_rgba(224,149,90,0.9)] transition-transform hover:-translate-y-1 sm:w-auto"
          >
            Explore Our Services
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            to="/contact"
            className="w-full rounded-full border border-white/40 px-8 py-4 text-center font-display font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10 sm:w-auto"
          >
            Book a Consultation
          </Link>
        </motion.div>
      </motion.div>

      {/* Wavy divider like the reference */}
      <div className="absolute bottom-0 left-0 z-10 w-full leading-[0]">
        <svg viewBox="0 0 1440 130" preserveAspectRatio="none" className="h-[90px] w-full sm:h-[130px]">
          <path
            fill="var(--color-cream)"
            d="M0,64 C240,140 480,10 720,54 C960,98 1200,140 1440,72 L1440,130 L0,130 Z"
          />
        </svg>
      </div>
    </section>
  );
}
