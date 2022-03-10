import { Transition } from '@headlessui/react';
import Link from 'next/link';
import React, { useState } from 'react'
import { navLinks } from './data';


export default function Menu() {

    const [isOpen, setOpen] = useState(false);
    return (
        <nav className='w-full mx-auto relative'>
            <div className='w-full mx-auto'>
                <div className='p-2 flex items-center '>

                    <button
                        onClick={() => setOpen(!isOpen)}
                        type='button'
                        className=' ease-in-out duration-500 transition-transform'
                        aria-controls='mobile-menu'
                        aria-expanded='false'
                    >

                        {!isOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        )}
                    </button>
                </div>

                <Transition
                    show={isOpen}
                    enter='transition ease-out duration-700 '
                    enterFrom='translate-x-96 '
                    enterTo='opacity-100 scale-100'
                    leave='transition ease-in duration-700'
                    leaveFrom='translate-x-96 '
                    leaveTo='translate-x-96 '

                >

                    {(ref) => (
                        <div className='md:hidden' id='mobile-menu'>
                            <div ref={ref}
                                className='bg-black font-semibold text-lg pt-3 pb-3 space-y-2  absolute w-screen -right-4 -bottom-[132px] flex flex-col justify-center items-center '
                            > 
                            {navLinks.map((link, index) => {
                                return (
                                    <ul key={index}  className="cursor-pointer hover:text-pink duration-200 ease-out">
                                        <Link href={link.path}>
                                            <li >{link.name}</li>
                                            </Link>
                                    </ul>
                                )
                            })}
                                {/* <Link href='#music-section'
                                    activeClass='about'
                                    to='home'
                                    smooth='{true}'
                                    offset={50}
                                    duration={500}
                                    className='cursor-pointer '
                                >
                                    <a className='hover:text-pink ease-out duration-200'>
                                        About
                                    </a>
                                </Link>
                                <Link href='/'
                                    activeClass='home'
                                    to='home'
                                    smooth='{true}'
                                    offset={50}
                                    duration={500}
                                    className='cursor-pointer '
                                >
                                    <a className='hover:text-pink ease-out duration-200'>
                                        Home
                                    </a>
                                </Link>
                                <Link href='/contact'
                                    activeClass='contact'
                                    to='contact'
                                    smooth='{true}'
                                    offset={50}
                                    duration={500}
                                    className='cursor-pointer hover:bg-black'
                                >
                                    <a className='hover:text-pink ease-out duration-200'>
                                        Contact
                                    </a>
                                </Link> */}
                            </div>
                        </div>
                    )}
                </Transition>


            </div>
        </nav>
    )
}
