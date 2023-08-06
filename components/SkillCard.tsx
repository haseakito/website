import React from 'react'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import { ScrollReveal } from '@/utils/ScrollReveal'

type SkillCardProps = {
    src: StaticImport,
    title: string,
    description: string
}

export function SkillCard(props: SkillCardProps) {

    const { src, title, description } = props
    
  return (
    <ScrollReveal>
        <div>
            <div
                className='lg:hidden flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg duration-300 md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'
            >
                <Image
                    src={ src }
                    alt=''
                    className='object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg'
                />
                <div
                    className='flex flex-col justify-between p-4 leading-normal'
                >
                    <h5
                        className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'
                    >
                        { title }
                    </h5>
                    <p
                        className='mb-3 font-normal text-gray-700 dark:text-gray-400'
                >
                        { description }
                    </p>
                </div>
            </div>
            <div
                className='hidden lg:block max-w-sm bg-white border border-gray-200 rounded-lg hover:rounded-none shadow hover:shadow-lg duration-300 dark:bg-gray-800 dark:border-gray-700'
            >            
                <Image
                    src={ src }
                    alt=''
                    className='rounded-t-lg h-80'
                />            
                <div className='p-5'>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        { title }
                    </h5> 
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        { description }
                    </p>                
                </div>
                <span className='absolute box-border z-10 -bottom-40 -right-36 bg-orange-400 w-60 h-96 rotate-[30deg] transition-all translate-x-40 group-hover:translate-x-20'></span>
            </div>  
        </div>
    </ScrollReveal>
  )
}
