import React, { useState, useEffect } from "react";
import { RxDotFilled } from "react-icons/rx";

function Image() {
  const slides = [
    {
      url: "https://cdn.pixabay.com/photo/2022/10/23/02/26/hotel-7540353_1280.jpg",
      
    },
    {
      url: "https://cdn.pixabay.com/photo/2017/05/31/10/23/manor-house-2359884_1280.jpg",
      
    },
    {
      url: "https://cdn.pixabay.com/photo/2020/01/15/18/01/room-4768551_1280.jpg",
     
    },
    {
      url: "https://cdn.pixabay.com/photo/2017/08/03/15/38/architecture-2576906_1280.jpg",
     
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const autoSlide = true;
  const autoSlideInterval = 3000;

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(() => {
      nextSlide();
    }, autoSlideInterval);

    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, currentIndex]);

  return (
    <div className="max-w-full md:px-10 w-full 2xl:w-[105rem] flex 2xl:mx-auto p-4 md:p-0  relative group  leading-loose">
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${slides[currentIndex].url})`,
        }}
        className="w-full md:h-[85vh] 2xl:h-[60vh] h-[40vh]  bg-center bg-cover duration-500 "
      >
        <div className="flex flex-col md:pl-16 p-4 md:p-10  md:pt-20 ">
          

          <button
            onClick={prevSlide}
            className="absolute z-[1] hover:bg-gray-300 duration-500 2xl:right-80 md:right-48 right-[15%] md:bottom-[15%] bottom-[0%] flex h-8 w-8 md:h-10 md:w-10 2xl:h-16 2xl:w-16 -translate-y-1/2 items-center justify-center rounded-full bg-red-800 shadow-md"
          >
            <svg
              className="w-8 h-8"
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
            onClick={nextSlide}
            className="absolute z-[1] 2xl:right-56 md:right-36 right-[4%] 2xl:h-16 2xl:w-16  md:bottom-[15%] bottom-[0%] flex h-8 w-8 md:h-10 md:w-10 -translate-y-1/2 items-center justify-center rounded-full bg-red-800 hover:bg-gray-300 duration-500 shadow-md"
          >
            <svg
              className="w-8 h-8"
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
        </div>
      </div>

      <div className="flex top-4 justify-center ">
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            {/* <RxDotFilled className=' ' /> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Image;
