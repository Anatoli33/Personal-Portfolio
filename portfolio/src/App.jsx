import './App.css'
import Contact from './comps/Contact.jsx';
import Navigation from './comps/Navigation';
import Projects from './comps/Projects.jsx';
import About from './comps/About';
import Home from './comps/Home.jsx';
import Footer from './comps/Footer.jsx';

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/projects' element={<Projects/>}/>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
