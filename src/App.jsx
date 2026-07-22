import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetail from "./pages/ServiceDetail";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

// Scroll to top on route change, or to the hash target if present.
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // Scroll to the target after render, then again once lazy images settle.
      // Force an instant jump (the global smooth-scroll can drop long jumps on load).
      const scroll = () => {
        let el;
        try {
          el = document.querySelector(hash);
        } catch {
          return;
        }
        if (!el) return;
        const html = document.documentElement;
        const prev = html.style.scrollBehavior;
        html.style.scrollBehavior = "auto";
        el.scrollIntoView({ block: "start" });
        html.style.scrollBehavior = prev;
      };
      const t1 = setTimeout(scroll, 90);
      const t2 = setTimeout(scroll, 550);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);
  return null;
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <div className="relative">
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-accent to-copper"
      />

      <ScrollManager />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
