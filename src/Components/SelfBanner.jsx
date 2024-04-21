import React, { useEffect } from 'react'
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
        {/* <div id="info" className="banner pt-[4rem] overflow-hidden"><Banner/></div> */}
            <div id='info' className="main mt-8 flex  justify-center items-center overflow-hidden w-full h-[100vh] py-10 flex-col lg:flex-row ">
            <img data-aos="fade-right" className='self relative aspect-square rounded-[50%] z-[0] grayscale w-[50%] md:w-[28%] lg:w-[22%] mb-7 lg:mb-0' src={selfImg} alt="" />
                <div data-aos="fade-left" className="details w-[18rem] lg:w-[30rem] xl:w-[35rem] overflow-hidden h-fit flex flex-col justify-center items-start ml-[10px] ">
                    <span className='text-lg lg:text-2xl xl:text-3xl min-[1440px]:text-4xl text-red-600 mb-3'>HELLO PEOPLE.</span>
                    <span className='font-light text-justify text-sm lg:text-base xl:text-xl min-[1440px]:text-xl'>I'm Diganta Biswas, a passionate software developer carving out my space on the vast internet landscape. Here, I weave the intricate tapestry of websites, merging design and development seamlessly. Armed with a prestigious Bachelors in Computer Science, my journey from coding lines to dominating gaming stages began in the hallowed halls of my school years. I harbor a genuine love for learning, and it's not just a phase—it's ingrained in my digital DNA. Picture me as a skill-hungry sponge, absorbing knowledge from every corner of the tech universe. So, let's embark on this journey together, rocking stages and crafting scripts that leave a lasting impact! 🌐💻</span>
                </div>
            </div>
        </>
    )
}

export default SelfBanner