import React from "react";
import Svg from "../moreComponent/Svg";

function Cards() {
  return (
    <div className="">
      <div className="m-4">
        <div class="max-w-sm rounded overflow-hidden ">
          <div className="group relative cursor-pointer  ">
            <img
              class="z-[1] "
              src="https://cdn.pixabay.com/photo/2018/08/06/19/49/design-3588214_1280.jpg"
            />
            <div class="absolute bottom-0 left-0 w-full h-0 flex  justify-center items-center bg-red-800 opacity-0 group-hover:h-full group-hover:opacity-90 duration-700">
            
<Svg />
            </div>
          </div>
          <div class=" px-1 py-4 ">
            <h1 className="mb-2">EXECUTIVE ------</h1>
            <div class="font-bold text-xl mb-6">The Coldest Sunset</div>
            <p class="text-gray-700 text-base leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-1 pt-1 pb-2">
            <span class="cursor-pointer border-2 border-red-800 hover:bg-gray-100 duration-700 hover:text-black w-full md:w-20 inline-block bg-red-800 px-3 py-2 text-sm font-semibold text-gray-300 mr-2 mb-2">
              Details
            </span>
           

            <span className="line-through">$100</span> -
            <span className="ml-1">$50</span>-
            <span className=" text-blue-800 font-medium"> night</span>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;

