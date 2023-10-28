import './App.css';
import { Fragment } from 'react';
import Header from './components/header/Header';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Fragment>
      <Header />
      <Skills id="skills" />
      <Projects id="projects" />
      <Contact id="contact" />
      <hr />
      <Footer />
    </Fragment>
  );
}

export default App;
