import React from 'react'
import "./SelfBanner.css"
import selfImg from "./../Utilities/myself/diganta1.png"

function SelfBanner() {
    return (
        <>
            <div className="main flex justify-center items-start overflow-hidden w-[100%] h-80 ">
                <img className='self' src={selfImg} alt="" />
                <div className="details h-60 flex flex-col justify-center items-start">
                    <span className='text-4xl'>Hi!</span>
                    <span className='text-6xl font-bold'>I'm Diganta Biswas</span>
                    <span className='text-sm w-max'>A SOFTWARE DEVELOPER</span>
                </div>
            </div>
        </>
    )
}

export default SelfBanner