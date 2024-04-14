import React, { useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"

function HeroText() {

  useEffect(() => {
    AOS.init({ duration: 2000 })
    AOS.refresh()
  }, [])


  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () { AOS.refresh(); }, 500);
  });

  return (
    <>
      <div id='home' className='hero h-[100vh] pt-10 flex justify-center items-center flex-col'>
        <div className="main flex flex-col">
          <div className="line1 flex justify-center items-center">
            <div data-aos="fade-left" className="text1 font-bold text-[3.8rem] md:text-[5rem] lg:text-[6.4rem] xl:text-[8rem] min-[1440px]:text-[10rem]">SOFTWARE</div>
            <div data-aos="fade-down" className="info1 h-fit w-[18rem] ml-[3rem] text-sm text-left font-bold hidden lg:flex lg:text-[0.8rem] xl:text-xs min-[1440px]:text-sm">Your friendly neighbourhood software developer with expertise building custom websites through React js. Well-versed in managing databases with skills spanning MySQL and MongoDB.</div>
          </div>
          <div className="line2 flex justify-center mt-0 lg:mt-[-5rem] items-center lg:max-[1280px]:mt-[-3rem]">
            <div data-aos="fade-up" className="info2 h-fit mr-[3rem] w-[23rem] text-sm text-right font-bold hidden lg:flex lg:text-[0.8rem] xl:text-xs min-[1440px]:text-sm">Enthusiastic web wizard and coding conjurer with collaboration superpowers! Equipped with the ability to turn coffee into code and brainstorming sessions into digital magic. Let's team up and turn your dreams into digital awesomeness - no wands required!</div>
            <div data-aos="fade-right" className="text2 font-bold text-[3.8rem] md:text-[5rem] lg:text-[6.4rem] xl:text-[8rem] min-[1440px]:text-[10rem]"><span className='text-red-600'>D</span>EVELOPER</div>
          </div>
        </div>
       
      </div>
    </>
  )
}

export default HeroText