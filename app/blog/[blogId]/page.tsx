import { client } from '@/libs/client'
import { Blog } from '@/utils/types/Blog'
import React from 'react'

async function getBlog(blogId: string) {
    const data = await client.get({
        endpoint: "blogs",
        contentId: blogId
    })

    return data.contents
}

type BlogProps = {
    blogId: string
}

export default async function page(props: BlogProps) {

    const { blogId } = props

    // fetch a specific blog from microCMS
    const blog: Blog = await getBlog(blogId)

  return (
    <div className='h-screen'>
        <h1 className='text-center text-6xl font-extrabold opacity-95 hover:opacity-100 py-10'>
            📄Blog
        </h1>
    </div>
  )
}
