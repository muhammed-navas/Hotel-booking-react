import React from 'react'

function Inputs() {
  return (
    <div className='bg-gray-700 p-6 text-slate-400 mb-10' >
        <div className='flex md:flex-row flex-col items-center justify-center gap-4 '>
            <input type="date" className='border border-gray-500 w-full bg-gray-600' />
            <input type="date" className='border border-gray-500 w-full bg-gray-600' />
            <input type="text" placeholder='choose a room...' className='border border-gray-500  bg-gray-600 w-full' />
            <input type="text" placeholder='how many adults...' className='border border-gray-500  bg-gray-600 w-full' />
            <input type="text" placeholder='how many children...' className='border border-gray-500  bg-gray-600 w-full' />
            <button className='w-full border border-gray-500 p-2 bg-gray-800 text-slate-300 '>BOOK NOW</button>

        </div>
    </div>
  )
}

export default Inputs