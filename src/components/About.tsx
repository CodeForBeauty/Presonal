import { Container } from 'react-bootstrap'
import type { CSSProperties } from 'react'

const Skill = ({name} : {name: string}) => {
  const style: CSSProperties = {
    padding: '10px',
    width: 'fit-content',
    borderRadius: '10px',
    margin: '5px',
  }
  return <span className='bg-body-tertiary' style={style}>{name}</span>
}

const About = () => {
  const style: CSSProperties = {
    padding: '2rem',
    marginTop: '2rem',
  }
  return (
    <Container style={style} className='bg-body-secondary' >
      <h1 style={{paddingLeft: '1rem'}} >Nursultan Mamatov</h1>
      <Container>
        <p>
          C++ Engineer | Backend Engineer
        </p>
      </Container>
    </Container>
  )
}

export default About
