import React from 'react'

export default function ExperiencedSection() {
    return (
        <div className='w-full mx-auto pt-10 pb-20 relative'>
            <div className='hidden md:block border md:h-[250px]  absolute lg:h-[280px] xl:h-[330px] 2xl:h-[330px] md:border md:right-[32px] md:bottom-[60px] border-pink lg:right-[36px] 2xl:right-[120px]'></div>
            <div className='hidden md:block md:w-6 md:h-6 rounded-full  bg-pink absolute md:right-[20px] md:bottom-10  lg:right-[24px] lg:bottom-10 2xl:right-[108px]'></div>
            <div className='hidden md:block md:w-6 md:h-6 rounded-full  bg-pink absolute md:right-[21px] md:bottom-[310px]  lg:right-[25px] lg:bottom-[340px] xl:bottom-[380px] 2xl:right-[108px]'></div>
            <div className='container mx-auto  py-6 '>

            
                <div className=' flex justify-end'>
                    <h1 data-aos='fade-down' data-aos-duration='1500' 
                     className='text-white text-3xl font-semibold px-6 md:px-20 2xl:px-48'>Shared your experienced!</h1>
                </div>

                <div className='flex flex-col-reverse md:flex md:flex-row justify-center items-center px-4 md:px-14 md:gap-x-8   md:pr-20 md:pl-8'>
                    <div className='mt-14 px-6 md:px-0' >
                        <img data-aos='fade-right' data-aos-duration='1500' src='/example.png' className='md:w-64 md:h-28 lg:w-[370px] lg:h-40 xl:w-[500px] lg:ml-28 xl:ml-20 xl:h-56' />
                    </div>
                    <div className='flex justify-end '>
                        <p data-aos='fade-left' data-aos-duration='1500'
                        className='text-pink   md:w-[21rem] lg:w-[25rem] xl:w-[32rem] 2xl:w-[40rem] mt-10 text-xl md:text-xl flex justify-end lg:text-2xl tracking-wider leading-normal  md:px-0 lg:leading-relaxed'>
                            Share everything in this music community platform is the best thing for the people who
                            really enjoy in music industry. 
                        </p>
                    </div>

                </div>
            </div>

        </div>
    )
}
