import React, { useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

function HeroText() {

  useEffect(() => {
    AOS.init({ duration: 2000 })
    AOS.refresh()
  }, [])

  const handleContact = () => {
    alert("The route has not yet been made. Under development!!!")
  }

  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () { AOS.refresh(); }, 500);
  });

  return (
    <>
      <div id='home' className='hero h-[44rem] pt-10 flex justify-center items-center'>
        <div className="main flex flex-col">
          <div className="line1 flex justify-center items-center">
            <div data-aos="fade-left" className="text1 text-[10rem] font-bold">SOFTWARE</div>
            <div data-aos="fade-down" className="info1 h-fit w-[20rem] ml-[3rem] text-sm text-left font-bold">Your friendly neighbourhood software developer with expertise building custom websites through React js. Well-versed in managing databases with skills spanning MySQL and MongoDB.</div>
          </div>
          <div className="line2 flex justify-center mt-[-5rem] items-center">
            <div data-aos="fade-up" className="info2 h-fit mr-[3rem] w-[23rem] text-sm text-right font-bold">Enthusiastic web wizard and coding conjurer with collaboration superpowers! Equipped with the ability to turn coffee into code and brainstorming sessions into digital magic. Let's team up and turn your dreams into digital awesomeness - no wands required!</div>
            <div data-aos="fade-right" className="text2 text-[9rem] font-bold"><span className='text-red-600'>D</span>EVELOPER</div>
          </div>
        </div>
        <div data-aos="fade-up" className="absolute bottom-[3rem] right-[10rem] cursor-pointer md:mt-[-20px] md:w-[70%] sec3 px-8 py-6"><span onClick={handleContact} className='underline'>Drop me a line</span><TrendingFlatIcon /></div>
      </div>
    </>
  )
}

export default HeroText