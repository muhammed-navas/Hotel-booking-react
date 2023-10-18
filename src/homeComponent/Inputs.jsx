import React from 'react'

function Inputs() {
  return (
    <div className='bg-green-200 p-10 text-slate-400 mb-20' >
        <div className='flex md:flex-row flex-col items-center justify-center gap-4 '>
            <input type="date" className='border border-gray-500 w-full ' />
            <input type="date" className='border border-gray-500 w-full ' />
            <input type="text" placeholder='choose a room...' className='border border-gray-500   w-full' />
            <input type="text" placeholder='how many adults...' className='border border-gray-500   w-full' />
            <input type="text" placeholder='how many children...' className='border border-gray-500   w-full' />
            <button className='w-full border border-gray-500 p-2 bg-gray-200 hover:bg-gray-400 duration-700 text-black  '>BOOK NOW</button>

        </div>
    </div>
  )
}

export default Inputs