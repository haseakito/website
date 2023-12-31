'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { useTheme } from 'next-themes'
import { MdMenu, MdClose } from 'react-icons/md'
import { FaHome, FaSun, FaMoon } from 'react-icons/fa'
import { usePathname, useRouter } from 'next/navigation'


export function Header() {

    // Hooks handling the light and dark mode
    const { theme, setTheme } = useTheme() 

    // Hooks handling the routing
    const router = useRouter()

    // Hooks handling the routing path name
    const path = usePathname()    

    // Boolean state handling the navigation bar
    const [ menuOpen, setMenuOpen ] = useState(false)

    const HeaderData = [
        {
            title : "About",
            link : "/about",
            color: 'text-blue-500'
        },
        {
            title : "Products",
            link : "/products",
            color: 'text-indigo-500'
        },
        {
            title : "Stacks",
            link : "/stacks",
            color: 'text-green-500'
        },
        {
            title : "Blog",
            link : "/blog",
            color: 'text-rose-500'
        },
    ]

    console.log(theme)

  return (
    <header>
        <div className='shadow-lg border-b-[1px]'>
            <div className='flex justify-between p-5'>               
                {
                    theme == 'light' ?
                    <button
                        className='opacity-80 hover:opacity-100'
                        onClick={() => setTheme('dark')}
                    >
                        <FaMoon
                            size={ 30 }                           
                        />                    
                    </button>
                    :
                    <button
                        onClick={() => setTheme('light')}
                    >
                        <FaSun 
                            size={ 30 }                        
                        />
                    </button>
                }
                <ul className='hidden lg:flex'>                
                    { HeaderData.map((value, key) => (
                        <li
                            key={ key }
                            className='group relative inline-block'
                        >
                            <Link
                                href={ value.link }                                
                            >
                                <div
                                    className={ 
                                        `${ value.link === path ? 
                                        `font-extrabold ${ value.color }`
                                        : 
                                        "font-bold"}
                                        block py-3 mx-4 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 dark:text-white hover:opacity-80`
                                    }
                                >
                                    { value.title }
                                </div>
                                <span className='h-1 absolute -bottom-0 left-1/2 w-0 bg-black dark:bg-white transition-all duration-500 group-hover:w-1/3'></span>
                                <span className='h-1 absolute -bottom-0 right-1/2 w-0 bg-black dark:bg-white transition-all duration-500 group-hover:w-1/3'></span>
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link
                            href='/contact'
                            className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'>
                            <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                                Contact                            
                            </span>
                        </Link>
                    </li>
                </ul>
                <div className='block lg:hidden'>
                    <button
                        className='hover:shadow-sm rounded focus:ring-2 ring-gray-200 opacity-90 hover:opacity-100'
                        onClick={() => setMenuOpen(true)}
                    >
                        <MdMenu
                            size={ 40 }
                            color='black'
                        />
                    </button>
                </div>
            </div>
            <div className={
                menuOpen ?
                'lg:hidden fixed z-50 inset-0 duration-700 bg-gray-100 px-4 py-5'
                :
                'lg:hidden fixed z-50 inset-0 translate-y-full duration-700 bg-gray-100 px-4 py-5'
            }>
                <div className='flex justify-end p-4'>
                    <button
                        className='hover:shadow-sm rounded focus:ring-2 ring-gray-200 opacity-90 hover:opacity-100'
                        onClick={() => setMenuOpen(false)}
                    >
                        <MdClose
                            size={ 40 }
                        />
                    </button>
                </div>
                <div className='flex justify-center py-4'>
                    <ul>
                        { HeaderData.map((value, key) => (
                            <li
                                key={ key }
                            >
                                <Link
                                    href={ value.link }
                                    onClick={() => setMenuOpen(!menuOpen)}
                                >
                                    <div
                                        className='text-4xl font-bold py-10 px-20 rounded hover:bg-gray-50 opacity-90 hover:opacity-100 hover:scale-110 duration-300'
                                    >
                                        { value.title }
                                    </div>
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link
                                href='/contact'                                            
                                onClick={() => setMenuOpen(!menuOpen)}  
                            >
                                <div className='text-4xl font-bold py-10 px-20 rounded-lg hover:bg-gray-50 opacity-90 hover:opacity-100 hover:scale-110 duration-300'>
                                    Contact
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
  )
}
