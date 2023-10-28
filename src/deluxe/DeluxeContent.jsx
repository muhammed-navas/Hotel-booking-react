import React from 'react'

function DeluxeContent() {
  return (
    <div className='md:p-10'>
      <div className="p-3 md:p-0 flex md:items-center md:justify-center md:flex-row flex-col gap-4 md:gap-36">
        <div>

        <h1 className="uppercase text-lg font-lato font-bold mb-4 ">
          OUR ACCOMODATION ---
        </h1>
        <h1 className="md:text-5xl  mb-4 text-4xl ">
          Deluxe Suite
        </h1>
        <div className="border-t-4 border-solid mb-10  border-green-800 w-40"></div>
        </div>
        <p className="mb-6 md:w-1/2 w-full 2xl:w-1/2 ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum dolor
          dolorem alias nemo necessitatibus nam voluptatem libero aliquid
          mollitia officia?nemo necessitatibus nam voluptatem libero aliquid
          mollitia officia
        </p>
      </div>
    </div>
  );
}

export default DeluxeContent