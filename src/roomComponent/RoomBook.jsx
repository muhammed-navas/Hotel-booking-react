import React from 'react'

function RoomBook() {
  return (
    <div className='md:mt-10'>
        <div className='flex md:flex-row flex-col md:p-20 md:pl-4 p-1 py-8 items-center  bg-green-200  justify-center'>
        <div className=' md:pl-6 md:w-3/4 p-0  m-4'>
           
            <h1 className='text-5xl mb-4 font-medium '>Book your rooms</h1>
            <p className='md:w-full w-full mb-8'>Beach volleyball is ouy visitors favourite sport, highly enjoyable for everyone young or old. Just gather your team on the beach and</p>
            
        </div>
        <div className='grid grid-cols-2 gap-6 m-4 md:m-1 md:w-[60rem]' >
            <input type="date" className='border border-gray-500 w-full ' />
            <input type="date" className='border border-gray-500 w-full ' />
            <input type="text" placeholder='choose a room...' className='border border-gray-500   w-full' />
            <input type="text" placeholder='how many adults...' className='border border-gray-500   w-full' />
            <input type="text" placeholder='how many children...' className='border border-gray-500   w-full' />
            <button className='border-2 font-lato font-bold text-sm   duration-700 border-red-800 hover:bg-transparent p-1 md:py-2 md:px-4 bg-red-800 text-white hover:text-red-800 '>BOOK NOW</button>

        
        </div>
        
    </div>
    </div>
  )
}

export default RoomBook