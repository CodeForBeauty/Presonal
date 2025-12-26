import type { CSSProperties } from 'react'
import { Routes, Route, useMatch } from 'react-router-dom'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Project from './Project'
import { projects } from '../projects'
import About from './About'

const Content = () => {
  const style: CSSProperties = {
    minHeight: '50vh',
    flexGrow: 1,
  }

  const match = useMatch('/project/:id')
  const project = projects[match ? Number(match.params.id) : 0]

  return (
    <div style={style} className='bg-body-tertiary bg-color-white'>
      <Routes>
        <Route
          path='/'
          element={
            <div>
              <About />
              <Portfolio />
              <Contact />
            </div>
          }
        />
        <Route
          path='/project/:id'
          element={
            <Project
              name={project.name}
              desc={project.moreDesc}
              media={project.media}
              workedOn={project.workedOn}
            />
          }
        />
      </Routes>
    </div>
  )
}

export default Content
