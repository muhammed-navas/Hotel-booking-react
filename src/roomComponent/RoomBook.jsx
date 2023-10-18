import React from 'react'

function RoomBook() {
  return (
    <div>
        <div className='flex md:flex-row flex-col  bg-green-200 items-center justify-center'>
        <div className=' md:pl-6 p-0 w-3/4 m-4'>
            <h1 className='text-xl mb-4'>ENJOY THE GAME _____</h1>
            <h1 className='text-5xl mb-4 '>Beach Voleyball</h1>
            <p className='md:w-1/2 w-full mb-8'>Beach volleyball is ouy visitors favourite sport, highly enjoyable for everyone young or old. Just gather your team on the beach and find the opponents in a matter of minutes. And show what you can do, be a winner!</p>
            <button className='boreder bg-red-800 py-1 px-3 text-white'>Read More</button>
        </div>
        <div className='grid grid-cols-2 gap-6 m-10' >
            <input type="date" className='border border-gray-500 w-full bg-gray-300' />
            <input type="date" className='border border-gray-500 w-full bg-gray-300' />
            <input type="text" placeholder='choose a room...' className='border border-gray-500  bg-gray-300 w-full' />
            <input type="text" placeholder='how many adults...' className='border border-gray-500  bg-gray-300 w-full' />
            <input type="text" placeholder='how many children...' className='border border-gray-500  bg-gray-300 w-full' />
            <button className='w-full border border-gray-500 p-2 bg-gray-800 text-slate-300 '>BOOK NOW</button>

        
        </div>
        
    </div>
    </div>
  )
}

export default RoomBook