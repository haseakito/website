import React from 'react'
import ContactImage from '@/public/ContactImage.jpg'
import Image from 'next/image'
import { ContactForm } from '@/components/ContactForm'
import { PageTransitionAnimation } from '@/utils/PageTransitionAnimation'
import { Navigation } from '@/components/Navigation'
import { ScrollReveal } from '@/utils/ScrollReveal'

export default function page() {
  return (
    <PageTransitionAnimation>
        <div className='h-full'>
            <div className='relative'>
                <Navigation
                    path='Contact'
                />
                <h1 className='text-center text-6xl font-extrabold opacity-95 hover:opacity-100 py-10'>
                💬Contact
                </h1>
                <span className='absolute bg-black h-2 w-16 bottom-5 inset-x-1/2'></span>
            </div>            
            <div className='font-mono text-center font-bold'>
                <p>happy to hear Job offers and so much more from you!</p>
            </div>            
            <div className='lg:flex lg:justify-between mt-16 mx-20 mb-16'>
                <Image
                    src={ ContactImage }
                    alt=''
                    className='hidden lg:block w-1/2 animate-fade-in'
                />
                <ContactForm />
                <div className='flex justify-center lg:hidden mt-10'>
                    <Image
                        src={ ContactImage }
                        alt=''
                        className='w-2/3'
                    />
                </div>
            </div>        
        </div>
    </PageTransitionAnimation>
  )
}
