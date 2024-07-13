// src/components/Navbar.js

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4 mx-auto justify-center mt-4  max-w-lg min-w-lg rounded-full">
      <div className="container mx-auto flex items-center justify-between md:justify-center">
        {/* <div className="text-white text-2xl md:mr-6">Brand</div> */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
        <div
          className={`flex-col md:flex md:flex-row md:items-center ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <Link
            to="/"
            className="block md:inline-block text-white hover:bg-gray-700 px-3 py-2 rounded-md text-lg"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block md:inline-block text-white hover:bg-gray-700 px-3 py-2 rounded-md text-lg"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block md:inline-block text-white hover:bg-gray-700 px-3 py-2 rounded-md text-lg"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
