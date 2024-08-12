import React, { useEffect } from 'react'
import movieRecommend from "../Utilities/screens/movieRecommend.png"
import confessionity from "../Utilities/screens/confessionity.png"
import chronicKidney from "../Utilities/screens/chronicKidney.png"
import AOS from "aos"
import CardPro from './CardPro'

function Projects() {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (
        <>
            <div className='flex h-max w-full flex-col justify-evenly items-center'>
                <div id="projects" data-aos="fade-right" className="heading w-full flex justify-center mb-3 items-center pt-9 font-bold text-[4rem] md:text-[5rem] lg:[7rem] xl:text-[7.5rem]">PROJECTS</div>
                <div className='flex flex-col lg:flex-row w-full justify-evenly items-center'> 
                    <CardPro img={movieRecommend} title="Movie Recommendations" url="https://github.com/Riponz/recommendation-system" desc="A movie recommendations app using collaborative filtering." tags={["ML", "React","Flask" ]}/>
                    <CardPro img={chronicKidney} title="Chronic Kidney Prediction" url="https://chronickidneypredict.vercel.app/" desc="A web platform for early detection and monitoring of kidney health" tags={["React","Python", "ML", "ScikitLearn"]}/>
                    <CardPro img={confessionity} title="confessionity" url="https://confessionity.vercel.app"  desc="An anonymous social website where users share secrets, stories, and connect without judgment." tags={["MongoDB", "Express", "React", "NodeJS"]}/>
                </div>
            </div>
        </>
    )
}

export default Projects