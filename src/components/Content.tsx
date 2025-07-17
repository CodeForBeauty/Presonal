import type { CSSProperties } from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'

const Content = () => {
  const style: CSSProperties = {
    minHeight: '50vh',
    flexGrow: 1,
    backgroundColor: 'white',
  }
  return (
    <div style={style} className='bg-body-tertiary bg-color-white'>
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default Content
