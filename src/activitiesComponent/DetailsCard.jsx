import React from 'react'
import CardD from './CardD'

function DetailsCard() {
  return (
    <div className=' p-2  pt-10 md:pt-20 '>
        <div className='md:w-3/4 2xl:w-1/2 2xl:mx-auto  w-full p-4 md:pl-10 '>
            <h1 className='mb-4 font-lato font-bold text-sx'>FUN AT THE SEA ---</h1>
            <h1 className='text-5xl mb-7 font-medium '>Activities</h1>
            <p className='mb-10 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sapiente fuga excepturi ea quasi aliquid praesentium maxime libero vitae veniam.Quam sapiente fuga excepturi ea quasi aliquid praesentium maxime libero vitae veniam.</p>
        </div>
        <div className='md:p-4'>

        <CardD />
        <CardD  />
        </div>
    </div>
  )
}

export default DetailsCard