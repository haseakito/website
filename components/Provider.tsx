'use client'

import React, { ReactElement } from 'react'
import { ThemeProvider } from 'next-themes'

export function Provider({ children } : { children: ReactElement }) {
  return (
    <ThemeProvider
      defaultTheme='system'
      enableSystem
    >
      { children }
    </ThemeProvider>
  )
}
