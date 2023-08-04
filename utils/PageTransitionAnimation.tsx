'use client'

import React, { ReactElement } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function PageTransitionAnimation(
    { children } : { children: ReactElement} 
) {

  return (
    <AnimatePresence mode='wait'>
        { children }
        <motion.div
            className='fixed top-0 left-0 w-full h-full bg-black origin-bottom'
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: [ 0.22, 1, 0.36, 1] }}
            onAnimationStart={() => document.body.classList.add('overflow-hidden')}
            onAnimationComplete={() => document.body.classList.remove('overflow-hidden')}
        />
        <motion.div
            className='fixed top-0 left-0 w-full h-full bg-black origin-top'
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 1.5, delay:0.5, ease: [ 0.22, 1, 0.36, 1] }}
            onAnimationStart={() => document.body.classList.add('overflow-hidden')}
            onAnimationComplete={() => document.body.classList.remove('overflow-hidden')}
        />
    </AnimatePresence>
    )
}
