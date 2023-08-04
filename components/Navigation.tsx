'use client'

import React from 'react'
import Link from 'next/link'

export function Navigation({ path }: { path: string}) {

  return (
    <div className='flex gap-1'>
        <Link
            href='/'
            className='rounded-md p-2 hover:font-bold hover:underline duration-300'
        >
            Home
        </Link>
        <p className='py-2'>/</p>
        <p className='rounded-md p-2 font-medium'>
            { path }
        </p>
    </div>
  )
}
