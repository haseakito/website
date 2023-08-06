'use client'

import { contactFormSchema } from '@/utils/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';

type ContactFormProps = {
    lastName: string,
    firstName: string,
    email: string,
    details: string,
}

export function ContactForm() {

    // Initialize configs for react hook form
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<ContactFormProps>({
        mode: 'onChange',
        resolver: zodResolver(contactFormSchema)
    })

    // Function handling submitting the user input data
    const onSubmit: SubmitHandler<ContactFormProps> = async (e) => {
        
        console.log(e)
        
        // define the data structure to be sent
        const data = {
            name: e.lastName + '' + e.firstName,
            email: e.email,
            details: e.details
        }

        // call the api to send an email
        await fetch('/api/contact', {
            method: 'POST',
            headers: {
                Accept: "application/json, text/plain",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((res) => {
            if ( res.status === 200) {
                console.log('success!')
            }
        }).catch((error) => {
            console.log(error)
        })

    }


  return (
    <div className=''>
        <form
            onSubmit={handleSubmit(onSubmit)}
            className='bg-white border-[1px] shadow-sm hover:shadow-lg duration-300 px-24 py-8'
        >
            <h2
                className='text-center block sm:text-xl font-mono sm:font-semibold pb-4'
            >
               Let me know you!🔎
            </h2>
            <div className='grid lg:grid-cols-2 lg:gap-6'>
                <div className='relative z-0 w-full gap-6 mb-6'>
                    <input
                        type='text'
                        placeholder=''
                        className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                        {...register('lastName')}
                    />
                    <label
                        className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8'
                    >
                        Last Name
                    </label>
                    { errors.lastName?.message && <p className='lg:text-xs text-sm text-red-300 text-center pt-2'>{ errors.lastName.message }</p> }
                </div>
                <div className='relative z-0 w-full mb-6'>
                    <input
                        type='text'
                        placeholder=''
                        className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                        {...register('firstName')}
                    />
                    <label
                        className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8'
                    >
                        First Name
                    </label>
                    { errors.firstName?.message && <p className='lg:text-xs text-sm text-red-300 text-center pt-2'>{ errors.firstName.message }</p> }
                </div>                
            </div>
                <div className='relative z-0 w-full mb-6'>
                    <input
                        type='text'
                        placeholder=''
                        className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                        {...register('email')}
                    />
                    <label
                        className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8'
                    >
                        Email
                    </label>
                </div>
                { errors.email?.message && <p className='lg:text-xs text-sm text-red-300 text-center pt-2'>{ errors.email.message }</p> }
                <div>
                    <label
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                        Contact Details
                    </label>
                    <textarea
                        rows={5}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="お問い合わせ内容をご記入ください。"
                        {...register('details')}   
                    >
                    </textarea>             
                </div>
                { errors.details?.message && <p className='lg:text-xs text-sm text-red-300 text-center pt-2'>{ errors.details.message }</p> }
                <div className='flex justify-center mt-7'>
                    <button
                        type='submit'
                        className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800'
                        >
                        <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                            Submit
                        </span>
                    </button>
                </div>
        </form>
    </div>
  )
}
