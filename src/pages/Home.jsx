import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import About from "../components/About";
import MissionVision from "../components/MissionVision";
import Services from "../components/Services";
import Stats from "../components/Stats";
import Gallery from "../components/Gallery";
import CaseStudy from "../components/CaseStudy";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <MissionVision />
      <Services />
      <Stats />
      <Gallery />
      <CaseStudy />
      <CTA />
    </>
  );
}
