import AOS from 'aos'
import React, { useEffect } from 'react'
import SkillCard from './SkillCard'
import logo1 from './../Utilities/logos/css.png'
import logo2 from './../Utilities/logos/cpp.png'
import logo3 from './../Utilities/logos/express.png'
import logo4 from './../Utilities/logos/figma.webp'
import logo5 from './../Utilities/logos/firebase.png'
import logo6 from './../Utilities/logos/git.png'
import logo7 from './../Utilities/logos/react.png'
import logo8 from './../Utilities/logos/javascript.png'
import logo9 from './../Utilities/logos/mongodb.png'
import logo10 from './../Utilities/logos/mysql.png'
import logo11 from './../Utilities/logos/nodejs.png'
import logo12 from './../Utilities/logos/postman.png'
import logo13 from './../Utilities/logos/python.png'
import logo14 from './../Utilities/logos/html.png'
import logo15 from './../Utilities/logos/redux.png'
import logo16 from './../Utilities/logos/tailwind.png'

function Skills() {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (
        <>
        <div className='my-10'>
            <div id="skills" data-aos="fade-right" className="heading w-full flex justify-center mb-3 items-center pt-9 font-bold text-[4rem] md:text-[5rem] lg:[7rem] xl:text-[7.5rem]">SKILLS</div>
            <section className="skills flex flex-wrap mt-8 h-max justify-evenly items-center">
                <SkillCard name="C++" img={logo2} />
                <SkillCard name="Express" img={logo3} />
                <SkillCard name="Figma" img={logo4} />
                <SkillCard name="Firebase" img={logo5} />
                <SkillCard name="Git" img={logo6} />
                <SkillCard name="React" img={logo7} />
                <SkillCard name="JavaScript" img={logo8} />
                <SkillCard name="MongoDB" img={logo9} />
                <SkillCard name="HTML" img={logo14} />
                <SkillCard name="CSS" img={logo1} />
                <SkillCard name="MySQL" img={logo10} />
                <SkillCard name="NodeJS" img={logo11} />
                <SkillCard name="Postman" img={logo12} />
                <SkillCard name="Python" img={logo13} />
                <SkillCard name="Redux" img={logo15} />
                <SkillCard name="Tailwind" img={logo16} />
            </section>
            </div>
        </>
    )
}

export default Skills