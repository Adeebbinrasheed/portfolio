import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Projects from './Components/Projects'
import {motion, useScroll} from 'framer-motion'

const App = () => {
  
  return (
    <div className=' bg-black text-white antialiased'>
      <Navbar />
      <Hero/>
      <About/>
      <Projects/>
    </div>
    
  )
}

export default App