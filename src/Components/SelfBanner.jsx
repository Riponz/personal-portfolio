import React from 'react'
import "./SelfBanner.css"
import selfImg from "./../Utilities/myself/diganta3.jpg"

function SelfBanner() {
    return (
        <>
            <div className="main mt-8 flex md:flex-col md:items-center justify-center items-start overflow-hidden w-[100%] h-80 ">
                <div className='hidden md:rounded-[100%] md:flex md:justify-center md:items-start w-max md:w-[230px] md:h-[1800px] md:border-solid md:overflow-hidden'><img className='self md:w-60 grayscale' src={selfImg} alt="" /></div>
                <div className="pic md:hidden flex justify-center items-start mr-[10px] w-[250px] h-[250px] rounded-full overflow-hidden"><img className='self grayscale w-72' src={selfImg} alt="" /></div>
                <div className="details h-60 flex flex-col justify-center items-start ml-[10px] md:pt-5 md:items-center">
                    <span className='text-4xl'>Hi!</span>
                    <span className='text-6xl md:text-3xl font-bold'>I'm Diganta Biswas</span>
                    <span className='text-sm md:mt-2 w-max'>A SOFTWARE DEVELOPER</span>
                </div>
            </div>
        </>
    )
}

export default SelfBanner