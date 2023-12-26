import React from 'react';
import { navLinks } from '../constants';
import {headerLogo} from '../assests/images'

const Nav = () => {
  return (
    <header className=' px-0 py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center'>
        <a href='/'>
          <img
            src={headerLogo}
            alt='logo'
            width={129}
            height={29}
            className='mx-6 w-[129px] h-[29px]'
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16'>
            {navLinks.map((item)=> (
                <li key={item.label}>
                    <a href={item.href}>
                        {item.label}
                    </a>
                </li>
            ))}
        </ul>
        </nav>
    </header>
  )
}

export default Nav