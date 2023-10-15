import React from 'react'
import Cards from './Cards'

function Offers() {
  return (
    <div className='mt-10'>
        <div
        className='w-full h-screen bg-gradient-to-t from-white via-slate-400 to-gray-600  '
      >
        <img className='w-full h-screen object-cover mix-blend-overlay ' src="https://cdn.pixabay.com/photo/2021/09/22/08/35/architecture-6646154_1280.jpg" alt="" />
        <div className='flex md:-mt-40 '>
        <Cards  />
        <Cards  />
        <Cards  />
        </div>
      </div>
    </div>
  )
}

export default Offers 