import React from 'react'

function Cards() {
  return (
    <div className=''>
    <div className='m-4'>
        <div class="max-w-sm rounded overflow-hidden ">
  <img class="z-[1]" src="https://cdn.pixabay.com/photo/2018/08/06/19/49/design-3588214_1280.jpg"/>
  <div class=" px-1 py-4 ">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-1 pt-1 pb-2">
    <span class="cursor-pointer w-full md:w-20 inline-block bg-green-200 px-3 py-2 text-sm font-semibold text-gray-700 mr-2 mb-2">Details</span>
    <span className='line-through'>$100</span> -<span className='ml-1'>$50</span>-
    <span className=' text-blue-800 font-medium'> night</span>
  </div>
</div>
    </div>
    </div>
  )
}

export default Cards