import { Tag } from '@/utils/types/Tag'
import React from 'react'
import { TagButton } from './TagButton'
import Link from 'next/link'
import Image from 'next/image'

type BlogCardProps = {
    blogId: string,
    thumbnail: {
        url: string,
        width: number,
        height: number
    }
    title: string,
    tags: Tag[],
    publishedAt: string,
}

export function BlogCard(props: BlogCardProps) {

    const { blogId, thumbnail, title, tags, publishedAt } = props

  return (
    <div className='max-w-lg mx-auto'>
        <div className='bg-white hover:bg-teal-50 hover:shadow-xl border border-gray-200 rounded-lg hover:rounded-none duration-300 max-w-sm opacity-90 hover:opacity-100'>
            <Image
                src={ thumbnail.url }
                alt=''                
                className='rounded-t-lg overflow-hidden'
            />
            <div className='p-5'>
                <h5 className='text-gray-900 font-bold text-xl tracking-tight mb-5'>
                    { title }
                </h5>
                <ul className='inline-flex gap-2'>
                    <p>🏷️</p>
                    { tags.map((tag) => (
                        <li 
                            key={ tag.id }                            
                        >
                            <TagButton
                              name={ tag.name }
                            />
                        </li>
                    ))}
                </ul>
                <div className='flex gap-3 py-2 text-sm font-light text-gray-800'>
                    <p>🕒</p>
                    { new Date(publishedAt).toLocaleDateString('ja-JP') }
                </div>
                <Link
                  href={`/blog/${ blogId }`}
                >              
                  <button
                      className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center mt-2 hover:scale-105 duration-300'                    
                  >
                      Read more
                  </button>
                </Link>
            </div>
        </div>
    </div>
  )
}
