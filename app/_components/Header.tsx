import Link from 'next/link'

const Header = () => {
  return (
    <header className='flex w-[stretch] justify-between p-2 bg-gray-500'>
      <nav>
        <Link href='/'>
          <button>Main</button>
        </Link>
      </nav>
      <button>{true ? 'light' : 'dark'}</button>
    </header>
  )
}

export default Header
