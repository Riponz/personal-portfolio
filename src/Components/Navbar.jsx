import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Navbar() {
    const [ open, setOpen ] = useState(false)


    const handleOpen = () => {
        setOpen(!open)
    }
    return (
        <>
        <nav className='w-full z-50 bg-[#101010] top-16 md:top-14 fixed px-10 h-16 flex justify-between items-center'>
            <span className='text-2xl text-red-600 hover:text-[#BCB5A8] md:text-lg md:font-normal font-bold'>diganta://</span>
            <div onClick={handleOpen} className='md:z-20 md:flex hidden md:justify-center'>{open? <CloseIcon/> : <MenuIcon className='text-2xl'/> }</div>
            <ol className={`w-[500px] md:block md:text-right md:fixed md:w-60 md:text-2xl md:p-5 md:right-0 flex justify-evenly md:bg-gray-400 md:bg-clip-padding md:backdrop-filter md:backdrop-blur-sm md:bg-opacity-10 items-center font-medium text-1xl md:transition-all md:duration-500 md:h-full z-10 md:ease-in ${open ? 'md:top-16 ':'top-[-1000px]'}`}>
                <li className='md:my-5 hover:text-red-600'><a href="#info">Resume</a></li>
                <li className='md:my-5 hover:text-red-600'><a href="#home">Home</a></li>
                <li className='md:my-5 hover:text-red-600'><a href="#info">Info</a></li>
                <li className='md:my-5 hover:text-red-600'><a href="#projects">Projects</a></li>
                <li className='md:my-5 hover:text-red-600'><a href="#contact">Contact</a></li>
            </ol>
        </nav>
        </>
    )
}

export default Navbar