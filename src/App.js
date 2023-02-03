import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Education from './components/Education/Education';
import Project from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <Education />
      <Project />
      <Skills />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
