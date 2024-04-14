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
        <nav className='w-full z-[10] bg-[#101010] top-0 fixed px-10 h-16 flex justify-between items-center'>
            <span className='text-2xl text-red-600 cursor-default hover:text-[#BCB5A8] font-bold'><a href="#home">diganta://</a></span>
            <div onClick={handleOpen} className='lg:hidden'>{open? <CloseIcon/> : <MenuIcon className='text-2xl'/> }</div>
            <ol className={`w-[450px] justify-evenly hidden lg:flex items-center font-medium text-1xl `}>
                <li className='hover:text-red-600'><a href="#home">Home</a></li>
                <li className='hover:text-red-600'><a href="#info">Info</a></li>
                <li className='hover:text-red-600'><a href="#projects">Projects</a></li>
                <li className='hover:text-red-600'><a href="#contact">Contact</a></li>
            </ol>
        </nav>
            <div className={`bg-[#101010] w-full z-[9] h-[100vh] flex flex-col justify-center items-center fixed transition-all top-0 duration-900 ease-in ${open? "top-0" : "top-[-1000px]"} `}>
                <a className='text-4xl' onClick={() => {setOpen(!open)}} href="#home">Home</a>
                <a className='text-4xl' onClick={() => {setOpen(!open)}} href="#info">Info</a>
                <a className='text-4xl' onClick={() => {setOpen(!open)}} href="#projects">Projects</a>
                <a className='text-4xl' onClick={() => {setOpen(!open)}} href="#contact">Contact</a>
            </div>
        </>
    )
}

export default Navbar