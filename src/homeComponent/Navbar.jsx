import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function clickHandle() {
    setIsOpen(!isOpen);
  }

  const menuClass = isOpen ? "block" : "hidden";

  return (
    <nav className="p-4 md:p-5 shadow-sm">
      <div className="mx-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="uppercase text-2xl w-full md:ml-16">hotel website</h1>
          <div className="md:hidden">
            <button
              onClick={clickHandle}
              className="text-white hover:text-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
          <div
            className={`md:flex ${menuClass} md:inline-flex md:justify-between top-16 md:mt-0 md:bg-white w-full md:w-20rem h-screen md:h-0 bg-white absolute md:static md:flex-row flex-col flex space-x-4 gap-8  animation-element animate z-10 text-red-900`}
          >
            <Link
              to="/"
              className="md:ml-0 mt-4 md:mt-0 font-lato text-lg hover:underline font-medium"
            >
              Home
            </Link>
            <Link
              to="/rooms"
              className="font-lato text-lg hover:underline font-medium"
            >
              Rooms
            </Link>
            <Link
              to="/activities"
              className="font-lato text-lg hover:underline font-medium"
            >
              Activities
            </Link>
            <Link
              to="/deluxe"
              className="font-lato text-lg hover:underline font-medium"
            >
              Deluxe
            </Link>

            <Link
              to="/contact"
              className="font-lato text-lg hover:underline font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
