import { useState } from 'react'
import './App.css'
import HeroText from './Components/HeroText'
import Navbar from './Components/Navbar'
import Overview from './Components/Overview'
import Banner from './Components/Banner'
import SelfBanner from './Components/SelfBanner'
import Info from './Components/Info'
import Tagline from './Components/Tagline'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app-head'>
      <Navbar />
      <HeroText />
      <Overview />
      <Tagline/>
      <SelfBanner/>
      <Banner />
    </div>
  )
}

export default App
