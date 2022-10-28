import './App.css';
import About from './components/About';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Home />
      <Nav />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
