import React, { useState } from "react";
import { navLinks } from "../constants";
import { headerLogo } from "../assests/images";
import {RxHamburgerMenu} from 'react-icons/rx';
import {AiOutlineClose} from 'react-icons/ai'

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleColseMenu = () => {
    setIsMenuOpen(false)
  };


  return (
    
<>
<header className="sm:px-8 px-4 py-2 z-10 w-full">
    <nav className="flex justify-between items-center max-container mt-3">
      <a href="/" className="text-3xl font-bold">
        <img src={headerLogo}
         alt="logo"
         width={129}
        height={40}
        className='m-0 w-[129px] h-[29px]'
          />
      </a>
      <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
        {navLinks.map((item) => (
          <li key={item.label}
         
          >
            <a
              href={item.href}
              className="font-montserrat leading-normal text-xl text-slate-gray"
              
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      
      <div
        className="hidden max-lg:block cursor-pointer"
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
      >
        <RxHamburgerMenu className="text-4xl" />
      </div>
    </nav>
  </header>
  {isMenuOpen && (
    <div>
      <nav className="fixed top-0 right-0 left-0 bottom-0 lg:bottom-auto bg-slate-100  ">
        <div
          className="hidden max-lg:block fixed right-0  px-8 py-4 cursor-pointer"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          <AiOutlineClose className="text-4xl" />
        </div>
        <ul className=" lg:hidden flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
               onClick={toggleColseMenu}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )}


</>
  );
};

export default Nav;
