import type { Metadata } from 'next'
import Header from './_components/Header'
import Footer from './_components/Footer'
import Contact from './_components/Contact'
import './globals.css'

import { Doppio_One } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Nursultan Mamatov',
  description: 'Software Engineer freelancer/contractor',
}

const doppino = Doppio_One({ weight: '400' })

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang='en' className={doppino.className}>
      <body>
        <div className='flex flex-col min-h-screen'>
          <Header />
          <main className='min-h-[50vh] grow w-[stretch]'>{children}</main>
          <Contact />
          <Footer />
        </div>
      </body>
    </html>
  )
}
