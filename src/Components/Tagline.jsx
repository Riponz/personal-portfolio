import React from 'react'
import self from "./../Utilities/myself/diganta1.png"

function Tagline() {
  return (
    <>
    <div className="tagline flex flex-col justify-center bg-red-600 overflow-clip h-fit md:my-[5rem] py-5 items-center w-full">
        {/* <div className="0"></div> */}
        <div className="1 text-[14rem] md:text-5xl md:font-bold hover:drop-shadow-4xl relative z-20">EVERYTHING</div>
        <div className="2 text-7xl md:text-lg md:tracking-[0.5rem] tracking-[2.2rem]  relative z-20">IS CODE AND LOGIC</div>
        <img className='absolute md:hidden w-[23rem] md:w-[10rem]' src={self} alt="" />
    </div>
    </>
  )
}

export default Tagline