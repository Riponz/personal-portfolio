import React, { useEffect } from 'react'
import "./SelfBanner.css"
import selfImg from "./../Utilities/myself/image.jpg"
import AOS from "aos"
import "aos/dist/aos.css"
import Banner from './Banner'

function SelfBanner() {
    useEffect(() => {
      AOS.init({duration:2000})
    }, [])
    
    return (
        <>
        <div id="info" className="banner pt-[4rem] md:pt-[3rem] "><Banner/></div>
            <div className="main md:pt-[1rem] z-0 mt-8 flex md:flex-col md:items-center justify-center items-center md:py-5 overflow-hidden w-full h-[30rem] md:h-fit ">
            <img data-aos="fade-right" className='self relative md:w-[15rem] aspect-square rounded-[50%] z-[0] grayscale' src={selfImg} alt="" />
                <div data-aos="fade-left" className="details w-[35rem] md:w-[20rem] overflow-hidden h-fit flex flex-col justify-center items-start md:mt-5 ml-[10px] md:items-center">
                    <span className='text-4xl text-red-600 mb-3'>HELLO PEOPLE.</span>
                    <span className='text-xl md:text-sm w-[100%] font-light'>I'm Diganta Biswas, a passionate software developer carving out my space on the vast internet landscape. Here, I weave the intricate tapestry of websites, merging design and development seamlessly. Armed with a prestigious Bachelors in Computer Science, my journey from coding lines to dominating gaming stages began in the hallowed halls of my school years. I harbor a genuine love for learning, and it's not just a phase—it's ingrained in my digital DNA. Picture me as a skill-hungry sponge, absorbing knowledge from every corner of the tech universe. So, let's embark on this journey together, rocking stages and crafting scripts that leave a lasting impact! 🌐💻</span>
                </div>
            </div>
        </>
    )
}

export default SelfBanner