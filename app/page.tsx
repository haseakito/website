import { client } from '@/libs/client'
import Work from '@/public/Work.jpg'
import Frontend from '@/public/Frontend.jpg'
import Backend from '@/public/Backend.jpg'
import Design from '@/public/Design.jpg'
import Image from 'next/image'
import { SkillCard } from '@/components/SkillCard'
import { PageTransitionAnimation } from '@/utils/PageTransitionAnimation'
import Juice from '@/public/Juice.svg'
import Wave from '@/public/Wave.png'
import { ScrollReveal } from '@/utils/ScrollReveal'

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
      description: 'I develop the insanely fast, ready to scale, and easy to maintaine APIs with Python, Golang, and Typescript!'
    },
    {
      src: Design,
      title: 'Design',
      description: 'I love to design the user interface to improve the user experiences and fulfill their hidden dreams!'
    }
  ] 

  return (
    <PageTransitionAnimation>
      <div>
        <section className='relative flex justify-center bg-white dark:bg-slate-800 my-16 px-6'>
            <div className='w-full h-full absolute animate-fade-in ease-in duration-[2000ms] delay-1000'>
                <div className='absolute flex justify-center items-center w-full h-full animate-fade-in ease-in'>
                    <Image
                        src={ Wave }
                        alt=''
                        className='w-[30vw] hidden md:block absolute left-0 -bottom-12 lg:-bottom-28 [@media(min-width: 2160px)]:-bottom-48 -translate-x-16 animate-slide-in-left'
                    />
                    <Image
                        src={ Wave }
                        alt=''
                        className='lg:w-[30vw] w-[35vw] hidden md:block absolute right-0 -top-0 translate-x-16 animate-slide-in-right'
                    />
                </div>
            </div>
            <div className='relative inline-block bg-white dark:bg-slate-800 text-center my-64 md:my-48 xl:my-64  animate-fade-in ease-out duration-500 delay-300'>
                <div className='animate-flip-in ease-out duration-[1500ms]'>
                    <h1 className='mb-4 font-extrabold text-2xl md:text-4xl animate-fade-in'>
                        <span className='text-violet-400 hover:text-violet-500 duration-300'>Success</span> comes with <span className='text-red-400 hover:text-red-500 duration-300'>hard work</span>
                    </h1>
                    <h4 className='text-lg font-semibold'>
                        Design the <span className='text-teal-300 hover:text-teal-400 duration-300'>future</span> with Technology
                    </h4>
                    <span className='absolute bg-black w-36 h-1 left-1/2 bottom-0 animate-scale-in-center'></span>
                    <span className='absolute bg-black w-36 h-1 right-1/2 bottom-0 animate-scale-in-center'></span>
                </div>
            </div>
        </section>
        <ScrollReveal>
          <div className='relative py-10'>
              <h1 className='text-center text-6xl font-extrabold opacity-95 hover:opacity-100 hover:rotate-2 duration-300 animate-tracking-in-expand'>
                  Welcome!
              </h1>
              <span className='absolute bg-black h-2 w-10 left-1/2 bottom-5 animate-scale-in-center'></span>
              <span className='absolute bg-black h-2 w-10 right-1/2 bottom-5 animate-scale-in-center'></span>
          </div>
        </ScrollReveal>
        <div className='relative group/bg bg-gradient-to-r from-cyan-200 to-cyan-400 mt-10 py-24'>
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover/bg:animate-shine" />
            <div className='flex justify-center lg:justify-around'>
                <div className='py-28 px-10 sm:p-20'>
                    <h2 className='flex font-semibold text-sm md:text-lg mb-5'>
                        Hello! <span className='pl-1 animate-waving-hand'>👋</span>, I AM AKITO HASRGAWA!
                    </h2>
                    <div className='group relative inline-block md:p-4 p-2'>
                        <span className='font-extrabold text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl inline-block hover:scale-105 duration-700'>I AM A FRONT END DEVELOPER</span>
                        <span className='hidden xl:block h-2 absolute -bottom-0 left-1/2 w-0 bg-black transition-all duration-500 group-hover:w-1/2'></span>
                        <span className='hidden xl:block h-2 absolute -bottom-0 right-1/2 w-0 bg-black transition-all duration-500 group-hover:w-1/2'></span>
                    </div>
                    <ScrollReveal>
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
                    </ScrollReveal>
                </div>
                <ScrollReveal>
                    <div className='hidden lg:block p-2 mt-5'>
                      <Image
                        src={ Work }
                        alt=''
                        width={ 450 }
                        className='rounded hover:rounded-none duration-300 shadow-md hover:shadow-xl animate-fade-in delay-1000'
                      />                    
                  </div>
                </ScrollReveal>
            </div>
        </div>
        <div className='py-20'>
          <ScrollReveal>
            <div className='flex justify-center'>
              <div className='relative inline-block mb-4'>
                <div className='flex'>
                  <Image
                    src={ Juice }
                    alt=''
                    width={ 70 }
                    className=''
                  />
                  <h2 className='text-center text-5xl font-extrabold py-5 opacity-95 hover:opacity-100'>
                    Services
                  </h2>
                </div>
                <span className='absolute bg-black h-2 w-16 bottom-0 inset-x-1/2 animate-scale-in-center'></span>
              </div>
            </div>
          </ScrollReveal>
          <div
            className='lg:flex justify-center gap-10'
            >
            { ProfileCardData.map((value, key) => (
              <div
                key={ key }
                className='relative group overflow-hidden py-3 lg:py-0 flex justify-center hover:scale-105 duration-150'
              >
                <SkillCard
                  src={ value.src }
                  title={ value.title }
                  description={ value.description }
                  />              
              </div>  
            ))}
          </div>  
        </div>      
      </div>
    </PageTransitionAnimation>
  )
}
