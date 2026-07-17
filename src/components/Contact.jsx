import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { BRAND } from "../site";

const INFO = [
  {
    label: "Call us",
    value: BRAND.phone,
    href: `tel:${BRAND.phoneRaw}`,
    tint: "bg-accent/15 text-accent",
    icon: "M3 5a2 2 0 0 1 2-2h2l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v2a2 2 0 0 1-2 2A16 16 0 0 1 3 5Z",
  },
  {
    label: "WhatsApp",
    value: `Chat on ${BRAND.phone}`,
    href: `https://wa.me/${BRAND.whatsapp}`,
    tint: "bg-[#25D366]/15 text-[#1fae54]",
    fill: true,
    icon: "M17.5 14.4c-.3-.15-1.77-.87-2-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.95 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.9-.8-1.5-1.77-1.67-2.07-.17-.3-.02-.46.13-.6.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.53.07-.8.38-.28.3-1.05 1.02-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.08 4.5.71.3 1.26.48 1.7.62.71.22 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z M12 2a10 10 0 0 0-8.6 15.05L2 22l5.1-1.34A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.02.8.8-2.95-.2-.3A8.2 8.2 0 1 1 12 20.2Z",
  },
  {
    label: "Visit us",
    value: BRAND.address,
    href: "https://maps.google.com/?q=Naif+Road+Deira+Dubai",
    tint: "bg-accent/15 text-accent",
    icon: "M12 21s7-6.5 7-11a7 7 0 1 0-14 0c0 4.5 7 11 7 11Z M12 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-sand py-16 sm:py-24 lg:py-32">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 lg:grid-cols-2">
        {/* Left — info */}
        <div>
          <Reveal>
            <p className="eyebrow mb-4 text-sm font-semibold text-copper">Get In Touch</p>
            <h2 className="font-display text-4xl font-extrabold leading-tight text-espresso sm:text-5xl">
              Let's give your place
              <br />
              <span className="text-accent">a brand-new look.</span>
            </h2>
            <div className="brand-rule mt-6" />
            <p className="mt-6 max-w-md text-lg text-brown/80">
              Book a free consultation and measurement. Our team will bring samples straight to your door.
            </p>
          </Reveal>

          <div className="mt-9 space-y-4">
            {INFO.map((it, i) => (
              <Reveal key={it.label} delay={i * 0.1}>
                <a
                  href={it.href}
                  target={it.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-2xl bg-cream p-5 shadow-[0_16px_40px_-30px_rgba(74,54,38,0.7)] ring-1 ring-linen/50 transition-all hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(74,54,38,0.7)]"
                >
                  <span className={`flex h-12 w-12 flex-none items-center justify-center rounded-2xl ${it.tint}`}>
                    <svg
                      viewBox="0 0 24 24"
                      fill={it.fill ? "currentColor" : "none"}
                      stroke={it.fill ? "none" : "currentColor"}
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d={it.icon} />
                    </svg>
                  </span>
                  <div className="min-w-0">
                    <p className="eyebrow text-xs font-semibold text-copper">{it.label}</p>
                    <p className="mt-1 font-medium text-espresso">{it.value}</p>
                  </div>
                  <span className="ml-auto flex-none text-copper opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                    →
                  </span>
                </a>
              </Reveal>
            ))}
          </div>

          {/* Trust strip */}
          <Reveal delay={0.3}>
            <div className="mt-8 flex items-center gap-4 rounded-2xl border border-copper/20 bg-cream/60 px-6 py-4">
              <div className="text-lg text-accent">★★★★★</div>
              <p className="text-sm font-medium text-brown/80">
                Trusted by <span className="font-bold text-espresso">2,400+</span> Dubai homes & offices
              </p>
            </div>
          </Reveal>
        </div>

        {/* Right — form */}
        <Reveal delay={0.15}>
          <motion.form
            onSubmit={(e) => e.preventDefault()}
            className="overflow-hidden rounded-[2rem] bg-espresso shadow-card"
          >
            {/* Accent header */}
            <div className="bg-gradient-to-r from-accent to-copper px-8 py-6 sm:px-10">
              <h3 className="font-display text-2xl font-bold text-white">Request a free quote</h3>
              <p className="mt-1 text-white/85">We'll get back to you within 24 hours.</p>
            </div>

            <div className="space-y-4 p-8 sm:p-10">
              {[
                { ph: "Your name", type: "text" },
                { ph: "Phone number", type: "tel" },
                { ph: "Email address", type: "email" },
              ].map((f) => (
                <input
                  key={f.ph}
                  type={f.type}
                  placeholder={f.ph}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-white placeholder:text-cream/50 outline-none transition-colors focus:border-accent"
                />
              ))}
              <select
                defaultValue=""
                className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 bg-[right_1rem_center] bg-no-repeat px-5 py-3.5 text-cream/70 outline-none focus:border-accent"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%23e0955a' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 6l4 4 4-4'/%3E%3C/svg%3E\")",
                }}
              >
                <option value="" disabled style={{ background: "#3a2a1d", color: "#faf5ef" }}>
                  Service you're interested in
                </option>
                {["Curtains", "Blinds & Shutters", "Carpets & Rugs", "Upholstery", "Wallpapers", "Sheds & Tents"].map(
                  (s) => (
                    <option key={s} style={{ background: "#3a2a1d", color: "#faf5ef" }}>
                      {s}
                    </option>
                  ),
                )}
              </select>
              <textarea
                rows={3}
                placeholder="Tell us about your space…"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-white placeholder:text-cream/50 outline-none transition-colors focus:border-accent"
              />

              <button
                type="submit"
                className="mt-2 w-full rounded-full bg-accent py-4 font-display font-semibold text-white shadow-[0_16px_40px_-14px_rgba(224,149,90,0.9)] transition-transform hover:-translate-y-1"
              >
                Send Request
              </button>
              <p className="text-center text-xs text-cream/50">
                No spam — we only use your details to prepare your quote.
              </p>
            </div>
          </motion.form>
        </Reveal>
      </div>
    </section>
  );
}
