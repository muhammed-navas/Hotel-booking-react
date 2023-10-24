import React from 'react'

function CardD() {
  return (
    <>
      <div className=" flex justify-center ">
        <div
          href="#"
          class="flex flex-col items-center bg-green-200 gap-6 2xl:max-w-full   md:flex-row md:max-w-full "
        >
          <img
            class="object-cover w-full  h-96 md:h-[30rem] md:w-1/2  "
            src="https://cdn.pixabay.com/photo/2017/07/30/20/40/beach-2555568_1280.jpg"
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal ">
            <h1 className=" mb-4 font-lato font-bold text-sx">
              ENJOY THE GAME _____
            </h1>
            <h1 className="text-5xl mb-4 font-medium">Beach Volleyball</h1>
            <p className="md:w-96 mb-8">
              Beach volleyball is ouy visitors favourite sport, highly enjoyable
              for everyone young or old. Just gather your team on the beach and
              find the opponents in a matter of minutes. And show what you can
              do, be a winner!
            </p>
            <button className="border font-lato font-bold text-sm  bg-red-800 py-2 px-3 text-white w-40">
              Read More
            </button>
          </div>
        </div>
      </div>

      <div className=" flex  justify-center ">
        <div
          href="#"
          class="flex flex-col items-center bg-green-200   gap-6  md:flex-row-reverse md:max-w-full "
        >
          <img
            class="object-cover w-full  h-96 md:h-[30rem] md:w-1/2  "
            src="https://cdn.pixabay.com/photo/2017/07/30/20/40/beach-2555568_1280.jpg"
            alt=""
          />
          <div class="flex flex-col justify-between p-4   leading-normal ">
            <h1 className=" mb-4 font-lato font-bold text-sx">
              ENJOY THE GAME _____
            </h1>
            <h1 className="text-5xl mb-4 font-medium">Beach Volleyball</h1>
            <p className="md:w-96 mb-8">
              Beach volleyball is ouy visitors favourite sport, highly enjoyable
              for everyone young or old. Just gather your team on the beach and
              find the opponents in a matter of minutes. And show what you can
              do, be a winner!
            </p>
            <button className="border font-lato font-bold text-sm  bg-red-800 py-2 px-3 text-white w-40">
              Read More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardD