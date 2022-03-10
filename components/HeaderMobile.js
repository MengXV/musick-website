import React from 'react'

export default function HeaderMobile() {
  return (
    <div className='w-full mx-auto'>
        <div className='container mx-auto p-6  pt-20 flex flex-col justify-center items-center gap-y-4'>
         <div>
           <h1 className=' text-5xl sm:text-7xl text-white  text-center leading-tight tracking-wider'>Listen to <br/><span className='text-pink font-bold'>Music</span> <br/>until you <br/><span className='text-pink font-bold'>Sick</span></h1>
         </div>
        <div>
            <img src='music-mobile.png' className='sm:w-96'/>
        </div>

        <button className='text-white bg-pink py-2 px-24 rounded-full tracking-widest font-bold'>Musick Now!</button>
        </div>
    </div>
  )
}
