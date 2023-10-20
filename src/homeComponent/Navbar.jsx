import React, { useState } from "react";

import { Link } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [service, setService] = useState(false);
  const [menu, setMenu] = useState("hidden");

  function clickHandle() {
    if (menu === "hidden") {
      setMenu("h-[30rem]");
    } else {
      setMenu("hidden");
    }
    setIsOpen(!isOpen);
  }

  return (
    <nav className="p-4 shadow-sm">
      <div className="container">
        <div className="">
          <div className="flex items-center justify-between ">
            {/* <Link to="/">
              <img src={logo} className="h-16 mr-16" alt="cloud-whize logo" />
            </Link>
          </div> */}
          <h1 className="uppercase">hotel website</h1>
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
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
          <div 
            className={`${menu} md:inline-flex md:ml-[13rem] top-[62px] md:mt-0 md:bg-white w-[20rem] md:w-full left-0 md:left-0 bg-green-100 absolute md:static md:flex-row flex-col flex space-x-4 gap-8 animation-element animate z-[9] `}
          >
            <Link to="/" className="ml-4 md:ml-0 mt-4 md:mt-0 hover:text-gray-300">
              Home
            </Link>
            <Link to="/rooms" className="hover:text-gray-300">
              Rooms
            </Link>
            <Link to="/activities" className="hover:text-gray-300">Activities</Link>
            
            
            <Link to="/contact" className="hover:text-gray-300">
              Contact 
            </Link>
            
          </div>
        </div>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
