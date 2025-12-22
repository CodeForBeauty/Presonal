import type { CSSProperties } from 'react'
import { Routes, Route, useMatch, Navigate } from 'react-router-dom'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Project from './Project'
import { projects } from '../projects'

const Content = () => {
  const style: CSSProperties = {
    minHeight: '50vh',
    flexGrow: 1,
    backgroundColor: 'white',
  }

  const match = useMatch('/project/:id')
  const project = projects[match ? Number(match.params.id) : 0]

  return (
    <div style={style} className='bg-body-tertiary bg-color-white'>
      <Routes>
        <Route path='/' element={<Navigate to='/portfolio' />} />
        <Route
          path='/portfolio'
          element={<Portfolio />}
        />
        <Route path='/contact' element={<Contact />} />
        <Route
          path='/project/:id'
          element={
            <Project
              name={project.name}
              desc={project.moreDesc}
              media={project.media}
            />
          }
        />
      </Routes>
    </div>
  )
}

export default Content
