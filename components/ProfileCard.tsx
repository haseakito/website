import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React from 'react'

type ProfileCardProps = {
    src: StaticImport,
    title: string
    color:string,
    content: {
        title: string,
        period: string,
        body: string,
    }
}

export function ProfileCard(props: ProfileCardProps) {

    const { src, title, color, content } = props

  return (
    <div className='group relative max-w-sm'>
        <div className='h-80 w-auto lg:w-60 xl:w-80 [perspective:1000px] border rounded hover:rounded-none duration-200 shadow-xl hover:shadow-2xl animate-flip-in'>
            <div className='relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
                <div className='flex justify-center py-4 group-hover:hidden'>
                    <Image
                        src={ src }
                        alt=''
                        width={ 100 }                    
                    />
                </div>
                <h1 className=' pt-20 text-2xl text-center font-medium group-hover:hidden'>
                    { title }
                </h1>
                <div className='absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                    <div className='flex min-h-full flex-col space-y-2 justify-center'>
                        <h1 className='text-3xl font-bold'>{ content.title }</h1>
                        <p className='text-base'>{ content.body }</p>
                        <p className='py-5'>{ content.period }</p>
                        <button className='absolute bottom-1 inset-x-0 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'>
                            Learn More
                        </button>                  
                    </div>
                </div>
            </div>
        </div>
        <span className={`${ color } rounded absolute h-2 max-w-sm w-full bottom-0 animate-scale-in-cente group-hover:hidden`}></span>
    </div>
    
  )
}
