"use client"
import React, { useState } from 'react';
import Link from "next/link"

const Navbar = () => {
    const NAV_LINKS = [
        { href: 'home', key: 'Home', label: 'ค้นหาวิชา' },
        { href: 'review', key: 'Review', label: 'Review' },
        { href: 'table', key: 'Table', label: 'ตารางเรียน' },
        { href: 'schedule', key: 'Schedule', label: 'กำหนดการ' },
        { href: 'curriculum', key: 'Curriculum', label: 'หลักสูตร' }
      ];
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-purple-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link className="text-4xl font-bold text-white" href={"home"}>CMU Assist</Link>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.key}
                    href={link.href}
                    className="hover:text-black text-white  px-3 py-2 rounded-md text-2xl font-medium"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
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
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
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
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
        <div className="bg-purple-600 px-2 pt-2 pb-3 space-y-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.key}
              href={`#${link.href}`}
              className="text-white hover:bg-purple-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;