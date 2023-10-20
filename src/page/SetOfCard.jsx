import React from 'react'
import Cards from '../homeComponent/Cards'

function SetOfCard() {
  return (

    <div className='leading-loose mt-20 md:px-10'>
      <div className='ml-5 '>
      <h1 className='uppercase text-lg font-lato font-bold mb-4 '>OUR ACCOMODATION ---</h1>
      <h1 className='md:text-5xl font-medium mb-4 text-4xl '>Rooms & Suites</h1>
      <div className='border-t-4 border-solid mb-10  border-green-800 w-40'></div>
      <p className='mb-6 md:w-3/4 w-full '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum dolor dolorem alias nemo necessitatibus nam voluptatem libero aliquid mollitia officia?nemo necessitatibus nam voluptatem libero aliquid mollitia officia</p>
      </div>
      <div className='flex md:flex-row flex-col'>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  )
}

export default SetOfCard