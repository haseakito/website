import { Navigation } from '@/components/Navigation'
import { PageTransitionAnimation } from '@/utils/PageTransitionAnimation'
import React from 'react'

export default function page() {
  return (
    <PageTransitionAnimation>
        <div className='h-full'>
            <Navigation
                path='Products'
            />
            <div className='relative'>
                <h1 className='text-center text-6xl font-extrabold opacity-95 hover:opacity-100 py-10'>
                    Products
                </h1>
                <span className='absolute bg-black h-2 w-10 left-1/2 bottom-5 animate-scale-in-center'></span>
                <span className='absolute bg-black h-2 w-10 right-1/2 bottom-5 animate-scale-in-center'></span>
            </div>
        </div>
    </PageTransitionAnimation>
  )
}
