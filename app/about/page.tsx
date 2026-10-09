import { Metadata } from 'next'
import About from '../_components/About'
import Hero from '../_components/Hero'

export const metadata: Metadata = {
  title: 'Freelance Software Engineer - Nursultan Mamatov',
  description:
    'Software Engineer freelancer/contractor. I help clients with complex issues and etend their teams temporarily.',
}

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
    </div>
  )
}
