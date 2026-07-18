import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BRAND } from "../site";

export default function CTA() {
  return (
    <section className="bg-cream px-6 py-16">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] shadow-card">
        {/* Real interior backdrop + warm overlay */}
        <img
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1700&q=80"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-espresso/95 via-bark/90 to-copper/80" />
        <div className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-accent/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-tan/20 blur-3xl" />

        <div className="relative grid items-center gap-8 px-8 py-14 sm:px-14 lg:grid-cols-[1.4fr_1fr] lg:py-16">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="eyebrow mb-4 flex items-center justify-center gap-3 text-sm font-semibold text-accent lg:justify-start"
            >
              <span className="h-px w-8 bg-accent" /> Free Consultation
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="font-display text-3xl font-extrabold leading-tight text-white sm:text-5xl"
            >
              Ready to transform
              <br className="hidden sm:block" /> your space?
            </motion.h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-cream/85 lg:mx-0">
              Book a free, no-obligation consultation — we'll measure up and bring fabric samples
              straight to your door.
            </p>
          </div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="flex flex-col gap-3"
          >
            <Link
              to="/contact"
              className="group rounded-full bg-accent px-8 py-4 text-center font-display font-semibold text-white shadow-[0_16px_40px_-14px_rgba(224,149,90,0.95)] transition-transform hover:-translate-y-1"
            >
              Book Free Consultation
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <a
              href={`https://wa.me/${BRAND.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-4 font-display font-semibold text-white transition-transform hover:-translate-y-1"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M17.5 14.4c-.3-.15-1.77-.87-2-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.95 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.9-.8-1.5-1.77-1.67-2.07-.17-.3-.02-.46.13-.6.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.53.07-.8.38-.28.3-1.05 1.02-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.08 4.5.71.3 1.26.48 1.7.62.71.22 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z M12 2a10 10 0 0 0-8.6 15.05L2 22l5.1-1.34A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.02.8.8-2.95-.2-.3A8.2 8.2 0 1 1 12 20.2Z" />
              </svg>
              WhatsApp Us
            </a>
            <a
              href={`tel:${BRAND.phoneRaw}`}
              className="rounded-full border border-white/40 px-8 py-4 text-center font-display font-semibold text-white transition-colors hover:bg-white/10"
            >
              Call {BRAND.phone}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
