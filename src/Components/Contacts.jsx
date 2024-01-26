import React from 'react'

function Contacts() {

    const handleSendMessage = () => {
        e.preventDefault();
        prompt("under development!!")
    }

    return (
        <>
            <div id='contact' className="contact h-[50rem] flex flex-col justify-center items-center w-full py-3">

                <div className="p-5 flex justify-evenly items-center w-[80%] h-[35rem] form">
                    <form className="flex flex-col p-3 bg-[#BCB5A8] text-[#101010] rounded-2xl placeholder-[#101010] w-[40%]" action="">
                        <input className='border-b-2 border-[#101010] outline-none bg-transparent m-2 p-2 placeholder-[#101010]' placeholder="name" type="text" name="" id="" />
                        <input className='phoneNumber border-b-2 border-[#101010] outline-none bg-transparent m-2 p-2 placeholder-[#101010]' placeholder="phone no." type="number" name="" id="" />
                        <input className='email border-b-2 bg-transparent border-[#101010] outline-none m-2 p-2 placeholder-[#101010]' placeholder="email" type="email" name="" id="" />
                        <textarea className='m-2 p-2 bg-transparent rounded-lg border-[#101010] outline-none placeholder-[#101010]' placeholder="write your message!!!" name="" id="" cols="30" rows="10"></textarea>
                        <button onClick={handleSendMessage} className='bg-red-600 rounded-lg m-2 p-2' type="submit">SEND!</button>
                    </form>
                    <div onClick={handleSendMessage} className="text-3xl">would love to hear from <span className='text-red-600'>you</span>!!!</div>
                </div>
            </div>
            <div className="socials w-full h-fit flex justify-evenly items-center">
                <div className="insta flex justify-center items-center h-[5rem] flex-auto bg-[#d62976]">
                    Instagram
                </div>
                <div className="github flex justify-center items-center h-[5rem] flex-auto bg-black">
                    Github
                </div>
                <div className="linkedin flex justify-center items-center h-[5rem] flex-auto bg-blue-900">
                    LinkedIn
                </div>
                <div className="twitter flex justify-center items-center h-[5rem] flex-auto bg-blue-400">
                    Twitter
                </div>
            </div>
            <div className="credits w-full h-[4rem] flex justify-evenly items-center">
                <div className="year">Diganta 2024 , Built by me 🧡</div>
                <div className="email">biswasdiganta2001@gmail.com</div>
            </div>
        </>
    )
}

export default Contacts