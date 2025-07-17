import { Container } from 'react-bootstrap'
import type { CSSProperties } from 'react'

const About = () => {
  const style: CSSProperties = {
    padding: '2rem',
  }
  return (
    <Container style={style}>
      <h2 className='text-center'>About me</h2>
      <Container className='text-center'>
        <p>
          Hello everyone! I'm Nursultan. Web developer transitioning from game
          development.
        </p>
        <p>
          With my experience working on low level systems I bring unique
          skillset.
        </p>
      </Container>
    </Container>
  )
}

export default About
