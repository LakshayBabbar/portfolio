import Navbar from "./components/header/Navbar";
import Hero from "./components/header/Hero";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <hr />
      <Footer />
      <SpeedInsights />
    </>
  );
}

export default App;
