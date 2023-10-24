import React, { useState } from 'react'


function Hotels() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const images = [
    "https://unsplash.it/640/425?image=30",
    "https://unsplash.it/640/425?image=40",
    "https://unsplash.it/640/425?image=50",
  ];

  const previous = () => {
    if (currentIndex > 1) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const forward = () => {
    if (currentIndex < images.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  
  return (
    <div className="md:pl-12 2xl:pl-0 p-2 pt-10 md:pt-0 leading-loose">
      <div className="flex justify-center items-center md:flex-row flex-col ">
        <div className="pl-3 md:pl-0 2xl:w-1/3 md:w-3/4">
          <h1 className="uppercase font-lato font-bold text-sm mb-4">
            IN A NUTSHELL---
          </h1>
          <h1 className="text-5xl mb-6 font-medium">Hotels</h1>
          <div className="border-t-4 border-solid mb-10  border-green-800 w-40"></div>
          <p className="2xl:w-1/2  mb-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
            necessitatibus culpa quia dignissimos, obcaecati cumque blanditiis
            debitis obcaecati{" "}
          </p>
          <button className="font-lato font-bold text-sm bg-red-800 py-2 px-3 hover:bg-gray-100 border-2 border-red-800 duration-700 hover:text-black text-white mb-6 md:mb-0">
            Read More
          </button>
        </div>
        <div>
          <main className=" w-full place-content-start ">
            <div className="relative mx-auto  overflow-hidden   ">
              <button
                onClick={previous}
                className="absolute right-20 bottom-3 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 shadow-md"
              >
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="black"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={forward}
                className="absolute right-5 bottom-3 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 shadow-md"
              >
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="black"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              <div className="relative md:h-96 h-64 md:w-[40rem] w-[23rem]" >
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={` absolute top-0 ${
                      currentIndex === index + 1 ? "" : "hidden"
                    }`}
                  >
                    <img
                      src={image}
                      alt="image "
                      className="rounded-sm w-[10] h-[10] "
                    />
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Hotels