import type { Metadata } from 'next'
import Header from './_components/Header'
import Footer from './_components/Footer'
import Contact from './_components/Contact'
import './globals.css'

import { Doppio_One } from 'next/font/google'

import { Analytics } from '@vercel/analytics/next'
import config from '@/utils/config'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Nursultan Mamatov',
  description: 'Software Engineer freelancer/contractor.',
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Nursultan Mamatov',
  jobTitle: 'Freelance/Contract Software Engineer',
  url: `${config.siteUrl}/about`,
  sameAs: [
    'https://github.com/CodeForBeauty',
    'https://www.linkedin.com/in/nursultan-mamatov-4b8b3939b',
  ],
  knowsAbout: [
    'C++',
    'Graphics Programming',
    'Engine Development',
    'Simulation Development',
    'Fullstack Development',
    'Systems Design',
  ],
}

const doppino = Doppio_One({ weight: '400' })

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang='en' className={doppino.className}>
      <body>
        <Script
          id='person-schema'
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <div className='flex flex-col min-h-screen'>
          <Header />
          <main className='min-h-[50vh] grow w-[stretch]'>{children}</main>
          <Contact />
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  )
}
