import React from 'react'

function RoomBook() {
  return (
    <div className=''>
        <div className='flex md:flex-row flex-col md:p-10 p-1 py-10  bg-green-200  justify-center'>
        <div className=' md:pl-6 md:w-3/4 p-0  m-4'>
            <h1 className='text-xl mb-4'>ENJOY THE GAME _____</h1>
            <h1 className='text-5xl mb-4 '>Beach Voleyball</h1>
            <p className='md:w-3/4 w-full mb-8'>Beach volleyball is ouy visitors favourite sport, highly enjoyable for everyone young or old. Just gather your team on the beach and find the opponents in a matter of minutes. And show what you can do, be a winner!</p>
            <button className='border bg-red-800 py-1 px-3 text-white'>Read More</button>
        </div>
        <div className='grid grid-cols-2 gap-6 m-4 md:m-16' >
            <input type="date" className='border border-gray-500 w-full ' />
            <input type="date" className='border border-gray-500 w-full ' />
            <input type="text" placeholder='choose a room...' className='border border-gray-500   w-full' />
            <input type="text" placeholder='how many adults...' className='border border-gray-500   w-full' />
            <input type="text" placeholder='how many children...' className='border border-gray-500   w-full' />
            <button className='w-full border border-gray-500 p-2 bg-gray-200 hover:bg-gray-400 duration-700 text-black '>BOOK NOW</button>

        
        </div>
        
    </div>
    </div>
  )
}

export default RoomBook