import { useState } from 'react'
import './App.css'
import HeroText from './Components/HeroText'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import SelfBanner from './Components/SelfBanner'
import Contacts from './Components/Contacts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app-head'>
      <Navbar />
      <HeroText />
      <SelfBanner/>
      <Contacts/>
    </div>
  )
}

export default App
