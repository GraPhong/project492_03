"use client"

import React, { useState } from 'react'

const Navbar = () => {
  const Links =[
    {name:"ค้นหาวิชา",link:"/home"},
    {name:"รีวิว",link:"/review"},
    {name:"ตารางเรียน",link:"/table"},
    {name:"กำหนดการ",link:"/schedule"},
    {name:"หลักสูตร",link:"/curriculum"}
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className='bg-purple-500 p-4'>
      <div className="flex item-center justify-between">
        <div className='text-white text-4xl font-bold'> CMU Assist</div>
        
        {/* hamberger menu */}
        <div className="md:hidden">
        <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
        </div>
        
        <ul className='hidden md:flex space-x-4'>
          {Links.map((link) => (         
              <a href={link.link} className='text-white text-2xl hover:text-black duration-100'>{link.name}</a>
            ))
          }
        </ul>
      </div>

      {/*mobile menu*/}
      {isMenuOpen ? (
        <ul className='flex flex-col md:hidden space-x-4'>
          {Links.map((link) => (         
              <a href={link.link} className='py-3 text-white text-2xl hover:text-black duration-100'>{link.name}</a>
          ))}
        </ul>
      ) : null }
    </nav>
  )
}

export default Navbar;
