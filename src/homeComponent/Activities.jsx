import React from 'react'

function Activities() {
  return (
    <div className=''>
        <div className='w-full bg-green-200 p-6 '>
            <h1 className='text-5xl font-medium mb-6'>Activities</h1>
            <p className='mb-6 md:w-3/4 w-full' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quia non neque mollitia reiciendis officiis. sit amet consectetur adipisicing elit. Incidunt quia non neque mollitia reiciendis officiis.sit amet consectetur adipisicing elit. Incidunt quia non neque mollitia reiciendis officiis</p>
        </div>
        <div className='flex grid md:grid-cols-4 grid-cols-1 p-1 md:p-0 '>
            <div>
            <img className='h-64 w-full' src="https://cdn.pixabay.com/photo/2018/09/03/23/55/sea-3652693_1280.jpg" alt="" />
            </div>

            <div>
            <img  className='h-64 w-full' src="https://cdn.pixabay.com/photo/2022/07/04/23/52/beach-7302072_1280.jpg" alt="" />
            </div>

            <div>
            <img  className='h-64 w-full' src="https://cdn.pixabay.com/photo/2016/08/19/11/11/musicians-on-the-beach-1605018_1280.jpg" alt="" />
            </div>

            <div>
            <img  className='h-64 w-full' src="https://cdn.pixabay.com/photo/2022/07/26/12/39/to-stage-7345735_1280.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Activities