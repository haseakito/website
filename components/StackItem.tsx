import React from 'react'

type StackItemProps = {
    title: string,
    src: string,
    link: string
}

export function StackItem(props: StackItemProps) {

    const { title, src, link } = props

  return (
    <a href={ link } target='_blank' rel='noreferrer'>
        <div className='group/title relative inline-block opacity-80 hover:opacity-100 py-2 cursor-pointer'>
        <img
            src={ src } 
            alt={ title }
            width={ 120 }
            className='rounded-full my-2 hover:scale-110 transition ease-in-out duration-300 border-none hover:shadow-lg'
        />
            <span className='text-center font-semibold font-serif p-4 mx-2'>{ title }</span>
            <span className='rounded-xl h-1 absolute -bottom-0 left-1/2 w-0 bg-black transition-all duration-500 group-hover/title:w-1/3'></span>
            <span className='rounded-xl h-1 absolute -bottom-0 right-1/2 w-0 bg-black transition-all duration-500 group-hover/title:w-1/3'></span>
        </div>
    </a>
  )
}