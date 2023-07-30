import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Provider } from '@/components/Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Welcome',
  description: 'Welcome to my official website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <div className='h-full'>
            <Header />
            <main>{children}</main>
            <Footer />          
          </div>
        </Provider>
      </body>
    </html>
  )
}
