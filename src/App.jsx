import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Navbar from './components/layout/Navbar'
import Hero from './components/layout/Hero'
import About from './components/pages/About'
import Education from './components/pages/Education'
import Skills from './components/pages/Skills'
import Contact from './components/pages/Contact'
import Footer from './components/layout/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <Hero />
     <About />
     <Education />
     <Skills />
     <Contact />
     <Footer />

    </>
  )
}

export default App
