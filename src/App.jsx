import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Projects from './Components/Projects'
import wall from './assets/bg.avif'
// import Contact from './Components/Contact'
import Whatdo from './Components/Whatdo'

const App = () => {
  
  return (
    <div className='overflow-hidden bg-gray-200 text-white antialiased' >
      <Navbar />
      <Hero/>
      <About/>
      <Whatdo/>
      {/* <Projects/> */}
      {/* <Contact/> */}
    </div>
    
  )
}

export default App