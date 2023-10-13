import './App.css';
import { Fragment } from 'react';
import Header from './components/header/Header';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

function App() {
  return (
    <Fragment>
      <Header />
      <Skills id="skills" />
      <Projects id="projects" />
      <Contact id="contact" />
    </Fragment>
  );
};

export default App;
