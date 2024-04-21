import React from 'react'

function SkillCard({ name, img }) {
    return (
        <>
            <div className='flex cursor-pointer justify-center items-center overflow-hidden drop-shadow-2xl hover:border-b-red-700 hover:-translate-y-3 transition-all ease-in duration-250 2xl:w-[20rem] xl:w-[16rem] md:w-[14rem] sm:w-[16rem] w-[11rem] h-20 mx-2 max-sm:mx-0 my-4 p-[20px] border-2 border-white rounded-lg'>
                <div className="text-base font-bold sm:text-2xl sm:font-bold">{name}</div>
                <div className=""><img className='max-sm:w-[2.5rem]' src={img} alt="" /></div>
            </div>
        </>
    )
}

export default SkillCard