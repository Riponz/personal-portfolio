import React, { useEffect, useRef } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"
import emailjs from "@emailjs/browser"


function Contacts() {
    const d = new Date();
    let year = d.getFullYear();



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
                    alert('Message sent')
                    document.getElementById("form").reset()
                })
                .catch(
                (error) => {
                    alert(error)
                })

    }

    return (
        <>
        <div id="contact" data-aos="fade-right" className=" relative heading w-full flex justify-center mb-3 items-center pt-9 font-bold text-[4rem] md:text-[5rem] lg:[7rem] xl:text-[7.5rem]">CONTACTS</div>
            <div className="contact h-[29rem] flex flex-col justify-center items-center w-full">
                <div data-aos="fade-right" className="flex justify-evenly items-center w-[80%] h-[50rem] form">
                    <form id='form' className="flex flex-col p-3 bg-[#BCB5A8] text-[#101010] rounded-2xl placeholder-[#101010] w-[95%] sm:w-[70%] lg:w-[50%] xl:w-[40%]" action="">
                        <input className='border-b-2 border-[#101010] outline-none bg-transparent m-2 p-2 placeholder-[#101010]' placeholder="name" type="text" name="name" id="" />
                        <input className='email border-b-2 bg-transparent border-[#101010] outline-none m-2 p-2 placeholder-[#101010]' placeholder="email" type="email" name="email" id="" />
                        <textarea className='m-2 p-2 bg-transparent rounded-lg border-[#101010] outline-none placeholder-[#101010]' placeholder="write your message!!!" name="message" id="" cols="30" rows="5"></textarea>
                        <button onClick={handleSendMessage} className='bg-red-600 rounded-lg m-2 p-2' type="submit">SEND!</button>
                    </form>
                    <div data-aos="fade-left" onClick={handleSendMessage} className="hidden lg:flex lg:text-xl xl:text-2xl font-bold">Hi👋 would love to hear from<span className='text-red-600 ml-2'>you</span>!!!</div>
                </div>
            </div>
            <div className="socials text-xs sm:text-base w-full font-inter font-[900] flex justify-center items-center">
                <div className='mx-4 text-[#d62976] lg:text-[#747474] cursor-pointer hover:text-[#d62976]'><a href="https://www.instagram.com/diganta.js" target='_blank'>INSTAGRAM</a></div>
                <div className='mx-4 text-blue-700 lg:text-[#747474] cursor-pointer hover:text-blue-700'><a href="https://www.linkedin.com/in/biswasdiganta" target='_blank'>LINKEDIN</a></div>
                <div className='mx-4 text-slate-100 lg:text-[#747474] cursor-pointer hover:text-slate-100'><a href="https://www.github.com/Riponz" target='_blank'>GITHUB</a></div>
                <div className='mx-4 text-blue-400 lg:text-[#747474] cursor-pointer hover:text-blue-400'><a href="https://www.twitter.com/imdigantabiswas" target='_blank'>TWITTER</a></div>
            </div>


            <div className="mt-8 text-xs sm:text-base w-full h-[4rem] flex justify-evenly items-center">
                <div className="year">Diganta {year} , Built by me 🧡</div>
                <div className="email">biswasdiganta2001@gmail.com</div>
            </div>
        </>
    )
}

export default Contacts