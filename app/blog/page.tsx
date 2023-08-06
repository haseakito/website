import React from 'react'
import { BlogCard } from '@/components/BlogCard'
import { Navigation } from '@/components/Navigation'
import { TagButton } from '@/components/TagButton'
import { client } from '@/libs/client'
import { PageTransitionAnimation } from '@/utils/PageTransitionAnimation'
import { Blog } from '@/utils/types/Blog'
import { Tag } from '@/utils/types/Tag'
import Image from 'next/image'
import Coffee from '@/public/Coffee.svg'
import Camera from '@/public/Camera.svg'
import Cocktail from '@/public/Cocktail.svg'
import { Tweet } from 'react-tweet'

// Function handling fetching the blogs from microCMS
async function getBlogs() {
    const data = await client.get({
        endpoint: "blogs"
    })

    return data.contents
}

// Function handling fetching the tags from microCMS
async function getTags() {
    const data = await client.get({
        endpoint: "tags"
    })

    return data.contents
}

export default async function page() {

    // fetch blogs from microCMS
    const blogs: Blog[] = await getBlogs()

    // fetch tags from microCMS
    const tags: Tag[] = await getTags()

  return (
    <PageTransitionAnimation>
        <div className='h-full'>
            <Navigation
                path='Blogs'
            />
            <section className='relative flex justify-center bg-white dark:bg-slate-800 my-20 px-6'>
                <div className='w-full h-full absolute animate-fade-in ease-in duration-[2000ms] delay-1000'>
                    <div className='absolute flex justify-center items-center w-full h-full animate-fade-in ease-in'>
                        <Image
                            src={ Coffee }
                            alt=''
                            className='-rotate-12 w-[30vw] absolute right-0 -bottom-0 lg:-bottom-10 [@media(min-width: 2160px)]:-bottom-48 -translate-x-16'
                        />
                        <Image
                            src={ Camera }
                            alt=''
                            className='rotate-6 w-[30vw] lg:w-[25vw] absolute left-0 -top-16 translate-x-16 animate-fade-in'
                        />
                        <span className='animate-fade-in rotate-12 bg-pink-300 rounded-xl h-72 w-40 lg:w-52 absolute -top-16 right-0 translate-x-36 transform hover:translate-x-28 duration-300'></span>
                        <span className='animate-fade-in rotate-12 bg-sky-300 rounded-xl h-72 w-40 lg:w-52 absolute -bottom-28 left-0 -translate-x-36 transform hover:-translate-x-28 duration-300'></span>
                    </div>
                </div>
                <div className='relative inline-block text-center my-60 md:my-48 xl:my-64 animate-fade-in ease-out duration-500 delay-300'>
                    <div className='animate-flip-in ease-out duration-[1500ms]'>
                        <h1 className='mb-4 font-extrabold text-2xl md:text-4xl animate-fade-in'>
                            <span className='text-amber-300 hover:text-amber-400 duration-300'>What</span> is <span className='text-purple-300 hover:text-purple-400 duration-300'>new</span>?
                        </h1>
                        <h4 className='text-lg font-semibold'>
                            Latest updates from a corner of the world
                        </h4>
                        <span className='absolute bg-black w-48 h-1 left-1/2 bottom-0 animate-scale-in-center'></span>
                        <span className='absolute bg-black w-48 h-1 right-1/2 bottom-0 animate-scale-in-center'></span>
                    </div>
                </div>
            </section>
            <div className='flex justify-center'>
                <div className='relative inline-block'>
                    <div className='flex'>                        
                        <Image
                            src={ Cocktail }
                            alt=''
                            width={ 70 }
                            className=''
                        />
                        <h1 className='text-center text-6xl font-extrabold opacity-95 hover:opacity-100 py-10 whitespace-nowrap overflow-hidden animate-appear-gradually'>
                            Blogs
                        </h1>
                    </div>
                <span className='absolute bg-black h-2 w-16 bottom-5 inset-x-1/2 animate-scale-in-center'></span>
            </div>
            </div>
            <div className='mx-20 block lg:hidden'>
                <div className='bg-white hover:shadow-md rounded-md px-16 py-5 space-y-3'>
                    <h2 className='text-center font-medium'>🏷️Tags</h2>
                    <div className='grid grid-cols-2 lg:grid-cols-3 gap-3'>                    
                        { tags.map((tag) => (
                            <div
                                key={ tag.id }
                            >
                                <TagButton
                                    name={ tag.name }
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div
                className='grid xl:grid-cols-3 md:grid-cols-2 gap-5 mx-10 py-10 lg:max-w-3xl xl:max-w-4xl'
            >
                <ul >
                    { blogs.map((blog) => (
                        <li
                            key={ blog.id }
                        >
                            <BlogCard
                                blogId={ blog.id }
                                thumbnail={ blog.thumbnail }
                                title={ blog.title }
                                tags={ blog.tags }
                                publishedAt={ blog.publishedAt }
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </PageTransitionAnimation>
  )
}
