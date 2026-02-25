import './App.css'
import Contact from './comps/Contact.jsx';
import Navigation from './comps/Navigation';
import Projects from './comps/Projects.jsx';
import About from './comps/About';
import Home from './comps/Home.jsx';
import Footer from './comps/Footer.jsx';

function App() {
  return (
    <>
      <Navigation/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
