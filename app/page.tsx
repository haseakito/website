import { client } from '@/libs/client'
import Work from '@/public/Work.jpg'
import Frontend from '@/public/Frontend.jpg'
import Backend from '@/public/Backend.jpg'
import Design from '@/public/Design.jpg'
import Image from 'next/image'
import { ProfileCard } from '@/components/ProfileCard'

// Function handling fetching latest blogs from microCMS
async function getBlogs() {
  const data = await client.get({
    endpoint: 'blogs/',
    queries: {
      limit: 6
    }
  })

  return data.contents
}

export default function Home() {

  const ProfileCardData = [
    {
      src: Frontend,
      title: 'Frontend development',
      description: 'With Nextjs, React, Typescript, I revolutionize the user interfaces and greatly improve the user experience!'
    },
    {
      src: Backend,
      title: 'Backend development',
      description: 'I develop the insanely fast, ready to scale, and easy to maintaine APIs with FastAPI, Golang, and Typescript!'
    },
    {
      src: Design,
      title: 'Design',
      description: 'I love to design the user interface to improve the user experiences and fulfill their hidden dreams!'
    }
  ] 

  return (
    <div>
      <div className='py-10 space-y-3'>
        <h1 className='text-center text-6xl font-extrabold opacity-95 hover:opacity-100'>
          Welcome!
        </h1>
        <p className='text-center text-lg font-medium animate-fade-in'>
          Glad you found me!
        </p>
      </div>
      <div
        className='relative group/bg bg-gradient-to-r from-cyan-200 to-cyan-400'
      >
        <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover/bg:animate-shine" />
        <div className='flex justify-center lg:justify-around'>
          <div className='py-28 px-10 sm:p-20'>
            <h2 className='flex font-semibold text-sm md:text-lg mb-5'>
              Hello! <span className='pl-1 animate-waving-hand'>👋</span>, I AM AKITO HASRGAWA!
            </h2>
            <div className='group relative inline-block md:p-4 p-2'>
              <span className='font-extrabold text-2xl md:text-3xl lg:text-4xl xl:text-5xl inline-block hover:scale-105 duration-700'>I AM A FRONT END DEVELOPER</span>
              <span className='hidden xl:block h-2 absolute -bottom-0 left-1/2 w-0 bg-black transition-all duration-500 group-hover:w-1/2'></span>
              <span className='hidden xl:block h-2 absolute -bottom-0 right-1/2 w-0 bg-black transition-all duration-500 group-hover:w-1/2'></span>
            </div>
            <div className='p-2 mt-5 font-medium space-y-2'>
              <p>
                I design and develop the better user ecperiences! 
              </p>
              <p>
                I love coding and making the best of technology!
              </p>              
              <p>
                I have a year of working experince in frontend development,
              </p>
              <p>
                backend development, building infrastructure on AWS and GCP
              </p>
            </div>
          </div>
          <div className='hidden lg:block p-2 mt-5'>
            <Image
              src={ Work }
              alt=''
              width={ 450 }
              className='rounded hover:rounded-none duration-300 shadow-md hover:shadow-xl'
            />
          </div>
        </div>
      </div>
      <div className='py-8'>
        <h2 className='text-center text-5xl font-extrabold py-5 opacity-95 hover:opacity-100'>
          Services
        </h2>
        <div
          className='lg:flex justify-center gap-10'
        >
          { ProfileCardData.map((value, key) => (
            <div
              key={ key }
              className='relative group overflow-hidden py-3 lg:py-0 flex justify-center'
            >
              <ProfileCard
                src={ value.src }
                title={ value.title }
                description={ value.description }
              />              
            </div>  
          ))}
        </div>  
      </div>      
    </div>
  )
}
