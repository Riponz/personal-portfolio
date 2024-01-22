import React from 'react'
import "./Banner.css"
import logo1 from './../logos/css.png'
import logo2 from './../logos/cpp.png'
import logo3 from './../logos/express.png'
import logo4 from './../logos/figma.png'
import logo5 from './../logos/firebase.png'
import logo6 from './../logos/git.png'
import logo7 from './../logos/react.png'
import logo8 from './../logos/javascript.png'
import logo9 from './../logos/mongodb.png'
import logo10 from './../logos/mysql.png'
import logo11 from './../logos/nodejs.png'
import logo12 from './../logos/postman.png'
import logo13 from './../logos/python.png'
import logo14 from './../logos/html.png'
import logo15 from './../logos/redux.png'
import logo16 from './../logos/tailwind.png'

function Banner() {
    return (
        <div class="logos mt-10 overflow-x-hidden">
            <div class="logos-slide flex justify-center items-center">
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
            </div>
        </div>
    )
}

export default Banner