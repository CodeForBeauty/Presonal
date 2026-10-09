import Link from 'next/link'

export default function Header() {
  return (
    <header className='flex w-[stretch] justify-between p-2 bg-tertiary-bg'>
      <nav className='flex gap-4'>
        <Link href='/'>
          <button>Main</button>
        </Link>
        <Link href='/portfolio'>
          <button>Portfolio</button>
        </Link>
        <Link href='/projects'>
          <button>Client Projects</button>
        </Link>
        <Link href='/services'>
          <button>Services</button>
        </Link>
        <Link href='/about'>
          <button>About</button>
        </Link>
      </nav>
    </header>
  )
}
