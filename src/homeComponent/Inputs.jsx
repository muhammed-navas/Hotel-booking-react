import React from 'react'

function Inputs() {
  return (
    <div className='bg-red-900 p-10 text-slate-400 mb-20' >
        <div className='flex md:flex-row flex-col items-center justify-center gap-4 text-gray-300 '>
            <input type="date" className='border border-gray-500 w-full bg-red-950 p-3' />
            <input type="date" className='border border-gray-500 w-full bg-red-950 p-3' />
            <input type="text" placeholder='choose a room...' value='choose a room'  className='border border-gray-500   w-full bg-red-950 p-3' />
            <input type="text" placeholder='how many adults...' value='how many adults' className='border border-gray-500   w-full bg-red-950 p-3' />
            <input type="text" value='how many children' placeholder='how many children...' className='border border-gray-500 bg-red-950   w-full p-3' />
            <button className='w-full hover:border border border-red-900 hover:border-white p-2  hover:bg-red-800 duration-700  bg-red-950 p-3 '>BOOK NOW</button>

        </div>
    </div>
  )
}

export default Inputs