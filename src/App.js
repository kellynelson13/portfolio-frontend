import './App.css';
import About from './components/About';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Nav from './components/Nav';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import ContactHeader from './components/ContactHeader';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Home />
      <Nav />
      <About />
      <Skills />
      <Projects />
      <ContactHeader />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
