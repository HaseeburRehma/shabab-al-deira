import PageHeader from "../components/PageHeader";
import Contact from "../components/Contact";
import Reveal from "../components/Reveal";
import { BRAND } from "../site";

const MAP_SRC =
  "https://maps.google.com/maps?width=100%25&height=460&hl=en&q=Naif%20Road%20Deira%20Dubai%20UAE&t=&z=15&ie=UTF8&iwloc=B&output=embed";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Let's Talk"
        title="Contact Us"
        subtitle="Book a free consultation and measurement — our team brings samples straight to your door across Dubai."
        crumbs={[{ label: "Contact" }]}
      />

      {/* Reuse the contact form + info block — trim its bottom padding so the
          map sits close beneath it on the same background. */}
      <div className="[&>section]:!pb-8 sm:[&>section]:!pb-12">
        <Contact />
      </div>

      {/* Map — continues the same sand background, no extra top gap */}
      <section className="bg-sand pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="eyebrow text-sm font-semibold text-copper">Find Us</p>
                <h2 className="mt-2 font-display text-3xl font-extrabold text-espresso sm:text-4xl">
                  Our showroom in Deira
                </h2>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Naif+Road+Deira+Dubai"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-espresso/20 px-6 py-3 font-display text-sm font-semibold text-espresso transition-colors hover:bg-espresso hover:text-white"
              >
                Open in Google Maps →
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-[2rem] shadow-card ring-1 ring-linen">
              <iframe
                title="Shabab Al Deira location — Naif Road, Deira, Dubai"
                src={MAP_SRC}
                className="h-[360px] w-full border-0 sm:h-[460px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <p className="mt-4 text-center text-brown/80">{BRAND.address}</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
