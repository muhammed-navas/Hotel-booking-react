import React from 'react'
import SetOfCard from '../page/SetOfCard'
import Cards from '../homeComponent/Cards'

function RoomsCards() {
  return (
    <div>
        <SetOfCard />
        <div className='flex md:flex-row flex-col px-4'>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  )
}

export default RoomsCards