import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Mobile menu button */}
      <div className="block sm:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-gray-800 border-gray-800"
          onClick={toggleNavbar}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      {/* Desktop menu */}
      <nav className="hidden sm:block  flex items-center py-3 px-10 shadow-lg ">
        <div className='flex justify-between'>
        <ul className="flex space-x-4 gap-10 ">
        <Link to='/'><li>
           <a href="#" className="text-gray-800 font-medium text-lg hover:text-gray-500">
              HOTEL-BOOKING-APP
            </a>
          </li></Link> 
          <Link to='/' ><li>
            <a href="#" className="text-gray-800 font-medium text-lg hover:text-gray-500">
              Home
            </a>
          </li></Link>
         <Link to='/rooms'> <li>
            <a href="#" className="text-gray-800 font-medium text-lg hover:text-gray-500">
              Rooms
            </a>
          </li></Link>
        <Link to='activities'> <li>
            <a href="#" className="text-gray-800 font-medium text-lg hover:text-gray-500">
              Activities
            </a>
          </li></Link> 
         <Link to='/contact'> <li>
            <a href="#" className="text-gray-800 font-medium text-lg hover:text-gray-500">
              Contact
            </a>
          </li></Link>
        </ul>
        <div>

        <div class="relative">
              <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                <button type="submit" class="p-1 focus:outline-none">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    class="w-4 h-4"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </button>
              </span>
              <input
                type="search"
                name="search"
                class="px-4 py-1 pl-12 rounded shadow outline-none"
                placeholder="Search Items..."
              />
            </div>
        </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden">
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#" className="text-gray-800 hover:text-gray-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-gray-500">
                Rooms
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-gray-500">
                Activities
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-gray-500">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
