import { Navigation } from '@/components/Navigation'
import { PageTransitionAnimation } from '@/utils/PageTransitionAnimation'
import Code from '@/public/Code.svg'
import React from 'react'
import Image from 'next/image'

export default function page() {
  return (
    <PageTransitionAnimation>
        <div className='h-full'>
            <Navigation
                path='Products'
            />
            <div className='flex justify-center'>
                <div className='relative inline-block'>
                    <div className='flex'>
                        <Image
                            src={ Code }
                            alt=''
                            width={ 70 }
                        />
                        <h1 className='text-center text-6xl font-extrabold opacity-95 hover:opacity-100 py-10 whitespace-nowrap overflow-hidden animate-appear-gradually'>
                            Products
                        </h1>
                    </div>
                    <span className='absolute bg-black h-2 w-16 bottom-5 inset-x-1/2 animate-scale-in-center'></span>
                </div>
            </div>
            <div className='text-center font-mono font-bold pb-2'>
                <p>Stuff I built for work, portfolio, and most importantly <span className='text-pink-500 hover:text-pink-400 duration-300'>fun</span>!</p>
            </div>
        </div>
    </PageTransitionAnimation>
  )
}
