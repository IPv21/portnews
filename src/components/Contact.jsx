import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full text-gray-300 bg-[#1b0e45] flex justify-center items-center  p-4'>
        <form method='post' action= 'https://getform.io/f/f0c95521-d132-4930-9b28-092cea9af0b1' className='flex flex-col max-w-[600px] w-fill'>
            <div className='pb-8'>
               <p className='text-4xl font-bold inline border-b-4  border-red-600 '>Contact Me...</p> 
               <p className='pt-4'>// Please submit the form below or contact me at MatthewShuman@myyahoo.com</p>
            </div>
            <input className='my-4 p-2 text-black bg-[#ccd6f6]' type='text' placeholder='Name' name='name'/>
            <input className='my-4 p-2 text-black bg-[#ccd6f6]' type='text' placeholder='Email' name='email'/>
            <textarea className='my-4 p-2 text-black bg-[#ccd6f6]' type='text' placeholder='Message' rows='8' name='message'/>
            <button id='neon2' className='text-white border-2 border-red-100  px-4 py-3 my-8 mx-auto flex items-center '>Submit.</button>
        </form>
    </div>
  )
}

export default Contact