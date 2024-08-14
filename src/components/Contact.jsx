import React from 'react'

function Contact() {
  return (
    <div className="container3 flex flex-col justify-center items-center mt-40 text-white">
    <h1 className="text-6xl font-bold">Lets Design Together</h1>
    <p className="mt-10 flex sm:text-center sm:w-2/3 lg:flex lg:text-xl">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
      quos. Lorem ipsum dolor sit amet.
    </p>
    <p className="mt-2 hidden lg:flex text-xl">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eos
      tempore unde!
    </p>

    <div className="flex mt-10 gap-10 w-3/4">
   <input type="text" placeholder="Enter your email" className="p-4 bg-white w-3/4 rounded-md"></input>
   <button className="bg-orange-500 w-1/3 p-4 rounded-md font-bold text-lg">Contact Me</button>
    </div>
  </div>
  )
}

export default Contact