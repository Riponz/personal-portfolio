import React from 'react'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

function Overview() {

const handleContact = () => {
  alert("The route has not yet been made. Under development!!!")
}

  return (
    <>
    <div className="main flex md:mt-10 md:flex-col md:items-start justify-center">
        <div className="sec1 w-[30%] md:w-[90%] px-8 py-6">Your friendly neighbourhood software developer with expertise building custom websites through React js. Well-versed in managing databases with skills spanning MySQL and MongoDB.</div>
        <div className="sec2 w-[37%] md:hidden px-8 py-6">Enthusiastic web wizard and coding conjurer with collaboration superpowers! Equipped with the ability to turn coffee into code and brainstorming sessions into digital magic. Let's team up and turn your dreams into digital awesomeness - no wands required!</div>
        <div className="cursor-pointer md:mt-[-20px] md:w-[70%] sec3 px-8 py-6"><span onClick={handleContact} className='underline'>Drop me a line</span><TrendingFlatIcon/></div>
    </div>
    </>
  )
}

export default Overview