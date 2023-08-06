import React from 'react'
import { PageTransitionAnimation } from '@/utils/PageTransitionAnimation'
import Image from 'next/image'
import Icon from '@/public/Icon.jpg'
import Education from '@/public/Education.svg'
import Work from '@/public/Work.svg'
import Application from '@/public/Application.svg'
import Coffee from '@/public/Coffee.svg'
import { Navigation } from '@/components/Navigation'
import { MdCalendarMonth, MdCall, MdEmail, MdHome } from 'react-icons/md'
import { ProfileCard } from '@/components/ProfileCard'
import Juice from '@/public/Juice.svg'
import Cocktail from '@/public/Cocktail.svg'
import Donut from '@/public/Donut.svg'
import Palmtree from '@/public/Palmtree.svg'
import { ScrollReveal } from '@/utils/ScrollReveal'

export default function page() {

    const AccountData = [
        {
            icon: <MdCalendarMonth />,
            title: '15th May, 2001'
        },
        {
            icon: <MdCall />,
            title: '+81 (080) 4121 8123'
        },
        {
            icon: <MdEmail />,
            title: 'akiakifuture@gmail.com'
        },
        {
            icon: <MdHome />,
            title: 'Tokyo, Japan'
        }
    ]

    const ProfileData = [
        {
            src: Education,
            title: 'Education',
            color: 'bg-yellow-300',
            content: {
                title: 'Monash University',
                period: '2021 - 2024',
                body: 'Bachelor of Computer Science'
            }        
        },
        {
            src: Work,
            title: 'Career',
            color: 'bg-blue-500',
            content: {
                title: 'Naxa, Inc',
                period: '2023 / 6 months',
                body: 'Intern Frontend Developer'
            }
        },
        {
            src: Application,
            title: 'Software',
            color: 'bg-green-400',
            content: {
                title: 'Typescript',
                period: '2022 - ',
                body: 'Both Frontend and Backend'
            }
        },
        {
            src: Cocktail,
            title: 'Hobby',
            color: 'bg-pink-500',
            content: {
                title: 'Coffee',
                period: 'lifetime',
                body: 'Chilling with a cup of Coffee'
            }
        }
    ]

  return (
    <PageTransitionAnimation>
        <div className='h-full'>
            <Navigation
                path='About'
            />
            <section className='relative flex justify-center bg-white dark:bg-slate-800 my-20 px-6'>
                <div className='w-full h-full absolute animate-fade-in ease-in duration-[2000ms] delay-1000'>
                    <div className='absolute flex justify-center items-center w-full h-full animate-fade-in ease-in'>
                        <Image
                            src={ Palmtree }
                            alt=''
                            className='-rotate-12 w-[30vw] absolute right-0 -bottom-0 lg:-bottom-10 [@media(min-width: 2160px)]:-bottom-48 -translate-x-16'
                        />
                        <Image
                            src={ Juice }
                            alt=''
                            className='rotate-6 w-[30vw] lg:w-[25vw] absolute left-0 -top-16 translate-x-16 animate-fade-in'
                        />
                        <span className='animate-fade-in rotate-12 bg-cyan-300 rounded-xl h-72 w-40 lg:w-52 absolute -top-16 right-0 translate-x-36 transform hover:translate-x-28 duration-300'></span>
                        <span className='animate-fade-in rotate-12 bg-lime-300 rounded-xl h-72 w-40 lg:w-52 absolute -bottom-28 left-0 -translate-x-36 transform hover:-translate-x-28 duration-300'></span>
                    </div>
                </div>
                <div className='relative inline-block text-center my-60 md:my-48 xl:my-64 animate-fade-in ease-out duration-500 delay-300'>
                    <div className='animate-flip-in ease-out duration-[1500ms]'>
                        <h1 className='mb-4 font-extrabold text-2xl md:text-4xl animate-fade-in'>
                            <span className='text-emerald-400 hover:text-emerald-500 duration-300'>Who</span> AM <span className='text-fuchsia-400 hover:text-fuchsia-500 duration-300'>I</span>?                            
                        </h1>
                        <h4 className='text-lg font-semibold'>
                            Junior Full Stack <span className='text-rose-400 hover:text-rose-500 duration-300'>Software Developer</span>
                        </h4>
                        <span className='absolute bg-black w-40 h-1 left-1/2 bottom-0 animate-scale-in-center'></span>
                        <span className='absolute bg-black w-40 h-1 right-1/2 bottom-0 animate-scale-in-center'></span>
                    </div>
                </div>
            </section>
            <ScrollReveal>
                <div className='flex justify-center'>
                    <div className='relative inline-block'>
                        <h1 className='text-6xl font-extrabold opacity-95 hover:opacity-100 py-10 whitespace-nowrap overflow-hidden animate-appear-gradually'>
                            <span className='inline-block animate-rocket'>🚀</span>About
                        </h1>
                        <span className='absolute bg-black h-2 w-16 bottom-5 inset-x-1/2'></span>
                    </div>
                </div>
            </ScrollReveal>
            <div className='text-center font-mono font-bold'>
                <p>The super awesome history of my career! ...Perhaps?</p>
            </div>            
            <div className='lg:flex justify-between gaap-5 my-20 mx-10'>
                <ScrollReveal>
                    <div className='gap-10 lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl bg-blue-600 px-20 lg:px-10 py-10 rounded hover:rounded-none shadow-lg hover:shadow-xl duration-300'>
                        <div className='flex justify-center py-24'>                    
                            <Image
                                src={ Icon }
                                alt=''
                                className='-mt-14 w-60 lg:w-48 h-auto rounded-full opacity-95 hover:opacity-100 duration-300'
                            />
                        </div>
                        <div>
                            <h1 className='text-center text-white font-extrabold text-3xl'>
                                AKITO HASEGAWA
                            </h1>
                            <h4 className='text-center text-white'>
                                JUNIOR SOFTWARE ENGINEER
                            </h4>
                            <div className='grid space-y-2 p-4'>
                                { AccountData.map((value, key) => (
                                    <div
                                        key={ key }
                                    >
                                        <div className='grid grid-cols-2 items-center gap-4 py-3 px-6 hover:font-semibold hover:bg-gray-100 rounded duration-300'>
                                            { value.icon }
                                            <h5>{ value.title }</h5>
                                        </div>    
                                    </div>
                                ))}
                            </div>
                        </div>                    
                    </div>            
                </ScrollReveal>
                <div className='grid grid-cols-2 gap-10 my-10 lg:my-4'>
                    { ProfileData.map((value, key) => (
                        <div
                            key={ key }                                
                        >
                            <ProfileCard
                                src={ value.src }
                                title={ value.title }
                                color={ value.color }
                                content={ value.content }
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </PageTransitionAnimation>
  )
}
