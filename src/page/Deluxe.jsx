import React from 'react'
import Image from '../deluxe/Image'
import DeluxeContent from '../deluxe/DeluxeContent'
import Inputs from '../homeComponent/Inputs'
import SetOfCard from './SetOfCard'
import Content from '../deluxe/Content'

function Deluxe() {
  return (
    <div>
        <DeluxeContent />
        <Image />
        <Content />
        <Inputs />
        <div className='mb-16'>

        <SetOfCard />
        </div>
    </div>
  )
}

export default Deluxe