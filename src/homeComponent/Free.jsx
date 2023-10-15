import React, { useState } from 'react';

const Free = () => {
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
    <main className="grid min-h-screen w-full place-content-start ">
      <div className="relative mx-auto max-w-2xl overflow-hidden   ">
        <button onClick={previous} className="absolute left-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 shadow-md">
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

        <button onClick={forward} className="absolute right-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 shadow-md">
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

        <div className="relative h-80" style={{ width: '30rem' }}>
          {images.map((image, index) => (
            <div key={index} className={`absolute top-0 ${currentIndex === index + 1 ? '' : 'hidden'}`}>
              <img src={image} alt="image" className="rounded-sm" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Free;
