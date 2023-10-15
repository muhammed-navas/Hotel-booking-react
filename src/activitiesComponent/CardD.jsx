import React from 'react'

function CardD() {
  return (
    <>
    <div className='flex  bg-green-200 items-center justify-center'>
        <div>
            <img className='w-[106rem] h-[30rem]' src="https://cdn.pixabay.com/photo/2017/07/30/20/40/beach-2555568_1280.jpg" alt="" />
        </div>
        <div className=' pl-16'>
            <h1 className='text-xl mb-4'>ENJOY THE GAME _____</h1>
            <h1 className='text-5xl mb-4 '>Beach Voleyball</h1>
            <p className='w-3/4 mb-8'>Beach volleyball is ouy visitors favourite sport, highly enjoyable for everyone young or old. Just gather your team on the beach and find the opponents in a matter of minutes. And show what you can do, be a winner!</p>
            <button className='boreder bg-red-800 py-1 px-3 text-white'>Read More</button>
        </div>
    </div>
    <div className='flex flex-row-reverse  bg-green-200 items-center justify-center'>
        <div>
            <img className='w-[107rem] h-[30rem]' src="https://cdn.pixabay.com/photo/2013/08/17/14/28/cowboy-173389_1280.jpg" alt="" />
        </div>
        <div className=' pl-16'>
            <h1 className='text-xl mb-4'>ENJOY THE GAME _____</h1>
            <h1 className='text-5xl mb-4 '>Horseback riding</h1>
            <p className='w-3/4 mb-8'>Beach volleyball is ouy visitors favourite sport, highly enjoyable for everyone young or old. Just gather your team on the beach and find the opponents in a matter of minutes. And show what you can do, be a winner!</p>
            <button className='boreder bg-red-800 py-1 px-3 text-white'>Read More</button>
        </div>
    </div>
    </>
  )
}

export default CardD