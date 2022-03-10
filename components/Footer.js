import React from 'react'
import Link from 'next/link'

export default function Footer() {
    return (
        <div className='w-full mx-auto'>
            <div className='container mx-auto px-4 pt-10 '>
                <div className='flex justify-center relative items-center'>
                    <h1 data-aos='zoom-out' data-aos-duration='1500' data-aos-anchor-placement="top-bottom"
                        className='text-9xl tracking-normal font-extrabold text-gray-500 md:text-[8rem] lg:text-[12rem] font-mont'>2022</h1>
                    <p data-aos='zoom-in' data-aos-duration='1500'
                        className='absolute text-6xl text-pink pt-2 tracking-widest font-normal uppercase md:text-[4rem] lg:text-[6rem] font-mont'>Musick</p>
                </div>

                <div className='my-10 flex items-center justify-center'>
                    <p data-aos="fade-down"
                        data-aos-duration='1500'
                        className='text-white font-mont text-center text-xs antialiased md:text-base lg:text-lg md:w-[600px] lg:w-[700px] xl:w-[800px]'>
                            "Make music a part of your life, and you will have a beautiful day for the rest of your life"</p>
                </div>

                <div className='flex justify-center items-center gap-x-6 text-pink text-xs md:text-md 2xl:text-lg md:gap-x-10 font-semibold font-mont'>

                    <div className='border-b border-pink pb-1 hover:scale-75 duration-300 cursor-pointer'  data-aos="flip-up" data-aos-duration='1500'>
                        <Link href='/'>
                            <a>
                                Instagram
                            </a>
                        </Link>
                    </div>


                    <div className='border-b border-pink pb-1 hover:scale-75 duration-300 cursor-pointer'  data-aos="flip-up" data-aos-duration='1500'>
                        <Link href='/'>
                            <a>
                                Twitter
                            </a>
                        </Link>
                    </div>


                    <div className='border-b border-pink pb-1 hover:scale-75 duration-300 cursor-pointer '  data-aos="flip-up" data-aos-duration='1500'>
                        <Link href='/'>
                            <a>
                                Facebook
                            </a>
                        </Link>
                    </div>


                    <div className='border-b border-pink pb-1 hover:scale-75 duration-300 cursor-pointer'  data-aos="flip-up" data-aos-duration='1500'>
                        <Link href='/'>
                            <a>
                                Tiktok
                            </a>
                        </Link>
                    </div>

                </div>

                <div className='text-sm flex text-white justify-between mt-20 items-center pb-1 font-mont'>
                    <p>©2022 <span className='text-pink'>Musick</span> • Privacy Policy • Terms Of Service</p>
                    <div className='text-center pb-1'>
                        <p>Contact us at:</p>
                        <p className='text-pink'>musick@musick.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
