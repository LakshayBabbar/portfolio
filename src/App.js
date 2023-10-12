import './App.css';
import Header from './components/header/Header';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="back">
      <Header />
      <Skills id="skills"/>
      <Projects id="projects"/>
      <Contact id="contact"/>
    </div>
  );
};

export default App;
