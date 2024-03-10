import React from 'react'

function Contact() {
  return (
    <div name='contact' className='w-full h-screen bg-gradient-to-b
    form-black to-gray-800 p-4 text-white'>
      <div >
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4
          border-gray-500'>contact</p>
          <p className='pb-6'>contact me in this</p>

        </div>
        <div className='flex justify-center item-center'>
          <form action="https://getform.io/f/PdRRPVdG" method='POST' className='flex flex-col w-full md:w-1/2
          justify-center'>

            <input type="text" name=" name" placeholder="enter your name"
              className='p-2 bg-transparent border-2 rounded-md
            text-white focus:outline-none'/>

            <input type="text" name=" Enail" placeholder="enter your Email"
              className=' my-4 p-2 bg-transparent border-2 rounded-md
            text-white focus:outline-none'/>

            <textarea name='message' placeholder="enter your message" rows='10' className='p-2 bg-transparent border-2
            rounded-md text-white focus:outline-none'></textarea>
            <button className='text-white bg-gradient-to-b from-cyan-500
            to-blue-500 px-6 py-3 my-8 mx-auto flex
            itens-center rounded-md hover:scale-110 duration-300'>submit</button>
          </form>
        </div>
      </div>

    </div>
  )
}
export default Contact;