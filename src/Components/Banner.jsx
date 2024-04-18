import React from 'react'
import "./Banner.css"
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
import Marquee from 'react-fast-marquee'

function Banner() {
    return (
        <>
            <Marquee className='pt-5' autoFill={true} pauseOnHover={true}>
                <img src={logo1} />
                <img src={logo2} />
                <img src={logo3} />
                <img className='figma-logo' src={logo4} />
                <img src={logo5} />
                <img src={logo6} />
                <img src={logo7} />
                <img src={logo8} />
                <img src={logo9} />
                <img src={logo10} />
                <img src={logo11} />
                <img src={logo12} />
                <img src={logo13} />
                <img src={logo14} />
                <img src={logo15} />
                <img src={logo16} />
            </Marquee>
        </>
    )
}

export default Banner