import React from 'react'
import selfImg from "./../Utilities/myself/diganta3.jpg"

function Info() {
  return (
    <>
    <div className="info flex w-[100%] h-[90vh] justify-center items-center">
        <div className="image mr-20"><img className='w-[20rem] ' src={selfImg} alt="" /></div>
        <div className="text ml-20 w-[20%]">Greetings, I'm Diganta Biswas, a passionate software developer carving out my space on the vast internet landscape. Here, I weave the intricate tapestry of websites, merging design and development seamlessly. Armed with a prestigious Bachelors in Computer Science, my journey from coding lines to dominating gaming stages began in the hallowed halls of my school years. I harbor a genuine love for learning, and it's not just a phase—it's ingrained in my digital DNA. Picture me as a skill-hungry sponge, absorbing knowledge from every corner of the tech universe. So, let's embark on this journey together, rocking stages and crafting scripts that leave a lasting impact! 🌐💻
</div>
    </div>
    </>
  )
}

export default Info