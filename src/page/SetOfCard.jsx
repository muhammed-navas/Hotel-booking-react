import React from 'react'
import Cards from '../homeComponent/Cards'

function SetOfCard() {
  return (

    <div className=''>
      <div className='w-3/4 ml-8 '>
      <h1 className='md:text-5xl font-medium mb-6 text-4xl'>Rooms & Suites</h1>
      <p className='mb-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum dolor dolorem alias nemo necessitatibus nam voluptatem libero aliquid mollitia officia?nemo necessitatibus nam voluptatem libero aliquid mollitia officia</p>
      </div>
      <div className='flex md:flex-row flex-col px-4'>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  )
}

export default SetOfCard