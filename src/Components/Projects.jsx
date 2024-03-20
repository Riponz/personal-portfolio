import React, { useEffect } from 'react'
import cointrac from "../Utilities/screens/cointrac.png"
import confessionity from "../Utilities/screens/confessionity.png"
import COV19 from "../Utilities/screens/COV19.png"
import AOS from "aos"

function Projects() {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (
        <>
            <div id="projects" data-aos="fade-right" className="heading md:pt-[5rem] md:text-4xl text-[7rem] w-full flex justify-center items-center pt-9 font-bold">PROJECTS</div>


            {/* mobile projects section */}

            <div data-aos="fade-up" className='flex my-10 hidden md:flex justify-center items-center'>
                <div className="mob-project bg-[#262626] w-[20rem] rounded-xl overflow-hidden">
                    <div className="img bg-red-600 flex justify-center items-center overflow-hidden"><img className='w-[30rem]' src={cointrac} alt="cointrac" /></div>
                    <div className="texts h-[6rem] flex flex-col justify-center items-center">
                        <div className="title text-2xl">cointrac</div>
                        <button onClick={() => window.open("https://cointrac.vercel.app", '_blank')} className="m-3 p-1 rounded-full from-red-400 via-red-600 to-red-800 bg-gradient-to-r">
                            <span className="block text-black px-3 py-1 font-semibold rounded-full bg-[#BCB5A8] hover:bg-transparent hover:text-[#BCB5A8] transition">View Live</span>
                        </button>
                    </div>
                </div>
            </div>


            <div data-aos="fade-up" className='flex my-10 hidden md:flex justify-center items-center'>
                <div className="mob-project bg-[#262626] w-[20rem] rounded-xl overflow-hidden">
                    <div className="img bg-red-600 flex justify-center items-center overflow-hidden"><img className='w-[30rem]' src={confessionity} alt="cointrac" /></div>
                    <div className="texts h-[6rem] flex flex-col justify-center items-center">
                        <div className="title text-2xl">confessionity</div>
                        <button onClick={() => window.open("https://confessionity.web.app", '_blank')} className="m-3 p-1 rounded-full from-red-400 via-red-600 to-red-800 bg-gradient-to-r">
                            <span className="block text-black px-3 py-1 font-semibold rounded-full bg-[#BCB5A8] hover:bg-transparent hover:text-[#BCB5A8] transition">View Live</span>
                        </button>
                    </div>
                </div>
            </div>

            <div data-aos="fade-up" className='flex my-10 hidden md:flex justify-center items-center'>
                <div className="mob-project bg-[#262626] w-[20rem] rounded-xl overflow-hidden">
                    <div className="img bg-red-600 flex justify-center items-center overflow-hidden"><img className='w-[30rem]' src={COV19} alt="cointrac" /></div>
                    <div className="texts h-[6rem] flex flex-col justify-center items-center">
                        <div className="title text-2xl">COV19</div>
                        <button onClick={() => window.open("https://covid-19-tracker-c8b49.web.app", '_blank')} className="m-3 p-1 rounded-full from-red-400 via-red-600 to-red-800 bg-gradient-to-r">
                            <span className="block text-black px-3 py-1 font-semibold rounded-full bg-[#BCB5A8] hover:bg-transparent hover:text-[#BCB5A8] transition">View Live</span>
                        </button>
                    </div>
                </div>
            </div>




            <div className="projects w-full md:hidden flex flex-1 justify-center items-center">
                <div className="con h-[25rem] w-full border-r-2 flex items-center justify-end">
                    <img data-aos="fade-up" className='w-[40rem] object-contain' src={cointrac} alt="cointrac" />
                </div>
                <div className="con h-[25rem] w-full flex flex-col justify-center items-start border-l-2">
                    <div data-aos="fade-up" className="title text-6xl px-8">cointrac</div>
                    <div data-aos="fade-up" className="button px-5">
                        <button onClick={() => window.open("https://cointrac.vercel.app", '_blank')} className="m-4 p-1 rounded-full from-red-400 via-red-600 to-red-800 bg-gradient-to-r">
                            <span className="block text-black px-4 py-2 font-semibold rounded-full bg-[#BCB5A8] hover:bg-transparent hover:text-[#BCB5A8] transition">View Live</span>
                        </button>
                    </div>
                </div>
            </div>


            <div className="projects  w-full md:hidden flex flex-1 justify-center items-center">
                <div className="con h-[25rem] w-full border-r-2 flex flex-col justify-center items-end">
                    <div data-aos="fade-up" className="title text-6xl px-8">confessionity</div>
                    <div data-aos="fade-up" className="button px-5">
                        <button onClick={() => window.open("https://confessionity.web.app", '_blank')} className="m-4 p-1 rounded-full from-red-400 via-red-600 to-red-800 bg-gradient-to-r">
                            <span className="block text-black px-4 py-2 font-semibold rounded-full bg-[#BCB5A8] hover:bg-transparent hover:text-[#BCB5A8] transition">View Live</span>
                        </button>
                    </div>
                </div>
                <div className="con h-[25rem] w-full border-l-2 flex items-center justify-start">
                    <img data-aos="fade-up" className='w-[40rem] object-contain' src={confessionity} alt="confessionity" />
                </div>
            </div>


            <div className="projects  w-full md:hidden flex flex-1 justify-center items-center">
                <div className="con h-[25rem] w-full border-r-2 flex items-center justify-end">
                    <img data-aos="fade-up" className='w-[40rem] object-contain' src={COV19} alt="cointrac" />
                </div>
                <div className="con h-[25rem] w-full border-l-2 flex flex-col justify-center items-start">
                    <div data-aos="fade-up" className="title text-6xl px-8">COV19</div>
                    <div data-aos="fade-up" className="button px-5">
                        <button onClick={() => window.open("https://covid-19-tracker-c8b49.web.app", '_blank')} className="m-4 p-1 rounded-full from-red-400 via-red-600 to-red-800 bg-gradient-to-r">
                            <span className="block text-black px-4 py-2 font-semibold rounded-full bg-[#BCB5A8] hover:bg-transparent hover:text-[#BCB5A8] transition">View Live</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects