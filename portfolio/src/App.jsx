import './App.css'
import Contact from './comps/Contact.jsx';
import Home from './comps/Home.jsx'
import Navigation from './comps/Navigation';
import Projects from './comps/Projects.jsx';

function App() {
  return (
    <>
      <Navigation/>
      <Home/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default App
