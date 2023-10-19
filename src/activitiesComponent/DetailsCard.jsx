import React from 'react'
import CardD from './CardD'

function DetailsCard() {
  return (
    <div className='   pt-10 md:pt-20'>
        <div className='md:w-3/4 w-full p-6'>
            <h1 className='mb-6'>FUN AT THE SEA ---</h1>
            <h1 className='text-5xl mb-7 '>Activities</h1>
            <p className='mb-10 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sapiente fuga excepturi ea quasi aliquid praesentium maxime libero vitae veniam.Quam sapiente fuga excepturi ea quasi aliquid praesentium maxime libero vitae veniam.</p>
        </div>
        <CardD />
        <CardD  />
    </div>
  )
}

export default DetailsCard