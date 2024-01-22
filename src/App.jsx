import { useState } from 'react'
import './App.css'
import HeroText from './Components/HeroText'
import Navbar from './Components/Navbar'
import Overview from './Components/Overview'
import Banner from './Components/Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* components goes here */}
      <Navbar />
      <HeroText />
      <Overview />
      <Banner />
    </>
  )
}

export default App
