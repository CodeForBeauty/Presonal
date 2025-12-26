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
          An ambitious Kyrgyzstan-based freelancer with 4 years of experience, specializing in game development.
        </p>
        <p>
          Have experience working on a wide variety of project sizes. Delivering and shipping full games and websites.
        </p>
      </Container>
      <h4 style={{paddingLeft: '1rem'}}>Skills:</h4>
      <div style={{display: 'flex', flexDirection: 'row'}} >
        <Skill name='C++' />
        <Skill name='Unity' />
        <Skill name='C#' />
        <Skill name='Unreal Engine' />
        <Skill name='Node.js' />
        <Skill name='React' />
        <Skill name='Nest.js' />
        <Skill name='PostgreSQL' />
      </div>
    </Container>
  )
}

export default About
