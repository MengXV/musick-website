import React from 'react'


export default function Header() {
  return (
    <div className='w-full mx-auto '>
      <div className=' container mx-auto  md:flex items-center justify-center lg:gap-x-40 md:gap-x-20  md:pt-24  '>
        <div className=' ' id='playlist-img'>
          <img src='music.png' className='md:w-48 lg:w-52 xl:64 2xl:w-72' />
        </div>
        <div className='flex-col justify-center flex '>
          <h1 className=' md:text-6xl lg:text-7xl 2xl:text-8xl text-white  text-center leading-tight tracking-wider'
            id='listen-text'
          >
            Listen to
          </h1>
          <h1 className='text-pink font-bold md:text-6xl lg:text-7xl 2xl:text-8xl text-center leading-tight tracking-wider'
            id='music-text'>
            Music
          </h1>
          <h1 className=' md:text-6xl lg:text-7xl text-white  text-center 2xl:text-8xl leading-tight tracking-wider'
            id='until-text'
          >
            until you
          </h1>
          <h1 className='text-pink font-bold md:text-6xl lg:text-7xl 2xl:text-8xl text-center leading-tight tracking-wider'
            id='sick-text'>
            Sick
          </h1>

          <button className=' text-white py-2 font-bold tracking-widest 2xl:py-3 bg-pink border border-pink ease-in-out duration-200 text-center rounded-full mt-6 hover:bg-transparent'
            id='button-music'
          >
            Musick Now!
          </button>
        </div>
      </div>


    </div>
  )
}
