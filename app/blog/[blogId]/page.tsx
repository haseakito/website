import React from 'react'
import { Navigation } from '@/components/Navigation'
import { client } from '@/libs/client'
import { Blog } from '@/utils/types/Blog'
import styles from '../../styles/Blog.module.scss'

async function getBlog(blogId: string) {
    const data = await client.get({
        endpoint: "blogs",
        contentId: blogId
    })    

    return data
}

type BlogProps = {
    blogId: string
}

export default async function page({ params } : { params: { blogId: string } }) {

    // fetch a specific blog from microCMS
    const blog: Blog = await getBlog( params.blogId )

  return (
    <div className='h-full'>
        <Navigation
            path='Blog'
        />
        <h1 className='text-center text-6xl font-extrabold opacity-95 hover:opacity-100 py-10'>
            📄Blog
        </h1>
        <div className='p-10'>
            <h1 className='text-center text-4xl font-bold mb-5'>
                { blog.title }
            </h1>
            <div className='flex justify-end mb-10 gap-2 text-sm'>
                <p>🕒更新日:</p>
                { new Date(blog.publishedAt).toLocaleDateString('ja-JP') }
            </div>
            <div className='p-10'>
                <div
                    dangerouslySetInnerHTML={{ __html: `${ blog.body }`}}
                    className={ styles.post }
                />
            </div>
        </div>
    </div>
  )
}
