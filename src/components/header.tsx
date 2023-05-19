import React from 'react'
import { navLink } from '@/constants/constant'
import { logo } from "../assets";

// Change Logo 
{/* HOME,ABOUTUS,FEATURE,TESTIMONIAL,FAQ */}
const Header = () => {
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo.src} alt="apertus-logo" className='w-[90px] h-[90px]'/>
        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
            {
                navLink.map((nav, index) => (
                    <li 
                    key={nav.id}
                    className={`font-normal cursor-pointer text-[16px]`}
                    >
                        <a>{nav.title}</a>
                    </li>
                ))
            }
        </ul>
    </nav>
  )
}

export default Header