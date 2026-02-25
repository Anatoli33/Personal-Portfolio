import './App.css'
import Contact from './comps/Contact.jsx';
import Navigation from './comps/Navigation';
import Projects from './comps/Projects.jsx';
import About from './comps/About';
import Home from './comps/Home.jsx';

function App() {
  return (
    <>
      <Navigation/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default App
