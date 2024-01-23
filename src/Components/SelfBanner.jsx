import React from 'react'
import "./SelfBanner.css"
import selfImg from "./../Utilities/myself/diganta1.png"

function SelfBanner() {
    return (
        <>
            <div className="main flex md:flex-col md:items-center justify-center items-start overflow-hidden w-[100%] h-80 ">
                <div className='hidden md:rounded-[100%] md:flex md:justify-center md:items-start w-max bg-red-700 md:w-[250px] md:h-[300px] md:border-solid md:border-white md:overflow-hidden'><img className='self md:w-56' src={selfImg} alt="" /></div>
                <img className='self md:hidden' src={selfImg} alt="" />
                <div className="details h-60 flex flex-col justify-center items-start md:items-center">
                    <span className='text-4xl'>Hi!</span>
                    <span className='text-6xl md:text-3xl font-bold'>I'm Diganta Biswas</span>
                    <span className='text-sm md:mt-2 w-max'>A SOFTWARE DEVELOPER</span>
                </div>
            </div>
        </>
    )
}

export default SelfBanner