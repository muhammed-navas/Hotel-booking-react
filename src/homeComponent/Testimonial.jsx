import React, { useState } from 'react';

function Testimonial() {
  const testimonials = [
    {
      text: "If you chose to stay with us you will enjoy modern home comforts in a traditional setting. Whether you are looking for a short weekend break or a longer holiday, we offer a range of packages that we think cater for all.",
      author: "Name one",
      position: "CEO at Google",
      image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
    },
    {
      text: "If you chose to stay with us you will enjoy modern home comforts in a traditional setting. Whether you are looking for a short weekend break or a longer holiday, we offer a range of packages that we think cater for all.",
      author: "Name two",
      position: "CEO at Microsoft",
      image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
    },
    {
      text: "If you chose to stay with us you will enjoy modern home comforts in a traditional setting. Whether you are looking for a short weekend break or a longer holiday, we offer a range of packages that we think cater for all.",
      author: "Name three",
      position: "CEO at Facebook",
      image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
    },
    // Add more testimonials here
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [visible, setVisible] = useState(true);
  const [animation, setAnimation] = useState('');

  const nextTestimonial = () => {
    setAnimation('animate-fadeInLeft');
    setVisible(false);
    setTimeout(() => {
      setCurrentTestimonial((currentTestimonial + 1) % testimonials.length);
      setVisible(true);
      setAnimation(''); 
    }, 1000); 
  };

  const prevTestimonial = () => {
    setAnimation('animate-fadeInRight');
    setVisible(false);
    setTimeout(() => {
      setCurrentTestimonial(
        currentTestimonial === 0
          ? testimonials.length - 1
          : currentTestimonial - 1
      );
      setVisible(true);
      setAnimation(''); 
    }, 1000); 
  };

  return (
    <div className="relative md:mb-10">
      <section className="bg-white dark:bg-gray-900 ">
        <div className="max-w-screen-xl px-4 py-10 mx-auto text-center lg:py-16 lg:px-6">
          <figure
            className={`max-w-screen-md mx-auto relative transition-opacity ${animation} ${
              visible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <svg
              className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="black"
              />
            </svg>
            <blockquote className="md:text-2xl text-xl font-medium text-gray-900 dark:text-white">
              {testimonials[currentTestimonial].text}
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              <img
                className="w-16 h-16 rounded-full "
                src={testimonials[currentTestimonial].image}
                alt="profile picture"
              />
              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <div className="pr-3 font-medium text-gray-900 dark:text-white">
                  {testimonials[currentTestimonial].author}
                </div>
                <div className="pl-3 text-sm font-lato font-bold  text-gray-500 dark:text-gray-400">
                  {testimonials[currentTestimonial].position}
                </div>
              </div>
            </figcaption>
          </figure>
          <div className="absolute md:top-1/2 bottom-0  left-72 md:left-20">
            <button
              className="text-gray-400 dark:text-gray-600 border border-black border-2 rounded-full hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none"
              onClick={prevTestimonial}
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
          </div>
          <div className="absolute md:top-1/2 bottom-0  right-8 md:right-20">
            <button
              className="text-gray-400 dark:text-gray-600 border border-black  border-2  rounded-full hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none"
              onClick={nextTestimonial}
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
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
