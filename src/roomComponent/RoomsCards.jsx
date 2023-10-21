import React from 'react'
import SetOfCard from '../page/SetOfCard'
import Cards from '../homeComponent/Cards'

function RoomsCards() {
  return (
    <div className=''>
        <SetOfCard />
        <div className='flex md:flex-row flex-col p-10  '>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  )
}

export default RoomsCards