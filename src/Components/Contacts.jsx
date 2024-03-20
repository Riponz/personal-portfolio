import React, { useEffect, useRef } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"
import emailjs from "@emailjs/browser"


function Contacts() {



    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])


    const handleSendMessage = (e) => {
        e.preventDefault();
        const serviceId = import.meta.env.VITE_SERVICE_ID
        const templateId = import.meta.env.VITE_TEMPLATE_ID
        const publicKey = import.meta.env.VITE_PUBLIC_KEY



        emailjs.sendForm(serviceId, templateId, '#form', {
            publicKey: publicKey,
        })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error);
                },
            );

    }

    return (
        <>
            <div id="contact" data-aos="fade-right" className="heading md:pt-[5rem] md:text-4xl text-[7rem] w-full flex justify-center items-center pt-9 font-bold">WANT TO CONTACT?</div>
            <div className="contact h-[29rem] md:h-[35rem] flex flex-col justify-center items-center w-full">
                <div data-aos="fade-right" className="flex md:flex-col justify-evenly items-center w-[80%] md:h-fit h-[50rem] form">
                    <form id='form' className="flex flex-col p-3 bg-[#BCB5A8] text-[#101010] rounded-2xl placeholder-[#101010] md:w-[100%] w-[40%]" action="">
                        <input className='border-b-2 border-[#101010] outline-none bg-transparent m-2 p-2 placeholder-[#101010]' placeholder="name" type="text" name="name" id="" />
                        <input className='email border-b-2 bg-transparent border-[#101010] outline-none m-2 p-2 placeholder-[#101010]' placeholder="email" type="email" name="email" id="" />
                        <textarea className='m-2 p-2 bg-transparent rounded-lg border-[#101010] outline-none placeholder-[#101010]' placeholder="write your message!!!" name="message" id="" cols="30" rows="5"></textarea>
                        <button onClick={handleSendMessage} className='bg-red-600 rounded-lg m-2 p-2' type="submit">SEND!</button>
                    </form>
                    <div data-aos="fade-left" onClick={handleSendMessage} className="md:hidden text-2xl font-bold">would love to hear from <span className='text-red-600'> you</span>!!!</div>
                </div>
            </div>
            <div className="socials w-full h-fit flex md:flex-col justify-evenly items-center">
                <div onClick={() => window.open("https://www.instagram.com/diganta.js", "_black")} className="insta md:w-full cursor-default flex justify-center items-center h-[5rem] flex-auto bg-[#d62976]">
                    Instagram
                </div>
                <div onClick={() => window.open("https://github.com/Riponz", "_black")} className="github flex md:w-full cursor-default justify-center items-center h-[5rem] flex-auto bg-black">
                    Github
                </div>
                <div onClick={() => window.open("https://www.linkedin.com/in/biswasdiganta/", "_black")} className="linkedin flex md:w-full cursor-default justify-center items-center h-[5rem] flex-auto bg-blue-900">
                    LinkedIn
                </div>
                <div onClick={() => window.open("https://www.twitter.com/imdigantabiswas", "_black")} className="twitter flex md:w-full cursor-default justify-center items-center h-[5rem] flex-auto bg-blue-400">
                    Twitter
                </div>
            </div>
            <div className="credits md:p-5 w-full md:h-[6rem] h-[4rem] flex md:flex-col justify-evenly md:justify-between items-center">
                <div className="year">Diganta 2024 , Built by me 🧡</div>
                <div className="email">biswasdiganta2001@gmail.com</div>
            </div>
        </>
    )
}

export default Contacts