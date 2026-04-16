import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollStrokeLine from "./shared/ScrollStrokeLine";
import SectionReveal from "./shared/SectionReveal";
import SectionRecede from "./shared/SectionRecede";

import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import CaseStudies from "./components/sections/CaseStudies";
import Creations from "./components/sections/Creations";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <ScrollStrokeLine />
      <main>
        <SectionRecede>
          <Hero />
        </SectionRecede>

        <SectionReveal>
          <Skills />
        </SectionReveal>

        <Projects />
        <CaseStudies />
        <Creations />

        <SectionRecede>
          <Experience />
        </SectionRecede>

        <SectionReveal>
          <Contact />
          <Footer />
        </SectionReveal>
      </main>
    </>
  );
}