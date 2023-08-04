import React from 'react'
import Image from 'next/image'
import Icon from '@/public/Icon.jpg'
import { PageTransitionAnimation } from '@/utils/PageTransitionAnimation'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Navigation } from '@/components/Navigation'

export default function page() {

  return (
    <PageTransitionAnimation>
      <div className='h-full'>
        <Navigation
            path='About'
        />
        <div className='flex justify-center relative'>
            <h1 className='text-6xl font-extrabold opacity-95 hover:opacity-100 py-10 inline-block'>
                <span className='inline-block animate-rocket'>🚀</span>About
            </h1>
            <span className='absolute bg-black h-2 w-16 bottom-5 inset-x-1/2'></span>
        </div>
        <div className='text-center font-mono font-bold'>
            <p>The super awesome history of my career! ...Perhaps?</p>
        </div>
        <div className='lg:grid lg:grid-cols-5 mx-3 py-10'>
            <div className='flex col-span-2 justify-center mb-5'>
                <Image
                    src={ Icon }
                    alt=''
                    className='w-1/2 lg:w-full mx-5 rounded hover:rounded-none duration-300 hover:shadow-md opacity-90 hover:opacity-100'
                    />
            </div>
            <div className='col-span-3 mx-10'>
                <div
                    className='p-6 rounded hover:shadow-md duration-300'
                    >
                    <h3 className='text-center text-3xl font-bold font-mono mb-4'>
                        <span className='inline-block animate-heartbeat'>💜</span>Profile
                    </h3>
                    <div className='grid gap-5'>
                        <div
                            className='grid grid-cols-2 items-center rounded gap-4 p-2 mx-5 hover:bg-gray-100 hover:scale-105 duration-300'
                        >
                            <h5 className='font-semibold'>Name</h5>
                            <p className='font-semibold'>AKITO HASEGAWA</p>
                        </div>
                        <div
                            className='grid grid-cols-2 items-center rounded gap-4 p-2 mx-5 hover:bg-gray-100 hover:scale-105 duration-300'
                            >
                            <h5 className='font-semibold'>Education</h5>
                            <ul>
                                <li className='font-semibold'>
                                    Monash University
                                </li>
                                <li className='font-medium pl-2'>
                                    Bachelor of Computer Science
                                </li>
                                <li className='pl-2'>
                                    GPA: 3.0
                                </li>
                            </ul>                          
                        </div>
                        <div
                            className='grid grid-cols-2 items-center rounded gap-4 p-2 mx-5 hover:bg-gray-100 hover:scale-105 duration-300'
                            >
                            <h5 className='font-semibold'>Experiences</h5>
                            <ul className='grid space-y-2 p-2'>
                                <li
                                    className='text-center rounded-lg bg-gray-200 hover:bg-gray-300 p-2 hover:scale-105 duration-500'
                                    >
                                    Frontend Development
                                </li>
                                <li
                                    className='text-center rounded-lg bg-gray-200 p-2  hover:bg-gray-300  hover:scale-105 duration-500'
                                    >
                                    Backend Development
                                </li>
                                <li
                                    className='text-center rounded-lg bg-gray-200 p-2  hover:bg-gray-300  hover:scale-105 duration-500'
                                    >
                                    Data Analytics                                
                                </li>
                                <li
                                    className='text-center rounded-lg bg-gray-200 p-2 hover:bg-gray-300  hover:scale-105 duration-500'
                                    >
                                    Cloud Architect
                                </li>
                            </ul>                     
                        </div>
                        <div
                            className='grid grid-cols-2 items-center rounded gap-4 p-2 mx-5 hover:bg-gray-100 hover:scale-105 duration-300'
                            >
                            <h5 className='font-semibold'>
                                Career
                            </h5>
                            <ul>
                                <li className='font-medium'>
                                    <p>Intern at Naxa, Inc for 6 months</p>
                                    <p className='text-end'>- Frontend developer</p>
                                    <p className='text-center'>Worked on Nextjs, Firebase, LIFF APP and etc. </p>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </PageTransitionAnimation>
  )
}
