import React from 'react'
import "./SelfBanner.css"
import selfImg from "./../Utilities/myself/diganta1.png"

function SelfBanner() {
    return (
        <>
            <div className="main flex justify-center items-start overflow-hidden w-[100%] h-80 ">
                <img className='self' src={selfImg} alt="" />
            </div>
        </>
    )
}

export default SelfBanner