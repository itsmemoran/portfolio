import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import CaseStudies from "./components/sections/CaseStudies";
import Creations from "./components/sections/Creations";
import Testimonials from "./components/sections/Testimonials";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <CaseStudies />
        <Creations />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
