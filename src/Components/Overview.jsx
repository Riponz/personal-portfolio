import React from 'react'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

function Overview() {
  return (
    <>
    <div className="main flex justify-center">
        <div className="sec1 w-[30%] px-8 py-6">Your friendly neighbourhood software developer with expertise building custom websites through React js. Well-versed in managing databases with skills spanning MySQL and MongoDB.</div>
        <div className="sec2 w-[37%] px-8 py-6">Enthusiastic web wizard and coding conjurer with collaboration superpowers! Equipped with the ability to turn coffee into code and brainstorming sessions into digital magic. Let's team up and turn your dreams into digital awesomeness - no wands required!</div>
        <div className="sec3 px-8 py-6"><span className='underline'>Drop me a line</span><TrendingFlatIcon/></div>
    </div>
    </>
  )
}

export default Overview