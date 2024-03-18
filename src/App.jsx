import { useState } from 'react'
import './App.css'
import HeroText from './Components/HeroText'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import SelfBanner from './Components/SelfBanner'
import Contacts from './Components/Contacts'
import Projects from './Components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app-head'>
      {/* <div className="message fixed z-50 md:font-medium bg-white text-black text-lg md:text-sm flex justify-center items-center font-bold w-full h-15 p-5">This website is still under development! Your wait is appreciated.</div> */}
      <Navbar />
      <HeroText />
      <SelfBanner/>
      <Projects/>
      <Contacts/>
    </div>
  )
}

export default App
