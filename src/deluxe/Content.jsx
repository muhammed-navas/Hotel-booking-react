import React from 'react'
import Gallary from './Gallary';

function Content() {
  return (
    <div className="md:p-10 p-4 ">
      <div className="flex justify-center 2xl:max-w-[100rem] 2xl:mx-auto md:flex-row flex-col">
        <div className=" md:w-3/4 w-full leading-7 md:pr-4  ">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
            doloremque, dolores enim temporibus tempore facere minima deserunt
            fugit molestiae itaque omnis odio culpa, ipsum illo delectus. Qui
            autem placeat error aliquid laudantium harum recusandae eos! Itaque,
            voluptates obcaecati laborum quos commodi beatae totam impedit. Quia
            iusto animi nobis dolores libero!
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
            sapiente non! Dignissimos, dolore! Suscipit facilis eaque obcaecati
            quos neque vero aut dolor blanditiis temporibus. Provident,
            accusamus expedita. Ea, maxime sed!
          </p>
          <div className="flex gap-4 text-2xl italic p-6 ">
            <img
              src="https://cdn-icons-png.flaticon.com/128/4992/4992672.png"
              className="w-20 h-20 "
              alt=""
            />
            <h1>
              Aliquam tincidunt sollicitudin lectus, quis consequat nisi
              elementum interdum. Etiam ac scelerisque magna. Nulla dignissim,
              nisi ac varius porta, velit dolor pretium.
            </h1>
          </div>
          <p className="mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
            sapiente non! Dignissimos, dolore! Suscipit facilis eaque obcaecati
            quos neque vero aut dolor blanditiis temporibus. Provident,
            accusamus expedita. Ea, maxime sed!
          </p>
          <div>
            <Gallary />
          </div>
        </div>
        <div className="md:w-1/3 w-full">
          <div className="bg-green-200 py-10 pl-10 pr-3   ">
            <h1 className="text-2xl">Amenities </h1>
            <div className="p-4 flex gap-4 items-center ">
              <img
                src="https://cdn-icons-png.flaticon.com/128/818/818217.png"
                className="w-7 h-7"
                alt=""
              />
              <img
                src="https://cdn-icons-png.flaticon.com/128/900/900323.png"
                className="w-7 h-7"
                alt=""
              />
              <img
                src="https://cdn-icons-png.flaticon.com/128/3239/3239957.png"
                className="w-7 h-7"
                alt=""
              />
            </div>
            <div className="text-sm leading-7 ">
              <h1> Size: 60 square feet </h1>
              <h1> View: Sea or Garden view </h1>
              <h1>Terraces: Balcony</h1>
              <h1> Occupants: Maximum 3 persons </h1>
              <h1> Room service: Available per request</h1>
            </div>
          </div>
          <div className="py-6 flex md:flex-row flex-col md:items-center gap-4 md:gap-10 ">
            <button className="uppercase w-full md:w-1/2 border border-2 border-red-800 hover:bg-white hover:text-red-800 duration-700 px-4 py-2 bg-red-800 text-white font-lato ">
              Book now
            </button>
            <div className="">
              <h1 className="uppercase  font-lato">from</h1>
              <span className="line-through">99 </span>
              <span>/ night </span>
              <h1></h1>
            </div>
          </div>
          <ul className="bg-green-200 p-10 flex flex-col gap-3 cursor-pointer">
            <li className="border-b border-red-300 hover:list-disc p-2 hover:text-red-800">
              Standard double rooms
            </li>
            <li className="border-b border-red-300 hover:list-disc p-2 hover:text-red-800">
              Standard double rooms
            </li>
            <li className="border-b border-red-300 hover:list-disc p-2 hover:text-red-800">
              Standard double rooms
            </li>
            <li className="border-b border-red-300 hover:list-disc p-2 hover:text-red-800">
              Standard double rooms
            </li>
            <li className="border-b border-red-300 hover:list-disc p-2 hover:text-red-800">
              Standard double rooms
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Content