import Image from 'next/image'
import React from 'react'

type Props = {}

const Home = (props: Props) => {
  return (
    <div className='bg-[#FBFBFB]'>
        <div className='h-screen w-4/5 mx-auto flex md:flex-row flex-col items-center justify-center'>
            <div className='flex flex-col items-start md:items-center justify-center h-full w-full md:w-1/2 px-10'>
                <h1 className='text-[#142664] text-5xl font-semibold py-3'>The Next Generation Hosting Platform</h1>
                <p className='text-[#233447]'>
                    Lorem ipsum dolor sit amet consectetur. Sagittis tortor nunc volutpat diam facilisi ut vitae scelerisque nulla. Aliquet blandit feugiat tempus pharetra cras enim ac. 
                </p>
                <div className='w-full'>
                    <button className='bg-[#142664] text-white px-5 py-2 rounded-md mt-5 w-full'>View Pricing</button>
                </div>
            </div>
            <Image
                src='/images/hero.svg'
                alt='hero'
                width={500}
                height={500}
            />
        </div>
        <div className=' mx-auto flex md:flex-row flex-col items-center justify-center gap-10 pl-12 pb-20'>
            <Image
                src='/images/code.png'
                alt='code'
                width={300}
                height={300}
            />
            <div className='flex flex-col items-start md:items-start justify-center h-full w-full md:w-1/2 px-10'>
                <h1 className='text-[#142664] text-5xl font-semibold py-3'>Just focus on coding</h1>
                <p className='text-[#233447]'>
                    Lorem ipsum dolor sit amet consectetur. Sagittis tortor nunc volutpat diam facilisi ut vitae scelerisque nulla. Aliquet blandit feugiat tempus pharetra cras enim ac.
                </p>
            </div>
        </div>
        <div className='py-20'>
            <div className='mx-auto flex md:flex-row flex-col items-center justify-center gap-10 pr-12'>
                <div className='flex flex-col items-start md:items-start justify-center h-full w-full md:w-1/2 px-10'>
                    <h1 className='text-[#142664] text-5xl font-semibold py-3'>We manage the rest</h1>
                    <p className='text-[#233447]'>
                        Lorem ipsum dolor sit amet consectetur. Sagittis tortor nunc volutpat diam facilisi ut vitae scelerisque nulla. Aliquet blandit feugiat tempus pharetra cras enim ac.
                    </p>
                </div>
                <Image
                    src='/images/file.png'
                    alt='code'
                    width={300}
                    height={300}
                />
            </div>
        </div>
        <div>
            <div>
                <h1 className='text-[#142664] text-5xl font-semibold py-3 text-center'>What our clients say</h1>
            </div>
        </div>
    </div>
  )
}

export default Home