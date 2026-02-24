import './App.css'
import Home from './comps/Home.jsx'

function App() {
  return (
    <>
    <header>
      <h1>My Portfolio</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>About me</li>
          <li>Projects</li>
          <li>Contact me</li>
        </ul>
      </nav>
      </header>
      <Home/>
    </>
  )
}

export default App
