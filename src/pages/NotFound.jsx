import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-cream px-6 pt-28 text-center">
      <p className="font-display text-7xl font-extrabold text-accent sm:text-9xl">404</p>
      <h1 className="mt-4 font-display text-2xl font-bold text-espresso sm:text-3xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-brown/80">
        The page you're looking for doesn't exist or has moved.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          to="/"
          className="rounded-full bg-accent px-8 py-4 font-display font-semibold text-white shadow-[0_16px_40px_-14px_rgba(224,149,90,0.9)] transition-transform hover:-translate-y-1"
        >
          Back to Home
        </Link>
        <Link
          to="/services"
          className="rounded-full border border-espresso/20 px-8 py-4 font-display font-semibold text-espresso transition-colors hover:bg-espresso hover:text-white"
        >
          Browse Services
        </Link>
      </div>
    </section>
  );
}
