import React from 'react'
import Stacks from '@/public/Stacks.jpg'
import Frontend from '@/public/Frontend.jpg'
import Backend from '@/public/Backend.jpg'
import Design from '@/public/Design.jpg'
import Image from 'next/image'
import Engineering from '@/public/Engineering.svg'
import { PageTransitionAnimation } from '@/utils/PageTransitionAnimation'
import { Navigation } from '@/components/Navigation'
import { ScrollReveal } from '@/utils/ScrollReveal'


export default function page() {

    const DesignData = [
        {
            title: 'Figma',
            src: 'https://s3-alpha.figma.com/hub/file/3152337111/0e0f44e4-8de2-49c9-b8f0-406ece8fd1b6-cover.png',
            link: 'https://www.figma.com/'
        },
        {
            title: 'Photoshop',
            src: 'https://seeklogo.com/images/A/adobe-photoshop-logo-7B88D7B5AA-seeklogo.com.png',
            link: 'https://www.adobe.com/products/photoshop.html'
        },
    ]

    const FrontData = [
        {
            title: 'Typescript',
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png',
            link: 'https://www.typescriptlang.org/'
        },
        {
            title: 'Nextjs',
            src: 'https://cdn.icon-icons.com/icons2/2148/PNG/512/nextjs_icon_132160.png',
            link: 'https://nextjs.org/'
        },
        {
            title: 'Reactjs',
            src: 'https://repository-images.githubusercontent.com/410214337/070f2aba-d9d6-4699-b887-9a0f29015b1b',
            link: 'https://react.dev/'
        },    
        {
            title: 'TailwindCSS',
            src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOIAAADfCAMAAADcKv+WAAAA1VBMVEUWHS0WvssVHi0XHSwVHi4WvsoYHC0WHS8XvcwWvskWHisWHCwWvc0YHC8UHy0ZHC0QFCMXGCkieYUkvMcSESUUEiMhipcrtMEQEycouccNIS8rnqwWHTEVGCYnk54VHyoKKDkQO0scYm0WTVkPM0EVQU8LGi4PCyMIEyYJIDILECMkmKcrrbsIHC0JDh0VUmEif4wQDikfbHgIJzIPND0URlkUUlwaYHINLD8lrLUiT18IHzUcW2wVFiAos8UOFi0OABklkKMdcHofhI0iOUkNO0MXUWTrtrP8AAAMM0lEQVR4nO2cC1fbOhKAbckvyY9Yfjuu47xJHNOk6aUhvZRu293+/5+0IwO90IVgh3tNOKvvlJTD4RBNZkbz0MiSJBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoHg/wpd0THGlFIdXhB8KymKgl97VX8j+jtdlxDSMNZs08Sa42CJIkWRJPTaS/u7wBpjYXB2tlicL4fL8/miLMOQ5ViTzNde2t+CxoKz+WzsRausiuPYh68qG0TeeHb+3mW9117eS8C6ojgFOzufeFmcyob8G4Z1nXmT+XtGsVYb7dvDwZoWLtZRTFRCiPW7hLWUsnEdrRehCU762ss9Bp2FQy+WDdUArP9VomHUX4TEm+kH6rz2co/ATKabaxCFqCCJrD6mw1psIsuWP5glDL+l3RVJNmbLbfyYbT4OSaNpALGyR1977Q3RNJRMKqPWUCMsbq7bfk4d+7XX3ghkamix9S0V1t1URPhli2QXAX0bWkRm/nFgGAT+PeaBj9pp/Vmo/vZrcfpJHYI8Lfgjayrbb5Kq0RB2ndMOkRSsNJxVjwbBBoCxjoLi1ENkL//jaAm5IuOL4LRDpO6Y0+wlEspW/Cnkyd9rS/IkOj5fHeeHd1iWf1XqxQmnAYGnvkxEAjLuAny6wSMYpy8w01pESOus3Vmrd+2s6NR1xC73N9Ge59dynZmqauMEoMaChJ0Y4zNsNvFHJOlIsYf/uGx3YPz1BzFuSwoQ7eY/qAvbatKS011iNvFH9M7ByefPZkcJAy7yiQ9CcRm5AsHg4NWCl1ZqlOsSxN+FjdatF2yULbuyVEzPM9m4NUuQzYjjal9dp+kjxeJhoIBWQY9N3rPHPlZRgLranYIrcpttErmKdrPhvCzLxXB05WUpSExa7LXwSaXjhLfsDogHcinsz8y4yrtqV+J+Bg4Idmqlg09L90sOO4YJsOAsmW4h5Wm37Rjp2O0ph5I5WynYMlOvP9pdRdFwrMoquJ4fzRJXk/Bdk9TWaEHdP7dVq30H9mTf+5ofUg+i4WUmW1GpO93IaM4hc4MNP1snTKKaAsWtw7NNTJGk6Tp2Lz2/hR4J3642ffb0G2IaTDPVktdgpx3ke9hG+cy3iJx6/RAipC4pv96VyyjBD8xkXbUxVe6Rq1GIKVX0B82Auslj27T8uVcNsv/ajSOCiG5ELKNau09t4DaiyTSTjRa7K1h9PC4Z6OjBtqNJyHFwMPzh8+jkBV0ICCJKdBkbRjZKntwDdUQp60ctlAjx1CJ+ND1jWLlviWD+ZjjfVUS1VJIOOwqKmvNlTaxsmmP9qZodg0NSe75pIyNEV9m43owCl90TxGFu/yqru1+WHJVdbaf6l4GcXR7YHGqw4iw2VhtbrYkHu2kZhCFjeRgEwWLm7eGnBs8N05HZkYh6MU/3l+xQpOaAF6HSaykgd18rraLv4/Vkvd55g70v1+GHp4pR0FlbMl/H07x4rszjgVwJPKtlSWkRQuqipW7qWXdblgGeOmXvOtIiXmwukoI6z2gR1V+l107Em14l4ac/YJuwCRl1KghfxEsc2pGISP+8aBiesGT+61aPbX3yd9Rs3t0RLNLmWsNPE7Z/84y3P17YAQHSSf7PivUA/JyNPuTMe7EKwQi2boctngcZ2/NgKfxuvFjIwflJn6LjYAvpV51sH6dByPeHpn7CvUjwx+AqNay24eMvrGrEiidTqdOg+PKzIsaxMpL9LKH4tLUIJWUyyohxpIjVJFEk5WBT4BTAbBi1dUVi8NxUrmaJdPonkQDO59sYsvI2TR2efJPBJXs2WTwRlF4wGpB2mlQtf7sosNZZT+plYElhi11V98wPl1jGrXiQg69mrmlj7LwNLUp8MiDhA0h1N+qAkIas8mzcItXV/Lmq9NTQJUrdobd/ZvSB8PMcS92Pl8FJpzSPgSmyEQ2Xu+ygT1pQRKWDT4swp13VwAhJGqJS7RAIKaAKiiUK60WItxjrX2gGxG9Hl0z2frpdxTenWffmydS7b9PVbhiEWLI7m9LFAMI9/Z2tmTQPWI0JcmLEX474i1rPLf9ce4MqNcjtQY8BGR6QVgPv8zz40nEghLBEe4wlbr8/HM0m65/r9WQ2mg6XiyDQTK7Cli6D+Okdzt2gHM4+jb9vNlEU/fix8cbr0TIp3dzsPh1loftxNvYGWeXf7HiWrPppvF9tdrNlmCPziHpcU5BmS+aXPATcMAzOgiDMsSPZCrhFZwaKePcdJ4vRdnDXvie/WhQqH8skfvVtNzp3QZe2pDTNs7gEGNfD/1gzwUPNugoFNJ23+LvLuE0dNpbycrzynyyECCEG8Ve7acL4Kk+73nkERPNyBFGMHGgu8WYgqDaOZknyRjLJ+5juNIrrsQrrUPLMT4SJmg4ugrd1SwFchS2/8wk3Q23QPuO/wYeFuUO+FXr22Swjrc6zDXm/nbO3Y6zmgo97tzl0UfkYzmoUvgkZMZewrtFbDSXwGRUjvirfgkdSh81XR463Ed97TxWqn/gdMJ2dZ9ajty2eVaSlEjJYMNThON5R4MVKroe+2sOPTNVsaCLppPtlZvmNh4qjWoI3x4LVND9hO0W6k3jy4xe7mnM9cyHPRI2NFXWWd9fvFqx9or5QRDmelFqv8ZbT0UDULQqbVn+V38dC1OuJ28obuxQyGfBR37ZTpb9hEaOVjOiPfkc7sI6KZPwro4FQrtbtBiLX1xLb7LAqt1XXbuCPlM9gj7x5JwLyawl0ub/JqXmmwgMAH54A1zxCs2o8CRr4o4ILOszGXfVLFRpseQ9aro8tib/PvkWbTcQbGqTxta87CNfj800dvTDnUTzqSkTdvKz4UUldGmXe5HKeBEEQlslwthvEN7lAY3M1uIyhztsUT/U7MOhYo1838mrRVaZAA6+2UHCk6MIJmXbrSKbGEne6zXibvpU243VgIt1+chrQtqXe+Q/L2iZd1Sd0WBHC54GjUcnYg5EFm5plfxtD9tKq/EivQlo8ecBrIwdKGvgkpl3dm8Lh2CCWpe4nYc6N6/7bUkdXcDCNiNxuIjrdftCKJ9v2RfLnilhk8N7pREQk4fOMp6abZajrGn74gAFd56ow3XGbgWjwR8uI5rmt20pxb29VFF3is1747KKyDOJ/6mhqCJlsYlhQ0x5yfZTMqja3ajnVxRmWFA12lrs/zJuRDmYuH1iFHbyaY60bQ8XlxpL9SXDocg8qwiW/g9JCQn4NYFgWkIeiu/uYtEB2Hi7GFT9mswhsNt00tbDZr+T96JmZzx7UywNw2BYiqqrlb6ZnLuvdDpaZuBcky3FVX0IiRjU0u+l/Y5x/UuNZiJB9yGh0RHG54ktvrEk+cqn62ffZEsKs65ZJMr+sn8ZhqHVyuC3BTrs4iXK0cJOum6TOurmAbbCVsXJBLTnOBtHGg2zpblS4VnI17+4Eo59dBU9G6XtgB4Ottgoev+Spp2ll+X6xNg676i5r+sX3stkUVqHU/thWPqO+LaZyu703zJAtOmu86ujf/Wa3H/X6pvSgXnUbEfnBwcNgoxLD/093Mxm9v/b0Buhm/5t6O7f9EtTtew11lYL3WpXdWMn730jrSxi/YZDBV63NJ9sphWL2o6O2nHuQakgldKIy8tCpzTfGcU3zWjz4eNKL4HSfzMBB+Yfvx3eyIEFKf7JTfwwVQl93/rHGasjGOKAn/rw0h2LNXcfH9iPTsUuld6c/S0uTSyg8VKu5ufLjIKjGSPyzy4sXLwAVvXLLB1PU5m0r/kKyy6A4cT+8Bap5Go4yPn7TWI2gcN9b5LR499qrbwTVEDXNcnzd+DgSfs1ajQIKSWDx2qtvjC7hsM+HhS1Lffr5E5CP8uejwUdRjcu3NivMMYPh98qHCvfgsZ1hWX62m4enfUj+BBo1P8yhlOfPnTwgYrVZLxL67rRTmifg50taXg7Xmyq+e77PA+mIGmebq2HIkC69SQnvMPNgPhp737LqOvVvTuwMI42r/cC7ms0DdvqBvgHYpHnozofT0WS9vhpfrX9OZtPhPAlz3Pxg/KTRdRsCiYMppjljCWMsZEwz4YcFfSOPmXwODE5JETgmHxjGfAhXUXTeBce3Y8Nv44KXQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCwQ3/BR6E4PULgAWnAAAAAElFTkSuQmCC',
            link: 'https://tailwindcss.com/'
        }
    ]

    const BackData = [
        {
            title: 'Ruby on Rails',
            src: 'https://avatars.githubusercontent.com/u/4223',
            link: 'https://rubyonrails.org/'
        },
        {
            title: 'Golang',
            src: 'https://pbs.twimg.com/profile_images/1142154201444823041/O6AczwfV_400x400.png',
            link: 'https://go.dev/'
        },
        {
            title: 'Nestjs',
            src: 'https://pbs.twimg.com/profile_images/1110148780991623201/vlqCsAVP_400x400.png',
            link: 'https://nestjs.com/'
        },
        {
            title: 'FastAPI',
            src: 'https://gitlab.com/uploads/-/system/project/avatar/42941426/fastapi.png',
            link: 'https://fastapi.tiangolo.com/'
        }
    ]

  return (
    <PageTransitionAnimation>
        <div className='h-full'>
            <Navigation
                path='Stacks'
            />
            <div className='flex justify-center'>
                <div className='relative inline-block'>
                    <div className='flex'>
                        <Image
                            src={ Engineering }
                            alt=''
                            width={ 70 }
                            className='animate-engineering'
                        />
                        <h1 className='text-center text-6xl font-extrabold opacity-95 hover:opacity-100 py-10 whitespace-nowrap overflow-hidden animate-appear-gradually'>
                            Stacks
                        </h1>
                    </div>
                    <span className='absolute bg-black h-2 w-16 bottom-5 inset-x-1/2'></span>
                </div>
            </div>
            <div className='text-center font-mono font-bold pb-2'>
                <p>Following are the lists of stacks that I like to develop my service and work with!</p>
            </div>
            <div className='flex justify-center border[1px]'>
                <Image
                    src={ Stacks }
                    alt=''
                    className='w-1/2 rounded-lg'
                />            
            </div>
            <div className='mx-5 lg:mx-20 xl:mx-40 my-10'>
                <div className='overflow-hidden'>
                    <div className='relative'>
                        <span className='p-2 font-bold font-mono text-xl inline-block hover:scale-105 duration-500'>Design🎨</span>
                        <span className='absolute -bottom-0 left-0 h-0.5 w-full bg-red-500'></span>
                    </div>
                    <div className='relative flex justify-between sm:justify-around pl-2 mt-3'>
                        <div className='py-10'>
                            { DesignData.map((value, key) => {
                                return (
                                    <div key={ key } className='mt-6 sm:mt-10 md:mt-18'>
                                        <span className='text-center px-4 py-3 w-full hover:bg-gray-100 rounded-full font-mono font-semibold inline-block hover:opacity-75 hover:scale-95 duration-300'>{ value.title }</span>
                                    </div>
                                )
                            })}
                        </div>
                        <ScrollReveal>
                            <Image
                                src={ Design }
                                alt=''
                                className='w-40 sm:w-52 md:w-80 rounded hover:rounded-none duration-300'
                            />
                        </ScrollReveal>
                        <span className='absolute box-border z-10 -bottom-40 -left-36 bg-cyan-400 w-60 h-96 rotate-[135deg] -translate-x-40'></span>
                    </div>                
                </div>
                <div className='overflow-hidden'>
                    <div className='relative flex justify-end'>
                        <span className='p-2 font-bold font-mono text-xl inline-block hover:scale-105 duration-500'>💄Front End</span>
                        <span className='absolute -bottom-0 left-0 h-0.5 w-full bg-sky-800'></span>
                    </div>
                    <div className='relative flex justify-between sm:justify-around py-1'>
                        <ScrollReveal>
                            <Image
                                src={ Frontend }
                                alt=''
                                className='mt-5 w-40 sm:w-52 md:w-80 rounded hover:rounded-none duration-300'
                            />
                        </ScrollReveal>
                        <div className='py-4'>
                            { FrontData.map((value, key) => {
                                return (
                                    <div key={ key } className=' md:py-4'>
                                        <span className='text-center px-5 py-2 w-full hover:bg-gray-100 rounded-full font-mono font-semibold inline-block hover:opacity-75 hover:scale-95 duration-300'>{ value.title }</span>
                                    </div>
                                )
                            })}
                        </div>
                        <span className='absolute box-border z-10 -bottom-40 -right-36 bg-green-300 w-60 h-96 rotate-45 translate-x-40 duration-300'></span>
                    </div>
                </div>
                <div className='overflow-hidden'>
                    <div className='relative'>
                        <span className='p-2 font-bold font-mono text-xl inline-block hover:scale-105 duration-500'>Back End🚀</span>
                        <span className='absolute -bottom-0 left-0 h-0.5 w-full bg-purple-500'></span>
                    </div>
                    <div className='relative flex justify-between sm:justify-around'>
                        <div className='py-4'>
                            { BackData.map((value, key) => {
                                return (
                                    <div key={ key } className='md:py-4'>
                                        <span className='text-center px-5 py-2 w-full hover:bg-gray-100 rounded-full font-mono font-semibold inline-block hover:opacity-75 hover:scale-95 duration-300'>{ value.title }</span>
                                    </div>
                                )
                            })}
                        </div>
                        <ScrollReveal>
                            <Image
                                src={ Backend }
                                alt=''
                                className='mt-5 w-40 sm:w-52 md:w-80 rounded hover:rounded-none duration-300'
                            />
                        </ScrollReveal>
                        <span className='absolute box-border z-10 -bottom-40 -left-36 bg-violet-400 w-60 h-96 rotate-[135deg] -translate-x-40 duration-300'></span>                    
                    </div>
                </div>
            </div>
        </div>
    </PageTransitionAnimation>
  )
}
