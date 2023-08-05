'use client'

import React, { ReactElement, useEffect, useRef } from 'react'
import { motion , useInView, useAnimation} from 'framer-motion'

type ScrollRevealProps = {
    children: ReactElement,

}

export function ScrollReveal(props: ScrollRevealProps) {

    const { children } = props

    // Ref hooks
    const viewRef = useRef(null)

    // Boolean hooks handling the content being on screen
    const isInView = useInView(viewRef, { once: true })

    // Animation hooks handling manually trigerring the animation
    const mainAnimate = useAnimation()

    const subAnimate = useAnimation()

    // Lifecycle handling animation on scroll
    useEffect(() => {
        if (isInView) {
            mainAnimate.start('reveal')
        }
    }, [isInView, mainAnimate])

  return (
    <div ref={ viewRef } className='relative w-fit overflow-hidden'>
        <motion.div
            initial='hidden'
            animate={ mainAnimate }
            transition={{ duration: 1.5, delay: 1 }}
            variants={{
                hidden: { opacity: 0, y: 75 },
                reveal: { opacity: 1, y: 0 }
            }}
        >
            { children }      
        </motion.div>
        <motion.div
            variants={{
                hidden: { left: 0},
                reveal: { left: "100%" }
            }}
            initial="hidden"
            animate={ subAnimate }
            transition={{ duration: 0.5, ease: "easeIn" }}
            style={{
                position: "absolute",
                top: 4,
                bottom: 4,
                left: 0,
                right: 0,                
                zIndex: 20
            }}
        />
    </div>
  )
}
