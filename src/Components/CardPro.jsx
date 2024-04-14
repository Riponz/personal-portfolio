import React, { useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"
import Tag from './Tag'

function CardPro({ img, title, url, desc, tags }) {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (
        <>


            <div data-aos="fade-right" className='bg-[#BCB5A8] group my-5 hover:bg-[#b8aa8d] duration-1000 rounded-2xl overflow-hidden w-[21rem] h-max lg:w-[18rem] xl:w-[21rem] '>
                <div className='img overflow-hidden w-full h-[9rem] lg:h-[8rem] xl:h-[9rem]'>
                    <img className='w-full group-hover:scale-110 duration-1000 p-0' src={img} alt={title} />
                </div>
                <div className='flex flex-col border-t-2 border-black justify-center items-start h-max p-3 px-5 '>
                    <div className='title font-bold text-black my-1'>{title}</div>
                    <div className='desc text-slate-900 my-1'>{desc}</div>

                    <div className='w-full flex flex-wrap'>
                    {tags.map((tag) => {
                        return (<Tag title={tag} />)
                    })}
                    </div>

                    <div className='button my-1 p-1 text-blue-600 cursor-pointer hover:font-bold duration-700'> <a href={url} target="_blank" rel="noopener noreferrer">VISIT</a></div>
                </div>
            </div>
        </>
    )
}

export default CardPro