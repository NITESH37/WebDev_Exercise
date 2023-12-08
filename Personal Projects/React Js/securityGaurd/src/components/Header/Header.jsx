import React, { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'

export default function Header() {
    const [isopen, setOpen] = useState(false)
    const toggleMenu = () =>{
        setOpen(!isopen);
    }
    const closeMenu = () =>{
        setOpen(false);
    }
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-gray-600 border-gray-200 px-4 lg:px-6 py-2.5
            ">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl sm:items-center">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>

                    <button
          onClick={toggleMenu}
          type="button"
          className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24"
 
fill="none"
 
xmlns="http://www.w3.org/2000/svg">

            
<path
 
d="M4 6H20M4 12H20M4 18H20"
 
stroke="currentColor"
 
strokeWidth="2"
 
strokeLinecap="round"
 
strokeLinejoin="round" />

          
</svg>

        
</button>            


                    <div
                        className={` ${isopen ? 'flex' : 'hidden'} lg:justify-between justify-center  md:justify-center items-center w-full lg:flex lg:w-auto lg:order-1`}
                        
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/careers"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                    onClick={closeMenu}
                                >
                                    Careers
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/services"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Services
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/contacts"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                          
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}