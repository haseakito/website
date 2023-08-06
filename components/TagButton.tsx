import React from 'react'

type TagButtonProps = {
    name: string
}

export function TagButton(props: TagButtonProps) {

    const { name } = props

  return (
    <div
        className='rounded-lg text-center bg-gray-100 px-2 py-1 text-sm hover:font-medium hover:scale-95 duration-300 hover:bg-gray-200'
    >
        { name }
    </div>
  )
}
