import React, { useState, useEffect } from "react";
import { RxDotFilled } from "react-icons/rx";

function App() {
  const slides = [
    {
      url: "https://cdn.pixabay.com/photo/2022/10/23/02/26/hotel-7540353_1280.jpg",
      title: "The art of meeting yourhighest expectations",
      content:
        "Enjoying the sun and sea has never been so easy. At the beach ofhotel California, you’ll find our most complete service, greatseaside and easy going staff. Hotel California. Everything. Rightwhere you need it.",
      offer: "Check our offers and details",
      btn: "BOOK NOW",
    },
    {
      url: "https://cdn.pixabay.com/photo/2017/05/31/10/23/manor-house-2359884_1280.jpg",
      title: "The art of meeting yourhighest expectations",
      content:
        "Enjoying the sun and sea has never been so easy. At the beach ofhotel California, you’ll find our most complete service, greatseaside and easy going staff. Hotel California. Everything. Rightwhere you need it.",
      offer: "Check our offers and details",
      btn: "BOOK NOW",
    },
    {
      url: "https://cdn.pixabay.com/photo/2020/01/15/18/01/room-4768551_1280.jpg",
      title: "The art of meeting yourhighest expectations",
      content:
        "Enjoying the sun and sea has never been so easy. At the beach ofhotel California, you’ll find our most complete service, greatseaside and easy going staff. Hotel California. Everything. Rightwhere you need it.",
      offer: "Check our offers and details",
      btn: "BOOK NOW",
    },
    {
      url: "https://cdn.pixabay.com/photo/2017/08/03/15/38/architecture-2576906_1280.jpg",
      title: "The art of meeting yourhighest expectations",
      content:
        "Enjoying the sun and sea has never been so easy. At the beach ofhotel California, you’ll find our most complete service, greatseaside and easy going staff. Hotel California. Everything. Rightwhere you need it.",
      offer: "Check our offers and details",
      btn: "BOOK NOW",
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
    <div className="max-w-full   w-full  relative group  leading-loose">
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${slides[currentIndex].url})`,
        }}
        className="w-full md:h-[90vh] h-4/5  bg-center bg-cover duration-500 "
      >
        <div className="flex flex-col md:pl-16 p-4 md:p-10  md:pt-20 ">
          <div>
            <h1 className="md:text-5xl text-3xl 2xl:text-7xl  pt-6 md:pt-0 font-medium text-white md:w-1/2 mb-3 md:mb-6">
              {slides[currentIndex].title}
            </h1>
            <p className="md:w-3/4 w-full 2xl:w-1/3 2xl:text-2xl  text-white md:text-xl text-sm mb-3 md:mb-6">
              {slides[currentIndex].content}
            </p>
          </div>

          <div className="flex gap-2 mb-10 md:mb-0 ">
            <button className=" border-2 font-lato font-bold 2xl:text-3xl md:text-lg text-sm  border-red-800 p-1 md:py-2 md:px-6 2xl:px-10 2xl:py-4 hover:bg-red-800 text-white duration-700 ">
              {slides[currentIndex].offer}
            </button>
            <button className=" font-lato border-2 2xl:px-10 2xl:py-4 2xl:text-3xl md:text-sm font-bold text-sm  duration-700 border-red-800 hover:bg-transparent p-1 md:py-2 md:px-6 bg-red-800 text-white ">
              {slides[currentIndex].btn}
            </button>
          </div>

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

export default App;
