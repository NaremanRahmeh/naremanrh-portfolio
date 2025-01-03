import React, { useState } from 'react'
import { LuMenu } from "react-icons/lu";
import Navbar from './Navbar';
import { IoCloseOutline } from "react-icons/io5";
import Button from './Button';

function Header() {

    const [navOpen ,setNavOpen] = useState(false);
  return (
    <div className='top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-gray-100 to-gray-100/0'>
      <div className='w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid-cols-[1fr,3fr,1fr]'>
        <div>
            
        </div>
        <div className='relative md:justify-self-center'>
            <button
            className='menu-btn md:hidden'
            onClick={() => setNavOpen((prev) => !prev)}>
            <span>
                {navOpen ?
                 <IoCloseOutline size={20}/> :<LuMenu size={20}/> 
                }
            </span>
            </button>
            <Navbar navOpen= {navOpen}/>
        </div>
        <Button 
         title={'Contact Me'}
         href={'#contact'}
         className={'max-md:hidden text-sm bg-[#7eb895] text-white'}/>        
      </div>
    </div>
  )
}

export default Header