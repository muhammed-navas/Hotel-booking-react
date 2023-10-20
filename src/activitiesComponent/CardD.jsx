import React from 'react'

function CardD() {
  return (
    <>
    <div className='flex md:flex-row flex-col bg-green-200 p-6 gap-6 md:p-0 md:gap-0 items-center justify-center'>
        <div>
            <img className='md:w-[117rem] w-full md:h-[30rem]' src="https://cdn.pixabay.com/photo/2017/07/30/20/40/beach-2555568_1280.jpg" alt="" />
        </div>
        <div className=' p-0 md:pl-16'>
            <h1 className=' mb-4 font-lato font-bold text-sx'>ENJOY THE GAME _____</h1>
            <h1 className='text-5xl mb-4 font-medium'>Beach Voleyball</h1>
            <p className='md:w-3/4 w-full mb-8'>Beach volleyball is ouy visitors favourite sport, highly enjoyable for everyone young or old. Just gather your team on the beach and find the opponents in a matter of minutes. And show what you can do, be a winner!</p>
            <button className='border font-lato font-bold text-sm  bg-red-800 py-2 px-3 text-white'>Read More</button>
        </div>
    </div>
    <div className='flex md:flex-row-reverse md:p-0 md:gap-0  flex-col p-6 gap-6 bg-green-200 items-center justify-center'>
        <div>
            <img className='md:w-[116rem] w-full md:h-[30rem]' src="https://cdn.pixabay.com/photo/2013/08/17/14/28/cowboy-173389_1280.jpg" alt="" />
        </div>
        <div className='p-0 md:pl-16'>
            <h1 className=' mb-4 font-lato font-bold text-sx'>ENJOY THE GAME _____</h1>
            <h1 className='text-5xl mb-4 font-medium'>Horseback riding</h1>
            <p className='md:w-3/4 w-full mb-8'>Beach volleyball is ouy visitors favourite sport, highly enjoyable for everyone young or old. Just gather your team on the beach and find the opponents in a matter of minutes. And show what you can do, be a winner!</p>
            <button className='border font-lato font-bold text-sm  bg-red-800 py-2 px-3 text-white'>Read More</button>
        </div>
    </div>
    </>
  )
}

export default CardD