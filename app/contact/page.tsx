import React from 'react'
import ContactImage from '@/public/ContactImage.jpg'
import Image from 'next/image'
import { ContactForm } from '@/components/ContactForm'

export default function page() {
  return (
    <div className='h-full'>
        <h1 className='text-center text-6xl font-extrabold opacity-95 hover:opacity-100 py-10'>
            💬Contact
        </h1>
        <div className='text-center font-mono font-bold pb-2'>
            <p>happy to hear Job offers and so much more from you!</p>
        </div>
        <div
            className='lg:flex lg:justify-between mt-20 mx-20 mb-16'
        >
            <Image
                src={ ContactImage }
                alt=''
                className='hidden lg:block w-1/2'
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
  )
}
