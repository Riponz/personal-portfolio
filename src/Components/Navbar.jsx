import React from 'react'

function Navbar() {
    return (
        <>
        <nav className='w-100% px-10 h-16 flex justify-between items-center'>
            <span className='text-2xl md:text-sm font-bold'>diganta://</span>
            <ol className='w-[500px] flex justify-evenly items-center font-medium text-1xl'>
                <li>Resume</li>
                <li>Home</li>
                <li>Info</li>
                <li>Projects</li>
                <li>Contact</li>
            </ol>
        </nav>
        </>
    )
}

export default Navbar