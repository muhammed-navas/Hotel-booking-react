import React, { useState, useEffect } from 'react';
import { RxDotFilled } from 'react-icons/rx';

function App() {
  const slides = [
    {
      url: 'https://cdn.pixabay.com/photo/2022/10/23/02/26/hotel-7540353_1280.jpg',
    },
    {
      url: 'https://cdn.pixabay.com/photo/2017/05/31/10/23/manor-house-2359884_1280.jpg',
    },
    {
      url: 'https://cdn.pixabay.com/photo/2020/01/15/18/01/room-4768551_1280.jpg',
    },
    {
      url: 'https://cdn.pixabay.com/photo/2017/08/03/15/38/architecture-2576906_1280.jpg',
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
    <div className='max-w-[1400px]  w-full  relative group '>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-[90vh]  bg-center bg-cover duration-500'
      ></div>

      <div className='flex top-4 justify-center '>
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            {/* <RxDotFilled className=' ' /> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
