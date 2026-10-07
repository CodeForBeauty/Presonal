import type { Metadata } from 'next'
import './globals.css'
import Header from './_components/Header'
import Footer from './_components/Footer'
import Contact from './_components/Contact'

export const metadata: Metadata = {
  title: 'Nursultan Mamatov',
  description: 'Software Engineer freelancer/contractor',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang='en'>
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
