import React from 'react'
import Menu from './Menu'
import Link from 'next/dist/client/link'
import { navLinks } from './data'

export default function Navbar() {
  return (
    <div className='w-full mx-auto bg-black md:bg-black/80 shadow-md fixed top-0 z-10' id='navbar-section'>
      <nav className=' container mx-auto font-mont text-white flex items-center justify-between px-4 xl:px-10' >
        <div className='w-2/12 font-bold p-2 py-4'>
          <h1 className='2xl:text-2xl'>Musick</h1>
        </div>

        <div className='hidden md:flex font-mont p-2  text-xs items-center space-x-8 xl:text-xl font-semibold'>
          {navLinks.map((link, index) => {
            return (
              <ul key={index} className='container mx-auto hover:text-pink ease-out duration-100 cursor-pointer'>
                <Link href={link.path} >
                  <li>{link.name}</li>
                </Link>
              </ul>
            );
          })}
        </div>
        {/* <div className='hidden md:block'>
          <ul className='container mx-auto font-medium p-2 flex text-xs items-center space-x-8'>
            <li className='hover:text-pink ease-in duration-100'><a href='#music-section/about'>About</a></li>
            <li className='hover:text-pink ease-in duration-100'><a href='#'>Blog</a></li>
            <li className='hover:text-pink ease-in duration-100'>
              <Link href='/contact'>
                Contact
              </Link>
            </li>
          </ul>
        </div> */}

        <div className='md:hidden'>
          <Menu />
        </div>
      </nav>
    </div>
  )
}
