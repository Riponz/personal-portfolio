import { useState } from 'react'
import './App.css'
import HeroText from './Components/HeroText'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import SelfBanner from './Components/SelfBanner'
import Contacts from './Components/Contacts'
import Projects from './Components/Projects'
import Skills from './Components/Skills'

function App() {
  

  return (
    <div className='w-full flex justify-center bg-[#101010] flex-col items-center'>
      <Navbar />
        <div className="main overflow-hidden bg-[#101010] w-full sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1440px]">
          
      {/* <div className="message fixed z-50 md:font-medium bg-white text-black text-lg md:text-sm flex justify-center items-center font-bold w-full h-15 p-5">This website is still under development! Your wait is appreciated.</div> */}
      <HeroText/>
      <SelfBanner/>
      <Skills/>
      <Projects/>
      <Contacts/>
    </div>
    </div>
  )
}

export default App
