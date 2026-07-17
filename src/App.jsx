import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import MissionVision from "./components/MissionVision";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Gallery from "./components/Gallery";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";

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

      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <MissionVision />
        <Services />
        <Stats />
        <Gallery />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
