import { BlogCard } from '@/components/BlogCard'
import { Navigation } from '@/components/Navigation'
import { TagButton } from '@/components/TagButton'
import { client } from '@/libs/client'
import { PageTransitionAnimation } from '@/utils/PageTransitionAnimation'
import { Blog } from '@/utils/types/Blog'
import { Tag } from '@/utils/types/Tag'
import React from 'react'

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
        <div className='h-screen'>
        <div className='relative'>
            <Navigation
                path='Blogs'
            />
            <h1 className='text-center text-6xl font-extrabold opacity-95 hover:opacity-100 py-10'>
                Blogs
            </h1>
            <span className='absolute bg-black h-2 w-10 left-2/4 bottom-5 animate-scale-in-center'></span>
            <span className='absolute bg-black h-2 w-10 right-1/2 bottom-5 animate-scale-in-center'></span>
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
